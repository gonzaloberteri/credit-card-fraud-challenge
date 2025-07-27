-- Users table (extends Clerk user info)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_user_id TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'auditor')),
    full_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Credit Cards table
CREATE TABLE credit_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    card_name TEXT NOT NULL, -- e.g., "Chase Sapphire Preferred"
    card_brand TEXT NOT NULL, -- e.g., "visa", "mastercard", "amex", "discover"
    last_four_digits TEXT NOT NULL,
    card_holder_name TEXT NOT NULL,
    expiry_month INTEGER NOT NULL CHECK (expiry_month >= 1 AND expiry_month <= 12),
    expiry_year INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    credit_card_id UUID NOT NULL REFERENCES credit_cards(id) ON DELETE CASCADE,
    transaction_id TEXT UNIQUE, -- External transaction ID from CC company
    amount DECIMAL(12,2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'USD',
    description TEXT NOT NULL,
    merchant_name TEXT,
    merchant_category TEXT,
    transaction_date TIMESTAMP WITH TIME ZONE NOT NULL,
    posted_date TIMESTAMP WITH TIME ZONE,
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('purchase', 'refund', 'fee', 'payment', 'adjustment')),
    status TEXT NOT NULL DEFAULT 'posted' CHECK (status IN ('pending', 'posted', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit Flags table
CREATE TABLE audit_flags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_id UUID NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
    auditor_id UUID NOT NULL REFERENCES users(id),
    flag_type TEXT NOT NULL CHECK (flag_type IN ('suspicious', 'duplicate', 'high_amount', 'unusual_merchant', 'manual_review', 'approved', 'rejected')),
    notes TEXT,
    severity TEXT NOT NULL DEFAULT 'medium' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved', 'dismissed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit Trail table (for tamper-proof records)
CREATE TABLE audit_trail (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL, -- 'transaction', 'audit_flag', etc.
    entity_id UUID NOT NULL,
    action TEXT NOT NULL, -- 'created', 'updated', 'deleted', 'flagged'
    performed_by UUID REFERENCES users(id),
    old_values JSONB,
    new_values JSONB,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_transactions_credit_card_id ON transactions(credit_card_id);
CREATE INDEX idx_transactions_date ON transactions(transaction_date);
CREATE INDEX idx_transactions_amount ON transactions(amount);
CREATE INDEX idx_transactions_merchant ON transactions(merchant_name);
CREATE INDEX idx_audit_flags_transaction_id ON audit_flags(transaction_id);
CREATE INDEX idx_audit_flags_auditor_id ON audit_flags(auditor_id);
CREATE INDEX idx_audit_flags_status ON audit_flags(status);
CREATE INDEX idx_audit_trail_entity ON audit_trail(entity_type, entity_id);
CREATE INDEX idx_credit_cards_user_id ON credit_cards(user_id);

-- Updated at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_credit_cards_updated_at BEFORE UPDATE ON credit_cards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON transactions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_audit_flags_updated_at BEFORE UPDATE ON audit_flags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
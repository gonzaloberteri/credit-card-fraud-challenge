-- Drop triggers
DROP TRIGGER IF EXISTS update_audit_flags_updated_at ON audit_flags;
DROP TRIGGER IF EXISTS update_transactions_updated_at ON transactions;
DROP TRIGGER IF EXISTS update_credit_cards_updated_at ON credit_cards;
DROP TRIGGER IF EXISTS update_users_updated_at ON users;

-- Drop function
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Drop indexes
DROP INDEX IF EXISTS idx_credit_cards_user_id;
DROP INDEX IF EXISTS idx_audit_trail_entity;
DROP INDEX IF EXISTS idx_audit_flags_status;
DROP INDEX IF EXISTS idx_audit_flags_auditor_id;
DROP INDEX IF EXISTS idx_audit_flags_transaction_id;
DROP INDEX IF EXISTS idx_transactions_merchant;
DROP INDEX IF EXISTS idx_transactions_amount;
DROP INDEX IF EXISTS idx_transactions_date;
DROP INDEX IF EXISTS idx_transactions_credit_card_id;

-- Drop tables in reverse order
DROP TABLE IF EXISTS audit_trail;
DROP TABLE IF EXISTS audit_flags;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS credit_cards;
DROP TABLE IF EXISTS users;
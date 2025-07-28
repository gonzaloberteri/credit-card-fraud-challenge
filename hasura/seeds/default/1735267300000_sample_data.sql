-- Insert sample users
INSERT INTO users (id, clerk_user_id, email, role, full_name) VALUES
('11111111-1111-1111-1111-111111111111', 'user_2example1', 'john.doe@example.com', 'user', 'John Doe'),
('22222222-2222-2222-2222-222222222222', 'user_2example2', 'jane.auditor@example.com', 'auditor', 'Jane Auditor'),
('33333333-3333-3333-3333-333333333333', 'user_2example3', 'mike.user@example.com', 'user', 'Mike User');

-- Insert sample credit cards
INSERT INTO credit_cards (id, user_id, card_name, card_brand, last_four_digits, card_holder_name, expiry_month, expiry_year) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'Chase Sapphire Preferred', 'visa', '1234', 'John Doe', 12, 2026),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-1111-1111-1111-111111111111', 'American Express Gold', 'amex', '5678', 'John Doe', 8, 2025),
('cccccccc-cccc-cccc-cccc-cccccccccccc', '33333333-3333-3333-3333-333333333333', 'Capital One Venture', 'mastercard', '9012', 'Mike User', 5, 2027);

-- Insert sample transactions
INSERT INTO transactions (id, credit_card_id, transaction_id, amount, description, merchant_name, merchant_category, transaction_date, posted_date, transaction_type) VALUES
-- John's Chase Sapphire transactions
('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_001', -87.50, 'Grocery Shopping', 'Whole Foods Market', 'Grocery', '2025-01-25 14:30:00+00', '2025-01-26 09:00:00+00', 'purchase'),
('11111111-1111-1111-1111-111111111112', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_002', -1250.00, 'Flight Booking', 'United Airlines', 'Travel', '2025-01-24 10:15:00+00', '2025-01-24 15:30:00+00', 'purchase'),
('11111111-1111-1111-1111-111111111113', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_003', -45.99, 'Online Purchase', 'Amazon.com', 'Online Retail', '2025-01-23 19:45:00+00', '2025-01-24 08:00:00+00', 'purchase'),
('11111111-1111-1111-1111-111111111114', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_004', -320.75, 'Electronics', 'Best Buy', 'Electronics', '2025-01-22 16:20:00+00', '2025-01-23 09:15:00+00', 'purchase'),

-- John's Amex transactions
('22222222-2222-2222-2222-222222222221', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_005', -125.00, 'Restaurant', 'The Cheesecake Factory', 'Dining', '2025-01-25 20:00:00+00', '2025-01-26 10:00:00+00', 'purchase'),
('22222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_006', -2500.00, 'Luxury Purchase', 'Louis Vuitton', 'Luxury Goods', '2025-01-24 15:30:00+00', '2025-01-25 09:00:00+00', 'purchase'),
('22222222-2222-2222-2222-222222222223', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_007', -89.95, 'Gas Station', 'Shell', 'Gas', '2025-01-23 08:15:00+00', '2025-01-23 12:00:00+00', 'purchase'),

-- Mike's Capital One transactions
('33333333-3333-3333-3333-333333333331', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'TXN_008', -67.43, 'Coffee Shop', 'Starbucks', 'Coffee', '2025-01-25 07:30:00+00', '2025-01-25 14:00:00+00', 'purchase'),
('33333333-3333-3333-3333-333333333332', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'TXN_009', -5000.00, 'Large Purchase', 'Unknown Merchant XYZ', 'Unknown', '2025-01-24 22:45:00+00', '2025-01-25 08:00:00+00', 'purchase'),
('33333333-3333-3333-3333-333333333333', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'TXN_010', -15.99, 'Subscription', 'Netflix', 'Entertainment', '2025-01-23 12:00:00+00', '2025-01-23 12:00:00+00', 'purchase'),

-- Some refunds and fees
('44444444-4444-4444-4444-444444444441', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_011', 45.99, 'Refund - Online Purchase', 'Amazon.com', 'Online Retail', '2025-01-26 10:00:00+00', '2025-01-26 15:00:00+00', 'refund'),
('44444444-4444-4444-4444-444444444442', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_012', -35.00, 'Late Payment Fee', 'American Express', 'Fee', '2025-01-25 00:00:00+00', '2025-01-25 09:00:00+00', 'fee'),

-- Additional transactions for better demo
('55555555-5555-5555-5555-555555555551', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_013', -125.50, 'Coffee Shop Purchase', 'Starbucks', 'Food & Dining', '2025-01-15 08:30:00+00', '2025-01-15 12:00:00+00', 'purchase'),
('55555555-5555-5555-5555-555555555552', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_014', -89.99, 'Online Purchase', 'Amazon', 'Shopping', '2025-01-14 16:45:00+00', '2025-01-15 09:00:00+00', 'purchase'),
('55555555-5555-5555-5555-555555555553', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'TXN_015', -1250.00, 'Hotel Booking', 'Marriott Hotels', 'Travel', '2025-01-13 14:20:00+00', '2025-01-14 10:00:00+00', 'purchase'),
('55555555-5555-5555-5555-555555555554', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_016', -65.00, 'Uber Ride', 'Uber', 'Transportation', '2025-01-12 22:15:00+00', '2025-01-13 08:00:00+00', 'purchase'),
('55555555-5555-5555-5555-555555555555', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_017', -450.00, 'Pharmacy', 'CVS Pharmacy', 'Healthcare', '2025-01-11 10:30:00+00', '2025-01-11 15:00:00+00', 'purchase'),

-- December 2024 transactions (for testing month filtering)
('66666666-6666-6666-6666-666666666661', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_018', -200.00, 'December Grocery', 'Safeway', 'Grocery', '2024-12-15 14:30:00+00', '2024-12-16 09:00:00+00', 'purchase'),
('66666666-6666-6666-6666-666666666662', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'TXN_019', -500.00, 'December Shopping', 'Target', 'Shopping', '2024-12-20 16:45:00+00', '2024-12-21 10:00:00+00', 'purchase'),

-- February 2025 transactions (for testing month filtering)
('77777777-7777-7777-7777-777777777771', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'TXN_020', -75.00, 'February Coffee', 'Local Cafe', 'Food & Dining', '2025-02-05 09:00:00+00', '2025-02-05 15:00:00+00', 'purchase'),
('77777777-7777-7777-7777-777777777772', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TXN_021', -150.00, 'February Gas', 'Chevron', 'Gas', '2025-02-10 18:30:00+00', '2025-02-11 08:00:00+00', 'purchase');

-- Insert sample audit flags (auditor has flagged some suspicious transactions)
INSERT INTO audit_flags (id, transaction_id, auditor_id, flag_type, notes, severity, status) VALUES
('f1111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', 'high_amount', 'Unusually high luxury purchase - requires verification', 'high', 'open'),
('f2222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333332', '22222222-2222-2222-2222-222222222222', 'suspicious', 'Large purchase from unknown merchant at unusual hour', 'critical', 'open'),
('f3333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444442', '22222222-2222-2222-2222-222222222222', 'manual_review', 'Late payment fee - check if legitimate', 'medium', 'resolved'),
('f4444444-4444-4444-4444-444444444444', '55555555-5555-5555-5555-555555555551', '22222222-2222-2222-2222-222222222222', 'manual_review', 'Large purchase for coffee - needs review', 'medium', 'open'),
('f5555555-5555-5555-5555-555555555555', '55555555-5555-5555-5555-555555555553', '22222222-2222-2222-2222-222222222222', 'high_amount', 'Large hotel expense needs verification', 'high', 'open');
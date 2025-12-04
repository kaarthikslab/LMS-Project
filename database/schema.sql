-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Books table
CREATE TABLE books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    publisher VARCHAR(255),
    unit_price DECIMAL(10, 2) NOT NULL,
    current_stock INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Available' CHECK (status IN ('Available', 'Out of Stock')),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Issued table
CREATE TABLE issued (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID REFERENCES books(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    quantity INTEGER NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Restocked table
CREATE TABLE restocked (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID REFERENCES books(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    quantity INTEGER NOT NULL,
    expenditure DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Trigger to update updated_at on books
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row-Level Security (RLS) - Only authenticated users can access
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE issued ENABLE ROW LEVEL SECURITY;
ALTER TABLE restocked ENABLE ROW LEVEL SECURITY;

-- Policies (example: allow all for authenticated users; customize as needed)
CREATE POLICY "Allow authenticated access to books" ON books FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated access to issued" ON issued FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated access to restocked" ON restocked FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample data (optional)
INSERT INTO books (code, name, publisher, unit_price, current_stock) VALUES
('BK001', 'Sample Book 1', 'Publisher A', 10.00, 50),
('BK002', 'Sample Book 2', 'Publisher B', 15.00, 0);

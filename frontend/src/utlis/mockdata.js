export const mockBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A', unit_price: 10.00, current_stock: 50, status: 'Available' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B', unit_price: 15.00, current_stock: 0, status: 'Out of Stock' },
];

export const mockIssued = {
  logs: [
    { id: '1', date: '2023-10-01', books: { name: 'Sample Book 1' }, quantity: 5, total_price: 50.00 },
    { id: '2', date: '2023-10-02', books: { name: 'Sample Book 2' }, quantity: 3, total_price: 45.00 },
  ],
  totalExpense: 95.00,
};

export const mockRestocked = [
  { id: '1', date: '2023-10-01', books: { name: 'Sample Book 1' }, quantity: 20, expenditure: 100.00 },
  { id: '2', date: '2023-10-03', books: { name: 'Sample Book 2' }, quantity: 10, expenditure: 50.00 },
];

// Mock data for Dashboard KPIs
export const mockKPIs = [
  { label: 'Total Books', value: 150 },
  { label: 'Total Issued', value: 45 },
  { label: 'Total Expenditure', value: '$12,500' },
  { label: 'Current Stock Status', value: '85% Available' },
];

// Mock data for Live Section books
export const mockBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A', unit_price: 10.00, current_stock: 50, status: 'Available' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B', unit_price: 15.00, current_stock: 0, status: 'Out of Stock' },
  { id: '3', code: 'BK003', name: 'Sample Book 3', publisher: 'Publisher C', unit_price: 20.00, current_stock: 30, status: 'Available' },
  { id: '4', code: 'BK004', name: 'Sample Book 4', publisher: 'Publisher D', unit_price: 12.00, current_stock: 10, status: 'Low Stock' },
];

// Mock data for Issued Section books and details
export const mockIssuedBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B' },
];

export const mockIssuedDetails = {
  '1': {
    totalExpenditure: 500.00,
    logs: [
      { name: 'Student A', issued: '2023-10-01', due: '2023-10-15', returned: '2023-10-10', status: 'Returned' },
      { name: 'Student B', issued: '2023-10-05', due: '2023-10-20', returned: null, status: 'Overdue' },
    ],
  },
  '2': {
    totalExpenditure: 750.00,
    logs: [
      { name: 'Librarian X', issued: '2023-09-15', due: '2023-09-30', returned: '2023-09-28', status: 'Returned' },
    ],
  },
};

// Mock data for Restocked Section books and logs
export const mockRestockedBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B' },
];

export const mockRestockedLogs = {
  '1': [
    { date: '2023-10-03', quantity: 10, unitPrice: 15.00, supplier: 'Supplier B' },
    { date: '2023-10-01', quantity: 20, unitPrice: 10.00, supplier: 'Supplier A' },
  ],
  '2': [
    { date: '2023-09-20', quantity: 15, unitPrice: 12.00, supplier: 'Supplier C' },
  ],
};

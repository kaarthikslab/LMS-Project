const express = require('express');
const router = express.Router();

module.exports = (supabase) => {
  // GET all books (Live section)
  router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('books').select('*');
    if (error) return res.status(500).json({ error });
    res.json(data);
  });

  // PUT update stock (restock) for a book
  router.put('/:id/update-stock', async (req, res) => {
    const { id } = req.params;
    const { quantity, expenditure, date } = req.body;
    const { data: book } = await supabase.from('books').select('*').eq('id', id).single();
    const newStock = book.current_stock + quantity;
    const newStatus = newStock > 0 ? 'Available' : 'Out of Stock';

    await supabase.from('books').update({ current_stock: newStock, status: newStatus }).eq('id', id);
    await supabase.from('restocked').insert({ book_id: id, date, quantity, expenditure });
    res.json({ success: true });
  });

  // POST issue books
  router.post('/:id/issue', async (req, res) => {
    const { id } = req.params;
    const { quantity, date } = req.body;
    const { data: book } = await supabase.from('books').select('*').eq('id', id).single();
    const totalPrice = quantity * book.unit_price;
    const newStock = book.current_stock - quantity;
    const newStatus = newStock <= 0 ? 'Out of Stock' : 'Available';

    await supabase.from('issued').insert({ book_id: id, date, quantity, total_price: totalPrice });
    await supabase.from('books').update({ current_stock: newStock, status: newStatus }).eq('id', id);
    res.json({ success: true });
  });

  // GET issued logs
  router.get('/issued', async (req, res) => {
    const { data, error } = await supabase.from('issued').select('*, books(name)').order('date', { ascending: false });
    if (error) return res.status(500).json({ error });
    const totalExpense = data.reduce((sum, item) => sum + parseFloat(item.total_price), 0);
    res.json({ logs: data, totalExpense });
  });

  // GET restocked logs
  router.get('/restocked', async (req, res) => {
    const { data, error } = await supabase.from('restocked').select('*, books(name)').order('date', { ascending: false });
    if (error) return res.status(500).json({ error });
    res.json(data);
  });

  return router;
};

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const booksRoutes = require('./routes/books');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use('/api/books', booksRoutes(supabase));

app.listen(5000, () => console.log('Backend running on port 5000'));

const express = require('express');
const cors = require('cors');

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const connectDB = require('./database/connectDB');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

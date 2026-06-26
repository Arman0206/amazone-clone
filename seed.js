require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { title: 'Wireless Headphones', price: 1499, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', description: 'High quality wireless headphones with noise cancellation.', category: 'Electronics' },
  { title: 'Running Shoes', price: 2999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', description: 'Lightweight and comfortable running shoes.', category: 'Sports' },
  { title: 'Coffee Maker', price: 3499, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', description: 'Brew perfect coffee every morning.', category: 'Kitchen' },
  { title: 'Backpack', price: 1999, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', description: 'Spacious and durable travel backpack.', category: 'Bags' },
  { title: 'Sunglasses', price: 799, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', description: 'UV protected stylish sunglasses.', category: 'Fashion' },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Products seeded!');
    process.exit();
  })
  .catch(err => { console.error(err); process.exit(1); });

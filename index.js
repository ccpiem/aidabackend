const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Connection to MongoDB
const uri = "mongodb+srv://architsinha15700:20125025aA@coupon-website.ytpt9he.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

// Create a coupon schema
const couponSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  companyName: String,
  image: String,
  link: String,
  discount: String,
});

// Create a coupon model
const Coupon = mongoose.model('Coupon', couponSchema);

// Get all coupons
app.get('/coupons', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new coupon
app.post('/coupons', async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

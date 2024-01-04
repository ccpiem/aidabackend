const mongoose = require('mongoose');
const Coupon = require('./models/Coupon');
// import Coupon from './models/Coupon.js';

mongoose.connect('mongodb://localhost:27017/coupon-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleCoupons = [
  {
    title: '50% Off on Food',
    description: 'Get a 50% discount on all food items.',
    category: 'food',
    companyName: 'FoodCo',
    image: 'food_image.jpg',
    link: 'https://foodco.com',
    discount: '50%',
  },
  {
    title: 'Electronics Sale',
    description: 'Save big on the latest electronics.',
    category: 'electronics',
    companyName: 'ElectroTech',
    image: 'electronics_image.jpg',
    link: 'https://electrotech.com',
    discount: 'Up to 30%',
  },
  // Add more sample coupons as needed
];
const seedDatabase = async () => {
  await Coupon.deleteMany();
  await Coupon.insertMany(sampleCoupons);
  console.log('Sample data inserted successfully.');
  process.exit();
};

seedDatabase();
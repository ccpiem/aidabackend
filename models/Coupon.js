const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  companyName: String,
  image: String,
  link: String,
  discount: String,
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;

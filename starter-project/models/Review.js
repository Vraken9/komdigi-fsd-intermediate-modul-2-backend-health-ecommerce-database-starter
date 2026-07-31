/**
 *  FILE INI PERLU DILENGKAPI
 *
 * Review Model
 * Schema untuk product reviews
 *
 * Tugas:
 * 1. Buat schema dengan reference ke Product dan User
 * 2. Tambahkan validation
 * 3. Tambahkan timestamps
 */

const mongoose = require('mongoose');
// TODO: Import mongoose

// TODO: Define reviewSchema
const reviewSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  rating:{
    type:Number,
    required:true,
    min:1,
    max:5
  },
  comment:{
    type:String
  },
  isVerified:{
    type:Boolean,
    default:false
  }
},{timestamps:true});
/*
Fields:
- productId: ObjectId, ref 'Product', required
- userId: ObjectId, ref 'User', required  
- rating: Number, required, min 1, max 5
- comment: String
- isVerified: Boolean, default false
*/

// TODO: Export model
module.exports = mongoose.model('Review', reviewSchema);

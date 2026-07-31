/**
 *  FILE INI PERLU DILENGKAPI
 *
 * User Model
 * Schema untuk user/customer
 *
 * Tugas:
 * 1. Buat schema dengan fields yang diminta
 * 2. Tambahkan virtual 'fullName'
 * 3. Tambahkan timestamps
 */
const bcrypt = require('bcrypt');
// TODO: Import mongoose
import mongoose from 'mongoose';
// TODO: Define userSchema
/*
Fields:
- firstName: String, required
- lastName: String, required
- email: String, required, unique, lowercase, trim
- password: String, required, minlength 6
- role: String, enum ['user', 'admin'], default 'user'
*/
const userSchema = new mongoose.Schema({
  firstName: {type: String,
    required:true
  },
  lastName: {type: String,
    required:true
  },
  email: {type: String,
    required:true,
    lowercase:true,
    unique:true,
    trim:true
  },
  password: {type: String,
    required:true,
    minlength:6
  },
  role: {type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }

},{timestamps:true});

// TODO: Tambahkan virtual 'fullName'
// Hint:
 userSchema.virtual('fullName').get(function() {
   return `${this.firstName} ${this.lastName}`;
 });

// TODO: Opsional - Pre-save middleware untuk hash password
// (Akan dipelajari lebih detail di Modul 4 - Authentication)
userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next();

  try{
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
  } catch(error){
    next(error);
  }
});
// TODO: Export model
module.exports = mongoose.model('User', userSchema);
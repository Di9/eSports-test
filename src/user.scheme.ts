import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: Number,
    userLogin: String,
    deleted_at: { type: Date, default: null },
  },
  { timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }});

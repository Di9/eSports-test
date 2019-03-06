import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: Number,
    userLogin: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

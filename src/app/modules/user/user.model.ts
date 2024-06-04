import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: true,
      default: 'in-progress'
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  { timestamps: true },
);

export const UserModel = model<TUser>('User', userSchema)
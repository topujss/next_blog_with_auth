import mongoose from 'mongoose';

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
  } catch (error) {
    throw new Error(error.message);
  }
}

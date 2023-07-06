import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(response) {
  // get data from request
  const { name, email, password } = await response.json();


  // connect to
  await connect();

  // encrypt password before sending
  const hashedPass = await bcrypt.hash(password, 5);

  // create a new user
  const user = new User({
    name,
    email,
    password: hashedPass,
  });

  try {
    await user.save();
    return new NextResponse('user successfully created', { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

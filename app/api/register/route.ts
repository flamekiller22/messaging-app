import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request
) {
  try {
    const body = await request.json()

    const {
      email,
      name,
      password,
      passwordRepeat
    } = body;
    
    if (!email || !name || !password || !passwordRepeat) {
      return new NextResponse('Missing Info!', { status: 400 });
    }

    if (!(password === passwordRepeat)) {
      return new NextResponse('Passwords do not match!', { status: 400 });
    }
    
    const exists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (exists) {
      return new NextResponse('Account already exists!', { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Server Error!', { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';

export const proxy = auth;

export const config = {
  matcher: ['/account'],
};

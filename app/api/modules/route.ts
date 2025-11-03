import { NextResponse } from 'next/server';
import modulesData from '@/data/modules.json';

export async function GET() {
  return NextResponse.json(modulesData);
}

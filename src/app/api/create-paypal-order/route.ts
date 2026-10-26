import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const plan = body.plan || 'professional';
  const amount = plan === 'business' ? '299' : '29';

  return NextResponse.json({
    success: true,
    paypalOrderId: 'TEST_ORDER_ID',
    plan,
    amount,
  });
}
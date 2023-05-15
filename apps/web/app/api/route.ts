import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function GET(req: NextRequest) {
  console.log('req', typeof req);
  return new Response(
    JSON.stringify({ test: 'DATA_TEST' }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
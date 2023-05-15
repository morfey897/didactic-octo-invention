import type { NextRequest } from 'next/server';

export const runtime = 'edge';

// export const config = {
//   runtime: 'edge',
// };

export async function GET(req: NextRequest) {
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
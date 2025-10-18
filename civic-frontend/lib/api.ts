
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://civic-1-t3r5.onrender.com';
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://civic-backend-v2.onrender.com';

export async function apiPost(path: string, body: any, token?: string) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || data.message || 'API error');
  return data;
}
export async function apiGet(path: string, token: string) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  let data
  try {
    data = await res.json()
  } catch {
    throw new Error('Invalid JSON response')
  }

  if (!res.ok) {
    throw new Error(data.detail || data.message || 'API error')
  }

  return data
}

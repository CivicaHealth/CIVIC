'use client'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiPost } from '@/lib/api'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      const res = await apiPost('/api/token/', { email, password })
      localStorage.setItem('token', res.access)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-white rounded shadow">
      <BackButton />
        <h1 className="text-2xl font-bold text-sky-700 text-center">Log in to CIVIC</h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-sky-700 text-white py-2 rounded font-semibold"
        >
          Log In
        </button>

        <div className="flex justify-between text-sm text-sky-700 mt-4">
          <a href="/register-clinic" className="hover:underline">Register a Clinic</a>
          <a href="/register-user" className="hover:underline">Sign Up as User</a>
        </div>

      </div>
    </div>
  )
}

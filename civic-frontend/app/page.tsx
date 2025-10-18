'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-sky-700 mb-10">Welcome to CIVIC</h1>
      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={() => router.push('/login')}
          className="w-full py-3 rounded bg-sky-700 text-white font-semibold"
        >
          Log In
        </button>
        <button
          onClick={() => router.push('/register-user')}
          className="w-full py-3 rounded bg-gray-700 text-white font-semibold"
        >
          Sign Up as User
        </button>
        <button
          onClick={() => router.push('/register-clinic')}
          className="w-full py-3 rounded bg-green-700 text-white font-semibold"
        >
          Register a Clinic
        </button>
      </div>
    </div>
  )
}

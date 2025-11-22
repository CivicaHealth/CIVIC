'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/')} className="flex items-center text-sky-700 hover:underline mb-4">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Home
    </button>
  )
}

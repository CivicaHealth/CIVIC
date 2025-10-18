'use client'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import { apiPost } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function RegisterClinicPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    manager_name: '',
    clinic_code: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await apiPost('/api/iam/register-clinic/', form);
      setSuccess('Clinic registered! Now create your user account.');
      router.push('/register-user');
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white shadow p-6 rounded space-y-4">
      <BackButton />
        <h1 className="text-xl font-bold">Register Clinic</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
        {['name', 'email', 'location', 'manager_name', 'clinic_code'].map(field => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            required
            placeholder={field.replace('_', ' ')}
            value={(form as any)[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        ))}
        <button className="w-full bg-sky-600 text-white py-2 rounded">Register Clinic</button>
      </form>
    </div>
  );
}

// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { apiGet } from '@/lib/api'

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       router.push('/login')
//       return
//     }

//     apiGet('/api/iam/me/', token)
//       .then(setUser)
//       .catch(() => router.push('/login'))
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     router.push('/login')
//   }

//   if (!user) return <div className="p-8">Loading...</div>

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-sky-700 text-white flex justify-between items-center p-4">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="text-white font-bold text-xl"
//         >
//           ☰
//         </button>
//         <h1 className="text-lg font-semibold">CIVIC Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="text-sm bg-white text-sky-700 px-3 py-1 rounded"
//         >
//           Logout
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         {sidebarOpen && (
//           <aside className="w-64 bg-sky-100 p-4 space-y-2">
//             <h2 className="font-semibold text-sky-800 mb-2">Tools</h2>
//             <ul className="space-y-1">
//               <li><a href="#" className="text-sky-700 hover:underline">no tools yet</a></li>

//               {/* Add more tools here */}
//             </ul>
//           </aside>
//         )}

//         {/* Placeholder content */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-bold mb-2">Welcome, {user.first_name}!</h2>
//           <p className="text-gray-700">This is your platform. Tools will appear here soon.</p>
//         </main>
//       </div>
//     </div>
//   )
// }



// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { apiGet } from '@/lib/api'

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       router.push('/login')
//       return
//     }

//     apiGet('/api/iam/me/', token)
//       .then(setUser)
//       .catch(() => router.push('/login'))
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     router.push('/login')
//   }

//   if (!user) return <div className="p-8">Loading...</div>

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-sky-700 text-white flex justify-between items-center p-4">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="text-white font-bold text-xl"
//         >
//           ☰
//         </button>
//         <h1 className="text-lg font-semibold">CIVIC Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="text-sm bg-white text-sky-700 px-3 py-1 rounded hover:bg-gray-100 hover:text-sky-800 transition"
//         >
//           Logout
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         {sidebarOpen && (
//           <aside className="w-64 bg-sky-100 p-6 space-y-4">
//             <h2 className="font-semibold text-sky-800 mb-2 text-lg">Tools</h2>
//             <ul className="space-y-2">
//               {/* New Tool */}
//               <li>
//                 <a
//                   href="https://clinic-inventory-pmmq.onrender.com/login"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block px-3 py-2 bg-white rounded shadow text-sky-700 font-medium hover:bg-sky-50 hover:text-sky-900 transition"
//                 >
//                   Clinic Inventory
//                 </a>
//               </li>

//               {/* Placeholder */}
//               <li>
//                 <span className="block px-3 py-2 text-gray-500 rounded">no other tools yet</span>
//               </li>
//             </ul>
//           </aside>
//         )}

//         {/* Placeholder content */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-bold mb-3">Welcome, {user.first_name}!</h2>
//           <p className="text-gray-700">
//             This is your platform. Your tools are available in the sidebar.
//           </p>
//         </main>
//       </div>
//     </div>
//   )
// }




'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiGet } from '@/lib/api'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    apiGet('/api/iam/me/', token)
      .then(setUser)
      .catch(() => router.push('/login'))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  if (!user) return <div className="p-8">Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="bg-sky-700 text-white flex justify-between items-center p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white font-bold text-xl"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold">CIVIC Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-white text-sky-700 px-3 py-1 rounded hover:bg-gray-100 hover:text-sky-800 transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-sky-100 p-6 space-y-4">
            <h2 className="font-semibold text-sky-800 mb-2 text-lg">Tools</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://clinic-inventory-pmmq.onrender.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 bg-white rounded shadow text-sky-700 font-medium hover:bg-sky-50 hover:text-sky-900 transition"
                >
                  Clinic Inventory
                </a>
              </li>
              <li>
                <a
                  href="https://refferal-project-ne7p.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 bg-white rounded shadow text-sky-700 font-medium hover:bg-sky-50 hover:text-sky-900 transition"
                >
                  Referral Tracker
                </a>
              </li>
              <li>
                <a
                  href="https://organizor.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 bg-white rounded shadow text-sky-700 font-medium hover:bg-sky-50 hover:text-sky-900 transition"
                >
                  Data Organizer
                </a>
              </li>
              {/* Placeholder for future tools */}
              <li>
                <span className="block px-3 py-2 text-gray-500 rounded">more tools coming soon</span>
              </li>
            </ul>
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-3">Welcome, {user.first_name}!</h2>
          <p className="text-gray-700">
            This is your platform. Your tools are available in the sidebar.
          </p>
        </main>
      </div>
    </div>
  )
}


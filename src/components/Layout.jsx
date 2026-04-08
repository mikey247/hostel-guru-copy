import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <Navbar />
      <main style={{ padding: '28px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <Outlet />
      </main>
    </div>
  )
}

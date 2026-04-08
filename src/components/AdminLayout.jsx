import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f7fa' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '28px 32px', overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import Rooms from './pages/Rooms'
import Payments from './pages/Payments'
import ServiceRequests from './pages/ServiceRequests'
import Waitlist from './pages/Waitlist'
import Notifications from './pages/Notifications'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageStudents from './pages/admin/ManageStudents'
import ManageRooms from './pages/admin/ManageRooms'
import AdminPayments from './pages/admin/AdminPayments'
import Reports from './pages/admin/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/service-requests" element={<ServiceRequests />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/rooms" element={<ManageRooms />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

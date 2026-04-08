import { Link, useLocation, useNavigate } from 'react-router-dom'

const LINKS = [
  { label: '📊 Overview', to: '/admin' },
  { label: '👥 Students', to: '/admin/students' },
  { label: '🛏 Rooms', to: '/admin/rooms' },
  { label: '💳 Payments', to: '/admin/payments' },
  { label: '📈 Reports', to: '/admin/reports' },
]

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <aside style={{
      width: '240px',
      minHeight: '100vh',
      background: '#1a2b4a',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    }}>
      <div style={{
        padding: '20px 20px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{ color: 'white', fontWeight: '800', fontSize: '16px' }}>🏛 Hostel Guru</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Admin Panel</div>
      </div>

      <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {LINKS.map(link => {
          const active = location.pathname === link.to
          return (
            <Link key={link.to} to={link.to} style={{
              padding: '10px 14px',
              borderRadius: '6px',
              color: active ? 'white' : 'rgba(255,255,255,0.65)',
              background: active ? '#2563eb' : 'transparent',
              fontSize: '13px',
              fontWeight: active ? '600' : '400',
              transition: 'background 0.15s, color 0.15s',
              display: 'block',
            }}>
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0 14px 6px' }}>
          Admin Account
        </div>
        <button
          onClick={() => navigate('/admin-login')}
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '12px',
            display: 'block',
            padding: '8px 14px',
            borderRadius: '6px',
            transition: 'color 0.15s',
            background: 'transparent',
            textAlign: 'left',
            width: '100%',
          }}
        >
          🔒 Sign Out
        </button>
      </div>
    </aside>
  )
}

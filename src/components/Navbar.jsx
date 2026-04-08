import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Payments', to: '/payments' },
  { label: 'Service Requests', to: '/service-requests' },
  { label: 'Waitlist', to: '/waitlist' },
  { label: 'Notifications', to: '/notifications' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav style={{
      background: '#1a2b4a',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: '0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    }}>
      <Link to="/dashboard" style={{
        color: 'white',
        fontWeight: '800',
        fontSize: '18px',
        letterSpacing: '-0.5px',
        marginRight: '32px',
        whiteSpace: 'nowrap',
      }}>
        🏛 Hostel Guru
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
        {NAV_LINKS.map(link => {
          const active = location.pathname === link.to
          return (
            <Link key={link.to} to={link.to} style={{
              color: active ? 'white' : 'rgba(255,255,255,0.7)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: active ? '600' : '400',
              background: active ? 'rgba(255,255,255,0.15)' : 'transparent',
              transition: 'background 0.15s, color 0.15s',
            }}>
              {link.label}
            </Link>
          )
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
          }}>JD</div>
          <span style={{ color: 'white', fontSize: '13px', fontWeight: '500' }}>John Doe</span>
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '12px',
            padding: '5px 10px',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '5px',
            background: 'transparent',
            transition: 'all 0.15s',
          }}
        >
          Sign Out
        </button>
      </div>
    </nav>
  )
}

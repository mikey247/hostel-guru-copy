import { useNavigate } from 'react-router-dom'

const RECENT_ACTIVITY = [
  { icon: '💳', text: 'Rent payment received - $450', time: '2 days ago', color: '#16a34a' },
  { icon: '🔧', text: 'Service request #SR-001 resolved', time: '5 days ago', color: '#2563eb' },
  { icon: '🏠', text: 'Room assignment confirmed', time: '2 weeks ago', color: '#1a2b4a' },
  { icon: '📧', text: 'Email notification: Hostel guidelines updated', time: '3 weeks ago', color: '#6b7280' },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back, John Doe 👋</h1>
          <p className="page-subtitle">Student ID: STU-2024-0042 · Room 204-B, Block B</p>
        </div>
        <div style={{ fontSize: '12px', color: '#6b7280', textAlign: 'right' }}>
          <div>Academic Year 2024–25</div>
          <div>Spring Semester</div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid-4">
        <div className="stat-card" style={{ borderLeft: '4px solid #2563eb' }}>
          <div className="label">🏠 Current Room</div>
          <div className="value">204-B</div>
          <div className="sub">Block B · 2nd Floor</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #ca8a04' }}>
          <div className="label">💳 Rent Due</div>
          <div className="value">$450</div>
          <div className="sub">Due April 1, 2025</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #7c3aed' }}>
          <div className="label">🔧 Pending Requests</div>
          <div className="value">2</div>
          <div className="sub">1 in progress</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #16a34a' }}>
          <div className="label">📋 Waitlist Position</div>
          <div className="value" style={{ fontSize: '20px' }}>N/A</div>
          <div className="sub">Not on waitlist</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px' }}>
        {/* Recent Activity */}
        <div className="card">
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 0',
                borderBottom: i < RECENT_ACTIVITY.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `${item.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: '#374151', fontWeight: '500' }}>{item.text}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Quick Actions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: '💳 Pay Rent', to: '/payments', color: '#2563eb' },
              { label: '🔧 Submit Request', to: '/service-requests', color: '#7c3aed' },
              { label: '📋 View Waitlist', to: '/waitlist', color: '#ca8a04' },
              { label: '🏠 Browse Rooms', to: '/rooms', color: '#16a34a' },
            ].map(action => (
              <button
                key={action.to}
                onClick={() => navigate(action.to)}
                style={{
                  background: `${action.color}10`,
                  border: `1px solid ${action.color}30`,
                  borderRadius: '8px',
                  padding: '12px 16px',
                  textAlign: 'left',
                  color: action.color,
                  fontWeight: '600',
                  fontSize: '13px',
                  transition: 'background 0.15s',
                }}
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Room Info Card */}
          <div style={{ marginTop: '20px', padding: '14px', background: '#f0f5ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
            <div style={{ fontSize: '11px', color: '#2563eb', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase' }}>Room Details</div>
            <div style={{ fontSize: '13px', color: '#374151' }}>
              <div>Type: Double Occupancy</div>
              <div style={{ marginTop: '4px' }}>Roommate: Alex Johnson</div>
              <div style={{ marginTop: '4px' }}>Amenities: WiFi, AC, Attached Bath</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

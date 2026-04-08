import StatusBadge from '../components/StatusBadge'

const WAITLIST_MEMBERS = [
  { position: 1, name: 'Sarah Mitchell', registered: 'Jan 2, 2025', preferred: 'Single', status: 'Waitlisted' },
  { position: 2, name: 'Ravi Patel', registered: 'Jan 8, 2025', preferred: 'Double', status: 'Waitlisted' },
  { position: 3, name: 'John Doe', registered: 'Jan 15, 2025', preferred: 'Double', status: 'Waitlisted' },
  { position: 4, name: 'Emily Chen', registered: 'Jan 20, 2025', preferred: 'Single', status: 'Waitlisted' },
  { position: 5, name: 'Marcus Thompson', registered: 'Jan 25, 2025', preferred: 'Triple', status: 'Waitlisted' },
  { position: 6, name: 'Priya Sharma', registered: 'Feb 1, 2025', preferred: 'Double', status: 'Waitlisted' },
  { position: 7, name: 'Lucas Oliveira', registered: 'Feb 5, 2025', preferred: 'Single', status: 'Waitlisted' },
  { position: 8, name: 'Aisha Williams', registered: 'Feb 10, 2025', preferred: 'Double', status: 'Waitlisted' },
  { position: 9, name: 'Jin Park', registered: 'Feb 14, 2025', preferred: 'Triple', status: 'Waitlisted' },
  { position: 10, name: 'Isabella Rossi', registered: 'Feb 18, 2025', preferred: 'Single', status: 'Waitlisted' },
]

export default function Waitlist() {
  const myPosition = 3
  const total = WAITLIST_MEMBERS.length

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Waitlist</h1>
          <p className="page-subtitle">Room assignment waitlist for Spring 2025</p>
        </div>
      </div>

      {/* My Status */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '24px' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a' }}>Your Waitlist Status</h2>
            <StatusBadge status="Waitlisted" />
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6b7280', marginBottom: '6px' }}>
              <span>Queue Progress</span>
              <span>Position {myPosition} of {total}</span>
            </div>
            <div style={{ background: '#f3f4f6', borderRadius: '999px', height: '10px', position: 'relative' }}>
              <div style={{
                height: '100%',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                width: `${((total - myPosition + 1) / total) * 100}%`,
              }} />
            </div>
            <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
              {myPosition - 1} students ahead of you
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Queue Position', value: `#${myPosition}`, icon: '📋' },
              { label: 'Registered', value: 'Jan 15, 2025', icon: '📅' },
              { label: 'Estimated Wait', value: '2–3 weeks', icon: '⏱' },
              { label: 'Preferred Type', value: 'Double', icon: '🛏' },
            ].map(item => (
              <div key={item.label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '18px', marginBottom: '4px' }}>{item.icon}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginTop: '2px' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Waitlist Info</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Total on Waitlist', value: total, color: '#2563eb' },
              { label: 'Rooms Available Soon', value: 3, color: '#16a34a' },
              { label: 'Avg. Wait Time', value: '3 wks', color: '#ca8a04' },
            ].map(s => (
              <div key={s.label} style={{ padding: '12px', borderRadius: '8px', background: '#f9fafb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>{s.label}</span>
                <span style={{ fontSize: '18px', fontWeight: '700', color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', padding: '12px', background: '#fef9c3', borderRadius: '8px', border: '1px solid #fde047', fontSize: '12px', color: '#854d0e' }}>
            💡 You will be notified by email when a room matching your preference becomes available.
          </div>
        </div>
      </div>

      {/* Waitlist Table */}
      <div className="card">
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Full Waitlist</h2>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Student Name</th>
              <th>Registration Date</th>
              <th>Preferred Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {WAITLIST_MEMBERS.map(m => (
              <tr key={m.position} style={{
                background: m.name === 'John Doe' ? '#f0f5ff' : 'transparent',
              }}>
                <td>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: m.position <= 3 ? '#2563eb' : '#e5e7eb',
                    color: m.position <= 3 ? 'white' : '#374151',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}>
                    {m.position}
                  </span>
                </td>
                <td style={{ fontWeight: m.name === 'John Doe' ? '700' : '400', color: m.name === 'John Doe' ? '#2563eb' : '#374151' }}>
                  {m.name} {m.name === 'John Doe' && <span style={{ fontSize: '11px', background: '#dbeafe', color: '#2563eb', padding: '1px 6px', borderRadius: '4px', marginLeft: '6px' }}>You</span>}
                </td>
                <td>{m.registered}</td>
                <td>{m.preferred}</td>
                <td><StatusBadge status={m.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

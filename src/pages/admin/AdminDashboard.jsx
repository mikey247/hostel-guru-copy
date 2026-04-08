import StatusBadge from '../../components/StatusBadge'

const RECENT_ACTIVITY = [
  { student: 'Emily Chen', action: 'Paid rent for April 2025', amount: '$450', time: '2 hours ago', status: 'Paid' },
  { student: 'Marcus Thompson', action: 'Submitted service request #SR-042', amount: '—', time: '4 hours ago', status: 'Open' },
  { student: 'Priya Sharma', action: 'Added to waitlist (Position #10)', amount: '—', time: '6 hours ago', status: 'Waitlisted' },
  { student: 'Ravi Patel', action: 'Room 305-C assigned', amount: '—', time: '1 day ago', status: 'Confirmed' },
  { student: 'Sarah Mitchell', action: 'Payment overdue for March 2025', amount: '$450', time: '2 days ago', status: 'Overdue' },
]

const BLOCK_OCCUPANCY = [
  { block: 'Block A', total: 40, occupied: 35, color: '#2563eb' },
  { block: 'Block B', total: 40, occupied: 32, color: '#16a34a' },
  { block: 'Block C', total: 40, occupied: 20, color: '#ca8a04' },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Admin Overview</h1>
          <p className="page-subtitle">Hostel Guru · Spring 2025</p>
        </div>
        <div style={{ fontSize: '13px', color: '#6b7280' }}>
          Last updated: March 21, 2025 · 09:42 AM
        </div>
      </div>

      {/* Stats */}
      <div className="grid-4">
        {[
          { label: '👥 Total Students', value: '342', sub: '18 new this month', color: '#2563eb' },
          { label: '🛏 Occupied Rooms', value: '87/120', sub: '72.5% occupancy', color: '#16a34a' },
          { label: '💳 Pending Payments', value: '$12,450', sub: '28 outstanding', color: '#ca8a04' },
          { label: '🔧 Open Requests', value: '14', sub: '3 high priority', color: '#dc2626' },
        ].map(stat => (
          <div key={stat.label} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
            <div className="label">{stat.label}</div>
            <div className="value">{stat.value}</div>
            <div className="sub">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', marginBottom: '20px' }}>
        {/* Recent Activity */}
        <div className="card">
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Recent Activity</h2>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Action</th>
                <th>Amount</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_ACTIVITY.map((a, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: '600', color: '#1a2b4a' }}>{a.student}</td>
                  <td style={{ color: '#6b7280', fontSize: '12px' }}>{a.action}</td>
                  <td style={{ fontWeight: '600' }}>{a.amount}</td>
                  <td style={{ color: '#9ca3af', fontSize: '12px' }}>{a.time}</td>
                  <td><StatusBadge status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Block Occupancy */}
        <div className="card">
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Block Occupancy</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {BLOCK_OCCUPANCY.map(b => (
              <div key={b.block}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: '600', color: '#374151' }}>{b.block}</span>
                  <span style={{ color: '#6b7280' }}>{b.occupied}/{b.total}</span>
                </div>
                <div style={{ background: '#f3f4f6', borderRadius: '999px', height: '8px' }}>
                  <div style={{
                    height: '100%',
                    borderRadius: '999px',
                    background: b.color,
                    width: `${(b.occupied / b.total) * 100}%`,
                  }} />
                </div>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '3px' }}>
                  {Math.round((b.occupied / b.total) * 100)}% occupied · {b.total - b.occupied} available
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', padding: '14px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#16a34a', marginBottom: '4px' }}>Overall Occupancy</div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#1a2b4a' }}>72.5%</div>
            <div style={{ fontSize: '11px', color: '#6b7280' }}>87 of 120 rooms occupied</div>
          </div>
        </div>
      </div>
    </div>
  )
}

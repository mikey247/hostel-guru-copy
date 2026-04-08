const REPORT_CARDS = [
  { icon: '🏠', title: 'Occupancy Report', desc: 'Room occupancy rates by block, floor, and type', color: '#2563eb', lastGen: 'Mar 20, 2025' },
  { icon: '💳', title: 'Payment Summary', desc: 'Monthly revenue, outstanding balances, overdue accounts', color: '#16a34a', lastGen: 'Mar 18, 2025' },
  { icon: '👥', title: 'Student Roster', desc: 'Complete list of enrolled students with room assignments', color: '#7c3aed', lastGen: 'Mar 15, 2025' },
  { icon: '🔧', title: 'Maintenance Report', desc: 'Service requests summary, resolution times, trends', color: '#ca8a04', lastGen: 'Mar 10, 2025' },
]

const MONTHLY_REVENUE = [
  { month: 'Oct 2024', revenue: 38400, max: 50000 },
  { month: 'Nov 2024', revenue: 41200, max: 50000 },
  { month: 'Dec 2024', revenue: 39800, max: 50000 },
  { month: 'Jan 2025', revenue: 43500, max: 50000 },
  { month: 'Feb 2025', revenue: 44800, max: 50000 },
  { month: 'Mar 2025', revenue: 46200, max: 50000 },
]

export default function Reports() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">Generate and export operational reports</p>
        </div>
        <button className="btn btn-primary">📊 Export All</button>
      </div>

      {/* Report Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {REPORT_CARDS.map(r => (
          <div key={r.title} className="card" style={{ borderLeft: `4px solid ${r.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{r.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2b4a', marginBottom: '4px' }}>{r.title}</h3>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.4' }}>{r.desc}</p>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '8px' }}>Last generated: {r.lastGen}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button className="btn btn-primary btn-sm" style={{ background: r.color }}>
                📄 Generate PDF
              </button>
              <button className="btn btn-secondary btn-sm">
                📊 Export CSV
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Revenue Chart */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a' }}>Monthly Revenue</h2>
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>Oct 2024 – Mar 2025</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#16a34a' }}>$253,900</div>
            <div style={{ fontSize: '11px', color: '#6b7280' }}>Total 6-month revenue</div>
          </div>
        </div>

        {/* CSS Bar Chart */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {MONTHLY_REVENUE.map(m => (
            <div key={m.month} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '80px', fontSize: '12px', color: '#6b7280', flexShrink: 0, textAlign: 'right' }}>
                {m.month}
              </div>
              <div style={{ flex: 1, background: '#f3f4f6', borderRadius: '4px', height: '28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${(m.revenue / m.max) * 100}%`,
                  background: 'linear-gradient(90deg, #1a2b4a, #2563eb)',
                  borderRadius: '4px',
                  transition: 'width 0.5s',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px',
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                    ${m.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
              <div style={{ width: '60px', fontSize: '12px', color: '#16a34a', fontWeight: '600', flexShrink: 0 }}>
                {Math.round((m.revenue / m.max) * 100)}%
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px', padding: '12px', background: '#f9fafb', borderRadius: '6px', display: 'flex', gap: '24px' }}>
          {[
            { label: 'Average Monthly', value: '$42,317' },
            { label: 'Growth (MoM)', value: '+3.1%', color: '#16a34a' },
            { label: 'Target Occupancy', value: '90%' },
            { label: 'Current Rate', value: '72.5%', color: '#ca8a04' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: s.color || '#1a2b4a', marginTop: '2px' }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import StatusBadge from '../components/StatusBadge'

const PAYMENT_HISTORY = [
  { receipt: 'REC-2025-0312', date: 'Mar 1, 2025', amount: '$450', period: 'March 2025', method: 'Bank Transfer', status: 'Paid' },
  { receipt: 'REC-2025-0211', date: 'Feb 1, 2025', amount: '$450', period: 'February 2025', method: 'Credit Card', status: 'Paid' },
  { receipt: 'REC-2025-0115', date: 'Jan 1, 2025', amount: '$450', period: 'January 2025', method: 'Credit Card', status: 'Paid' },
  { receipt: 'REC-2024-1201', date: 'Dec 1, 2024', amount: '$450', period: 'December 2024', method: 'Bank Transfer', status: 'Paid' },
  { receipt: 'REC-2024-1102', date: 'Nov 1, 2024', amount: '$450', period: 'November 2024', method: 'Cash', status: 'Paid' },
  { receipt: 'REC-2024-1008', date: 'Oct 1, 2024', amount: '$450', period: 'October 2024', method: 'Credit Card', status: 'Paid' },
]

const METHOD_ICONS = { 'Credit Card': '💳', 'Bank Transfer': '🏦', 'Cash': '💵' }

export default function Payments() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Rent Payments</h1>
          <p className="page-subtitle">Room 204-B · Block B · $450/month</p>
        </div>
      </div>

      {/* Current Balance */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div className="stat-card" style={{ borderLeft: '4px solid #16a34a' }}>
          <div className="label">Outstanding Balance</div>
          <div className="value" style={{ color: '#16a34a' }}>$0.00</div>
          <div className="sub">All paid up ✓</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #ca8a04' }}>
          <div className="label">Next Payment Due</div>
          <div className="value">$450</div>
          <div className="sub">Due April 1, 2025</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #2563eb' }}>
          <div className="label">Total Paid (2024–25)</div>
          <div className="value">$2,700</div>
          <div className="sub">6 payments made</div>
        </div>
      </div>

      {/* Pay Now Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a2b4a, #2d4a7a)',
        borderRadius: '10px',
        padding: '20px 24px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
      }}>
        <div>
          <div style={{ fontWeight: '700', fontSize: '16px' }}>April 2025 Rent</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
            Due in 24 days · Room 204-B
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: '800' }}>$450</div>
          </div>
          <button className="btn" style={{ background: '#2563eb', color: 'white', padding: '10px 20px', fontWeight: '600' }}>
            💳 Pay Now
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="card">
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>Receipt #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Period</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENT_HISTORY.map(p => (
              <tr key={p.receipt}>
                <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6b7280' }}>{p.receipt}</td>
                <td>{p.date}</td>
                <td style={{ fontWeight: '600', color: '#1a2b4a' }}>{p.amount}</td>
                <td>{p.period}</td>
                <td>{METHOD_ICONS[p.method]} {p.method}</td>
                <td><StatusBadge status={p.status} /></td>
                <td>
                  <button className="btn btn-secondary btn-sm">📄 Receipt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

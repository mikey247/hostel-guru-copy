import { useState } from 'react'
import StatusBadge from '../../components/StatusBadge'

const PAYMENTS = [
  { student: 'John Doe', room: '204-B', amount: '$450', due: 'Apr 1, 2025', paid: '—', status: 'Pending' },
  { student: 'Emily Chen', room: '202-B', amount: '$450', due: 'Apr 1, 2025', paid: 'Mar 18, 2025', status: 'Paid' },
  { student: 'Sarah Mitchell', room: '101-A', amount: '$300', due: 'Mar 1, 2025', paid: '—', status: 'Overdue' },
  { student: 'Marcus Thompson', room: '103-A', amount: '$320', due: 'Apr 1, 2025', paid: 'Mar 15, 2025', status: 'Paid' },
  { student: 'Ravi Patel', room: '305-C', amount: '$320', due: 'Apr 1, 2025', paid: '—', status: 'Pending' },
  { student: 'Lucas Oliveira', room: '302-C', amount: '$400', due: 'Apr 1, 2025', paid: 'Mar 20, 2025', status: 'Paid' },
  { student: 'Aisha Williams', room: '104-A', amount: '$420', due: 'Mar 1, 2025', paid: '—', status: 'Overdue' },
  { student: 'Jin Park', room: '201-B', amount: '$350', due: 'Apr 1, 2025', paid: 'Mar 10, 2025', status: 'Paid' },
  { student: 'Isabella Rossi', room: '102-A', amount: '$420', due: 'Apr 1, 2025', paid: '—', status: 'Pending' },
  { student: 'Omar Hassan', room: '203-B', amount: '$360', due: 'Apr 1, 2025', paid: 'Mar 5, 2025', status: 'Paid' },
  { student: 'Chen Wei', room: '301-C', amount: '$290', due: 'Mar 1, 2025', paid: '—', status: 'Overdue' },
  { student: 'Fatima Al-Zahra', room: '205-B', amount: '$350', due: 'Apr 1, 2025', paid: 'Mar 22, 2025', status: 'Paid' },
]

export default function AdminPayments() {
  const [statusFilter, setStatusFilter] = useState('All')

  const totalCollected = PAYMENTS.filter(p => p.status === 'Paid').reduce((sum, p) => sum + parseInt(p.amount.replace('$', '')), 0)
  const totalPending = PAYMENTS.filter(p => p.status === 'Pending').reduce((sum, p) => sum + parseInt(p.amount.replace('$', '')), 0)
  const totalOverdue = PAYMENTS.filter(p => p.status === 'Overdue').reduce((sum, p) => sum + parseInt(p.amount.replace('$', '')), 0)

  const filtered = PAYMENTS.filter(p => statusFilter === 'All' || p.status === statusFilter)

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Payment Management</h1>
          <p className="page-subtitle">April 2025 billing cycle</p>
        </div>
        <button className="btn btn-primary">+ Record Payment</button>
      </div>

      {/* Summary Cards */}
      <div className="grid-3">
        <div className="stat-card" style={{ borderLeft: '4px solid #16a34a' }}>
          <div className="label">💰 Total Collected</div>
          <div className="value" style={{ color: '#16a34a' }}>${totalCollected.toLocaleString()}</div>
          <div className="sub">{PAYMENTS.filter(p => p.status === 'Paid').length} payments received</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #ca8a04' }}>
          <div className="label">⏳ Pending</div>
          <div className="value" style={{ color: '#ca8a04' }}>${totalPending.toLocaleString()}</div>
          <div className="sub">{PAYMENTS.filter(p => p.status === 'Pending').length} awaiting payment</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #dc2626' }}>
          <div className="label">🚨 Overdue</div>
          <div className="value" style={{ color: '#dc2626' }}>${totalOverdue.toLocaleString()}</div>
          <div className="sub">{PAYMENTS.filter(p => p.status === 'Overdue').length} overdue accounts</div>
        </div>
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['All', 'Paid', 'Pending', 'Overdue'].map(f => (
          <button
            key={f}
            onClick={() => setStatusFilter(f)}
            className="btn"
            style={{
              background: statusFilter === f ? '#1a2b4a' : 'white',
              color: statusFilter === f ? 'white' : '#374151',
              border: '1px solid #e5e7eb',
              fontSize: '13px',
            }}
          >
            {f} <span style={{ fontSize: '11px', opacity: 0.7 }}>({PAYMENTS.filter(p => f === 'All' || p.status === f).length})</span>
          </button>
        ))}
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Room</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Paid Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i}>
                <td style={{ fontWeight: '600', color: '#1a2b4a' }}>{p.student}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '12px' }}>{p.room}</td>
                <td style={{ fontWeight: '700' }}>{p.amount}</td>
                <td style={{ color: p.status === 'Overdue' ? '#dc2626' : '#374151' }}>{p.due}</td>
                <td style={{ color: '#6b7280' }}>{p.paid}</td>
                <td><StatusBadge status={p.status} /></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {p.status !== 'Paid' && (
                      <button className="btn btn-sm" style={{ background: '#dcfce7', color: '#16a34a' }}>✓ Mark Paid</button>
                    )}
                    <button className="btn btn-secondary btn-sm">📧 Remind</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

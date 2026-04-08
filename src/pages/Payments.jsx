import { useState } from 'react'
import StatusBadge from '../components/StatusBadge'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import { useToast } from '../hooks/useToast'

const INITIAL_PAYMENT_HISTORY = [
  { receipt: 'REC-2025-0312', date: 'Mar 1, 2025', amount: '$450', period: 'March 2025', method: 'Bank Transfer', status: 'Paid' },
  { receipt: 'REC-2025-0211', date: 'Feb 1, 2025', amount: '$450', period: 'February 2025', method: 'Credit Card', status: 'Paid' },
  { receipt: 'REC-2025-0115', date: 'Jan 1, 2025', amount: '$450', period: 'January 2025', method: 'Credit Card', status: 'Paid' },
  { receipt: 'REC-2024-1201', date: 'Dec 1, 2024', amount: '$450', period: 'December 2024', method: 'Bank Transfer', status: 'Paid' },
  { receipt: 'REC-2024-1102', date: 'Nov 1, 2024', amount: '$450', period: 'November 2024', method: 'Cash', status: 'Paid' },
  { receipt: 'REC-2024-1008', date: 'Oct 1, 2024', amount: '$450', period: 'October 2024', method: 'Credit Card', status: 'Paid' },
]

const METHOD_ICONS = { 'Credit Card': '💳', 'Bank Transfer': '🏦', 'Cash': '💵' }

export default function Payments() {
  const [showPayModal, setShowPayModal] = useState(false)
  const [payMethod, setPayMethod] = useState('Credit Card')
  const [history, setHistory] = useState(INITIAL_PAYMENT_HISTORY)
  const [aprilPaid, setAprilPaid] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  const handlePay = () => {
    const newEntry = {
      receipt: 'REC-2025-0401',
      date: 'Apr 1, 2025',
      amount: '$450',
      period: 'April 2025',
      method: payMethod,
      status: 'Paid',
    }
    setHistory(prev => [newEntry, ...prev])
    setAprilPaid(true)
    setShowPayModal(false)
    showToast(`April 2025 rent of $450 paid via ${payMethod}. Receipt REC-2025-0401 sent to your email.`, 'success')
  }

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
        <div className="stat-card" style={{ borderLeft: aprilPaid ? '4px solid #16a34a' : '4px solid #ca8a04' }}>
          <div className="label">Next Payment Due</div>
          <div className="value" style={aprilPaid ? { color: '#16a34a', fontSize: '20px' } : {}}>
            {aprilPaid ? 'Paid ✓' : '$450'}
          </div>
          <div className="sub">{aprilPaid ? 'April 2025 paid' : 'Due April 1, 2025'}</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #2563eb' }}>
          <div className="label">Total Paid (2024–25)</div>
          <div className="value">{aprilPaid ? '$3,150' : '$2,700'}</div>
          <div className="sub">{aprilPaid ? '7 payments made' : '6 payments made'}</div>
        </div>
      </div>

      {/* Pay Now Banner */}
      {!aprilPaid && (
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
            <button
              className="btn"
              style={{ background: '#2563eb', color: 'white', padding: '10px 20px', fontWeight: '600' }}
              onClick={() => setShowPayModal(true)}
            >
              💳 Pay Now
            </button>
          </div>
        </div>
      )}

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
            {history.map(p => (
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

      {/* Pay Now Modal */}
      {showPayModal && (
        <Modal
          title="Pay April 2025 Rent"
          onClose={() => setShowPayModal(false)}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => setShowPayModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handlePay}>💳 Confirm Payment</button>
            </>
          }
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#1a2b4a' }}>$450</div>
            <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>April 2025 · Room 204-B</div>
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Credit Card', 'Bank Transfer', 'Cash'].map(m => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setPayMethod(m)}
                  style={{
                    flex: 1,
                    padding: '12px 8px',
                    borderRadius: '8px',
                    border: `2px solid ${payMethod === m ? '#2563eb' : '#e5e7eb'}`,
                    background: payMethod === m ? '#f0f5ff' : 'white',
                    color: payMethod === m ? '#2563eb' : '#374151',
                    fontWeight: payMethod === m ? '700' : '400',
                    fontSize: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>{METHOD_ICONS[m]}</div>
                  {m}
                </button>
              ))}
            </div>
          </div>

          {payMethod === 'Credit Card' && (
            <div style={{ marginTop: '12px' }}>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label>Card Number</label>
                <input className="form-control" placeholder="•••• •••• •••• ••••" readOnly style={{ color: '#6b7280' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Expiry</label>
                  <input className="form-control" placeholder="MM/YY" readOnly style={{ color: '#6b7280' }} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>CVV</label>
                  <input className="form-control" placeholder="•••" readOnly style={{ color: '#6b7280' }} />
                </div>
              </div>
            </div>
          )}

          <div style={{ marginTop: '16px', padding: '12px', background: '#f9fafb', borderRadius: '8px', fontSize: '12px', color: '#6b7280' }}>
            🔒 Your payment details are securely encrypted. A receipt will be emailed upon confirmation.
          </div>
        </Modal>
      )}

      <Toast toast={toast} onClose={hideToast} />
    </div>
  )
}

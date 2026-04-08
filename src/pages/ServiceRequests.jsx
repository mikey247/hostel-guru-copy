import { useState } from 'react'
import StatusBadge from '../components/StatusBadge'
import Toast from '../components/Toast'
import { useToast } from '../hooks/useToast'

const INITIAL_REQUESTS = [
  { id: 'SR-008', date: 'Mar 20, 2025', type: 'Electrical', description: 'Power outlet not working in room', priority: 'High', status: 'Open', resolved: '—' },
  { id: 'SR-007', date: 'Mar 15, 2025', type: 'Internet', description: 'WiFi drops frequently after 10pm', priority: 'Medium', status: 'In Progress', resolved: '—' },
  { id: 'SR-006', date: 'Mar 5, 2025', type: 'Housekeeping', description: 'Deep cleaning request for common area', priority: 'Low', status: 'Resolved', resolved: 'Mar 8, 2025' },
  { id: 'SR-005', date: 'Feb 22, 2025', type: 'Maintenance', description: 'Door lock is loose and hard to open', priority: 'High', status: 'Resolved', resolved: 'Feb 25, 2025' },
  { id: 'SR-004', date: 'Feb 10, 2025', type: 'Plumbing', description: 'Water pressure low in attached bathroom', priority: 'Medium', status: 'Resolved', resolved: 'Feb 12, 2025' },
  { id: 'SR-003', date: 'Jan 28, 2025', type: 'Electrical', description: 'Overhead light flickering', priority: 'Low', status: 'Resolved', resolved: 'Jan 30, 2025' },
  { id: 'SR-002', date: 'Jan 15, 2025', type: 'Maintenance', description: 'Window does not close properly', priority: 'Medium', status: 'Resolved', resolved: 'Jan 18, 2025' },
  { id: 'SR-001', date: 'Jan 5, 2025', type: 'Internet', description: 'No internet connection in room', priority: 'High', status: 'Resolved', resolved: 'Jan 6, 2025' },
]

const PRIORITY_COLORS = { High: '#dc2626', Medium: '#ca8a04', Low: '#16a34a' }

export default function ServiceRequests() {
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [requests, setRequests] = useState(INITIAL_REQUESTS)
  const { toast, showToast, hideToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    const lastNum = requests.length > 0 ? parseInt(requests[0].id.split('-')[1]) : 0
    const nextId = `SR-${String(lastNum + 1).padStart(3, '0')}`
    const newRequest = {
      id: nextId,
      date: 'Mar 21, 2025',
      type,
      description,
      priority,
      status: 'Open',
      resolved: '—',
    }
    setRequests(prev => [newRequest, ...prev])
    showToast(`Request ${nextId} submitted! Type: ${type} · Priority: ${priority}. You'll receive a confirmation email.`, 'success')
    setType('')
    setDescription('')
    setPriority('Medium')
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Service Requests</h1>
          <p className="page-subtitle">Submit and track maintenance & housekeeping requests</p>
        </div>
      </div>

      {/* Submit Form */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>
          📝 Submit New Request
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Request Type</label>
              <select className="form-control" value={type} onChange={e => setType(e.target.value)} required>
                <option value="">Select type...</option>
                {['Maintenance', 'Housekeeping', 'Internet', 'Electrical', 'Plumbing', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Priority Level</label>
              <select className="form-control" value={priority} onChange={e => setPriority(e.target.value)}>
                {['Low', 'Medium', 'High'].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '16px', marginBottom: '0' }}>
            <label>Description</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Describe your issue in detail..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              style={{ resize: 'vertical' }}
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <button type="submit" className="btn btn-primary">
              📤 Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Past Requests */}
      <div className="card">
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a', marginBottom: '16px' }}>Request History</h2>
        <table>
          <thead>
            <tr>
              <th>Request #</th>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Resolved</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(r => (
              <tr key={r.id}>
                <td style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: '600', color: '#2563eb' }}>{r.id}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{r.date}</td>
                <td>{r.type}</td>
                <td style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.description}</td>
                <td>
                  <span style={{
                    color: PRIORITY_COLORS[r.priority],
                    fontWeight: '600',
                    fontSize: '12px',
                  }}>● {r.priority}</span>
                </td>
                <td><StatusBadge status={r.status} /></td>
                <td style={{ color: '#6b7280', fontSize: '12px' }}>{r.resolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  )
}

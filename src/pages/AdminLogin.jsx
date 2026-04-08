import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f1d35 0%, #1a2b4a 60%, #1e3a6e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        width: '100%',
        maxWidth: '420px',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f1d35, #1a2b4a)',
          padding: '32px 32px 24px',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(37,99,235,0.25)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            margin: '0 auto 12px',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>⚙️</div>
          <h1 style={{ color: 'white', fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px' }}>Admin Portal</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', marginTop: '4px' }}>
            Hostel Guru · Staff Access Only
          </p>
          <div style={{
            marginTop: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(220,38,38,0.2)',
            border: '1px solid rgba(220,38,38,0.4)',
            borderRadius: '999px',
            padding: '4px 12px',
            fontSize: '11px',
            color: '#fca5a5',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            🔒 Restricted Access
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '28px 32px 32px' }}>
          <div className="form-group">
            <label htmlFor="admin-email">Admin Email</label>
            <input
              id="admin-email"
              type="email"
              className="form-control"
              placeholder="admin@hostelguru.edu"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              className="form-control"
              placeholder="Enter admin password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <a href="#" style={{ fontSize: '12px', color: '#2563eb' }}>Forgot password?</a>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px', fontWeight: '600' }}
          >
            ⚙️ Sign In to Admin Panel
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #f3f4f6' }}>
            <Link
              to="/"
              style={{ fontSize: '13px', color: '#6b7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              ← Back to Student Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

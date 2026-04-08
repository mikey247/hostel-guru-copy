import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a2b4a 0%, #2d4a7a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        width: '100%',
        maxWidth: '420px',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: '#1a2b4a',
          padding: '32px 32px 24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🏛</div>
          <h1 style={{ color: 'white', fontSize: '26px', fontWeight: '800', letterSpacing: '-0.5px' }}>Hostel Guru</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginTop: '4px' }}>
            Smart Accommodation Management
          </p>
          <div style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '4px 14px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.75)',
          }}>
            🎓 Student Portal
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '28px 32px 24px' }}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="student@hostelguru.edu"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <a href="#" style={{ fontSize: '12px', color: '#2563eb' }}>Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px', fontWeight: '600' }}>
            Sign In →
          </button>
        </form>

        {/* Admin link */}
        <div style={{
          textAlign: 'center',
          padding: '14px 32px 24px',
          borderTop: '1px solid #f3f4f6',
        }}>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>
            Are you a staff member?{' '}
            <Link to="/admin-login" style={{ color: '#2563eb', fontWeight: '600' }}>
              Admin login →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

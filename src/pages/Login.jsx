import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [tab, setTab] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tab === 'admin') {
      navigate('/admin')
    } else {
      navigate('/dashboard')
    }
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
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
          {['student', 'admin'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '14px',
                background: tab === t ? '#f0f5ff' : 'white',
                color: tab === t ? '#2563eb' : '#6b7280',
                fontWeight: tab === t ? '600' : '400',
                fontSize: '13px',
                borderBottom: tab === t ? '2px solid #2563eb' : '2px solid transparent',
                transition: 'all 0.15s',
                textTransform: 'capitalize',
              }}
            >
              {t === 'student' ? '🎓 Student Login' : '⚙️ Admin Login'}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '28px 32px 32px' }}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder={tab === 'admin' ? 'admin@hostelguru.edu' : 'student@hostelguru.edu'}
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
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#6b7280' }}>
            Secure login powered by Hostel Guru v2.0
          </p>
        </form>
      </div>
    </div>
  )
}

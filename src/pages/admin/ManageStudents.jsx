import { useState } from 'react'
import StatusBadge from '../../components/StatusBadge'

const STUDENTS = [
  { id: 'STU-2024-0001', name: 'Sarah Mitchell', email: 'sarah.m@hostelguru.edu', room: '101-A', status: 'Active' },
  { id: 'STU-2024-0002', name: 'Ravi Patel', email: 'ravi.p@hostelguru.edu', room: '305-C', status: 'Active' },
  { id: 'STU-2024-0042', name: 'John Doe', email: 'john.doe@hostelguru.edu', room: '204-B', status: 'Active' },
  { id: 'STU-2024-0044', name: 'Emily Chen', email: 'emily.c@hostelguru.edu', room: '202-B', status: 'Active' },
  { id: 'STU-2024-0051', name: 'Marcus Thompson', email: 'marcus.t@hostelguru.edu', room: '103-A', status: 'Active' },
  { id: 'STU-2024-0063', name: 'Priya Sharma', email: 'priya.s@hostelguru.edu', room: '—', status: 'Waitlisted' },
  { id: 'STU-2024-0071', name: 'Lucas Oliveira', email: 'lucas.o@hostelguru.edu', room: '302-C', status: 'Active' },
  { id: 'STU-2024-0078', name: 'Aisha Williams', email: 'aisha.w@hostelguru.edu', room: '104-A', status: 'Active' },
  { id: 'STU-2024-0085', name: 'Jin Park', email: 'jin.p@hostelguru.edu', room: '201-B', status: 'Active' },
  { id: 'STU-2024-0092', name: 'Isabella Rossi', email: 'isabella.r@hostelguru.edu', room: '102-A', status: 'Active' },
  { id: 'STU-2024-0099', name: 'Omar Hassan', email: 'omar.h@hostelguru.edu', room: '203-B', status: 'Active' },
  { id: 'STU-2024-0104', name: 'Sofia Andersen', email: 'sofia.a@hostelguru.edu', room: '—', status: 'Pending' },
  { id: 'STU-2024-0111', name: 'Chen Wei', email: 'chen.w@hostelguru.edu', room: '301-C', status: 'Active' },
  { id: 'STU-2024-0118', name: 'Fatima Al-Zahra', email: 'fatima.z@hostelguru.edu', room: '205-B', status: 'Active' },
  { id: 'STU-2024-0125', name: 'David Kimani', email: 'david.k@hostelguru.edu', room: '—', status: 'Pending' },
]

export default function ManageStudents() {
  const [search, setSearch] = useState('')

  const filtered = STUDENTS.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Manage Students</h1>
          <p className="page-subtitle">{STUDENTS.length} enrolled students</p>
        </div>
        <button className="btn btn-primary">+ Add Student</button>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
          <input
            className="form-control"
            style={{ maxWidth: '320px' }}
            placeholder="🔍 Search by name, email, or ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div style={{ fontSize: '13px', color: '#6b7280' }}>
            Showing {filtered.length} of {STUDENTS.length}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Room</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id}>
                <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6b7280' }}>{s.id}</td>
                <td style={{ fontWeight: '600', color: '#1a2b4a' }}>{s.name}</td>
                <td style={{ color: '#6b7280', fontSize: '13px' }}>{s.email}</td>
                <td>
                  <span style={{ fontWeight: s.room !== '—' ? '600' : '400', color: s.room !== '—' ? '#2563eb' : '#9ca3af' }}>
                    {s.room}
                  </span>
                </td>
                <td><StatusBadge status={s.status} /></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn btn-secondary btn-sm">✏️ Edit</button>
                    <button className="btn btn-sm" style={{ background: '#fee2e2', color: '#dc2626' }}>🚫 Deactivate</button>
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

import { useState } from 'react'
import StatusBadge from '../../components/StatusBadge'
import Modal from '../../components/Modal'
import Toast from '../../components/Toast'
import { useToast } from '../../hooks/useToast'

const INITIAL_STUDENTS = [
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

const EMPTY_STUDENT = { name: '', email: '', room: '', status: 'Pending' }

export default function ManageStudents() {
  const [students, setStudents] = useState(INITIAL_STUDENTS)
  const [search, setSearch] = useState('')
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [editStudent, setEditStudent] = useState(null)
  const [deactivateStudent, setDeactivateStudent] = useState(null)
  const [newStudent, setNewStudent] = useState(EMPTY_STUDENT)
  const { toast, showToast, hideToast } = useToast()

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    const nextNum = String(parseInt(students[students.length - 1].id.split('-')[2]) + 1).padStart(4, '0')
    const id = `STU-2024-${nextNum}`
    setStudents(prev => [...prev, { ...newStudent, id }])
    setAddModalOpen(false)
    setNewStudent(EMPTY_STUDENT)
    showToast(`Student ${newStudent.name} added successfully (${id}).`, 'success')
  }

  const handleEdit = () => {
    setStudents(prev => prev.map(s => s.id === editStudent.id ? editStudent : s))
    showToast(`${editStudent.name}'s profile has been updated.`, 'success')
    setEditStudent(null)
  }

  const handleDeactivate = () => {
    setStudents(prev => prev.map(s => s.id === deactivateStudent.id ? { ...s, status: 'Pending' } : s))
    showToast(`${deactivateStudent.name} has been deactivated.`, 'info')
    setDeactivateStudent(null)
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Manage Students</h1>
          <p className="page-subtitle">{students.length} enrolled students</p>
        </div>
        <button className="btn btn-primary" onClick={() => setAddModalOpen(true)}>+ Add Student</button>
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
            Showing {filtered.length} of {students.length}
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
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditStudent({ ...s })}>✏️ Edit</button>
                    {s.status === 'Active' && (
                      <button className="btn btn-sm" style={{ background: '#fee2e2', color: '#dc2626' }} onClick={() => setDeactivateStudent(s)}>
                        🚫 Deactivate
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {addModalOpen && (
        <Modal
          title="Add New Student"
          onClose={() => { setAddModalOpen(false); setNewStudent(EMPTY_STUDENT) }}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => { setAddModalOpen(false); setNewStudent(EMPTY_STUDENT) }}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAdd} disabled={!newStudent.name || !newStudent.email}>
                + Add Student
              </button>
            </>
          }
        >
          <div className="form-group">
            <label>Full Name</label>
            <input className="form-control" placeholder="e.g. Jane Smith" value={newStudent.name} onChange={e => setNewStudent(p => ({ ...p, name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input className="form-control" type="email" placeholder="jane.s@hostelguru.edu" value={newStudent.email} onChange={e => setNewStudent(p => ({ ...p, email: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Room Assignment</label>
            <input className="form-control" placeholder="e.g. 201-B (leave blank if unassigned)" value={newStudent.room} onChange={e => setNewStudent(p => ({ ...p, room: e.target.value || '—' }))} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Status</label>
            <select className="form-control" value={newStudent.status} onChange={e => setNewStudent(p => ({ ...p, status: e.target.value }))}>
              {['Active', 'Pending', 'Waitlisted'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </Modal>
      )}

      {/* Edit Student Modal */}
      {editStudent && (
        <Modal
          title={`Edit Student — ${editStudent.name}`}
          onClose={() => setEditStudent(null)}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => setEditStudent(null)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleEdit}>Save Changes</button>
            </>
          }
        >
          <div className="form-group">
            <label>Full Name</label>
            <input className="form-control" value={editStudent.name} onChange={e => setEditStudent(p => ({ ...p, name: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input className="form-control" type="email" value={editStudent.email} onChange={e => setEditStudent(p => ({ ...p, email: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>Room Assignment</label>
            <input className="form-control" value={editStudent.room} onChange={e => setEditStudent(p => ({ ...p, room: e.target.value }))} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Status</label>
            <select className="form-control" value={editStudent.status} onChange={e => setEditStudent(p => ({ ...p, status: e.target.value }))}>
              {['Active', 'Pending', 'Waitlisted'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </Modal>
      )}

      {/* Deactivate Confirmation Modal */}
      {deactivateStudent && (
        <Modal
          title="Deactivate Student"
          onClose={() => setDeactivateStudent(null)}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => setDeactivateStudent(null)}>Cancel</button>
              <button className="btn btn-danger" onClick={handleDeactivate}>🚫 Confirm Deactivate</button>
            </>
          }
        >
          <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>⚠️</div>
            <p style={{ fontSize: '15px', color: '#374151', fontWeight: '600', marginBottom: '8px' }}>
              Are you sure you want to deactivate <strong>{deactivateStudent.name}</strong>?
            </p>
            <p style={{ fontSize: '13px', color: '#6b7280' }}>
              Their account will be set to Pending status. This can be reversed by editing their profile.
            </p>
          </div>
        </Modal>
      )}

      <Toast toast={toast} onClose={hideToast} />
    </div>
  )
}

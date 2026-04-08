import { useState } from 'react'
import StatusBadge from '../../components/StatusBadge'
import Modal from '../../components/Modal'
import Toast from '../../components/Toast'
import { useToast } from '../../hooks/useToast'

const INITIAL_ROOMS = [
  { room: '101-A', block: 'A', floor: 1, type: 'Single', capacity: 1, occupied: 1, status: 'Occupied' },
  { room: '102-A', block: 'A', floor: 1, type: 'Double', capacity: 2, occupied: 2, status: 'Occupied' },
  { room: '103-A', block: 'A', floor: 1, type: 'Triple', capacity: 3, occupied: 2, status: 'Available' },
  { room: '104-A', block: 'A', floor: 1, type: 'Double', capacity: 2, occupied: 1, status: 'Reserved' },
  { room: '105-A', block: 'A', floor: 1, type: 'Single', capacity: 1, occupied: 0, status: 'Available' },
  { room: '201-B', block: 'B', floor: 2, type: 'Single', capacity: 1, occupied: 1, status: 'Occupied' },
  { room: '202-B', block: 'B', floor: 2, type: 'Double', capacity: 2, occupied: 2, status: 'Occupied' },
  { room: '203-B', block: 'B', floor: 2, type: 'Triple', capacity: 3, occupied: 1, status: 'Available' },
  { room: '204-B', block: 'B', floor: 2, type: 'Double', capacity: 2, occupied: 2, status: 'Occupied' },
  { room: '205-B', block: 'B', floor: 2, type: 'Single', capacity: 1, occupied: 0, status: 'Reserved' },
  { room: '206-B', block: 'B', floor: 2, type: 'Double', capacity: 2, occupied: 0, status: 'Available' },
  { room: '301-C', block: 'C', floor: 3, type: 'Triple', capacity: 3, occupied: 0, status: 'Available' },
  { room: '302-C', block: 'C', floor: 3, type: 'Double', capacity: 2, occupied: 2, status: 'Occupied' },
  { room: '303-C', block: 'C', floor: 3, type: 'Single', capacity: 1, occupied: 1, status: 'Occupied' },
  { room: '304-C', block: 'C', floor: 3, type: 'Triple', capacity: 3, occupied: 2, status: 'Available' },
  { room: '305-C', block: 'C', floor: 3, type: 'Single', capacity: 1, occupied: 1, status: 'Occupied' },
  { room: '306-C', block: 'C', floor: 3, type: 'Double', capacity: 2, occupied: 0, status: 'Available' },
  { room: '401-A', block: 'A', floor: 4, type: 'Single', capacity: 1, occupied: 0, status: 'Available' },
  { room: '402-A', block: 'A', floor: 4, type: 'Double', capacity: 2, occupied: 1, status: 'Available' },
  { room: '403-A', block: 'A', floor: 4, type: 'Triple', capacity: 3, occupied: 3, status: 'Occupied' },
]

export default function ManageRooms() {
  const [rooms, setRooms] = useState(INITIAL_ROOMS)
  const [viewRoom, setViewRoom] = useState(null)
  const [editRoom, setEditRoom] = useState(null)
  const { toast, showToast, hideToast } = useToast()

  const handleSaveEdit = () => {
    setRooms(prev => prev.map(r => r.room === editRoom.room ? editRoom : r))
    showToast(`Room ${editRoom.room} details updated successfully.`, 'success')
    setEditRoom(null)
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Manage Rooms</h1>
          <p className="page-subtitle">{rooms.length} rooms total</p>
        </div>
        <button className="btn btn-primary">+ Add Room</button>
      </div>

      {/* Summary */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Total Rooms', value: rooms.length, color: '#2563eb' },
          { label: 'Available', value: rooms.filter(r => r.status === 'Available').length, color: '#16a34a' },
          { label: 'Occupied', value: rooms.filter(r => r.status === 'Occupied').length, color: '#dc2626' },
          { label: 'Reserved', value: rooms.filter(r => r.status === 'Reserved').length, color: '#ca8a04' },
        ].map(s => (
          <div key={s.label} className="stat-card" style={{ borderLeft: `4px solid ${s.color}` }}>
            <div className="label">{s.label}</div>
            <div className="value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Room #</th>
              <th>Block</th>
              <th>Floor</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Occupied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(r => (
              <tr key={r.room}>
                <td style={{ fontWeight: '700', color: '#1a2b4a' }}>{r.room}</td>
                <td>Block {r.block}</td>
                <td>Floor {r.floor}</td>
                <td>{r.type}</td>
                <td>{r.capacity}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '50px', background: '#f3f4f6', borderRadius: '999px', height: '6px' }}>
                      <div style={{
                        height: '100%',
                        borderRadius: '999px',
                        background: r.occupied === r.capacity ? '#dc2626' : '#16a34a',
                        width: `${(r.occupied / r.capacity) * 100}%`,
                      }} />
                    </div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>{r.occupied}/{r.capacity}</span>
                  </div>
                </td>
                <td><StatusBadge status={r.status} /></td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditRoom({ ...r })}>✏️ Edit</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setViewRoom(r)}>👁 View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Room Modal */}
      {viewRoom && (
        <Modal
          title={`Room ${viewRoom.room} — Details`}
          onClose={() => setViewRoom(null)}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => setViewRoom(null)}>Close</button>
              <button className="btn btn-primary" onClick={() => { setViewRoom(null); setEditRoom({ ...viewRoom }) }}>✏️ Edit Room</button>
            </>
          }
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            {[
              { label: 'Room Number', value: viewRoom.room },
              { label: 'Block', value: `Block ${viewRoom.block}` },
              { label: 'Floor', value: `Floor ${viewRoom.floor}` },
              { label: 'Type', value: viewRoom.type },
              { label: 'Capacity', value: `${viewRoom.capacity} person${viewRoom.capacity > 1 ? 's' : ''}` },
              { label: 'Currently Occupied', value: `${viewRoom.occupied} of ${viewRoom.capacity}` },
            ].map(item => (
              <div key={item.label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#1a2b4a' }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: '#6b7280' }}>Current Status</span>
            <StatusBadge status={viewRoom.status} />
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ background: '#f5f7fa', borderRadius: '6px', height: '10px' }}>
              <div style={{
                height: '100%',
                borderRadius: '6px',
                background: viewRoom.occupied === viewRoom.capacity ? '#dc2626' : '#16a34a',
                width: `${(viewRoom.occupied / viewRoom.capacity) * 100}%`,
                transition: 'width 0.3s',
              }} />
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', textAlign: 'right' }}>
              {Math.round((viewRoom.occupied / viewRoom.capacity) * 100)}% occupied
            </div>
          </div>
        </Modal>
      )}

      {/* Edit Room Modal */}
      {editRoom && (
        <Modal
          title={`Edit Room ${editRoom.room}`}
          onClose={() => setEditRoom(null)}
          footer={
            <>
              <button className="btn btn-secondary" onClick={() => setEditRoom(null)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveEdit}>Save Changes</button>
            </>
          }
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Room Type</label>
              <select className="form-control" value={editRoom.type} onChange={e => setEditRoom(p => ({ ...p, type: e.target.value }))}>
                {['Single', 'Double', 'Triple'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Status</label>
              <select className="form-control" value={editRoom.status} onChange={e => setEditRoom(p => ({ ...p, status: e.target.value }))}>
                {['Available', 'Occupied', 'Reserved'].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Capacity</label>
              <input className="form-control" type="number" min="1" max="6" value={editRoom.capacity} onChange={e => setEditRoom(p => ({ ...p, capacity: parseInt(e.target.value) }))} />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Currently Occupied</label>
              <input className="form-control" type="number" min="0" max={editRoom.capacity} value={editRoom.occupied} onChange={e => setEditRoom(p => ({ ...p, occupied: parseInt(e.target.value) }))} />
            </div>
          </div>
        </Modal>
      )}

      <Toast toast={toast} onClose={hideToast} />
    </div>
  )
}

import StatusBadge from '../../components/StatusBadge'

const ROOMS = [
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
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Manage Rooms</h1>
          <p className="page-subtitle">{ROOMS.length} rooms total</p>
        </div>
        <button className="btn btn-primary">+ Add Room</button>
      </div>

      {/* Summary */}
      <div className="grid-4" style={{ marginBottom: '20px' }}>
        {[
          { label: 'Total Rooms', value: ROOMS.length, color: '#2563eb' },
          { label: 'Available', value: ROOMS.filter(r => r.status === 'Available').length, color: '#16a34a' },
          { label: 'Occupied', value: ROOMS.filter(r => r.status === 'Occupied').length, color: '#dc2626' },
          { label: 'Reserved', value: ROOMS.filter(r => r.status === 'Reserved').length, color: '#ca8a04' },
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
            {ROOMS.map(r => (
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
                    <button className="btn btn-secondary btn-sm">✏️ Edit</button>
                    <button className="btn btn-secondary btn-sm">👁 View</button>
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

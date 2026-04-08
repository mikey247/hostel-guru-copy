import { useState } from 'react'
import StatusBadge from '../components/StatusBadge'

const ROOMS = [
  { id: '101-A', type: 'Single', floor: 1, status: 'Available', price: 300, capacity: 1, occupied: 0, amenities: ['WiFi', 'Desk', 'Wardrobe'] },
  { id: '102-A', type: 'Double', floor: 1, status: 'Occupied', price: 420, capacity: 2, occupied: 2, amenities: ['WiFi', 'AC', 'Attached Bath'] },
  { id: '103-A', type: 'Triple', floor: 1, status: 'Available', price: 320, capacity: 3, occupied: 2, amenities: ['WiFi', 'Fan', 'Shared Bath'] },
  { id: '104-A', type: 'Double', floor: 1, status: 'Reserved', price: 420, capacity: 2, occupied: 1, amenities: ['WiFi', 'AC', 'Desk'] },
  { id: '201-B', type: 'Single', floor: 2, status: 'Available', price: 350, capacity: 1, occupied: 0, amenities: ['WiFi', 'AC', 'Balcony'] },
  { id: '202-B', type: 'Double', floor: 2, status: 'Occupied', price: 450, capacity: 2, occupied: 2, amenities: ['WiFi', 'AC', 'Attached Bath', 'Study Room'] },
  { id: '203-B', type: 'Triple', floor: 2, status: 'Available', price: 360, capacity: 3, occupied: 1, amenities: ['WiFi', 'Fan', 'Wardrobe'] },
  { id: '204-B', type: 'Double', floor: 2, status: 'Occupied', price: 450, capacity: 2, occupied: 2, amenities: ['WiFi', 'AC', 'Attached Bath'] },
  { id: '205-B', type: 'Single', floor: 2, status: 'Reserved', price: 350, capacity: 1, occupied: 0, amenities: ['WiFi', 'AC', 'Desk'] },
  { id: '301-C', type: 'Triple', floor: 3, status: 'Available', price: 290, capacity: 3, occupied: 0, amenities: ['WiFi', 'Fan', 'Shared Bath'] },
  { id: '302-C', type: 'Double', floor: 3, status: 'Occupied', price: 400, capacity: 2, occupied: 2, amenities: ['WiFi', 'AC', 'Wardrobe'] },
  { id: '305-C', type: 'Single', floor: 3, status: 'Available', price: 320, capacity: 1, occupied: 0, amenities: ['WiFi', 'Desk', 'Balcony'] },
]

export default function Rooms() {
  const [floorFilter, setFloorFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [availFilter, setAvailFilter] = useState('All')

  const filtered = ROOMS.filter(r => {
    if (floorFilter !== 'All' && r.floor !== parseInt(floorFilter)) return false
    if (typeFilter !== 'All' && r.type !== typeFilter) return false
    if (availFilter !== 'All' && r.status !== availFilter) return false
    return true
  })

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Browse Rooms</h1>
          <p className="page-subtitle">{filtered.length} rooms found</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {[
          { label: 'Floor', value: floorFilter, onChange: setFloorFilter, options: ['All', '1', '2', '3'] },
          { label: 'Type', value: typeFilter, onChange: setTypeFilter, options: ['All', 'Single', 'Double', 'Triple'] },
          { label: 'Availability', value: availFilter, onChange: setAvailFilter, options: ['All', 'Available', 'Occupied', 'Reserved'] },
        ].map(f => (
          <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{f.label}:</label>
            <select
              className="form-control"
              style={{ width: 'auto', padding: '7px 10px' }}
              value={f.value}
              onChange={e => f.onChange(e.target.value)}
            >
              {f.options.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>

      {/* Room Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {filtered.map(room => (
          <div key={room.id} className="card" style={{ transition: 'box-shadow 0.15s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a2b4a' }}>Room {room.id}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>{room.type} · Floor {room.floor}</div>
              </div>
              <StatusBadge status={room.status} />
            </div>

            <div style={{ fontSize: '22px', fontWeight: '800', color: '#2563eb', marginBottom: '12px' }}>
              ${room.price}<span style={{ fontSize: '13px', fontWeight: '400', color: '#6b7280' }}>/month</span>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px' }}>Amenities</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {room.amenities.map(a => (
                  <span key={a} style={{
                    background: '#f0f5ff',
                    color: '#2563eb',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500',
                  }}>{a}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontSize: '12px', color: '#6b7280' }}>
              <span>Occupancy</span>
              <span style={{ fontWeight: '600', color: '#374151' }}>{room.occupied}/{room.capacity} occupied</span>
            </div>

            <div style={{ background: '#f5f7fa', borderRadius: '4px', height: '6px', marginBottom: '14px' }}>
              <div style={{
                height: '100%',
                borderRadius: '4px',
                background: room.occupied === room.capacity ? '#dc2626' : '#16a34a',
                width: `${(room.occupied / room.capacity) * 100}%`,
                transition: 'width 0.3s',
              }} />
            </div>

            <button
              className="btn btn-primary"
              disabled={room.status !== 'Available'}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {room.status === 'Available' ? '📋 Book Room' : room.status === 'Reserved' ? '⏳ Reserved' : '🚫 Occupied'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

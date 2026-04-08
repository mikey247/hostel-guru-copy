import { useState } from 'react'

const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'payment', icon: '💳', title: 'April Rent Reminder', preview: 'Your April 2025 rent of $450 is due on April 1st. Please ensure timely payment.', time: '2 hours ago', read: false },
  { id: 2, type: 'request', icon: '🔧', title: 'Service Request #SR-007 Update', preview: 'Your internet connectivity issue is being investigated. Technician will visit tomorrow.', time: '5 hours ago', read: false },
  { id: 3, type: 'general', icon: '📢', title: 'Hostel Meeting Announcement', preview: 'Mandatory hostel meeting on March 28, 2025 at 6:00 PM in the common hall.', time: '1 day ago', read: false },
  { id: 4, type: 'room', icon: '🏠', title: 'Room Inspection Scheduled', preview: 'Annual room inspection on March 30, 2025. Please ensure your room is tidy.', time: '2 days ago', read: true },
  { id: 5, type: 'payment', icon: '✅', title: 'Payment Confirmed', preview: 'Your March 2025 rent payment of $450 has been successfully received.', time: '3 days ago', read: true },
  { id: 6, type: 'request', icon: '✔️', title: 'Service Request #SR-006 Resolved', preview: 'Your housekeeping request has been completed. Please rate our service.', time: '5 days ago', read: true },
  { id: 7, type: 'general', icon: '📋', title: 'Updated Hostel Guidelines', preview: 'Please review the updated hostel rules and regulations for 2025.', time: '1 week ago', read: true },
  { id: 8, type: 'room', icon: '🎉', title: 'Room Assignment Confirmed', preview: 'Congratulations! Your room assignment to Room 204-B has been confirmed.', time: '2 weeks ago', read: true },
  { id: 9, type: 'payment', icon: '💳', title: 'February Rent Confirmed', preview: 'Your February 2025 rent payment of $450 has been received.', time: '3 weeks ago', read: true },
  { id: 10, type: 'general', icon: '🔔', title: 'Welcome to Hostel Guru', preview: 'Welcome to your new home! Your account has been set up successfully.', time: '2 months ago', read: true },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)
  const [filter, setFilter] = useState('All')

  const markAllRead = () => setNotifications(n => n.map(notif => ({ ...notif, read: true })))
  const markRead = (id) => setNotifications(n => n.map(notif => notif.id === id ? { ...notif, read: true } : notif))

  const unreadCount = notifications.filter(n => !n.read).length

  const filtered = notifications.filter(n => {
    if (filter === 'Unread') return !n.read
    if (filter === 'Read') return n.read
    return true
  })

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Notifications</h1>
          <p className="page-subtitle">{unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
        </div>
        {unreadCount > 0 && (
          <button className="btn btn-secondary" onClick={markAllRead}>
            ✓ Mark All as Read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', background: 'white', padding: '4px', borderRadius: '8px', width: 'fit-content', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
        {['All', 'Unread', 'Read'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '7px 18px',
              borderRadius: '6px',
              background: filter === f ? '#2563eb' : 'transparent',
              color: filter === f ? 'white' : '#6b7280',
              fontWeight: filter === f ? '600' : '400',
              fontSize: '13px',
              transition: 'all 0.15s',
            }}
          >
            {f} {f === 'Unread' && unreadCount > 0 && (
              <span style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '999px', padding: '1px 6px', fontSize: '11px', marginLeft: '4px' }}>
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.map(notif => (
          <div
            key={notif.id}
            onClick={() => markRead(notif.id)}
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
              borderLeft: notif.read ? '4px solid #e5e7eb' : '4px solid #2563eb',
              background: notif.read ? 'white' : '#f8faff',
              cursor: 'pointer',
              transition: 'box-shadow 0.15s',
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: notif.read ? '#f3f4f6' : '#dbeafe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              flexShrink: 0,
            }}>
              {notif.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <div style={{
                  fontWeight: notif.read ? '500' : '700',
                  color: '#1a2b4a',
                  fontSize: '14px',
                }}>
                  {notif.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span style={{ fontSize: '11px', color: '#9ca3af', whiteSpace: 'nowrap' }}>{notif.time}</span>
                  {!notif.read && (
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
                  )}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px', lineHeight: '1.4' }}>
                {notif.preview}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px', color: '#9ca3af' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔔</div>
          <div style={{ fontSize: '16px', fontWeight: '600' }}>No {filter.toLowerCase()} notifications</div>
        </div>
      )}
    </div>
  )
}

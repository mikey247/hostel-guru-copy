const STATUS_STYLES = {
  Active:     { background: '#16a34a', color: 'white' },
  Confirmed:  { background: '#16a34a', color: 'white' },
  Paid:       { background: '#16a34a', color: 'white' },
  Available:  { background: '#16a34a', color: 'white' },
  Resolved:   { background: '#16a34a', color: 'white' },
  Pending:    { background: '#ca8a04', color: 'white' },
  Reserved:   { background: '#ca8a04', color: 'white' },
  Overdue:    { background: '#dc2626', color: 'white' },
  Rejected:   { background: '#dc2626', color: 'white' },
  Cancelled:  { background: '#dc2626', color: 'white' },
  Occupied:   { background: '#dc2626', color: 'white' },
  Waitlisted: { background: '#2563eb', color: 'white' },
  Open:       { background: '#2563eb', color: 'white' },
  'In Progress': { background: '#7c3aed', color: 'white' },
}

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || { background: '#6b7280', color: 'white' }
  return (
    <span style={{
      ...style,
      padding: '3px 10px',
      borderRadius: '999px',
      fontSize: '11px',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      display: 'inline-block',
    }}>
      {status}
    </span>
  )
}

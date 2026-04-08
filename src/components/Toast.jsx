import { useEffect } from 'react'

const TYPE_STYLES = {
  success: { background: '#16a34a', icon: '✓' },
  error: { background: '#dc2626', icon: '✕' },
  info: { background: '#2563eb', icon: 'ℹ' },
}

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(onClose, 3500)
    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  const style = TYPE_STYLES[toast.type] || TYPE_STYLES.success

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      background: style.background,
      color: 'white',
      padding: '14px 20px',
      borderRadius: '10px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: 1000,
      maxWidth: '380px',
    }}>
      <span style={{ fontSize: '18px', lineHeight: 1 }}>{style.icon}</span>
      <span>{toast.message}</span>
      <button
        onClick={onClose}
        style={{ marginLeft: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '2px 8px', color: 'white', fontSize: '16px', lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  )
}

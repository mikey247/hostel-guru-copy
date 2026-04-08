import { useEffect } from 'react'

export default function Modal({ title, children, onClose, footer, maxWidth = '480px' }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 500,
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2b4a' }}>{title}</h3>
          <button
            onClick={onClose}
            style={{ background: 'none', fontSize: '22px', color: '#9ca3af', lineHeight: 1, padding: '0 4px' }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            flexShrink: 0,
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

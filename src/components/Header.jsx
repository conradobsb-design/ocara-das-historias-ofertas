import { useLocation, Link } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header style={{ backgroundColor: '#FBF8F1', borderBottom: '1px solid #F2E8D5' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        {!isHome && (
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#B8893E',
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: '500',
            flexShrink: 0,
          }}>
            ← Voltar
          </Link>
        )}
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '18px',
          fontWeight: '600',
          color: '#3E2C1C',
          letterSpacing: '0.01em',
        }}>
          O Cara das Histórias
        </span>
      </div>
    </header>
  )
}

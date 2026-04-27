export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F2E8D5',
      borderTop: '1px solid #e8dcc8',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', color: '#3E2C1C', marginBottom: '6px' }}>
          Conrado
        </p>
        <p style={{ fontSize: '14px', color: '#6B4A2B', marginBottom: '4px' }}>
          Parte do projeto O Cara das Histórias
        </p>
        <p style={{ fontSize: '13px', color: '#9a7a5a' }}>
          2026 · Página privada
        </p>
      </div>
    </footer>
  )
}

export default function AboutSection() {
  return (
    <section style={{ padding: '72px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '26px',
          fontWeight: '600',
          color: '#3E2C1C',
          marginBottom: '32px',
        }}>
          Quem entrega
        </h2>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{
            width: '100px',
            height: '100px',
            minWidth: '100px',
            backgroundColor: '#F2E8D5',
            borderRadius: '6px',
            border: '1px solid #e8dcc8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9a7a5a',
            fontSize: '13px',
            textAlign: 'center',
            lineHeight: '1.4',
          }}>
            foto<br/>aqui
          </div>

          <div style={{ flex: 1, minWidth: '240px' }}>
            <p style={{ fontSize: '16px', color: '#3E2C1C', lineHeight: '1.7' }}>
              Sou o Conrado. Tenho 41 anos, sou advogado e administrador, vivo em São Paulo desde 2022.
              Já abri, vendi e fechei empresas. Faço isso há menos tempo do que faço advocacia,
              mas faço com método: escopo fechado, prazo cumprido, entregas verificáveis.
              Não sou agência. Atendo até dois projetos como esse em paralelo, no máximo.
            </p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B4A2B', fontStyle: 'italic' }}>
              Companheiro de jornada honesto, não mentor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

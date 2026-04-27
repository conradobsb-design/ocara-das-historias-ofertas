import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const offers = [
  {
    path: '/presenca-profissional-30',
    label: 'Oferta 1',
    title: 'Presença Profissional 30',
    price: 'R$ 5.500',
    duration: '30 dias',
    tagline: 'Site, perfil e primeiro funil — escopo fechado, prazo cumprido.',
    cta: 'Agendar conversa de 30 min',
  },
  {
    path: '/lancamento-minimo',
    label: 'Oferta 2',
    title: 'Lançamento Mínimo de Conteúdo',
    price: 'R$ 12.000',
    duration: '45–60 dias',
    tagline: 'Oferta, página de vendas, VSL e acompanhamento durante a janela de vendas.',
    cta: 'Agendar conversa de 45 min',
  },
  {
    path: '/diagnostico',
    label: 'Oferta 3',
    title: 'Diagnóstico Estratégico Digital',
    price: 'R$ 2.500',
    duration: '90 dias de acompanhamento',
    tagline: 'Uma sessão, um relatório-mapa e três follow-ups para clareza sobre onde investir.',
    cta: 'Agendar conversa de 15 min',
  },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FBF8F1', minHeight: '100vh' }}>
      <Header />

      <section style={{ padding: '80px 24px 48px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            color: '#3E2C1C',
            marginBottom: '16px',
            lineHeight: '1.2',
          }}>
            Três formas de construirmos juntos
          </h1>
          <p style={{ fontSize: '17px', color: '#6B4A2B', lineHeight: '1.65', maxWidth: '520px' }}>
            Páginas privadas. Enviadas diretamente a quem pergunta "como funciona?".
            Não são marketing público.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {offers.map((o) => (
            <div key={o.path} style={{
              backgroundColor: '#FAF5EA',
              border: '1px solid #e8dcc8',
              borderRadius: '6px',
              padding: '32px',
              boxShadow: '0 2px 8px rgba(62, 44, 28, 0.06)',
            }}>
              <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B8893E', marginBottom: '8px' }}>
                {o.label} · {o.duration}
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(20px, 3vw, 26px)',
                fontWeight: '600',
                color: '#3E2C1C',
                marginBottom: '10px',
              }}>
                {o.title}
              </h2>
              <p style={{ fontSize: '15px', color: '#5a4030', lineHeight: '1.6', marginBottom: '20px' }}>
                {o.tagline}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#3E2C1C',
                }}>
                  {o.price}
                </span>
                <Link to={o.path} style={{
                  display: 'inline-block',
                  backgroundColor: '#B8893E',
                  color: '#FBF8F1',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(184, 137, 62, 0.2)',
                }}>
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

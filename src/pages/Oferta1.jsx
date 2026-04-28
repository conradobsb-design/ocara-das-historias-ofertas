import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'

const s = {
  page: { backgroundColor: '#FBF8F1', minHeight: '100vh' },
  container: { maxWidth: '720px', margin: '0 auto', padding: '0 24px' },
  section: { padding: '72px 24px' },
  sectionAreia: { padding: '72px 24px', backgroundColor: '#F2E8D5' },
  sectionAreiaClara: { padding: '72px 24px', backgroundColor: '#FAF5EA' },
  h1: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: '700',
    color: '#3E2C1C',
    lineHeight: '1.15',
    marginBottom: '20px',
  },
  h2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(22px, 3vw, 28px)',
    fontWeight: '600',
    color: '#3E2C1C',
    marginBottom: '28px',
  },
  h2Ocre: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(22px, 3vw, 28px)',
    fontWeight: '600',
    color: '#6B4A2B',
    marginBottom: '28px',
  },
  subtitle: { fontSize: '18px', color: '#6B4A2B', lineHeight: '1.65', marginBottom: '16px' },
  tag: {
    display: 'inline-block',
    fontSize: '13px',
    color: '#9a7a5a',
    border: '1px solid #c8a86e',
    borderRadius: '4px',
    padding: '4px 12px',
    marginBottom: '28px',
  },
  listItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    marginBottom: '14px',
    fontSize: '16px',
    color: '#3E2C1C',
    lineHeight: '1.6',
  },
  dot: { color: '#B8893E', fontWeight: '700', marginTop: '2px', flexShrink: 0 },
  weekCard: {
    backgroundColor: '#FBF8F1',
    border: '1px solid #e8dcc8',
    borderRadius: '6px',
    padding: '24px',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(62, 44, 28, 0.06)',
  },
  weekLabel: {
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#B8893E',
    marginBottom: '8px',
  },
  weekTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#3E2C1C',
    marginBottom: '8px',
  },
  weekDesc: { fontSize: '15px', color: '#5a4030', lineHeight: '1.6' },
  notIncludedItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '15px',
    color: '#5a4030',
    lineHeight: '1.6',
  },
  crossMark: { color: '#9a7a5a', flexShrink: 0, marginTop: '2px' },
  priceBlock: {
    backgroundColor: '#FAF5EA',
    border: '1px solid #e8dcc8',
    borderRadius: '6px',
    padding: '32px',
    boxShadow: '0 2px 8px rgba(62, 44, 28, 0.06)',
  },
  price: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: '700',
    color: '#3E2C1C',
    marginBottom: '12px',
  },
  priceDetail: { fontSize: '15px', color: '#6B4A2B', lineHeight: '1.7', marginBottom: '6px' },
  ctaBox: { textAlign: 'center', padding: '72px 24px' },
  ctaText: { fontSize: '17px', color: '#3E2C1C', lineHeight: '1.7', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' },
  ctaBtn: {
    display: 'inline-block',
    backgroundColor: '#B8893E',
    color: '#FBF8F1',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    padding: '16px 36px',
    borderRadius: '4px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 12px rgba(184, 137, 62, 0.25)',
    transition: 'opacity 0.15s',
  },
  ctaSub: { fontSize: '14px', color: '#9a7a5a', marginTop: '16px' },
  divider: { border: 'none', borderTop: '1px solid #e8dcc8', margin: '0' },
}

const weeks = [
  {
    label: 'Semana 1',
    title: 'Diagnóstico e identidade',
    desc: 'Conversa de 1h para entender o negócio. Definição da identidade visual mínima e da plataforma principal (Instagram ou LinkedIn — uma só).',
  },
  {
    label: 'Semana 2',
    title: 'Landing page no ar',
    desc: 'Landing page institucional publicada: mobile-first, WhatsApp integrado, formulário básico de contato.',
  },
  {
    label: 'Semana 3',
    title: 'Perfil e conteúdo',
    desc: 'Perfil profissional otimizado e 10 conteúdos de apresentação programados.',
  },
  {
    label: 'Semana 4',
    title: 'Funil e transferência',
    desc: '1 funil de captura ativo, sessão de transferência de 60 minutos e manual de manutenção em PDF.',
  },
]

export default function Oferta1() {
  return (
    <div style={s.page}>
      <Header />

      {/* Hero */}
      <section style={{ ...s.section, paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={s.container}>
          <span style={s.tag}>Para profissionais liberais e pequenos empreendedores entre 35 e 55 anos</span>
          <h1 style={s.h1}>Presença Profissional<br />em 30 dias</h1>
          <p style={s.subtitle}>
            Construo com você o site, o perfil e o primeiro funil que seu negócio merece ter —
            em um mês, com escopo fechado e prazo cumprido.
          </p>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Pra quem serve */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Pra quem serve</h2>
          {[
            'Profissional liberal ou pequeno empreendedor com negócio rodando offline há 2 anos ou mais.',
            'Reputação construída no boca a boca, mas presença digital amadora ou inexistente.',
            'Quem aceita executar com orientação, não quer fazer sozinho do zero.',
            'Quem busca infraestrutura, não promessa de viralizar.',
          ].map((item, i) => (
            <div key={i} style={s.listItem}>
              <span style={s.dot}>—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Pra quem NÃO serve */}
      <section style={s.sectionAreia}>
        <div style={s.container}>
          <h2 style={s.h2Ocre}>Pra quem não serve</h2>
          {[
            'Quem está começando do zero — ainda não tem negócio rodando.',
            'Quem espera viralizar ou vender muito ao final dos 30 dias.',
            'Quem quer criação de conteúdo recorrente após a entrega (não está incluso).',
          ].map((item, i) => (
            <div key={i} style={s.notIncludedItem}>
              <span style={s.crossMark}>✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* O que entrego */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>O que entrego em 30 dias</h2>
          {weeks.map((w, i) => (
            <div key={i} style={s.weekCard}>
              <div style={s.weekLabel}>{w.label}</div>
              <div style={s.weekTitle}>{w.title}</div>
              <div style={s.weekDesc}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* O que NÃO está incluso */}
      <section style={s.sectionAreiaClara}>
        <div style={s.container}>
          <h2 style={s.h2Ocre}>Pra ficar claro: o que não está incluso</h2>
          {[
            'Tráfego pago — você roda sozinho depois ou contrata à parte.',
            'Conteúdo recorrente além dos 10 iniciais.',
            'Edição profissional de vídeo (uso recursos básicos).',
            'Domínio próprio — a contratar separadamente (~R$ 50/ano).',
          ].map((item, i) => (
            <div key={i} style={s.notIncludedItem}>
              <span style={s.crossMark}>✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Investimento */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Investimento</h2>
          <div style={s.priceBlock}>
            <div style={s.price}>R$ 5.500</div>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#B8893E', marginBottom: '20px' }} />
            <p style={s.priceDetail}>50% na contratação, 50% na entrega</p>
            <p style={s.priceDetail}>Pagamento via PIX ou boleto</p>
            <p style={{ ...s.priceDetail, marginTop: '12px', fontSize: '14px', color: '#9a7a5a' }}>
              Cláusula de saída: 7 dias de aviso para qualquer parte
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Próximo passo */}
      <section style={s.ctaBox}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: '20px' }}>Próximo passo</h2>
          <p style={s.ctaText}>
            Se isso ressoou com você, o primeiro passo é uma conversa de 30 minutos
            pra eu entender seu negócio e a gente decidir juntos se faz sentido.
            Sem compromisso, sem pressão, sem oferta na hora.
          </p>
          <a
            href="https://calendar.app.google/a1UTkd3JXmSwwdSF9"
            style={s.ctaBtn}
            onMouseOver={e => e.target.style.opacity = '0.85'}
            onMouseOut={e => e.target.style.opacity = '1'}
          >
            Agendar conversa de 30 min
          </a>
          <p style={s.ctaSub}>Respondo em até 24 horas úteis.</p>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Sobre quem entrega */}
      <AboutSection />

      <Footer />
    </div>
  )
}

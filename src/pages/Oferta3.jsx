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
    fontSize: 'clamp(30px, 5vw, 50px)',
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
  deliverableCard: {
    backgroundColor: '#FBF8F1',
    border: '1px solid #e8dcc8',
    borderRadius: '6px',
    padding: '20px 24px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(62, 44, 28, 0.05)',
  },
  deliverableLabel: {
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#B8893E',
    marginBottom: '6px',
  },
  deliverableTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '17px',
    fontWeight: '600',
    color: '#3E2C1C',
    marginBottom: '6px',
  },
  deliverableDesc: { fontSize: '15px', color: '#5a4030', lineHeight: '1.6' },
  honestBox: {
    backgroundColor: '#F2E8D5',
    border: '1px solid #B8893E',
    borderRadius: '6px',
    padding: '32px',
  },
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
  capacityBox: {
    backgroundColor: '#FAF5EA',
    border: '1px solid #B8893E',
    borderRadius: '6px',
    padding: '28px 32px',
  },
  ctaBox: { textAlign: 'center', padding: '72px 24px' },
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
  },
  ctaSub: { fontSize: '14px', color: '#9a7a5a', marginTop: '16px' },
  divider: { border: 'none', borderTop: '1px solid #e8dcc8', margin: '0' },
}

const deliverables = [
  {
    label: 'Sessão de 2 a 3 horas',
    title: 'Conversa em profundidade',
    desc: 'Presencial em São Paulo ou via vídeo. Uma conversa sobre seu negócio, sua história e seus objetivos — sem roteiro engessado.',
  },
  {
    label: 'Relatório-mapa de 5 a 10 páginas',
    title: 'Diagnóstico escrito',
    desc: 'Diagnóstico, recomendações priorizadas, custos estimados, ordem de execução. Não é apresentação de slides — é documento de trabalho.',
  },
  {
    label: 'Três follow-ups de 30 minutos',
    title: 'Acompanhamento nos 90 dias',
    desc: 'Distribuídos ao longo dos 90 dias seguintes para ajustar o plano conforme você executa.',
  },
  {
    label: 'WhatsApp direto',
    title: 'Canal aberto por 90 dias',
    desc: 'Para dúvidas pontuais durante o período. Respondo quando posso — não é suporte 24h, mas é acesso real.',
  },
]

export default function Oferta3() {
  return (
    <div style={s.page}>
      <Header />

      {/* Hero */}
      <section style={{ ...s.section, paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={s.container}>
          <span style={s.tag}>Para quem está entre "quero entrar no digital" e "estou perdido no que escolher"</span>
          <h1 style={s.h1}>Clareza sobre seus próximos 90 dias no digital</h1>
          <p style={s.subtitle}>
            Uma sessão de 2 a 3 horas, um relatório-mapa, e três follow-ups ao longo dos 90 dias
            seguintes — para você decidir onde investir tempo e dinheiro com base no seu real ponto de partida.
          </p>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Quando ajuda */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Quando esse diagnóstico ajuda</h2>
          {[
            'Você está pensando em investir em site, Instagram, tráfego pago, agência, curso, mentoria — e não sabe por onde começar.',
            'Já contratou serviço digital antes e ficou com a sensação de "não sei se valeu".',
            'Quer parar de gastar energia em frentes que não combinam com seu estágio de negócio.',
            'Prefere clareza estratégica antes de execução tática.',
          ].map((item, i) => (
            <div key={i} style={s.listItem}>
              <span style={s.dot}>—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* O que entrego */}
      <section style={s.sectionAreia}>
        <div style={s.container}>
          <h2 style={s.h2}>O que entrego</h2>
          {deliverables.map((d, i) => (
            <div key={i} style={s.deliverableCard}>
              <div style={s.deliverableLabel}>{d.label}</div>
              <div style={s.deliverableTitle}>{d.title}</div>
              <div style={s.deliverableDesc}>{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* O que você leva */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>O que você leva no fim</h2>
          <p style={{ fontSize: '17px', color: '#3E2C1C', lineHeight: '1.75' }}>
            Um plano de 3 a 5 ações concretas para os próximos 90 dias, na ordem certa,
            com custos estimados e critério para revisar.
            Não é receita pronta — é mapa do seu terreno específico.
          </p>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Promessa honesta */}
      <section style={s.sectionAreiaClara}>
        <div style={s.container}>
          <div style={s.honestBox}>
            <h2 style={{ ...s.h2, marginBottom: '16px' }}>O que não prometo</h2>
            <p style={{ fontSize: '16px', color: '#3E2C1C', lineHeight: '1.75' }}>
              Não prometo que você vai vender mais. Não prometo que você vai viralizar.
              Não prometo que vou te entregar um plano que serve para qualquer um.
            </p>
            <p style={{ fontSize: '16px', color: '#3E2C1C', lineHeight: '1.75', marginTop: '16px' }}>
              Prometo te dar uma leitura honesta do seu momento, com base em quem você é e
              onde quer chegar — e te apontar o caminho mais provável de funcionar para você.
              Cabe a você executar.
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Investimento */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Investimento</h2>
          <div style={s.priceBlock}>
            <div style={s.price}>R$ 2.500</div>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#B8893E', marginBottom: '20px' }} />
            <p style={s.priceDetail}>Pagamento integral antes da sessão</p>
            <p style={s.priceDetail}>Inclui: sessão + relatório + 3 follow-ups + WhatsApp por 90 dias</p>
            <p style={{ ...s.priceDetail, marginTop: '12px', fontSize: '14px', color: '#9a7a5a' }}>
              Cancelamento com reembolso integral até 48h antes da sessão
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Limite por mês */}
      <section style={s.sectionAreiaClara}>
        <div style={s.container}>
          <div style={s.capacityBox}>
            <h2 style={{ ...s.h2, marginBottom: '16px' }}>Aceito até 3 diagnósticos por mês</h2>
            <p style={{ fontSize: '16px', color: '#3E2C1C', lineHeight: '1.7' }}>
              Para cada cliente receber atenção real durante os 90 dias, limito a 3 diagnósticos
              ativos simultaneamente. Se a agenda estiver fechada, te aviso quando abrir.
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Próximo passo */}
      <section style={s.ctaBox}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: '20px' }}>Próximo passo</h2>
          <p style={{ fontSize: '17px', color: '#3E2C1C', lineHeight: '1.7', marginBottom: '32px' }}>
            Antes da sessão paga, marco uma conversa rápida de 15 minutos para entender
            se faz sentido para ambos. Se sim, agendamos a sessão e você faz o pagamento.
            Se não, te aponto outro caminho.
          </p>
          <a
            href="mailto:conradobsb@gmail.com?subject=Agendamento%20-%20O%20Cara%20das%20Histórias"
            style={s.ctaBtn}
            onMouseOver={e => e.target.style.opacity = '0.85'}
            onMouseOut={e => e.target.style.opacity = '1'}
          >
            Agendar conversa de 15 min
          </a>
          <p style={s.ctaSub}>Respondo em até 24 horas úteis.</p>
        </div>
      </section>

      <hr style={s.divider} />

      <AboutSection />
      <Footer />
    </div>
  )
}

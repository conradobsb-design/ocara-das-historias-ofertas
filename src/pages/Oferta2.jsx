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
  deliverableCard: {
    backgroundColor: '#FBF8F1',
    border: '1px solid #e8dcc8',
    borderRadius: '6px',
    padding: '20px 24px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(62, 44, 28, 0.05)',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  deliverableNum: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '20px',
    fontWeight: '700',
    color: '#B8893E',
    flexShrink: 0,
    lineHeight: '1.3',
    minWidth: '24px',
  },
  deliverableTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '17px',
    fontWeight: '600',
    color: '#3E2C1C',
    marginBottom: '4px',
  },
  deliverableDesc: { fontSize: '15px', color: '#5a4030', lineHeight: '1.6' },
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
    marginBottom: '8px',
  },
  priceSub: {
    fontSize: '16px',
    color: '#6B4A2B',
    marginBottom: '16px',
    fontStyle: 'italic',
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
  { title: 'Estruturação da oferta', desc: 'Proposta, escopo, preço e garantias — tudo redigido com clareza antes de apresentar ao mercado.' },
  { title: 'Página de vendas direta', desc: 'Não uma landing genérica. Uma página construída em torno da sua oferta específica e do seu público.' },
  { title: 'VSL de 3 a 5 minutos', desc: 'Gravada com você — eu produzo, você aparece. Roteiro, edição básica e publicação inclusos.' },
  { title: 'Sequência de pré-lançamento', desc: '7 a 10 conteúdos de aquecimento (posts, stories, emails) programados antes da janela de vendas.' },
  { title: 'Acompanhamento durante a janela', desc: 'Estou presente nos 5 a 7 dias de vendas para ajustar comunicação em tempo real.' },
  { title: 'Análise pós-lançamento', desc: 'Relatório com o que funcionou, o que não funcionou e recomendações concretas para o próximo ciclo.' },
]

export default function Oferta2() {
  return (
    <div style={s.page}>
      <Header />

      {/* Hero */}
      <section style={{ ...s.section, paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={s.container}>
          <span style={s.tag}>Para quem já tem presença digital e quer testar a primeira venda online com método</span>
          <h1 style={s.h1}>Sua primeira venda online estruturada, em 45 a 60 dias</h1>
          <p style={s.subtitle}>
            Construo com você a oferta, a página de vendas, a VSL e a sequência de pré-lançamento —
            e acompanho a janela de vendas com você ao vivo.
          </p>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Quando faz sentido */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Quando faz sentido</h2>
          {[
            'Você já tem alguma presença digital, mesmo que pequena ou recém-construída.',
            'Tem ou está formando uma oferta clara que pode ser vendida online.',
            'Quer validar, com método, se há mercado real antes de investir mais.',
            'Topa aparecer em vídeo — a VSL é parte central da entrega.',
            'Aceita resultado pequeno e honesto na primeira tentativa, não explosão garantida.',
          ].map((item, i) => (
            <div key={i} style={s.listItem}>
              <span style={s.dot}>—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Quando NÃO faz sentido */}
      <section style={s.sectionAreia}>
        <div style={s.container}>
          <h2 style={s.h2Ocre}>Quando não faz sentido</h2>
          {[
            'Você ainda não tem oferta clara ou audiência mínima.',
            'Espera escala grande na primeira tentativa — lançamentos pequenos servem para aprender, não para explodir.',
            'Não topa aparecer em vídeo.',
            'Quer terceirizar 100% sem participar do processo.',
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
          <h2 style={s.h2}>O que entrego em 45 a 60 dias</h2>
          {deliverables.map((d, i) => (
            <div key={i} style={s.deliverableCard}>
              <span style={s.deliverableNum}>{i + 1}</span>
              <div>
                <div style={s.deliverableTitle}>{d.title}</div>
                <div style={s.deliverableDesc}>{d.desc}</div>
              </div>
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
            <div style={s.price}>R$ 12.000</div>
            <div style={{ ...s.priceSub }}>
              + 10% das vendas geradas no lançamento
              <span style={{ fontSize: '13px', color: '#9a7a5a', display: 'block', marginTop: '4px' }}>
                variável opcional, mas recomendado pelo alinhamento de incentivos
              </span>
            </div>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#B8893E', marginBottom: '20px' }} />
            <p style={s.priceDetail}>50% na contratação, 50% na entrega da página de vendas pronta</p>
            <p style={s.priceDetail}>Variável de 10% pago em até 30 dias após o fechamento da janela</p>
            <p style={{ ...s.priceDetail, marginTop: '12px', fontSize: '14px', color: '#9a7a5a' }}>
              Cláusula de saída: 7 dias de aviso para qualquer parte
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Limite de capacidade */}
      <section style={s.sectionAreiaClara}>
        <div style={s.container}>
          <div style={s.capacityBox}>
            <h2 style={{ ...s.h2, marginBottom: '16px' }}>
              Por que aceito apenas 1 cliente por vez nessa modalidade
            </h2>
            <p style={{ fontSize: '16px', color: '#3E2C1C', lineHeight: '1.7' }}>
              Lançamento exige presença minha durante a janela de vendas. Se eu estiver
              atendendo dois ao mesmo tempo, atendo nenhum direito. Por isso: máximo 1 ativo, sempre.
              Se a fila estiver cheia, entro em contato quando abrir vaga.
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* O que NÃO está incluso */}
      <section style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2Ocre}>Pra ficar claro: o que não está incluso</h2>
          {[
            'Tráfego pago — estratégia orgânica é o foco; pago é decisão sua à parte.',
            'Construção de audiência do zero — você precisa ter uma base mínima.',
            'Equipamento de gravação — uso o seu ou aluguel separado.',
            'Promessa de receita mínima — nenhum lançamento garante valor X.',
          ].map((item, i) => (
            <div key={i} style={s.notIncludedItem}>
              <span style={s.crossMark}>✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Próximo passo */}
      <section style={s.ctaBox}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: '20px' }}>Próximo passo</h2>
          <p style={{ fontSize: '17px', color: '#3E2C1C', lineHeight: '1.7', marginBottom: '32px' }}>
            Lançamento exige conversa antes. A primeira reunião é de 45 minutos
            para eu entender seu negócio, sua audiência atual e se faz sentido para
            ambos. Se sim, alinhamos cronograma. Se não, te aponto outro caminho.
          </p>
          <a
            href="https://agendamento.com/conrado"
            style={s.ctaBtn}
            onMouseOver={e => e.target.style.opacity = '0.85'}
            onMouseOut={e => e.target.style.opacity = '1'}
          >
            Agendar conversa de 45 min
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

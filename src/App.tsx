import './App.css'

const projects = [
  {
    title: '数字花园',
    description: '整理长期思考、阅读札记和正在生长的想法。',
    meta: 'Notes / Essays',
  },
  {
    title: '作品实验',
    description: '放置网页、工具、视觉和交互原型。',
    meta: 'Projects / Labs',
  },
  {
    title: '关于我',
    description: '一个安静但清晰的入口，让访客快速认识你。',
    meta: 'Profile / Contact',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="niansui.cc 首页">
          niansui.cc
        </a>
        <nav>
          <a href="#work">作品</a>
          <a href="#notes">笔记</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Personal site / Digital garden</p>
        <div className="hero-grid">
          <div>
            <h1>把想法、作品和日常观察，放在一个长期生长的地方。</h1>
            <p className="hero-copy">
              这里可以成为你的个人主页、作品索引、博客入口，或者一个更自由的数字花园。
            </p>
            <div className="hero-actions" aria-label="快速入口">
              <a className="primary-action" href="#work">
                查看结构
              </a>
              <a className="secondary-action" href="#contact">
                继续完善
              </a>
            </div>
          </div>
          <aside className="status-panel" aria-label="站点状态">
            <span>Current stack</span>
            <strong>Vite + React + TypeScript</strong>
            <p>轻量、快速、适合先把网站写起来，再逐步扩展内容和交互。</p>
          </aside>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Structure</p>
          <h2>先留出三个核心入口</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p>{project.meta}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="notes">
        <div>
          <p className="eyebrow">Next</p>
          <h2>后续可以按内容方向继续细化</h2>
        </div>
        <p>
          如果它是个人品牌站，我们强化首页表达和案例展示；如果它是博客，我们加 Markdown/MDX
          内容系统；如果它是产品或工具，我们把首屏直接改成可使用的交互体验。
        </p>
      </section>

      <footer className="site-footer" id="contact">
        <p>Ready for the next iteration.</p>
        <a href="mailto:hello@niansui.cc">hello@niansui.cc</a>
      </footer>
    </main>
  )
}

export default App

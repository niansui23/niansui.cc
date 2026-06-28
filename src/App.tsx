import heroImage from './assets/tibet-network-hero.png'
import locationMap from './assets/tibet-location-map.png'
import type { PointerEvent } from 'react'
import './App.css'

const navItems = [
  { label: '公司概况', href: '/about' },
  { label: '地理位置', href: '/location' },
  { label: '新闻动态', href: '/news' },
  { label: '联系我们', href: '/contact' },
]

const newsItems = [
  {
    date: '06.18',
    title: '持续推进重点区域 5G 网络质量提升',
    summary: '围绕城区、交通干线、景区等重点场景，优化高原通信体验。',
  },
  {
    date: '06.05',
    title: '云网融合服务本地政企数字化转型',
    summary: '面向政务、文旅、教育、医疗等行业提供稳定的云网能力。',
  },
  {
    date: '05.22',
    title: '开展高原场景应急通信保障演练',
    summary: '提升重大活动、突发天气和重点区域的快速响应能力。',
  },
]

const path = window.location.pathname
const heroPoster = '/tian-xiwei-bg.png'
const heroVideo = '/tian-xiwei-bg-video.mp4'

function updateMotion(event: PointerEvent<HTMLElement>) {
  const x = event.clientX / window.innerWidth - 0.5
  const y = event.clientY / window.innerHeight - 0.5

  document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
  document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
  document.documentElement.style.setProperty('--parallax-x', `${x * 36}px`)
  document.documentElement.style.setProperty('--parallax-y', `${y * 36}px`)
  document.documentElement.style.setProperty('--parallax-soft-x', `${x * -18}px`)
  document.documentElement.style.setProperty('--parallax-soft-y', `${y * -18}px`)
  document.documentElement.style.setProperty('--card-x', `${x * 8}px`)
  document.documentElement.style.setProperty('--card-y', `${y * 8}px`)
}

function resetMotion() {
  document.documentElement.style.setProperty('--cursor-x', '50vw')
  document.documentElement.style.setProperty('--cursor-y', '36vh')
  document.documentElement.style.setProperty('--parallax-x', '0px')
  document.documentElement.style.setProperty('--parallax-y', '0px')
  document.documentElement.style.setProperty('--parallax-soft-x', '0px')
  document.documentElement.style.setProperty('--parallax-soft-y', '0px')
  document.documentElement.style.setProperty('--card-x', '0px')
  document.documentElement.style.setProperty('--card-y', '0px')
}

function MotionBackground() {
  return (
    <div className="motion-background" aria-hidden="true">
      <div className="motion-grid" />
      <div className="motion-orb orb-red" />
      <div className="motion-orb orb-blue" />
      <div className="motion-orb orb-white" />
      <div className="motion-ribbon ribbon-one" />
      <div className="motion-ribbon ribbon-two" />
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="返回首页">
        <span>CU</span>
        <strong>中国联通西藏自治区分公司</strong>
      </a>
      <nav aria-label="主导航">
        {navItems.map((item) => (
          <a className={path === item.href ? 'active' : ''} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-video-layer" aria-hidden="true">
        <video autoPlay loop muted playsInline preload="auto" poster={heroPoster}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-vignette" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">China Unicom Tibet</p>
        <h1>
          雪域高原的
          <br />
          数字联接窗口
        </h1>
        <p>
          <span>清晰呈现公司、区域、新闻与联系。</span>
          <span>轻量克制，保留磨砂玻璃质感。</span>
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="/about">
            查看公司概况
          </a>
          <a className="secondary-action" href="/contact">
            联系我们
          </a>
        </div>
      </div>

      <figure className="hero-card" aria-label="西藏通信网络视觉">
        <img src={heroImage} alt="雪域高原与通信网络概念图" />
        <figcaption className="image-caption">
          <span>服务关键词</span>
          <strong>5G 网络建设 · 云网融合 · 应急通信保障</strong>
        </figcaption>
      </figure>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section two-column">
      <div>
        <p className="eyebrow">Company</p>
        <h2>公司概况</h2>
      </div>
      <div className="content-card glass-card">
        <p>
          中国联通西藏自治区分公司面向公众客户、家庭用户、政企客户和合作伙伴，提供移动通信、宽带接入、
          云网融合、行业应用和应急通信保障等服务。
        </p>
        <div className="stat-grid">
          <span>5G 网络建设</span>
          <span>千兆光网服务</span>
          <span>政企云网能力</span>
          <span>高原通信保障</span>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="section location-section">
      <div className="section-heading">
        <p className="eyebrow">Location</p>
        <h2>地理位置</h2>
        <p>以拉萨为服务枢纽，覆盖自治区重点城市、交通干线、景区、边境和乡村场景。</p>
      </div>
      <div className="map-panel glass-card">
        <div className="map-visual">
          <img src={locationMap} alt="西藏区域服务覆盖概念图" />
        </div>
        <aside>
          <span>Regional Hub</span>
          <strong>西藏自治区 · 拉萨</strong>
          <p>覆盖重点城市、交通干线、景区、边境与乡村场景，后续可接入真实网点和服务覆盖数据。</p>
        </aside>
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">News</p>
        <h2>新闻动态</h2>
      </div>
      <div className="news-list">
        {newsItems.map((item) => (
          <article className="news-item glass-card" key={item.title}>
            <time>{item.date}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section contact-section">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>联系我们</h2>
        <p>公众业务、宽带服务、故障申告可通过中国联通官方客服渠道办理。</p>
      </div>
      <div className="contact-card glass-card">
        <span>客户服务直达</span>
        <strong>10010</strong>
        <p>公众业务办理、宽带服务和故障申告，可通过中国联通官方渠道继续处理。</p>
        <a href="https://www.10010.com/" target="_blank" rel="noreferrer">
          访问网上营业厅
        </a>
      </div>
    </section>
  )
}

function RoutedPage() {
  if (path === '/about') return <AboutSection />
  if (path === '/location') return <LocationSection />
  if (path === '/news') return <NewsSection />
  if (path === '/contact') return <ContactSection />

  return (
    <>
      <Hero />
      <AboutSection />
      <LocationSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <main className="page-shell" onPointerLeave={resetMotion} onPointerMove={updateMotion}>
      <MotionBackground />
      <div className="ambient ambient-red" />
      <div className="ambient ambient-blue" />
      <Header />
      <RoutedPage />
      <footer className="site-footer">
        <p>中国联通西藏自治区分公司官网概念稿</p>
        <span>非官方发布页面，仅用于页面设计演示。</span>
      </footer>
    </main>
  )
}

export default App

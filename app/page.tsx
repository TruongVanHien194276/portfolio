const capabilities = [
  {
    number: "01",
    title: "Social content",
    copy: "Content ideation, trend research, platform adaptation and performance-minded storytelling.",
  },
  {
    number: "02",
    title: "Video production",
    copy: "Short-form editing, product explainers, subtitles, pacing and multi-format delivery.",
  },
  {
    number: "03",
    title: "Visual production",
    copy: "Social design, photography, color correction, photo editing and light retouching.",
  },
  {
    number: "04",
    title: "Creative technology",
    copy: "AI-assisted ideation, concept exploration, storyboard support and workflow optimization.",
  },
];

const experience = [
  {
    period: "12/2024 — Present",
    company: "Interdog Media",
    role: "Content Creator & Media Executive",
    description:
      "Producing short-form content, social visuals and creative concepts across fashion and technology projects.",
  },
  {
    period: "05/2025 — Present",
    company: "Cake Studio",
    role: "Freelance Media Collaborator",
    description:
      "Supporting client photography, image editing and social media visual production.",
  },
  {
    period: "01/2024 — 11/2024",
    company: "Monst Studio",
    role: "Media & Content Analyst",
    description:
      "Analyzing content performance and audience behavior to support data-informed video strategies.",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          Hien<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="/files/truong-van-hien-cv.pdf" download>
            Download CV <Arrow />
          </a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-nav-panel">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a href="/files/truong-van-hien-cv.pdf" download>Download CV</a>
          </div>
        </details>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Media Executive · Hanoi</p>
          <h1>I create social content people want to watch.</h1>
          <p className="hero-intro">
            I&apos;m Truong Van Hien, a Media Executive and Social Content Creator
            working across short-form video, visual design and photography.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View selected work <Arrow /></a>
            <a className="text-link" href="mailto:hientv194276@gmail.com">Let&apos;s work together <Arrow /></a>
          </div>
        </div>
        <div className="hero-media" aria-label="Selected Dunnio Tailor video preview">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/media/dunnio/tiktok-cover.jpg"
            preload="metadata"
          >
            <source src="/media/dunnio/tiktok-preview-480.m4v" type="video/mp4" />
          </video>
          <div className="hero-media-label">
            <span>Selected reel</span>
            <span>Fashion · Social · Photography</span>
          </div>
        </div>
        <div className="availability">
          <span>Available for Media Executive, Social Media & Content Creator opportunities.</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2024—2026</p>
          <h2>Four stories.<br />One creative practice.</h2>
          <p>A selection of social content, product communication and photography projects.</p>
        </div>

        <article className="project project-dunnio" id="dunnio">
          <div className="project-topline">
            <span>01</span>
            <span>Social media · Visual content · Short-form video</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">Dunnio Tailor</p>
              <h3>Making craftsmanship social.</h3>
            </div>
            <p className="project-summary">
              A social-first content system that turns tailoring knowledge, styling questions and product detail into useful visual stories.
            </p>
          </div>
          <div className="dunnio-grid media-grid">
            <img className="dunnio-main" src="/media/dunnio/craftsmanship.jpg" alt="Dunnio Tailor craftsmanship social visual" />
            <video className="dunnio-video" muted loop controls playsInline poster="/media/dunnio/white-tux-cover.jpg" preload="none">
              <source src="/media/dunnio/tiktok-preview-480.m4v" type="video/mp4" />
            </video>
            <img src="/media/dunnio/summer-suit.jpg" alt="Dunnio summer suit educational visual" />
          </div>

          <div className="case-grid">
            <div>
              <p className="case-label">The challenge</p>
              <p className="case-lead">
                Tailored menswear is detail-oriented. The challenge was to make technical product value easy to understand without losing a premium brand feeling.
              </p>
            </div>
            <div className="case-details">
              <div><span>Industry</span><strong>Fashion · Menswear</strong></div>
              <div><span>Platforms</span><strong>TikTok · Facebook</strong></div>
              <div><span>Focus</span><strong>Content · Video · Visuals</strong></div>
              <div><span>Tools</span><strong>CapCut · Photoshop · Canva</strong></div>
            </div>
          </div>

          <div className="content-pillars">
            <div><span>01</span><h4>Craftsmanship</h4><p>Tailoring process, fabric details and the precision behind each garment.</p></div>
            <div><span>02</span><h4>Style education</h4><p>Practical answers to common questions about suits, shoes and materials.</p></div>
            <div><span>03</span><h4>Product stories</h4><p>Detail-focused short-form content presenting fit, texture and occasion.</p></div>
            <div><span>04</span><h4>Brand experience</h4><p>In-store fitting and service moments that make custom tailoring personal.</p></div>
          </div>

          <div className="editorial-gallery">
            <img src="/media/dunnio/shoe-guide.jpg" alt="Dunnio guide to pairing shoes with suits" />
            <div>
              <img src="/media/dunnio/trouser-story.jpg" alt="Dunnio trouser fit social visual" />
              <p className="gallery-note">Educational content becomes more useful when it begins with a real customer question.</p>
            </div>
          </div>

          <div className="process-block">
            <p className="case-label">Content workflow</p>
            <div className="process-steps">
              <span>Topic research</span><b>→</b><span>Audience question</span><b>→</b><span>Creative angle</span><b>→</b><span>Production</span><b>→</b><span>Platform adaptation</span>
            </div>
            <p className="reflection">This project strengthened my ability to turn product knowledge into a repeatable social content system — balancing usefulness, visual consistency and brand value.</p>
          </div>
        </article>

        <article className="project project-pubpower" id="pubpower">
          <div className="project-topline light">
            <span>02</span>
            <span>Explainer video · Product communication</span>
          </div>
          <div className="project-title-row light">
            <div>
              <p className="project-client">PubPower</p>
              <h3>Clarity for complex products.</h3>
            </div>
            <p className="project-summary">
              Translating ad-tech terminology and multi-step workflows into structured visual explanations for new users.
            </p>
          </div>
          <div className="browser-stage">
            <div className="browser-bar"><i /><i /><i /><span>Product explainer series</span></div>
            <video controls playsInline poster="/media/pubpower/reward-ads.jpg" preload="metadata">
              <source src="/media/pubpower/reward-ads.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="pubpower-bottom">
            <div className="case-details light-details">
              <div><span>Industry</span><strong>Ad-tech · SaaS</strong></div>
              <div><span>Language</span><strong>English</strong></div>
              <div><span>Scope</span><strong>Explainer video</strong></div>
              <div><span>Format</span><strong>Product education</strong></div>
            </div>
            <div className="pubpower-copy">
              <p className="case-label">The approach</p>
              <p className="case-lead">Break the product into essential steps, guide attention with titles and callouts, then demonstrate the real interface in context.</p>
              <div className="video-list">
                <span>Reward Ads</span><span>PubPower MCM</span><span>Affiliate Program</span><span>Ad Formats</span>
              </div>
            </div>
          </div>
          <blockquote>
            “My technical background helps me identify the essential steps in a complex workflow and translate them into a clearer visual sequence.”
          </blockquote>
        </article>

        <article className="project project-interdog" id="interdog">
          <div className="project-topline">
            <span>03</span>
            <span>Media production · Social content operations</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">Interdog Media</p>
              <h3>From brief to publish.</h3>
            </div>
            <p className="project-summary">
              A role-focused case study about research, creative collaboration and an AI-assisted production workflow.
            </p>
          </div>
          <div className="workflow-board">
            <div className="workflow-title"><span>Content system</span><span>12/2024 — Present</span></div>
            <div className="workflow-grid">
              <div><span>01</span><h4>Research</h4><p>Audience behavior, platform trends and brand context.</p></div>
              <div><span>02</span><h4>Ideate</h4><p>Content angles, scripts, references and format selection.</p></div>
              <div><span>03</span><h4>Produce</h4><p>Video editing, visual assets and iterative feedback.</p></div>
              <div><span>04</span><h4>Adapt</h4><p>Platform ratios, publishing needs and performance review.</p></div>
            </div>
          </div>
          <div className="interdog-info">
            <div>
              <p className="case-label">My role</p>
              <p className="case-lead">I work across content ideation, visual production and social execution — turning audience trends and brand requirements into publishable content.</p>
            </div>
            <ul>
              <li>Trend and content research</li>
              <li>Creative concepts and visual references</li>
              <li>Short-form video and social design</li>
              <li>Feedback, revisions and platform adaptation</li>
              <li>AI-assisted concept exploration</li>
            </ul>
          </div>
          <div className="award-card">
            <span className="award-year">2025</span>
            <div><p>Recognition</p><h4>Employee of the Year</h4><span>Interdog Media · Performance, contribution and collaboration</span></div>
            <span className="award-mark">★</span>
          </div>
          <div className="linked-cases">
            <a href="#dunnio"><span>Related project</span><strong>Dunnio Tailor</strong><Arrow /></a>
            <a href="#pubpower"><span>Related project</span><strong>PubPower</strong><Arrow /></a>
          </div>
        </article>

        <article className="project project-photo" id="photography">
          <div className="project-topline">
            <span>04</span>
            <span>Personal photography projects</span>
          </div>
          <div className="project-title-row">
            <div>
              <p className="project-client">People & Moments</p>
              <h3>Portraits with a sense of place.</h3>
            </div>
            <p className="project-summary">
              A curated collection of portraits, graduation stories and event moments focused on people, milestones and shared experiences.
            </p>
          </div>
          <div className="photo-collage">
            <img className="photo-a" src="/media/photography/lam-son-event-01.jpg" alt="Lam Son student talent event performance" />
            <img className="photo-b" src="/media/photography/graduation-01.jpg" alt="Graduation portrait with a friend" />
            <img className="photo-c" src="/media/photography/graduation-02.jpg" alt="Graduation portrait with family" />
            <img className="photo-d" src="/media/photography/lam-son-event-02.jpg" alt="Students performing at Lam Son talent event" />
          </div>
          <div className="photo-principles">
            <div><span>01</span><h4>Natural connection</h4><p>Helping subjects feel comfortable so expressions and interactions remain personal.</p></div>
            <div><span>02</span><h4>Visual composition</h4><p>Using architecture, light and color to create a clear frame around each subject.</p></div>
            <div><span>03</span><h4>Consistent color</h4><p>Maintaining natural skin tones while preserving the atmosphere of each location.</p></div>
          </div>
          <div className="photo-story">
            <img src="/media/photography/portrait-01.jpg" alt="Personal graduation portrait at Hanoi University of Science and Technology" />
            <div>
              <p className="case-label">The practice</p>
              <p className="case-lead">Photography depends as much on communication as technical execution. Clear direction, patience and attention to small interactions often decide whether an image feels natural.</p>
              <div className="mini-meta"><span>Focus</span><strong>Portraits · Graduation · Events</strong><span>Post-production</span><strong>Lightroom · Photoshop</strong></div>
            </div>
          </div>
        </article>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-photo-wrap">
          <img src="/media/about/truong-van-hien.jpg" alt="Portrait of Truong Van Hien" />
          <span>Based in Hanoi, Vietnam</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About me</p>
          <h2>Creative thinking, structured execution.</h2>
          <p className="about-lead">
            I&apos;m a Hanoi-based Media Executive and Social Content Creator with experience across fashion, technology and photography.
          </p>
          <p>
            My background in Computer Engineering gives me a structured and analytical approach to creative work. I enjoy combining audience insight, visual storytelling and AI-assisted tools to develop content that is both relevant and effective.
          </p>
          <a className="text-link" href="mailto:hientv194276@gmail.com">Start a conversation <Arrow /></a>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-heading compact">
          <p className="eyebrow">Capabilities</p>
          <h2>What I bring to the work.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <div key={item.number} className="capability-card">
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </div>
          ))}
        </div>
        <p className="tools-line">CapCut · Photoshop · Lightroom · Canva · Midjourney · Leonardo AI · Lovart</p>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>Built through practice.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.company}>
              <span className="experience-period">{item.period}</span>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="education-row">
          <span>Education</span>
          <div><strong>Hanoi University of Science and Technology</strong><p>Bachelor in Computer Engineering · 2019—2024</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner section-shell">
          <p className="eyebrow">Have a project or opportunity in mind?</p>
          <h2>Let&apos;s create something worth watching.</h2>
          <a className="contact-email" href="mailto:hientv194276@gmail.com">hientv194276@gmail.com <Arrow /></a>
          <div className="contact-footer">
            <div><span>Truong Van Hien</span><span>Media Executive & Social Content Creator</span></div>
            <div><a href="/files/truong-van-hien-cv.pdf" download>Download CV</a><a href="#top">Back to top ↑</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}

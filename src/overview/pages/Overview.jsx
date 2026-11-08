import { BookOpen, Code2, Users, Lightbulb } from 'lucide-react'
import Eyebrow from '../../landing/components/Eyebrow'
import Button, { TextLink } from '../../landing/components/Button'
import trackResearch from '../../assets/Glass track artwork.png'
import trackDesign from '../../assets/Glass track artwork 2.png'
import trackDev from '../../assets/Glass track artwork 3.png'

/* ── data ──────────────────────────────────────────────── */
const tabs = [
  { id: 'all', label: 'All tracks' },
  { id: 'research', label: 'Research & discovery' },
  { id: 'design', label: 'Design & creativity' },
  { id: 'development', label: 'Development' },
]

const tracks = [
  {
    id: 'research',
    kicker: 'Explore',
    title: 'Research & discovery',
    desc: 'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
    tags: 'Problem framing · User research · Product thinking',
    image: trackResearch,
    gradientFrom: '#bfdbfe',
    gradientTo: '#eff6ff',
    explore: 'Learn to frame problems, conduct user interviews, and translate findings into actionable insights.',
    outcome: 'You can present your findings, propose a solution, and explain your process.',
  },
  {
    id: 'design',
    kicker: 'Make it meaningful',
    title: 'Design & creativity',
    desc: 'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
    tags: 'UI/UX · Visual storytelling · Prototyping',
    image: trackDesign,
    gradientFrom: '#fde68a',
    gradientTo: '#fefce8',
    explore: 'Master the basics of UI/UX, build visual systems, and design interactive prototypes.',
    outcome: 'You can present a prototype, explain your design decisions, and iterate on feedback.',
  },
  {
    id: 'development',
    kicker: 'Bring ideas to life',
    title: 'Development',
    desc: 'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
    tags: 'Web & mobile · Cloud · AI foundations',
    image: trackDev,
    gradientFrom: '#bbf7d0',
    gradientTo: '#f0fdf4',
    explore: 'Get hands-on with web development, cloud tools, and the building blocks of AI.',
    outcome: 'You can build and deploy a working project, and explain the choices behind it.',
  },
]

const formats = [
  {
    icon: <BookOpen size={18} />,
    title: 'Study groups',
    desc: 'Learn through conversation. Work through topics together, ask questions, and build understanding side by side.',
    link: 'Join a study group',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Hands-on workshops',
    desc: 'Get direct exposure to tools and techniques in focused, practical sessions led by community members.',
    link: 'Find a workshop',
  },
  {
    icon: <Users size={18} />,
    title: 'Project circles',
    desc: 'Connect research, design, and development by working on shared projects alongside others from different tracks.',
    link: 'Explore project-based learning',
  },
  {
    icon: <Lightbulb size={18} />,
    title: 'Knowledge sharing',
    desc: "Present what you've learned, explain what clicked, or share a resource that helped you move forward.",
    link: 'Share something you know',
  },
]

const steps = [
  { no: '01', title: 'Discover', desc: 'Explore the tracks. Find a topic that sparks your interest and gives you something to pursue.' },
  { no: '02', title: 'Practice', desc: 'Join a learning format. Try something, ask a question, and build on what you hear from others.' },
  { no: '03', title: 'Build', desc: "Apply what you've learned to a project. It doesn't have to be perfect — it has to be real." },
  { no: '04', title: 'Share', desc: 'Pass something on. Teach, explain, or contribute to what someone else is working on.' },
]

/* ── component ──────────────────────────────────────────── */
export default function Overview() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="mx-auto max-w-screen-xl items-center gap-6 px-6 py-14 lg:py-16"
        style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', alignItems: 'center', gap: '24px' }}
      >
        <div>
          <Eyebrow>Overview • Programs &amp; learning tracks</Eyebrow>
          <h1 className="font-bold leading-[1.1] tracking-tight" style={{ fontSize: '4.5rem' }}>
            Find your spark.
            <span className="block text-brand">Build your own path.</span>
          </h1>
          <p className="mt-6 text-lg text-muted">
            Explore how research, creativity, and development connect. Start with one interest. Grow through
            practice and the people around you.
          </p>
        </div>

        {/* Hero image — floating */}
        <div className="flex items-center justify-end overflow-visible">
          <img
            src={trackResearch}
            alt=""
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* ── Anchor nav bar ── */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-6xl overflow-x-auto px-6">
          <ul className="flex gap-6 py-3">
            {[
              { label: 'Learning tracks', href: '#tracks' },
              { label: 'Learning formats', href: '#formats' },
              { label: 'Your learning journey', href: '#journey' },
              { label: 'Find a starting point', href: '#start' },
            ].map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors ${i === 0 ? 'text-brand' : 'text-muted hover:text-ink'
                    }`}
                >
                  {item.label}
                  <span className="text-xs">↓</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Tracks section ── */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Eyebrow>Three tracks available</Eyebrow>
        <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Each track gives you a different lens on the same goal: understanding how to build things that
          matter, and finding people who want to do it with you.
        </p>

        {/* Track cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tracks.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-line bg-white"
              style={{ overflow: 'visible', position: 'relative' }}
            >
              <div
                style={{
                  background: `linear-gradient(to bottom, ${t.gradientFrom}, ${t.gradientTo})`,
                  borderRadius: '16px 16px 0 0',
                  height: '220px',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                <img
                  src={t.image}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: '-28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '110%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-medium uppercase tracking-wider text-brand">{t.kicker}</p>
                <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.desc}</p>
                <p className="mt-4 border-t border-line pt-3 text-[11px] text-muted">{t.tags}</p>
                <TextLink className="mt-3">Explore this track</TextLink>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold tracking-tight">
            From an interest to something you can show.
          </h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-surface text-left text-xs font-medium uppercase tracking-wider text-muted">
                  <th className="px-5 py-3 w-1/4">Track</th>
                  <th className="px-5 py-3 w-2/5">What you explore</th>
                  <th className="px-5 py-3">What you can show</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {tracks.map((t) => (
                  <tr key={t.id}>
                    <td className="px-5 py-4 font-medium">{t.title}</td>
                    <td className="px-5 py-4 text-muted">{t.explore}</td>
                    <td className="px-5 py-4 text-muted">{t.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            Tracks overlap by design. Research informs design. Design guides development. Development opens new questions.
          </p>
        </div>
      </section>

      {/* ── Format section ── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Learn your way</Eyebrow>
          <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight">
            The format changes. The curiosity stays.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            There's no single way to learn here. Find the format that fits where you are and what you're trying to figure out.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {formats.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="text-brand">{f.icon}</span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.desc}</p>
                <TextLink className="mt-4">{f.link}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey steps ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          A journey you can keep building on.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.no}>
              <p className="text-4xl font-semibold text-brand">{s.no}</p>
              <div className="mt-3 border-t border-line pt-3">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── New to tech banner ── */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid overflow-hidden rounded-3xl bg-yellow-50 md:grid-cols-2">
          <div className="border-r border-yellow-100 p-8 md:p-10">
            <p className="text-2xl font-bold leading-snug md:text-3xl">
              New to tech?
              <br />
              That's a starting point, too.
            </p>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-sm text-muted">
              You don't need to know anything in particular to get started. Each track can begin with
              curiosity. We'll help you find what makes sense for where you are right now.
            </p>
            <TextLink className="mt-4">Available and started</TextLink>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-soft p-8 md:flex-row md:items-center md:p-10">
          <div>
            <Eyebrow>Your next chapter</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Bring your curiosity.
              <br />
              We'll build from there.
            </h2>
            <p className="mt-3 text-sm text-muted">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Button>Find the overview</Button>
            <TextLink>Talk to the community</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}


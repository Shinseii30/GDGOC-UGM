import { BookOpen, Code2, Users, Lightbulb } from 'lucide-react'
import Eyebrow from '../../landing/components/Eyebrow'
import Button, { TextLink } from '../../landing/components/Button'
import TrackCard from '../../landing/components/TrackCard'
import Loadable, { Skeleton } from '../../landing/components/Loadable'
import { useApi } from '../../lib/useApi'
import trackResearch from '../../assets/Glass track artwork.png'

/* ── data ──────────────────────────────────────────────── */
// Ikon lucide dipetakan dari id format (API hanya mengirim emoji).
const formatIcons = {
  'study-groups': BookOpen,
  'hands-on-workshops': Code2,
  'project-circles': Users,
  'knowledge-sharing': Lightbulb,
}

// Tombol tiap format membuka form Contact dengan kategori yang paling relevan terpilih.
const formatTopics = {
  'study-groups': 'joining-learning',
  'hands-on-workshops': 'joining-learning',
  'project-circles': 'collaboration',
  'knowledge-sharing': 'speaking-sharing',
}

/* ── component ──────────────────────────────────────────── */
export default function Overview() {
  const tracksApi = useApi('/tracks')
  const formatsApi = useApi('/formats')
  const journeyApi = useApi('/journey')

  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-screen-xl items-center gap-6 px-6 py-14 lg:grid-cols-[3fr_2fr] lg:py-16">
        <div>
          <Eyebrow>Overview • Programs &amp; learning tracks</Eyebrow>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Find your spark.
            <span className="block text-brand">Build your own path.</span>
          </h1>
          <p className="mt-6 text-lg text-muted">
            Explore how research, creativity, and development connect. Start with one interest. Grow through
            practice and the people around you.
          </p>
        </div>

        {/* Hero image — floating */}
        <div className="mx-auto flex w-full max-w-md items-center justify-center overflow-visible lg:max-w-none lg:justify-end">
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
      <section id="tracks" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14">
        <Eyebrow>{tracksApi.data?.length ? `${tracksApi.data.length} tracks available` : 'Tracks available'}</Eyebrow>
        <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Each track gives you a different lens on the same goal: understanding how to build things that
          matter, and finding people who want to do it with you.
        </p>

        {/* Track cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Loadable
            state={tracksApi}
            skeleton={<Skeleton count={3} className="h-96 rounded-2xl" />}
            emptyMessage="No tracks are open right now. Check back soon."
          >
            {(tracks) => tracks.map((t) => <TrackCard key={t.id} track={t} />)}
          </Loadable>
        </div>

        {/* Comparison table */}
        {tracksApi.data?.length > 0 && (
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
                    <th className="px-5 py-3">What you do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-white">
                  {tracksApi.data.map((t) => (
                    <tr key={t.id}>
                      <td className="px-5 py-4 font-medium">{t.name}</td>
                      <td className="px-5 py-4 text-muted">{t.skills.join(', ')}</td>
                      <td className="px-5 py-4 text-muted">{t.what_you_do}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Tracks overlap by design. Research informs design. Design guides development. Development opens new questions.
            </p>
          </div>
        )}
      </section>

      {/* ── Format section ── */}
      <section id="formats" className="scroll-mt-20 bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Learn your way</Eyebrow>
          <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight">
            The format changes. The curiosity stays.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            There's no single way to learn here. Find the format that fits where you are and what you're trying to figure out.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Loadable
              state={formatsApi}
              skeleton={<Skeleton count={4} className="h-44 rounded-2xl" />}
              emptyMessage="Learning formats will be announced soon."
            >
              {(formats) =>
                formats.map((f) => {
                  const Icon = formatIcons[f.id] ?? BookOpen
                  return (
                    <div key={f.id} className="rounded-2xl border border-line bg-white p-6">
                      <span className="text-brand">
                        <Icon size={18} />
                      </span>
                      <h3 className="mt-4 font-semibold">{f.name}</h3>
                      <p className="mt-2 text-sm text-muted">{f.description}</p>
                      <TextLink href={`/contact?topic=${formatTopics[f.id] ?? 'general-inquiry'}`} className="mt-4">
                        {f.cta}
                      </TextLink>
                    </div>
                  )
                })
              }
            </Loadable>
          </div>
        </div>
      </section>

      {/* ── Journey steps ── */}
      <section id="journey" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          A journey you can keep building on.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Loadable
            state={journeyApi}
            skeleton={<Skeleton count={4} className="h-28 rounded-xl" />}
            emptyMessage="The learning journey will be shared soon."
          >
            {(steps) =>
              steps.map((s) => (
                <div key={s.id}>
                  <p className="text-4xl font-semibold text-brand">{String(s.step).padStart(2, '0')}</p>
                  <div className="mt-3 border-t border-line pt-3">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.description}</p>
                  </div>
                </div>
              ))
            }
          </Loadable>
        </div>
      </section>

      {/* ── New to tech banner ── */}
      <section id="start" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-6">
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
            <TextLink href="/contact?topic=joining-learning" className="mt-4">
              Available and started
            </TextLink>
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
            <Button href="/overview#tracks">Find the overview</Button>
            <TextLink href="/contact">Talk to the community</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}

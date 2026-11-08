import { BookOpen, Users, Code2, Heart } from 'lucide-react'
import Eyebrow from '../../landing/components/Eyebrow'
import Button, { TextLink } from '../../landing/components/Button'
import communityImg from '../../assets/Community mark artwork.png'

const values = [
  {
    icon: <BookOpen size={18} />,
    color: 'bg-brand',
    title: 'Stay curious',
    desc: 'Ask the extra question. Be willing to learn something outside your comfort zone.',
  },
  {
    icon: <Users size={18} />,
    color: 'bg-[#ea4335]',
    title: 'Make room',
    desc: 'Welcome different perspectives, respect each other, and help people find their voice.',
  },
  {
    icon: <Code2 size={18} />,
    color: 'bg-[#fbbc04]',
    title: 'Learn by building',
    desc: 'Try a small experiment. Share the rough version. Let feedback guide what comes next.',
  },
  {
    icon: <Heart size={18} />,
    color: 'bg-[#34a853]',
    title: 'Give something back',
    desc: 'Share a resource, explain what clicked, or help someone take their next step.',
  },
]

const ways = [
  {
    title: 'Come as a learner',
    desc: "Explore a topic, join a discussion, and ask the question that's been on your mind.",
  },
  {
    title: 'Grow as a collaborator',
    desc: "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: 'Give back as a contributor',
    desc: 'Share knowledge, support a learning session, or bring an idea for the community.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <Eyebrow>About GDGoC UGM</Eyebrow>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Built by students.
            <span className="block text-brand">For what's next.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            We're a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-wider text-muted">
            Universitas Gadjah Mada • 2026/2027
          </p>
        </div>

        {/* Hero image card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-200 via-orange-100 to-blue-100" style={{ aspectRatio: '4/3' }}>
          <img
            src={communityImg}
            alt="Community"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 25%' }}
          />
        </div>
      </section>

      {/* ── Bridge section ── */}
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <Eyebrow>Why we come together</Eyebrow>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              A bridge from
              <span className="block"><span className="text-brand">"I wonder"</span> to</span>
              <span className="block text-brand">"I made this."</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted">
            <p className="text-lg font-medium text-ink">
              Learning feels different when there's someone to exchange ideas
              with, a problem you care about, and the space to give it a try.
            </p>
            <p className="text-sm">
              That's the spirit of Google Developer Groups on Campus at UGM. We
              create room for students to explore technology, develop practical
              skills, and learn from one another.
            </p>
            <p className="text-sm">
              Our campus is the starting point. The questions we ask and the
              things we build can reach beyond it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values section ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>What guides us</Eyebrow>
        <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight">
          Good technology starts with good company.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-white p-5">
              <div className={`mb-3 h-0.5 w-8 rounded-full ${v.color}`} />
              <span className="text-muted">{v.icon}</span>
              <h3 className="mt-3 font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contribute section ── */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          {/* Left */}
          <div>
            <Eyebrow>People, not labels</Eyebrow>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              There's more than one way to contribute.
            </h2>
            <p className="mt-5 text-sm text-muted">
              You can be learning one day and helping someone else the next. A
              community grows through both.
            </p>
            <TextLink className="mt-6">Let's talk about getting involved</TextLink>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {ways.map((w) => (
              <div key={w.title} className="border-b border-line pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Responsibility banner ── */}
      <section className="bg-yellow-50 py-12">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6">
          <svg viewBox="0 0 24 24" className="h-14 w-14 shrink-0 text-yellow-400" fill="currentColor" aria-hidden="true">
            <path d="M12 0c.6 6.6 4.8 11.4 12 12-7.2.6-11.4 5.4-12 12-.6-6.6-4.8-11.4-12-12C7.2 11.4 11.4 6.6 12 0z" />
          </svg>
          <div>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl">
              A space to learn. A responsibility to care.
            </h2>
            <p className="mt-2 text-sm text-muted">
              We want every conversation and learning experience to be respectful,
              inclusive, and constructive. Be kind, give credit, and make room for
              people who are just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
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
            <Button>Explore the overview</Button>
            <TextLink>Talk to the community</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}


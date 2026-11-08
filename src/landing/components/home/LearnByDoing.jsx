import { BookOpen, Code2, Users } from 'lucide-react'
import Eyebrow from '../Eyebrow'

const items = [
  {
    icon: BookOpen,
    title: 'Study together',
    desc: 'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.',
    tag: 'Study groups & guided practice',
  },
  {
    icon: Code2,
    title: 'Try it hands-on',
    desc: 'Explore a tool or technique in a workshop, then put it to work in a small experiment.',
    tag: 'Workshops & technical sessions',
  },
  {
    icon: Users,
    title: 'Share the process',
    desc: 'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
    tag: 'Project circles & sharing sessions',
  },
]

export default function LearnByDoing() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow>More than a classroom</Eyebrow>
        <h2 className="text-4xl font-bold tracking-tight">Less watching. More making.</h2>
        <p className="mt-3 text-sm text-muted">
          Learn in a way that turns a new concept into something you can actually use.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, tag }) => (
            <article key={title} className="rounded-2xl border border-line bg-white p-6">
              <Icon size={18} className="text-brand" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
              <p className="mt-5 border-t border-line pt-3 text-[11px] font-medium text-brand">{tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

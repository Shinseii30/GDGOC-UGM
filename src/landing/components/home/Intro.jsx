import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'

const tags = ['Student-led', 'Peer-powered', 'Curiosity-first']

export default function Intro() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <Eyebrow>A campus. A community.</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          Not just learning tech.
          <br />
          Finding your people.
        </h2>
        <TextLink href="/about" className="mt-6">
          More about GDGoC UGM
        </TextLink>
      </div>

      <div className="space-y-5 text-muted">
        <p className="text-lg">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings students together
          around one simple idea: we can go <strong className="text-ink">further</strong> when we{' '}
          <strong className="text-ink">learn</strong> with each other.
        </p>
        <p className="text-sm">
          From your first line of code to your next product idea, there's room to ask questions,
          share what you know, and try something new.
        </p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


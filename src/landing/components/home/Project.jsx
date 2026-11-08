import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'

const chips = [
  { label: 'Discover', style: 'bg-blue-100 text-blue-900' },
  { label: 'Connect', style: 'bg-green-100 text-green-900' },
  { label: 'Share', style: 'bg-red-100 text-red-900' },
]

export default function Project() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div className="rounded-3xl bg-yellow-50 p-6">
        <div className="mb-3 flex justify-between text-[10px] text-muted">
          <span>IDEA → PROTOTYPE</span>
          <span className="text-brand">&lt;/&gt;</span>
        </div>
        <div className="rounded-xl border border-line bg-white p-5 shadow-sm">
          <div className="mb-3 flex gap-1.5">
            <i className="h-2 w-2 rounded-full bg-[#ea4335]" />
            <i className="h-2 w-2 rounded-full bg-[#fbbc04]" />
            <i className="h-2 w-2 rounded-full bg-[#34a853]" />
          </div>
          <p className="text-xl font-semibold leading-snug">
            A little less friction.
            <br />A better campus day.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {chips.map((c) => (
              <span key={c.label} className={`rounded-md px-3 py-2.5 text-center text-[11px] font-medium ${c.style}`}>
                {c.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-muted">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>
        <p className="mt-3 text-[9px] uppercase tracking-wider text-muted">
          Example project brief · not a launched product
        </p>
      </div>

      <div>
        <Eyebrow>Build something that matters</Eyebrow>
        <h2 className="text-4xl font-bold leading-tight tracking-tight">
          Your next project could start on campus.
        </h2>
        <p className="mt-5 text-sm text-muted">
          What if finding a study partner, sharing resources, or navigating campus felt easier?
          Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="mt-4 text-sm text-muted">
          Bring research, design, and development together. Try an idea, get feedback, and make the
          next version better.
        </p>
        <TextLink href="/overview#formats" className="mt-5">
          Explore project-based learning
        </TextLink>
      </div>
    </section>
  )
}

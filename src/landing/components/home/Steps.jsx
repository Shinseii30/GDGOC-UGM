import Eyebrow from '../Eyebrow'

const steps = [
  { no: '01', title: 'Follow your curiosity', desc: 'Explore the tracks and find a topic you want to understand better.' },
  { no: '02', title: 'Learn alongside others', desc: 'Join a learning opportunity, ask a question, and share your perspective.' },
  { no: '03', title: 'Turn learning into action', desc: 'Practice through a project, exchange feedback, and pass something on.' },
]

export default function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <Eyebrow>Make your first move</Eyebrow>
      <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
        You don't need to have it all figured out.
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.no}>
            <p className="text-4xl font-semibold text-brand">{s.no}</p>
            <div className="mt-3 border-t border-line pt-3">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


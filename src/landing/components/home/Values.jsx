const values = [
  { text: 'Learn by help', color: 'bg-brand' },
  { text: 'Connect across studies', color: 'bg-[#ea4335]' },
  { text: 'Be build-ready', color: 'bg-[#34a853]' },
]

export default function Values() {
  return (
    <section className="border-y border-line">
      <ul className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-5 text-sm font-medium sm:flex-row">
        {values.map((v) => (
          <li key={v.text} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${v.color}`} />
            {v.text}
          </li>
        ))}
      </ul>
    </section>
  )
}


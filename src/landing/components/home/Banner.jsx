export default function Banner() {
  return (
    <section className="bg-green-50 py-10">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6">
        <svg viewBox="0 0 24 24" className="h-16 w-16 shrink-0 text-[#34a853]" fill="currentColor" aria-hidden="true">
          <path d="M12 0c.6 6.6 4.8 11.4 12 12-7.2.6-11.4 5.4-12 12-.6-6.6-4.8-11.4-12-12C7.2 11.4 11.4 6.6 12 0z" />
        </svg>
        <div>
          <h2 className="text-2xl font-bold leading-snug md:text-3xl">
            Different majors. Different starting points.
            <br />A place for all of them.
          </h2>
          <p className="mt-2 text-sm text-muted">
            You don't have to be the most experienced person in the room. Curiosity, kindness, and a
            willingness to learn are a good place to start.
          </p>
        </div>
      </div>
    </section>
  )
}


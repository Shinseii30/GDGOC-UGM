import Button from '../Button'
import Eyebrow from '../Eyebrow'
import heroImg from '../../../assets/Ideas coming together.png'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
      <div>
        <Eyebrow>GDGoC UGM • 2026/2027</Eyebrow>
        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          Big ideas.
          <span className="block text-brand">Built together.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          A place for curious minds at{' '}
          <strong className="font-semibold text-ink">Universitas Gadjah Mada</strong> to learn,
          connect, and build technology that matters.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/overview#tracks">Find your learning track</Button>
          <Button variant="outline" href="/about">
            Get to know us
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-muted">
          <span className="flex gap-1">
            <i className="h-2 w-2 rounded-full bg-[#ea4335]" />
            <i className="h-2 w-2 rounded-full bg-[#fbbc04]" />
            <i className="h-2 w-2 rounded-full bg-[#34a853]" />
            <i className="h-2 w-2 rounded-full bg-[#4285f4]" />
          </span>
          Different backgrounds. A shared curiosity.
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl" style={{ aspectRatio: '4/3' }}>
        <img
          src={heroImg}
          alt="Ideas coming together"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>
    </section>
  )
}

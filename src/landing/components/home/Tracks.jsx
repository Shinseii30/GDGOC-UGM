import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'
import trackResearch from '../../../assets/Glass track artwork.png'
import trackDesign from '../../../assets/Glass track artwork 2.png'
import trackDev from '../../../assets/Glass track artwork 3.png'

const tracks = [
  {
    kicker: 'Explore the why',
    title: 'Research & discovery',
    desc: 'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
    tags: 'Problem framing · User research · Product thinking',
    image: trackResearch,
    gradientFrom: '#bfdbfe',
    gradientTo: '#eff6ff',
  },
  {
    kicker: 'Make it meaningful',
    title: 'Design & creativity',
    desc: 'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
    tags: 'UI/UX · Visual storytelling · Prototyping',
    image: trackDesign,
    gradientFrom: '#fde68a',
    gradientTo: '#fefce8',
  },
  {
    kicker: 'Bring ideas to life',
    title: 'Development',
    desc: 'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
    tags: 'Web & mobile · Cloud · AI foundations',
    image: trackDev,
    gradientFrom: '#bbf7d0',
    gradientTo: '#f0fdf4',
  },
]

export default function Tracks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <Eyebrow>Find your starting point</Eyebrow>
      <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
        Many interests. One shared journey.
      </h2>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-2">
        <p className="text-sm text-muted">
          Follow what excites you. Explore a track, then connect the dots with others.
        </p>
        <TextLink>See the overview</TextLink>
      </div>

      {/* pt-8 gives space so overflowing illustration doesn't clip the section above */}
      <div className="mt-8 grid gap-5 md:grid-cols-3" style={{ paddingTop: '24px' }}>
        {tracks.map((t) => (
          /* overflow:visible lets the illustration bleed out above the card */
          <article key={t.title} className="rounded-2xl border border-line bg-white" style={{ overflow: 'visible', position: 'relative' }}>
            {/* gradient header — overflow:visible so img can pop out */}
            <div
              style={{
                background: `linear-gradient(to bottom, ${t.gradientFrom}, ${t.gradientTo})`,
                borderRadius: '16px 16px 0 0',
                height: '220px',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              {/* image is larger than the header and shifts up so it overflows the card top */}
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
    </section>
  )
}

import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'
import TrackCard from '../TrackCard'
import Loadable, { Skeleton } from '../Loadable'
import { useApi } from '../../../lib/useApi'

export default function Tracks() {
  const tracksApi = useApi('/tracks')

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
        <TextLink href="/overview">See the overview</TextLink>
      </div>

      {/* pt-8 gives space so overflowing illustration doesn't clip the section above */}
      <div className="mt-8 grid gap-5 md:grid-cols-3" style={{ paddingTop: '24px' }}>
        <Loadable state={tracksApi} skeleton={<Skeleton count={3} className="h-96 rounded-2xl" />}>
          {(tracks) => tracks.map((t) => <TrackCard key={t.id} track={t} />)}
        </Loadable>
      </div>
    </section>
  )
}

import { TextLink } from './Button'
import { getTrackTheme } from '../../lib/trackTheme'

export default function TrackCard({ track }) {
  const theme = getTrackTheme(track.id)

  return (
    /* overflow:visible lets the illustration bleed out above the card */
    <article className="rounded-2xl border border-line bg-white" style={{ overflow: 'visible', position: 'relative' }}>
      {/* gradient header — overflow:visible so img can pop out */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${theme.from}, ${theme.to})`,
          borderRadius: '16px 16px 0 0',
          height: '220px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {theme.image && (
          <img
            src={theme.image}
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
        )}
      </div>
      <div className="p-5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-brand">{track.tagline}</p>
        <h3 className="mt-2 text-xl font-semibold">{track.name}</h3>
        <p className="mt-2 text-sm text-muted">{track.description}</p>
        <p className="mt-4 border-t border-line pt-3 text-[11px] text-muted">{track.skills.join(' · ')}</p>
        {track.open === false ? (
          <p className="mt-3 text-sm font-medium text-muted">Opening soon</p>
        ) : (
          <TextLink href={track.explore_link} className="mt-3">
            Explore this track
          </TextLink>
        )}
      </div>
    </article>
  )
}

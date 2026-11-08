import trackResearch from '../assets/Glass track artwork.png'
import trackDesign from '../assets/Glass track artwork 2.png'
import trackDev from '../assets/Glass track artwork 3.png'

// API tidak mengirim gambar/gradient, jadi tampilan visual dipetakan dari id track.
const themes = {
  'research-discovery': { image: trackResearch, from: '#bfdbfe', to: '#eff6ff' },
  'design-creativity': { image: trackDesign, from: '#fde68a', to: '#fefce8' },
  development: { image: trackDev, from: '#bbf7d0', to: '#f0fdf4' },
}

const fallbackTheme = { image: null, from: '#e5e7eb', to: '#f9fafb' }

export function getTrackTheme(id) {
  return themes[id] ?? fallbackTheme
}

import Hero from '../components/home/Hero'
import Values from '../components/home/Values'
import Intro from '../components/home/Intro'
import Tracks from '../components/home/Tracks'
import LearnByDoing from '../components/home/LearnByDoing'
import Project from '../components/home/Project'
import Steps from '../components/home/Steps'
import Banner from '../components/home/Banner'
import Faq from '../components/home/Faq'
import Cta from '../components/home/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Intro />
      <Tracks />
      <LearnByDoing />
      <Project />
      <Steps />
      <Banner />
      <Faq />
      <Cta />
    </>
  )
}


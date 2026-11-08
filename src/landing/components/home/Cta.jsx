import Eyebrow from '../Eyebrow'
import Button from '../Button'

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-soft p-8 md:flex-row md:items-center md:p-10">
        <div>
          <Eyebrow>Your next chapter</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Bring your curiosity.
            <br />
            We'll build from there.
          </h2>
          <p className="mt-3 text-sm text-muted">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Button href="/overview">Explore the overview</Button>
        </div>
      </div>
    </section>
  )
}


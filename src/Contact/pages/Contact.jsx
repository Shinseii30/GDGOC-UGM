import { useState } from 'react'
import { ArrowUpRight, ArrowRight, Plus, Diamond, HelpCircle } from 'lucide-react'
import Eyebrow from '../../landing/components/Eyebrow'
import { TextLink } from '../../landing/components/Button'

const topics = [
  {
    id: 'joining',
    icon: <ArrowUpRight size={16} />,
    title: 'Joining & learning',
    desc: 'Getting started, learning tracks, and participation',
  },
  {
    id: 'collaboration',
    icon: <Plus size={16} />,
    title: 'Collaboration',
    desc: 'Community activities and shared ideas',
  },
  {
    id: 'speaking',
    icon: <Diamond size={14} />,
    title: 'Speaking & sharing',
    desc: 'Workshops, knowledge sharing, and mentorship',
  },
  {
    id: 'general',
    icon: <HelpCircle size={16} />,
    title: 'General inquiry',
    desc: "Anything else you'd like to ask",
  },
]

const categoryOptions = [
  'Joining & learning',
  'Collaboration',
  'Speaking & sharing',
  'General inquiry',
]

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState('joining')
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    category: 'Joining & learning',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14">
        <Eyebrow>Contact • Let's connect</Eyebrow>
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Good things start with{' '}
          <span className="text-brand">hello.</span>
        </h1>
        <p className="mt-4 max-w-sm text-base text-muted">
          A question, a collaboration, or an idea for the community? Tell us
          what's on your mind.
        </p>
      </section>

      {/* ── Main two-column ── */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-[1fr_1.4fr]">
        {/* Left — topic picker + community card */}
        <div>
          <h2 className="text-xl font-semibold">What brings you here?</h2>
          <p className="mt-1 text-sm text-muted">
            Pick the closest topic in the form. We'll take it from there.
          </p>

          <ul className="mt-5 space-y-2">
            {topics.map((t) => {
              const active = selectedTopic === t.id
              return (
                <li key={t.id}>
                  <button
                    onClick={() => setSelectedTopic(t.id)}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                      active
                        ? 'border-brand bg-brand-soft'
                        : 'border-line bg-white hover:bg-surface'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={active ? 'text-brand' : 'text-muted'}>
                        {t.icon}
                      </span>
                      <span className="text-sm font-medium">{t.title}</span>
                    </div>
                    <p className="mt-0.5 pl-6 text-xs text-muted">{t.desc}</p>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Community updates card */}
          <div className="mt-6 rounded-2xl bg-yellow-50 p-5">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted">
              Stay curious, stay connected
            </p>
            <h3 className="text-lg font-bold leading-snug">
              Looking for community updates?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Follow{' '}
              <span className="font-medium text-ink">@gdgoc.ugm</span> for
              learning opportunities and what's happening in the community.
            </p>
            <TextLink href="https://instagram.com/gdgoc.ugm" className="mt-3">
              Find @gdgoc.ugm
            </TextLink>
          </div>
        </div>

        {/* Right — contact form */}
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="mt-0.5 text-xs text-muted">
                Fields marked <span className="text-[#ea4335]">*</span> are
                required.
              </p>
            </div>
            <ArrowUpRight size={18} className="text-brand" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium">
                  First name <span className="text-[#ea4335]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-xs font-medium">
                Email address <span className="text-[#ea4335]">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Where we can reply to you"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
                required
              />
            </div>

            {/* University */}
            <div>
              <label className="mb-1 block text-xs font-medium">
                University / organization
              </label>
              <input
                type="text"
                name="university"
                placeholder="Where you study or work (optional)"
                value={form.university}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1 block text-xs font-medium">
                Inquiry category <span className="text-[#ea4335]">*</span>
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none"
              >
                {categoryOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="mb-1 block text-xs font-medium">
                Subject <span className="text-[#ea4335]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="A short introduction to your question"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-xs font-medium">
                Your message <span className="text-[#ea4335]">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell us a little about your question or idea…"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-line px-3 py-2 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-brand"
              />
              <label htmlFor="agree" className="text-xs text-muted">
                I agree that the information I share can be used to respond to
                this inquiry.
              </label>
            </div>

            {/* Submit row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Send message <ArrowRight size={15} />
              </button>
              <p className="max-w-[200px] text-right text-[11px] text-muted">
                Please don't include passwords or sensitive personal information.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Guidance section ── */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          {/* Left */}
          <div>
            <Eyebrow>A little guidance</Eyebrow>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              Help us understand your idea.
            </h2>
            <TextLink className="mt-5">Explore the programs first</TextLink>
          </div>

          {/* Right — tips */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">For learning questions</h3>
              <p className="mt-1 text-sm text-muted">
                Tell us which topic interests you and where you are in your
                learning journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">For collaborations</h3>
              <p className="mt-1 text-sm text-muted">
                Share the idea, who it's for, and how you imagine working with
                the community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Not sure which category fits?</h3>
              <p className="mt-1 text-sm text-muted">
                Choose General inquiry. A clear question is always a good
                starting point.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


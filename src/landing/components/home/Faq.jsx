import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.',
  },
  {
    q: 'Is this only for computer science students?',
    a: 'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.',
  },
  {
    q: 'How can I find learning opportunities?',
    a: 'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>A few good questions</Eyebrow>
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Wondering where to begin?
          </h2>
          <TextLink className="mt-5">Ask a question</TextLink>
        </div>

        <div className="divide-y divide-line border-b border-line">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left font-medium"
                >
                  {f.q}
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && <p className="mt-2 text-sm text-muted">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

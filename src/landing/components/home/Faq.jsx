import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Eyebrow from '../Eyebrow'
import { TextLink } from '../Button'
import Loadable, { Skeleton } from '../Loadable'
import { useApi } from '../../../lib/useApi'

export default function Faq() {
  const faqsApi = useApi('/faqs')
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
          <Loadable state={faqsApi} skeleton={<Skeleton count={4} className="my-4 h-6 rounded" />}>
            {(faqs) =>
              faqs.map((f, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={f.id} className="py-4">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left font-medium"
                    >
                      {f.question}
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && <p className="mt-2 text-sm text-muted">{f.answer}</p>}
                  </div>
                )
              })
            }
          </Loadable>
        </div>
      </div>
    </section>
  )
}

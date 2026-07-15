import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { timeline } from '@/lib/content'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="03" title="Experience & Education" />

      <ol className="relative ml-3 border-l border-border">
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <li className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {item.place}
              </p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SkillsGrid } from '@/components/skills-grid'
import { about } from '@/lib/content'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="01" title="About" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="md:col-span-3">
          <SkillsGrid />
        </div>
      </div>
    </section>
  )
}

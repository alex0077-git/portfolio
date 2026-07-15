import { Reveal } from '@/components/reveal'
import { about } from '@/lib/content'

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {about.skills.map((group, i) => (
        <Reveal key={group.category} delay={i * 0.06}>
          <div className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

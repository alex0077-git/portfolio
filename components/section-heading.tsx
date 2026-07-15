import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <Reveal className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </Reveal>
  )
}

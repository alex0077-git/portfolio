import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/content'

const channels = [
  { href: `mailto:${profile.email}`, label: 'Email', value: profile.email, Icon: Mail },
  { href: profile.linkedin, label: 'LinkedIn', value: '/in/alex-antony', Icon: LinkedinIcon },
  { href: profile.github, label: 'GitHub', value: '@alex0077-git', Icon: GithubIcon },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="04" title="Contact" />

      <Reveal>
        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          I’m actively looking for fresher / intern software engineering and
          AI-ML roles. Feel free to reach out — I’ll get back to you.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <c.Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {c.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}

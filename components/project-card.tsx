import { ArrowUpRight, Star } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/content'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        {project.featured && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/40 bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
            <Star className="h-3 w-3" />
            Featured
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 border-t border-border pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  )
}

import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <div className="divide-y divide-border">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}

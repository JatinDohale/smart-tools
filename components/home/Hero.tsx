import Link from "next/link"
//get style comonents from lucide and shadcn
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="container mx-auto px-4 py-24 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Discover the Best{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            AI Tools
          </span>{" "}
          in Smart Directory
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
          Explore curated AI tools for productivity, design, development and
          marketing. Updated regularly with new launches.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button size="lg" asChild>
            <Link href="/aiTools">
              Browse Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}

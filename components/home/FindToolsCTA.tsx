import Link from "next/link"

export default function FindToolsCTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* H2 */}
        <h2 className="text-2xl font-bold mb-4">
          Find Free and Paid AI Tools Instantly
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Browse hundreds of AI tools across writing, image generation,
          video, audio, coding, and productivity — all in one place.
        </p>

        {/* CTA Button */}
        <Link href="/aiTools" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition">
          Browse AI Tools Collection →
        </Link>
      </div>
    </section>
  )
}

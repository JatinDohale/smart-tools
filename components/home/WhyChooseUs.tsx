const features = [
  {
    title: "Save Time Finding AI Tools",
    desc: "No more searching endlessly. Discover the best AI tools in one place."
  },
  {
    title: "Compare Free & Paid AI Tools",
    desc: "Easily compare features, pricing, and use cases."
  },
  {
    title: "Curated & Updated Regularly",
    desc: "We keep the directory fresh with the latest AI tools."
  },
  {
    title: "Built for Creators & Developers",
    desc: "Tools for writing, design, coding, video, audio, and productivity."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* H2 */}
        <h2 className="text-2xl font-bold mb-10 text-center">
          Why Use Our AI Tools Directory?
        </h2>

        {/* features Display */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-background p-6"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

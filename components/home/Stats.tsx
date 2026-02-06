type StatsProps = {
  totalTools: number
  totalCategories: number
}

export default function Stats({ totalTools, totalCategories }: StatsProps) {
  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 rounded-xl bg-muted">
            <p className="text-3xl font-bold">{totalTools}+</p>
            <p className="text-sm text-muted-foreground">AI Tools</p>
          </div>

          <div className="p-4 rounded-xl bg-muted">
            <p className="text-3xl font-bold">{totalCategories}+</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </div>

          <div className="p-4 rounded-xl bg-muted">
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-muted-foreground">Free Access</p>
          </div>

          <div className="p-4 rounded-xl bg-muted">
            <p className="text-3xl font-bold">Updated</p>
            <p className="text-sm text-muted-foreground">Regularly</p>
          </div>

        </div>
      </div>
    </section>
  )
}

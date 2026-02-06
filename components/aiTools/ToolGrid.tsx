import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AITool } from "@/lib/type"
import Title from "@/components/others/Title"

type Props = {
  tools: AITool[]
  searchQuery?: string
  selectedCategory?: string
  categories: string[]
}

export default function ToolsGrid({
  tools,
  searchQuery = "",
  selectedCategory = "all",
  categories = [],
}: Props) {
  return (
    <>
      <form
        action="/aiTools"
        method="GET"
        className="flex flex-col items-center justify-center sm:flex-row gap-4 mb-8 border-y p-5 sm:p-10 border-gray-300 bg-slate-100 dark:bg-slate-900"
      >
        {/* Search input */}
        <div className="relative w-full sm:w-72 border bg-background border-gray-300 rounded-lg flex items-center px-2">
          <input
            type="text"
            name="q"
            placeholder="Search AI tools..."
            defaultValue={searchQuery}
            className="w-full pl-3 pr-4 py-2 bg-background outline-none"
          />
        
        {/* search submit button */}
          <button
            type="submit"
            className="hover:bg-slate-200 rounded-full p-2"
            aria-label="Search"
          >
            <Image
              src="/search.png"
              width={22}
              height={22}
              alt="Search AI tools"
            />
          </button>
        </div>

        {/* Category select */}
        <select
          name="category"
          defaultValue={selectedCategory}
          onChange={(e) => e.currentTarget.form?.submit()}
          className="w-full sm:w-72 border-gray-300 text-center px-4 py-2 border rounded-lg bg-background"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </form>

      {/*  Title */}
      <div className=" text-xl sm:text-3xl text-center py-3">
        <Title text1="All" text2="COLLECTION" />
      </div>

      {/* Grid */}
      {tools.length === 0 ? (
        <p className="text-center text-muted-foreground mt-12">
          No tools found{searchQuery && ` for “${searchQuery}”`}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/aiTools/${tool.slug}`}>
              <Card className="group h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={tool.logo || "/placeholder.png"}
                      alt={`${tool.name} logo`}
                      width={40}
                      height={40}
                      className="rounded"
                      unoptimized
                    />
                    <h2 className="font-semibold group-hover:text-primary">
                      {tool.name}
                    </h2>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                    {tool.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <Badge variant="secondary">{tool.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {tool.pricing}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { AITool } from "@/lib/type"

type ToolCardProps = {
  tool: AITool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/aiTools/${tool.slug}`}
      className="group block rounded-xl border p-4 transition hover:shadow-lg hover:-translate-y-0.5">
      {/*  Header  */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={tool.logo || "/placeholder.png"}
          alt={`${tool.name} logo`}
          width={40}
          height={40}
          className="rounded bg-background"
          unoptimized
        />

        <div>
          <h3 className="font-semibold group-hover:text-primary transition">
            {tool.name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {tool.category}
          </p>
        </div>
      </div>

      {/*  Description  */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {tool.description}
      </p>

      {/*  Footer  */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          {tool.pricing}
        </Badge>

        <span className="text-sm text-primary font-medium">
          View details →
        </span>
      </div>
    </Link>
  )
}

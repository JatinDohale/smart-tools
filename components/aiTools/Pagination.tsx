import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  currentPage: number
  totalPages: number
  searchQuery?: string
  category?: string
}

export function Pagination({
  currentPage,
  totalPages,
  searchQuery,
  category,
}: Props) {
  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams()

    params.set("page", page.toString())

    if (searchQuery) params.set("q", searchQuery)
    if (category && category !== "all") {
      params.set("category", category)
    }

    return `/aiTools?${params.toString()}`
  }

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 mt-12"
      aria-label="Pagination"
    >
      {/* Prev */}
      <Link
        href={buildPageUrl(currentPage - 1)}
        aria-disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 py-1 rounded-md border text-sm transition ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:bg-muted"
        }`}
      >
        <ChevronLeft size={16} />
        Prev
      </Link>

      {/* Page numbers */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1

          if (
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
          ) {
            return (
              <Link
                key={page}
                href={buildPageUrl(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`px-3 py-1 rounded-md border text-sm transition ${
                  page === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {page}
              </Link>
            )
          }

          if (
            page === currentPage - 2 ||
            page === currentPage + 2
          ) {
            return (
              <span
                key={page}
                className="px-2 text-muted-foreground select-none"
              >
                …
              </span>
            )
          }

          return null
        })}
      </div>

      {/* Next */}
      <Link
        href={buildPageUrl(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-3 py-1 rounded-md border text-sm transition ${
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:bg-muted"
        }`}
      >
        Next
        <ChevronRight size={16} />
      </Link>
    </nav>
  )
}

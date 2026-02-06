import { GetServerSideProps } from "next";

import Layout from "@/components/layoutComponents/Layout";
import SEO from "@/components/layoutComponents/SEO";

import { getAllTools } from "@/lib/fetchTools";
import { TOOLS_PER_PAGE } from "@/lib/constant"//for constant tool on page for pagination
import { AITool } from "@/lib/type"; //interface for dataset 

//components
import ToolsGrid from "@/components/aiTools/ToolGrid";
import { Pagination } from "@/components/aiTools/Pagination";





type Props = {
  tools: AITool[]
  categories: string[]
  currentPage: number
  totalPages: number
  searchQuery: string
  selectedCategory: string
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  const page = Number(context.query.page) || 1
  const searchQuery = (context.query.q as string)?.toLowerCase() || ""
  const selectedCategory = (context.query.category as string) || "all"

  const tools = getAllTools()

  const categories = ["all", ...Array.from(new Set(tools.map(tool => tool.category))),]

  // filter logic for search input and categoery dropdown
  const filteredTools = tools.filter(tool => {

    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery)

    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory


    return matchesSearch && matchesCategory
  }
  )

  // 
  const totalTools = filteredTools.length
  const totalPages = Math.ceil(totalTools / TOOLS_PER_PAGE)

  const safePage = Math.min(page, totalPages || 1)
  const start = (safePage - 1) * TOOLS_PER_PAGE
  const end = start + TOOLS_PER_PAGE

  return {
    props: {
      tools: filteredTools.slice(start, end),
      categories,
      currentPage: safePage,
      totalPages,
      searchQuery,
      selectedCategory,
    },
  }
}





export default function ToolsPage({
  tools,
  categories,
  currentPage,
  totalPages,
  searchQuery,
  selectedCategory,
}: Props) {
  return (
    <Layout>
      <SEO
        title="Smart Tools Directory – Browse the Best AI Tools"
        description="Browse a curated list of AI tools with detailed descriptions, features, and pricing."
      />

      <section className="max-w-6xl mx-auto px-4 py-10">

        {/* heading with description */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            AI Tools Directory
          </h1>
          <p className="text-center text-muted-foreground  max-w-xl">
            Discover the best AI tools for writing, design, coding, video, audio, and productivity.Browse free and paid AI tools by category.
          </p>
        </div>


        {/* input + showcase */}
        <ToolsGrid
          tools={tools}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          categories={categories} />

        {/* pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              searchQuery={searchQuery}
              category={selectedCategory}
            />
          </div>)}
      </section>
    </Layout>
  );
}



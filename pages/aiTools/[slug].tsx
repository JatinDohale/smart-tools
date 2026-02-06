import { GetServerSideProps } from "next";
import Image from "next/image"
import Link from "next/link";

import Layout from "../../components/layoutComponents/Layout";
import SEO from "../../components/layoutComponents/SEO";

import { getAllTools, getToolBySlug } from "../../lib/fetchTools";
import { AITool } from "../../lib/type";

import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// components
import ToolCard from "@/components/others/ToolCard"



interface ToolPageProps {
  tool: AITool;
  relatedTools: AITool[]
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  const slug = context.params?.slug as string
  const tool = getToolBySlug(slug)

  if (!tool) return { notFound: true }


  const relatedTools = getAllTools().filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3)

  return {
    props: {
      tool,
      relatedTools,
    },
  }
}


export default function ToolPage({ tool, relatedTools }: ToolPageProps) {
  return (
    <Layout>
      <SEO
        title={`${tool.name} – AI Tool Review, Features & Pricing`}
        description={`Discover ${tool.name}, an AI tool for ${tool.category}. Learn about features, pricing, and Pros & Cons.`}
        slug={tool.slug}
        tool={tool}
      />

      <section className="w-full container px-14 py-14">
        {/*  HERO  */}
        <div className="flex flex-col sm:flex-row gap-6 items-start justify-between sm:items-center sm:px-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start justify-around sm:items-center">
            {tool.logo && (
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={72}
                height={72}
                className="rounded-xl border bg-background"
                unoptimized
              />
            )}

            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">
                {tool.name} – AI Tool Review
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <Badge>{tool.category}</Badge>
                <Badge variant="secondary">{tool.pricing}</Badge>
              </div>
            </div>
          </div>

          <Button asChild size="lg">
            <Link
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* About */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-3">
              About this tool
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Info card */}
          <div className="rounded-xl border bg-muted/40 p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Category</p>
              <p className="font-medium">{tool.category}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">{tool.name} Pricing</p>
              <p className="font-medium">{tool.pricing}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Official Website
              </p>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {tool.website}
              </a>
            </div>
          </div>
        </div>

        {/*  RELATED TOOLS  */}
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-6">
            Best Alternatives for {tool.name}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedTools.length > 0 ? (
              relatedTools.map((rt) => (
                <ToolCard key={rt.id} tool={rt} />
              ))
            ) : (
              <p className="col-span-full text-muted-foreground">
                No related tools found.
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {/* PROS */}
          <div className="text-center border border-gray-700 dark:border-gray-300 rounded-md p-2 pb-6 px-6">
            <h3 className="font-semibold mb-3 text-xl text-green-600">
              Pros of {tool.name}
            </h3>
            <ul className="space-y-2 text-sm">
              {tool.pros.length > 0 ? (
                tool.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2">
                    <span>-</span>
                    <span>{pro}</span>
                  </li>
                ))
              ) : (
                <p className="text-muted-foreground">No pros listed</p>
              )}
            </ul>
          </div>

          {/* CONS */}
          <div className="text-center border border-gray-700 dark:border-gray-300 rounded-md p-2 pb-6 px-6">
            <h3 className="font-semibold mb-3 text-xl text-red-600">
              Cons of {tool.name}
            </h3>
            <ul className="space-y-2 text-sm">
              {tool.cons.length > 0 ? (
                tool.cons.map((con, i) => (
                  <li key={i} className="flex gap-2">
                    <span>-</span>
                    <span>{con}</span>
                  </li>
                ))
              ) : (
                <p className="text-muted-foreground">No cons listed</p>
              )}
            </ul>
          </div>
        </div>



      </section>

    </Layout>
  );
}

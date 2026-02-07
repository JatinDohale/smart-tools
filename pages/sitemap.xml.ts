import { GetServerSideProps } from "next"
import { getAllTools } from "@/lib/fetchTools"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smart-tools-weld.vercel.app"

function generateSiteMap(tools: ReturnType<typeof getAllTools>) {
  const staticPages = [
    "",
    "/aiTools",
  ]

  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")

  const toolUrls = tools
    .map(
      (tool) => `
  <url>
    <loc>${SITE_URL}/aiTools/${tool.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${staticUrls}
${toolUrls}
</urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const tools = getAllTools()
  const sitemap = generateSiteMap(tools)

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}

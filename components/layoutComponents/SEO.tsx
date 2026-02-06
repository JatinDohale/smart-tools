import Head from "next/head";
import { AITool } from "../../lib/type";

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  tool?: AITool;
}

export default function SEO({
  title,
  description,
  slug,
  tool
}: SEOProps) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"


  const url = slug
    ? `${SITE_URL}/aiTools/${slug}`
    : SITE_URL


  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}/og-default.png`} />

      {/* JSON-LD for AI Tool */}
      {tool && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: tool.name,
              description: tool.description,
              applicationCategory: "AI Tool",
              operatingSystem: "Web",
              url: tool.website,
              offers: {
                "@type": "Offer",
                price: tool.pricing === "Free" ? "0" : "",
                priceCurrency: "USD"
              },
              positiveNotes: tool.pros,
              negativeNotes: tool.cons
            })
          }}
        />

      )}
    </Head>
  );
}

import { GetServerSideProps } from "next"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain")
  res.write(`
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`)
  res.end()

  return {
    props: {},
  }
}

export default function Robots() {
  return null
}

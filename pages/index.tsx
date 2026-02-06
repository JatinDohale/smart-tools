import { GetServerSideProps } from "next";//getserversideprops for SSR (ServerSideRendring)

import Layout from "@/components/layoutComponents/Layout";//for give layout all Pages
import SEO from "@/components/layoutComponents/SEO";// for optimissing Seo with the help of Json-ld schema and opengraph

import { getAllTools } from "@/lib/fetchTools";//for fetching dataset 

//Components 
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PopularCategories from "@/components/home/PopularCategory";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FindToolsCTA from "@/components/home/FindToolsCTA";


interface HomeProps {
  totalTools: number;
  totalCategories: number;
}

export const getServerSideProps: GetServerSideProps<HomeProps> =
  async () => {
    const tools = getAllTools();//get tools 

    const totalTools = tools.length;//get number how many tools get
    const totalCategories = new Set(tools.map((t) => t.category)).size;//get how many unique category present 

    return {
      props: {
        totalTools,
        totalCategories
      }
    };
  };




export default function Home({totalTools,totalCategories}: HomeProps) {

  return (
    <Layout>
      <SEO
        title="SmartTool | Best AI Tools Directory – Discover & Compare Smart AI Tools"
        description="Explore the best AI tools directory with 250+ smart AI tools for writing, images, video, code, and productivity. Find free and paid AI tools easily."/>

      <Hero />
      <Stats 
        totalTools={totalTools} 
        totalCategories={totalCategories} 
      />
      <PopularCategories/>
      <WhyChooseUs/>
      <FindToolsCTA/>
    </Layout>
  );
}


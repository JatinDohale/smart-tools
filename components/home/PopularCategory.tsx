import Link from "next/link"
import Image from "next/image"

const categories = [
    {
        name: "AI Writing Tools",
        slug: "Text",
        image: "/categery/chatBot.jpg",
        description: "AI tools for content, blogs, emails, and copywriting",
    },
    {
        name: "Learning Resources",
        slug: "Learning+resources",
        image: "/categery/learningResoursesAi.webp",
        description: "Boost efficiency with AI-powered workflows",
    },
    {
        name: "Code Making AI",
        slug: "Code",
        image: "/categery/codeMakingAi.webp",
        description: "Making code and solve bug also help devloper",
    },
    {
        name: "AI Image Generation Tools",
        slug: "Image",
        image: "/categery/imageGenerationAI.webp",
        description: "Create stunning images with AI",
    },
    {
        name: "AI Video Tools",
        slug: "Video",
        image: "/categery/videoGenerationAi.webp",
        description: "AI video creation and Animation tools",
    },
    {
        name: "AI Audio Tools",
        slug: "Audio",
        image: "/categery/audioGenerationAi.webp",
        description: "AI Audio creation, voice, and music tools",
    },
]

export default function PopularCategories() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Browse AI Tools by Category</h2>
                    <p className="text-muted-foreground mt-2">
                        Explore AI tools by category
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/aiTools?q=&category=${cat.slug}`}
                            className="group rounded-2xl border bg-background p-6 hover:shadow-md transition"
                        >
                            {/* Image */}
                            <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    width={400}
                                    height={400}
                             
                                    className="object-cover group-hover:scale-105 transition-transform"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold group-hover:text-primary">
                                {cat.name}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-sm text-muted-foreground">
                                {cat.description}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

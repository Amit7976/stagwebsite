import { Card, CardContent } from "@/components/ui/card";


const blogPosts = [
    {
        title: "The Future of Web Development",
        date: "3rd Dec 2024",
        image: "https://www.shadcnblocks.com/images/block/photos/nubelson-fernandes-tAJYoec13xk-unsplash.jpg",
        description: "Exploring the latest trends in frontend and backend technologies, including AI-powered coding tools and modern frameworks.",
        link: "#",
        alt: "Developer working on code",
    },
    {
        title: "Mastering React Performance Optimization",
        date: "5th Dec 2024",
        image: "https://www.shadcnblocks.com/images/block/photos/jason-goodman-ZJlfUi5rTDU-unsplash.jpg",
        description: "A deep dive into memoization, lazy loading, and efficient state management techniques for faster React applications.",
        link: "#",
        alt: "Code on screen",
    },
    {
        title: "UI/UX Design Principles for 2025",
        date: "10th Dec 2024",
        image: "https://www.shadcnblocks.com/images/block/photos/studio-republic-fotKKqWNMQ4-unsplash.jpg",
        description: "Key strategies for creating intuitive, beautiful interfaces that delight users and drive engagement in the coming year.",
        link: "#",
        alt: "UI/UX design sketches on paper",
    },
];
  
export default function BlogSection() {
    return (
        <section>
            <div className="px-10">
                <h1 className="mb-12 max-w-xl font-sans text-3xl font-bold tracking-tight text-foreground md:text-6xl">
                    Our <span className="text-orange-600">Blogs</span>
                </h1>
                <div className="flex flex-col gap-24">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-16 md:flex-row"
                        >
                            {/* Image */}
                            <div className="flex h-80 w-full md:w-140 items-center justify-center overflow-hidden rounded-3xl bg-muted">
                                <img
                                    src={post.image}
                                    alt={post.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Card */}
                            <Card className="flex flex-col gap-6 border-none shadow-none bg-transparent text-card-foreground py-6 rounded-xl">
                                <CardContent className="p-0">
                                    <div className="mb-5 flex h-90 items-start border-b py-10 md:mb-0 lg:gap-32 md:border-t border-neutral-800">
                                        <div className="flex h-full w-full flex-col items-start justify-between pr-8">
                                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                                {post.title}
                                            </h2>
                                            <p className="mt-2 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                                                {post.date}
                                            </p>
                                        </div>
                                        <div className="flex h-full w-full flex-col items-start justify-between gap-6">
                                            <p className="text-lg md:text-xl font-normal leading-relaxed tracking-tight text-muted-foreground">
                                                {post.description}
                                            </p>
                                            <button className="inline-flex items-center gap-4 text-primary hover:gap-6 transition-all">
                                                <a
                                                    href={post.link}
                                                    className="text-lg font-semibold tracking-tight"
                                                >
                                                    Read
                                                </a>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-arrow-right"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

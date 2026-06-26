import React, { useMemo, useState } from "react";
import {
    Calendar,
    ChevronRight,
    ChevronDown
} from "lucide-react";

// const categories = [
//     "All",
//     "Frontend",
//     "Backend",
//     "Full Stack",
//     "Java",
//     "Python",
//     "DSA",
//     "AI",
//     "Machine Learning",
//     "Data Science",
//     "Cyber Security",
//     "Cloud",
//     "DevOps",
//     "Blockchain",
//     "Android",
//     "Flutter",
// ];

const categories = [
    "All",
    "Artificial Intelligence",
    "Web Development",
    "JavaScript",
    "React",
    "Tailwind",
    "Backend",
    "Database",
    "CSS"
];

const blogs = [
    {
        id: 1,
        title: "What Are The Top Career Opportunities In Agentic AI?",
        category: "Artificial Intelligence",
        date: "May 26, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
        id: 2,
        title: "Artificial Intelligence Trends Every Developer Should Know",
        category: "Artificial Intelligence",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800"
    },
    {
        id: 3,
        title: "Complete Roadmap To Become Full Stack Developer",
        category: "Web Development",
        date: "May 12, 2026",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    },
    {
        id: 4,
        title: "Top JavaScript Interview Questions",
        category: "JavaScript",
        date: "May 8, 2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
    },
    {
        id: 5,
        title: "React vs Next JS Complete Comparison",
        category: "React",
        date: "May 4, 2026",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
    },
    {
        id: 6,
        title: "Master Tailwind CSS Like A Pro",
        category: "Tailwind",
        date: "April 28, 2026",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    },
    {
        id: 7,
        title: "Top Backend Frameworks In 2026",
        category: "Backend",
        date: "April 21, 2026",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
    },
    {
        id: 8,
        title: "Node JS Complete Guide",
        category: "Backend",
        date: "April 17, 2026",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
    },
    {
        id: 9,
        title: "Learn MongoDB From Scratch",
        category: "Database",
        date: "April 10, 2026",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800"
    },
    {
        id: 10,
        title: "Express JS Crash Course",
        category: "Backend",
        date: "April 6, 2026",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
    },
    {
        id: 11,
        title: "CSS Animation Tricks",
        category: "CSS",
        date: "March 29, 2026",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800"
    },
    {
        id: 12,
        title: "Responsive Website Design Guide",
        category: "CSS",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    }
];

export default function Blogs() {

    const [selected, setSelected] = useState("All");
    const [visible, setVisible] = useState(9);

    const filtered = useMemo(() => {
        if (selected === "All") return blogs;
        return blogs.filter(
            item => item.category === selected
        );
    }, [selected]);

    const displayed = filtered.slice(0, visible);

    return (
        <>

            <div className="min-h-screen bg-slate-50">

                <div className="w-full px-6 lg:px-10 xl:px-12 py-12">

                    <h1 className="text-5xl font-bold text-center">
                        INSIGHTS
                    </h1>

                    <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
                        Discover the latest technology articles, AI updates,
                        web development tutorials and programming guides.
                    </p>

                    <div className="grid lg:grid-cols-4 gap-10 mt-14">

                        {/* Sidebar */}

                        <div>

                            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

                                <h2 className="font-bold text-xl mb-6">
                                    Categories
                                </h2>

                                <div className="space-y-3">

                                    {
                                        categories.map(cat => (

                                            <button

                                                key={cat}

                                                onClick={() => {
                                                    setSelected(cat);
                                                    setVisible(9);
                                                }}

                                                className={`w-full flex justify-between items-center rounded-xl px-4 py-3 transition

${selected === cat

                                                        ?

                                                        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"

                                                        :

                                                        "bg-gray-100 hover:bg-blue-50"

                                                    }

`}

                                            >

                                                <span>{cat}</span>

                                                <ChevronRight size={18} />

                                            </button>

                                        ))
                                    }

                                </div>

                            </div>

                        </div>

                        {/* Cards */}

                        <div className="lg:col-span-3">

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                                {

                                    displayed.map(blog => (

                                        <div

                                            key={blog.id}

                                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"

                                        >

                                            <img

                                                src={blog.image}

                                                alt={blog.title}

                                                className="h-60 w-full object-cover"

                                            />

                                            <div className="p-6">

                                                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                    {blog.category}
                                                </span>

                                                <h2 className="font-bold text-xl mt-4 leading-8">
                                                    {blog.title}
                                                </h2>

                                                <div className="flex items-center gap-2 mt-6 text-gray-500">

                                                    <Calendar size={17} />

                                                    <span>{blog.date}</span>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                            {

                                visible < filtered.length && (

                                    <div className="flex justify-center mt-12">

                                        <button

                                            onClick={() => setVisible(prev => prev + 6)}

                                            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center gap-2"

                                        >

                                            Show More

                                            <ChevronDown />

                                        </button>

                                    </div>

                                )

                            }

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

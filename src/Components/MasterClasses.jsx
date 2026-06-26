import React, { useState } from "react"; 
import { Search } from "lucide-react";

export default function MasterClasses() {

    const [status, setStatus] = useState("All"); 

    const statusFilter =
     [ 
        "All", "Live", "Upcoming", "Recorded", 
    ]; 
     const categories = [ 
        "Frontend", "Backend", "Full Stack", "React", "Node.js", "Java", "Python", "DSA", "AI", "Machine Learning", "Data Science", "Cyber Security", "Cloud Computing", "DevOps", "Docker", "Kubernetes", "Flutter", "Android", "Blockchain", "UI/UX", 
    ];

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
         {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"> 
            <div className="max-w-7xl mx-auto px-6 py-24">
                 <div className="text-center"> 
                    <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm"> 🚀 Live Tech Learning Platform </span> 
                    <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight"> Masterclasses <br /> <span className="text-yellow-300"> Learn From Industry Experts </span> </h1> 
                    <p className="text-gray-200 text-lg mt-8 max-w-3xl mx-auto leading-8"> Join live masterclasses, watch recorded sessions, attend upcoming workshops and improve your skills in Frontend, Backend, AI, Machine Learning, Data Science, Java, React, Cloud, Cyber Security and many more. </p> 
                    </div> 
                    {/* Search */} 
                    {/* <div className="max-w-2xl mx-auto mt-12 relative"> <Search className="absolute left-5 top-4 text-gray-400" size={22} /> 
                    <input type="text" placeholder="Search Masterclasses..." className="w-full py-4 pl-14 pr-5 rounded-full text-black outline-none shadow-xl" /> 
                    </div> */}
                     </div> 
                     </section> 
                     {/* Status Filter */} 
                     <section className="max-w-7xl mx-auto px-6 mt-14 "> <div className="flex flex-wrap justify-center gap-4"> {statusFilter.map((item) => ( <button key={item} onClick={() => setStatus(item)} className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${ status === item ? "bg-indigo-600" : "bg-slate-800 hover:bg-indigo-600" } `} > {item} </button> ))}
                      </div>
                       </section>

                        <section className="max-w-7xl mx-auto px-6 pb-20 "> <div className="text-center">
                             <h2 className="text-4xl font-bold mt-10">
                                 No masterclasses available at the moment.
                                 </h2> 
                             <p className="text-gray-400 mt-4"> 
                                Live • Upcoming • Recorded Sessions 
                                </p> 
                                </div> 
                                
                                </section> 
                                </div>
    </>
  )
}

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";

import "@/app/globals.css";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mx-auto mt-24 px-12 py-4">
                <Hero />
                <About />
            </div>
        </main>
    );
}

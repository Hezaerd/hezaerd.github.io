import Hero_Section from "@/components/sections/hero-section";
import Navbar_Section from "@/components/sections/navbar-section";
import About_Section from "@/components/sections/about-section";
import Projects_Section from "@/components/sections/projects-section";
import Footer_Section from "@/components/sections/footer-section";
import Contact_Section from "@/components/sections/contact-section";

import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio" />
                <link rel="index icon" type="image/ico" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col bg-[#121212]">
                <Navbar_Section />
                <div className="container mx-auto mt-24 px-12 py-4">
                    <Hero_Section />
                    <About_Section />
                    <Projects_Section />
                    <Contact_Section />
                </div>
                <Footer_Section />
                <ToastContainer />
            </main>
        </div>
    );
}

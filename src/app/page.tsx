'use client';

import Hero_Section from "@/src/components/sections/hero-section";
import Navbar_Section from "@/src/components/sections/navbar-section";
import About_Section from "@/src/components/sections/about-section";
import Projects_Section from "@/src/components/sections/projects-section";
import Footer_Section from "@/src/components/sections/footer-section";
import Contact_Section from "@/src/components/sections/contact-section";

import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "@/src/app/globals.css";
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

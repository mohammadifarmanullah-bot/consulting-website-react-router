import { useState } from "react";
import React from "react";

const Hero = () => {
    const [count, setCount] = useState(0)
    return (
        <>
         <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/blogshero.jpg')",
        }}
      >
        {/* Overlay ONLY on the hero image */}
        <div className="absolute inset-0 bg-black/50"></div>

        

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-start text-start text-white px-12">
          <div>
            <h1 className="text-7xl font-bold">
            Blogs page <br/> <span className="text-[#136bc2]">your business faster</span>
            </h1>

            <p className="mt-7 text-2xl">
            With our expertise and dedication, we'll help you navigate challenges, seize <br /> <span>opportunities, and achieve your business goals.</span>
            </p>
            <div className="mt-12 flex gap-3 ">
                <button className="rounded-full bg-[#106cc8] px-8 py-2 text-xl font-semibold text-white transition hover:bg-[#0d5aa8]">Discover our Services</button>
                <button className="rounded-full border border-white/40 px-8 py-2 text-xl font-semibold text-white transition hover:bg-white/10">Contact us page</button>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default Hero;
import { useState } from "react";
import React from "react";
function CustomizServicesBanner() {
    return (
      <section className="bg-[#106cc8] px-6 py-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
            Need customized services?
          </h2>
  
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#106cc8] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#106cc8]"
          >
            Request a personalized service
          </a>
        </div>
      </section>
    );
  }
  export default CustomizServicesBanner;
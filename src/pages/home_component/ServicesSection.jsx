import React from "react";

const services = [
    {
      title: "Market research",
      href: "#market-research",
      image: "https://picsum.photos/seed/market-research/900/900",
      alt: "Market research",
      className: "min-h-[20rem] md:row-span-2 md:min-h-0",
    },
    {
      title: "Strategic planning",
      href: "#strategic-planning",
      image: "https://picsum.photos/seed/strategic-planning/900/500",
      alt: "Strategic planning",
      className: "min-h-[14rem] md:min-h-0",
    },
    {
      title: "Financial advisory",
      href: "#financial-advisory",
      image: "https://picsum.photos/seed/financial-advisory/900/500",
      alt: "Financial advisory",
      className: "min-h-[14rem] md:min-h-0",
    },
  ];
  
  function ArrowIcon() {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }
  
  function ServiceCard({ title, href, image, alt, className = "" }) {
    return (
      <a
        href={href}
        className={`group relative block overflow-hidden rounded-xl bg-neutral-700 ${className}`}
      >
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
  
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.1)_50%,transparent)]" />
  
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-neutral-900">
            <ArrowIcon />
          </span>
        </div>
      </a>
    );
  }
  
  export default function ServicesSection() {
    return (
      <section className="bg-white px-6 py-16 text-neutral-900">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-blue-600" />
                <span className="text-xs text-blue-600">Our services</span>
              </div>
              <h2 className="mt-3 max-w-[16rem] text-3xl leading-tight tracking-tight">
                We offer a wide range of services
              </h2>
            </div>
  
            <p className="max-w-sm text-xs leading-relaxed text-neutral-600">
              By combining our industry knowledge with cutting-edge tools and
              methodologies, we develop strategies that drive measurable results.
            </p>
          </div>
  
          <div className="mt-10 grid grid-cols-1 gap-3 md:h-84 md:grid-cols-2 md:grid-rows-2">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>
    );
  }
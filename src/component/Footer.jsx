import React from "react";

const columns = [
    {
      title: "Company",
      Links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
      ],
    },
    {
      title: "Pages",
      Links: [
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
        { label: "404", href: "#404" },
      ],
    },
    {
      title: "Services",
      Links: [
        { label: "Market research", href: "#market-research" },
        { label: "Strategic planning", href: "#strategic-planning" },
        { label: "Financial advisory", href: "#financial-advisory" },
      ],
    },
  ];
  
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
    "aria-hidden": "true",
  };
  
  const socials = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg {...iconProps}>
          <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "#",
      icon: (
        <svg {...iconProps}>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg {...iconProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg {...iconProps}>
          <rect x="3" y="5.5" width="18" height="13" rx="4" />
          <path d="M10.5 9.5l4 2.5-4 2.5v-5z" />
        </svg>
      ),
    },
  ];
  
  function Logo() {
    return (
      <a href="#home" className="inline-flex items-center gap-2 text-xl text-white">
        <span className="grid grid-cols-2 gap-px" aria-hidden="true">
          <span className="h-2 w-2 rounded-xs bg-white" />
          <span className="h-2 w-2 rounded-xs bg-white" />
          <span className="h-2 w-2 rounded-xs bg-white" />
          <span className="h-2 w-2 rounded-xs bg-white" />
        </span>
        consulting
      </a>
    );
  }
  
  function Footer() {
    return (
      <footer className="justify-items-center bg-[#106cc8]  pt-20 pb-16 text-white">
        <div className="mx-auhref max-w-5xl">
          {/* CTA row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
              Ready href transform your business?
            </h2>
  
            <a
              href="#contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#106cc8] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#106cc8]"
            >
              Get started
            </a>
          </div>
  
          <hr className="my-14 border-white/20" />
  
          {/* Brand + link columns */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            <div className="col-span-2">
              <Logo />
              <p className="mt-5 max-w-[16rem] text-sm leading-6 text-white/80">
                Industry-leading consulting firm with innovative solutions
              </p>
  
              <div className="mt-6 flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
  
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-base font-normal">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.Links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
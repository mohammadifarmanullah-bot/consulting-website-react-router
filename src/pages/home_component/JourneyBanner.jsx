function JourneyBanner() {
    return (
      <section className="relative isolate flex min-h-104 items-end overflow-hidden bg-neutral-800 md:min-h-144">
        <img
          src="https://picsum.photos/seed/our-journey/1600/900"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
  
        {/* Dark overlay so the white text stays readable */}
        <div className="absolute inset-0 -z-10 bg-black/40" />
  
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-10 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="text-3xl font-normal tracking-tight text-white md:text-4xl">
            Our journey began 20 years ago
          </h2>
  
          <a
            href="#story"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/50 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-white hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Read our story
          </a>
        </div>
      </section>
    );
  }
  export default JourneyBanner;
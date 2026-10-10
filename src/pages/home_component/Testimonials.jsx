
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Peterson",
    company: "Thompson Industries",
    rating: 5,
    avatar: "https://picsum.photos/seed/alex-peterson/80/80",
    quote:
      "The impact of Consulting's work on our organization has been transformative. Their dedication to our success has helped us achieve remarkable growth.",
  },
  {
    name: "David Martinez",
    company: "Johnson Enterprises",
    rating: 4,
    avatar: "https://picsum.photos/seed/david-martinez/80/80",
    quote:
      "Their team's depth of knowledge, strategic thinking, and commitment to excellence have been instrumental in helping us navigate complex challenges.",
  },
  {
    name: "John Smith",
    company: "JS Solutions",
    rating: 5,
    avatar: "https://picsum.photos/seed/john-smith/80/80",
    quote:
      "The team at Consulting exceeded our expectations in every way. We are grateful for their partnership and the positive impact they've had on our business.",
  },
  {
    name: "Maria Lopez",
    company: "Lopez & Co",
    rating: 5,
    avatar: "https://picsum.photos/seed/maria-lopez/80/80",
    quote:
      "Working with them gave us a clear roadmap and the confidence to execute it. Our results speak for themselves.",
  },
];

function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${
        filled
          ? "fill-amber-400 stroke-amber-400"
          : "fill-none stroke-amber-400"
      }`}
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.95 6.1 6.55.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6-4.8-4.6 6.55-.9L12 2.5z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }) {
  const { name, company, rating, avatar, quote } = testimonial;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-xl rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-10"
    >
      <div
        className="flex gap-1"
        role="img"
        aria-label={`${rating} out of 5 stars`}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} filled={n <= rating} />
        ))}
      </div>

      <blockquote className="mt-6 min-h-28 text-base leading-8 text-neutral-600 sm:text-lg">
        "{quote}"
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-neutral-100 pt-6">
        <img
          src={avatar}
          alt={`${name}`}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500"
        />

        <div>
          <div className="font-semibold text-neutral-900">
            {name}
          </div>
          <div className="mt-1 text-sm text-neutral-500">
            {company}
          </div>
        </div>

        <div className="ml-auto hidden text-blue-600 sm:block">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 opacity-20"
            aria-hidden="true"
          >
            <path d="M7 7h5v5H8v2h4v5H4v-8a4 4 0 0 1 3-4Zm10 0h5v5h-4v2h4v5h-8v-8a4 4 0 0 1 3-4Z" />
          </svg>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-6 py-20 text-neutral-900 sm:py-24">
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-blue-500" />
              <span className="text-sm font-medium text-[#106cc8]">
                Testimonials
              </span>
            </div>

            <h2 className="mt-4 max-w-md text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
              Trusted by 10k+ customers
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-neutral-600 md:pb-2">
            Whether you're a small startup or a multinational
            corporation, let us be your trusted advisor on the
            path to success.
          </p>
        </motion.div>

        {/* Motion carousel */}
        <div className="mt-14">
          <div className="relative mx-auto max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={(dir) => ({
                  opacity: 0,
                  x: dir * 60,
                })}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={(dir) => ({
                  opacity: 0,
                  x: dir * -60,
                })}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
              >
                <TestimonialCard
                  testimonial={testimonials[current]}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-neutral-900">
                {String(current + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(testimonials.length).padStart(2, "0")}
            </p>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Previous and next */}
            <div className="flex gap-3">
              <motion.button
                type="button"
                onClick={previous}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m15 18-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <motion.button
                type="button"
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m9 18 6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
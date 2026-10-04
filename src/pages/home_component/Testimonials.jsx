import { useState } from "react";
import React from "react";

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
        className={`h-3 w-3 ${
          filled ? "fill-amber-400 stroke-amber-400" : "fill-none stroke-amber-400"
        }`}
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2.5l2.95 6.1 6.55.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6-4.8-4.6 6.55-.9L12 2.5z" />
      </svg>
    );
  }
  
  function TestimonialCard({ name, company, rating, avatar, quote }) {
    return (
      <figure className="w-64 shrink-0 snap-start rounded-xl bg-white p-7 shadow-sm sm:w-[16rem]">
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} filled={n <= rating} />
          ))}
        </div>
  
        <blockquote className="mt-4 text-xs leading-6 text-neutral-600">
          {quote}
        </blockquote>
  
        <figcaption className="mt-5 flex items-center gap-3">
          <img
            src={avatar}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-500"
          />
          <div>
            <div className="text-xs font-medium text-neutral-900">{name}</div>
            <div className="text-xs text-neutral-400">{company}</div>
          </div>
        </figcaption>
      </figure>
    );
  }
  
  export default function Testimonials() {
    return (
      <section className="bg-neutral-100 px-6 py-20 text-neutral-900">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-blue-500" />
                <span className="text-sm text-[#106cc8]">Testimonials</span>
              </div>
              <h2 className="mt-4 max-w-xs text-4xl font-normal leading-tight tracking-tight">
                Trusted by 10k+ customers
              </h2>
            </div>
  
            <p className="max-w-sm text-sm leading-relaxed text-neutral-700 md:pb-2">
              Whether you're a small startup or a multinational corporation, let
              us be your trusted advisor on the path to success.
            </p>
          </div>
  
          {/* Scrolling cards with faded edges */}
          <div className="relative mt-14">
            <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
  
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-neutral-100 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-neutral-100 to-transparent" />
          </div>
        </div>
      </section>
    );
  }
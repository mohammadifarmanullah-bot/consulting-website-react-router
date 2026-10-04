import { useState } from "react";
import React from "react";
const bars = [44, 61, 55, 59, 55, 71, 64, 80];

const points = [
  "We believe in fostering long-term partnerships",
  "We develop actionable plans to achieve your goals",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function TrendIcon() {
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
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

function ApproachSection() {
  return (
    <section className="bg-white px-6 py-16 text-neutral-900">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Image with floating stats card */}
        <div className="relative aspect-7/8 overflow-hidden rounded-2xl bg-neutral-300">
          <img
            src="https://picsum.photos/seed/consulting/800/920"
            alt="Two consultants talking at a table"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-[8%] bottom-[5%] rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <TrendIcon />
                <span>Sales this month</span>
              </div>
              <span className="text-[#106cc8]">+30%</span>
            </div>

            <div className="mt-3 flex h-20 items-end justify-between gap-3 rounded-lg bg-neutral-100 px-4 pt-2">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-[#106cc8]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-neutral-300" />
            <span className="text-sm text-[#106cc8]">Our approach</span>
          </div>

          <h2 className="mt-4 max-w-xs text-4xl font-normal leading-tight tracking-tight">
            Innovative approach to consulting
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-600">
            By combining our industry knowledge with cutting-edge tools and
            methodologies, we develop actionable strategies that drive
            measurable results.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#106cc8] text-white">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ApproachSection;
const posts = [
  {
    title: "The power of strategic planning: a roadmap to success",
    date: "Apr 8, 2022",
    href: "#strategic-planning",
    image: "https://picsum.photos/seed/blog-planning/700/800",
  },
  {
    title: "The importance of good leadership in a growing business",
    date: "Mar 15, 2022",
    href: "#leadership",
    image: "https://picsum.photos/seed/blog-leadership/700/800",
  },
  {
    title: "Unlocking growth: strategies for scaling your business",
    date: "Feb 28, 2022",
    href: "#scaling",
    image: "https://picsum.photos/seed/blog-growth/700/800",
  },
];

function PostCard({ title, date, href, image }) {
  return (
    <a
      href={href}
      className="group relative block h-80 overflow-hidden rounded-xl bg-neutral-700 sm:h-96"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

      <span className="absolute left-5 top-5 rounded bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white">
        {date}
      </span>

      <h3 className="absolute inset-x-5 bottom-5 text-base leading-snug text-white">
        {title}
      </h3>
    </a>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-white px-6 py-16 text-neutral-900">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-neutral-300" />
            <span className="text-sm text-blue-600">Our blog</span>
          </div>

          <h2 className="mx-auto mt-4 max-w-sm text-4xl leading-tight tracking-tight">
            Explore insights and stay ahead
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-neutral-700">
            Our blog features insights from our team of consultants, who share
            their best practices on a wide range of topics.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
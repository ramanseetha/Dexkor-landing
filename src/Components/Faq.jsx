import React from "react";

// Avatar imports
import jordanImg from "../n-1.jpeg";
import rileyImg from "../n-2.jpeg";
import samImg from "../Abhishek Mangaraj - Unicommerce.jpeg";
import taylorImg from "../Nitin Yadav - Squareops.jpeg";
import alexImg from "../Sunil Kumar - Zopping.jpeg";
import morganImg from "../sri.jpeg";

const testimonials = [
  {
    name: "Naina Deo",
    role: "Head - Escalations & ORM",
    company: "RapidShyp",
    image: jordanImg,
    linkedin: "https://www.linkedin.com/in/naina-deo-87924762/",
    website: "https://www.rapidshyp.com/",
    quote:
      "DexKor HelpDesk has significantly improved how we manage support operations. With better SLA tracking and clearer visibility into tickets and escalations, our team is able to respond faster and more proactively.",
  },
  {
    name: "Lingraj Maisalgi",
    role: "Operations Head",
    company: "Zopping",
    image: rileyImg,
    linkedin: "https://www.linkedin.com/in/lingrajmaisalgi/",
    website: "https://zopping.com/",
    quote:
      "DexKor has helped us bring structure across onboarding, support, and ongoing account management. From day-one onboarding to day-to-day support and account visibility, our operations are now far more organized and proactive.",
  },
  {
    name: "Abhishek Mangaraj",
    role: "Sr. Director Operations",
    company: "Unicommerce",
    image: samImg,
    linkedin: "https://www.linkedin.com/in/abhishekmangaraj/",
    website: "https://unicommerce.com/",
    quote:
      "AccountCare delivers a single customer view, clear account visibility, health monitoring, and growth tracking. It powers structured, proactive CS strategies at scale.",
  },
  {
    name: "Nitin Yadav",
    role: "Co-Founder",
    company: "Squareops & Atmosly",
    image: taylorImg,
    linkedin: "https://www.linkedin.com/in/nitinyadav745/",
    website: ["https://squareops.com/", "https://atmosly.com/"],
    quote:
      "As a founder, SalesHub has helped me get a clear view of our sales pipeline without constant follow-ups. It’s brought much-needed structure and clarity to how we manage deals and sales activities.",
  },
  {
    name: "Sunil Kumar",
    role: "Sales Director",
    company: "Zopping",
    image: alexImg,
    linkedin: "https://www.linkedin.com/in/sunil-kumar-72078b3asunil3021/",
    website: "https://zopping.com/",
    quote:
      "SalesHub has given our sales team much better visibility into deals and follow-ups. It’s helped us bring structure to our sales process and ensure nothing slips through the cracks as the team scales.",
  },
  {
    name: "Sri Ethiraj",
    role: "Chief Executive Officer",
    company: "Getnos.io",
    image: morganImg,
    linkedin: "https://www.linkedin.com/in/sriethiraj/",
    website: "https://getnos.io/",
    quote:
      "DexKor CRM is clean, sharp, and built for execution.No fluff. No confusion. It brings clarity to sales, follow-ups, and decision-making. If you want control over your pipeline without chaos, this works.",
  },
];

export default function TestimonialsWall() {
  return (
    <section className="w-full bg-white py-6 sm:py-10">
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative flex flex-col bg-white border border-[#e6ebf5]
                         rounded-2xl p-6 sm:p-7
                         shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
            >
              {/* Quote */}
              <p className="text-[16px] text-neutral-700 leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="mt-5 flex gap-1.5">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#ff7a00"
                  >
                    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.96 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <p className="text-[16px] font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-[15px] text-neutral-500">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* LinkedIn + Website icons */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {/* LinkedIn */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="h-7 w-7 flex items-center justify-center rounded bg-[#0A66C2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-4 w-4"
                  >
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.69H9.35V9h3.4v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.52 0 4.17 2.32 4.17 5.34v6.4zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>

                {/* Website */}
                <a
                  href={Array.isArray(t.website) ? t.website[0] : t.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Company website"
                  className="h-7 w-7 flex items-center justify-center rounded bg-neutral-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-4 w-4"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.95a15.7 15.7 0 00-1.1-4.14A8.03 8.03 0 0119.93 11zM12 4c.9 1.2 1.7 3.1 2.1 5H9.9C10.3 7.1 11.1 5.2 12 4zM4.07 13h3.95c.2 1.5.6 3 1.1 4.14A8.03 8.03 0 014.07 13zM4.07 11A8.03 8.03 0 018.02 6.86 15.7 15.7 0 006.92 11H4.07zm7.93 9c-.9-1.2-1.7-3.1-2.1-5h4.2c-.4 1.9-1.2 3.8-2.1 5zm2.98-2.86c.5-1.14.9-2.64 1.1-4.14h3.95a8.03 8.03 0 01-5.05 4.14z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

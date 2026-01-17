import React, { useState, useEffect } from "react";

// Images
import morganImg from "../n-1.jpeg";
import rileyImg from "../n-2.jpeg";
import taylorImg from "../Abhishek Mangaraj - Unicommerce.jpeg";
import alexImg from "../Nitin Yadav - Squareops.jpeg";
import morgaanImg from "../Sunil Kumar - Zopping.jpeg";
import sriImg from "../sri.jpeg";

const testimonials = [
  {
    quote:
      "DexKor HelpDesk has significantly improved how we manage support operations. With better SLA tracking and clearer visibility into tickets and escalations, our team is able to respond faster and more proactively.",
    name: "Naina Deo",
    role: "Head – Escalations & ORM, RapidShyp",
    image: morganImg,
    linkedin: "https://www.linkedin.com/in/naina-deo-87924762/",
    website: "https://www.rapidshyp.com/",
  },
  {
    quote:
      "DexKor has helped us bring structure across onboarding, support, and ongoing account management. From day-one onboarding to day-to-day support and account visibility, our operations are now far more organized and proactive.",
    name: "Lingraj Maisalgi",
    role: "Operations Head, Zopping",
    image: rileyImg,
    linkedin: "https://www.linkedin.com/in/lingrajmaisalgi/",
    website: "https://zopping.com/",
  },
  {
    quote:
      "AccountCare delivers a single customer view, clear account visibility, health monitoring, and growth tracking. It powers structured, proactive CS strategies at scale.",
    name: "Abhishek Mangaraj",
    role: "Sr. Director – Operations, Unicommerce",
    image: taylorImg,
    linkedin: "https://www.linkedin.com/in/abhishekmangaraj/",
    website: "https://unicommerce.com/",
  },
  {
    quote:
      "As a founder, SalesHub has helped me get a clear view of our sales pipeline without constant follow-ups. It’s brought much-needed structure and clarity to how we manage deals and sales activities.",
    name: "Nitin Yadav",
    role: "Co-Founder, Squareops & Atmosly",
    image: alexImg,
    linkedin: "https://www.linkedin.com/in/nitinyadav745/",
    website: "https://squareops.com/",
  },
  {
    quote:
      "SalesHub has given our sales team much better visibility into deals and follow-ups. It’s helped us bring structure to our sales process and ensure nothing slips through the cracks as the team scales.",
    name: "Sunil Kumar",
    role: "Sales Director, Zopping",
    image: morgaanImg,
    linkedin: "https://www.linkedin.com/in/sunil-kumar-72078b3asunil3021/",
    website: "https://zopping.com/",
  },
  {
    quote:
      "DexKor CRM is clean, sharp, and built for execution. No fluff. No confusion. It brings clarity to sales, follow-ups, and decision-making. If you want control over your pipeline without chaos, this works.",
    name: "Sri Ethiraj",
    role: "Chief Executive Officer, Getnos.io",
    image: sriImg,
    linkedin: "https://www.linkedin.com/in/sriethiraj/",
    website: "https://getnos.io/",
  },
];

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-[#ff7a00]">
      <path d="M10 15.3 15.1 18l-1.4-5.9L18 8.9l-6-.5L10 3 8 8.4l-6 .5 4.3 3.2L4.9 18l5.1-2.7z" />
    </svg>
  );
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="w-full bg-[#f7f7fb]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 lg:py-14 text-center">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[30px] font-extrabold text-neutral-900">
          DexKor Is The Game-Changer Our Team Needed
          <br className="hidden sm:block" />
          5 Stars All The Way!
        </h2>

        <div className="relative mt-10 max-w-3xl mx-auto">
          <div className="bg-[#f7f7fb] shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-6 sm:p-10">
            <p className="text-[14px] sm:text-[16px] text-neutral-700">
              “{t.quote}”
            </p>

            <div className="mt-5 flex justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            {/* AUTHOR SECTION (FIXED) */}
            <div className="mt-4 flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border"
              />

              {/* Name + Icons */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[14px] font-semibold text-neutral-900">
                  {t.name}
                </span>

                {/* LinkedIn */}
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 w-6 flex items-center justify-center rounded bg-[#0A66C2]"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.69H9.35V9h3.4v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.52 0 4.17 2.32 4.17 5.34v6.4zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>

                {/* Website */}
                <a
                  href={t.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 w-6 flex items-center justify-center rounded bg-neutral-900"
                  aria-label="Website"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.95a15.7 15.7 0 00-1.1-4.14A8.03 8.03 0 0119.93 11zM12 4c.9 1.2 1.7 3.1 2.1 5H9.9C10.3 7.1 11.1 5.2 12 4z" />
                  </svg>
                </a>
              </div>

              <p className="text-[12px] text-neutral-500 mt-1">
                {t.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

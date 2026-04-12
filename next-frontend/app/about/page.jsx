"use client";
import { useState } from "react";
import Image from "next/image";

const TIMELINE = [
  {
    year: "Early Career",
    label: "Beginnings",
    title: "Foundations in Social Thought",
    description:
      "Shabbir Alam Khan began his intellectual journey rooted in Islamic ethics and social philosophy, developing a framework that integrates faith, morality, and practical community responsibility.",
    details: [
      "Immersed in the study of Islamic social philosophy",
      "Built a personal framework connecting spiritual insight with civic responsibility",
      "Began engaging scholars and community leaders on questions of morality and identity",
    ],
  },
  {
    year: "Jamaat-e-Islami",
    label: "Organizational Role",
    title: "Leadership within Jamaat-e-Islami Hind",
    description:
      "Joined and rose to an active leadership role within Jamaat-e-Islami Hind, one of India's prominent Islamic socio-political organizations focused on ethical values and social development.",
    details: [
      "Contributed to intellectual and organizational direction",
      "Championed programs on social harmony and human development",
      "Served as a bridge between scholarly discourse and community practice",
    ],
  },
  {
    year: "Youth Work",
    label: "Community",
    title: "Engaging the Next Generation",
    description:
      "Launched and supported initiatives aimed at youth — encouraging moral education, critical thinking, and an ethically grounded understanding of identity and social responsibility.",
    details: [
      "Organized dialogues with youth across academic and community institutions",
      "Promoted character, integrity, and civic accountability as foundations of progress",
      "Fostered networks of young thinkers around shared ethical values",
    ],
  },
  {
    year: "The Book",
    label: "Publication",
    title: "Human and Morality",
    description:
      "Authored Human and Morality — a comprehensive examination of the foundations of human ethics, the nature of moral responsibility, and the indispensable role of values in building a just and compassionate society.",
    details: [
      "Explores the philosophical foundations of human ethics",
      "Argues for character, integrity, and accountability as pillars of human progress",
      "Bridges Islamic ethical tradition with contemporary social concerns",
    ],
  },
  {
    year: "Present",
    label: "Today",
    title: "Continuing Dialogue",
    description:
      "Continues to engage scholars, civic groups, and the wider public on morality, identity, and social responsibility — contributing articles, talks, and organizational leadership across India.",
    details: [
      "Active writer and speaker on faith and contemporary social questions",
      "Engages media, academia, and community organizations",
      "Advocates for ethical principles as a guide in an increasingly complex world",
    ],
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TIMELINE[activeIndex];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ── Hero ── */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

          {/* Left: Identity */}
          <div className="flex-1 max-w-xl">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Social Thinker · Writer · Organizational Leader
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              Shabbir Alam Khan
            </h1>
            <p className="text-gray-400 text-base italic mb-8">
              Salahuddin Shabbir
            </p>
            <p className="text-gray-300 text-base leading-relaxed border-l-2 border-gray-700 pl-5">
              An Indian social thinker and writer associated with Jamaat-e-Islami
              Hind, engaged in intellectual, moral, and community-oriented
              initiatives that connect faith with practical social concerns.
            </p>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-2xl">
              <Image
                src="/images/skm.jpeg"
                alt="Shabbir Alam Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Bio Blocks ── */}
      <div className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Block 1 */}
            <div className="border-t-2 border-black pt-6">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Who He Is
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Shabbir Alam Khan is an Indian social thinker, writer, and
                organizational leader. With a deep interest in the relationship
                between faith, morality, and contemporary society, he has
                dedicated his career to exploring how ethical principles can
                guide individuals and communities.
              </p>
            </div>

            {/* Block 2 */}
            <div className="border-t-2 border-black pt-6">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                His Work
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Associated with Jamaat-e-Islami Hind, he focuses on promoting
                ethical values, social harmony, and human development. His work
                reflects a balanced approach that integrates spiritual insight
                with practical social concerns — engaging scholars, youth, and
                the wider community in thoughtful dialogue.
              </p>
            </div>

            {/* Block 3 */}
            <div className="border-t-2 border-black pt-6">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Human and Morality
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                He is the author of{" "}
                <span className="font-semibold text-black">
                  Human and Morality
                </span>
                , in which he explores the foundations of human ethics, the
                importance of moral responsibility, and the role of values in
                shaping a just and compassionate society. The book emphasises
                character, integrity, and accountability as essential pillars
                of human progress.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Interactive Timeline ── */}
      <div className="bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">

          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-12">
            Journey
          </h2>

          {/* Year Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {TIMELINE.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setActiveIndex(i)}
                className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-200 ${
                  activeIndex === i
                    ? "bg-white text-black font-semibold"
                    : "text-gray-500 hover:text-white border border-gray-800 hover:border-gray-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: milestone info */}
            <div key={activeIndex} className="animate-fade-in">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">
                {active.year}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
                {active.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Right: bullet details */}
            <div className="space-y-4">
              {active.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Progress bar */}
          <div className="mt-14 flex gap-1.5">
            {TIMELINE.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-white" : "bg-gray-800 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;

"use client";
import Image from "next/image";

const TIMELINE = [
  {
    year: "Early Career",
    label: "Beginnings",
    title: "Foundations in Social Thought",
    description:
      "Shabbir Alam Khan began his intellectual journey rooted in Islamic ethics and social philosophy, developing a framework that integrates faith, morality, and practical community responsibility.",
  },
  {
    year: "Jamaat-e-Islami",
    label: "Organizational Role",
    title: "Leadership within Jamaat-e-Islami Hind",
    description:
      "Joined and rose to an active leadership role within Jamaat-e-Islami Hind, one of India's prominent Islamic socio-political organizations focused on ethical values and social development.",
  },
  {
    year: "Youth Work",
    label: "Community",
    title: "Engaging the Next Generation",
    description:
      "Launched and supported initiatives aimed at youth — encouraging moral education, critical thinking, and an ethically grounded understanding of identity and social responsibility.",
  },
  {
    year: "The Book",
    label: "Publication",
    title: "Human and Morality",
    description:
      "Authored Human and Morality — a comprehensive examination of the foundations of human ethics, the nature of moral responsibility, and the indispensable role of values in building a just and compassionate society.",
  },
  {
    year: "Present",
    label: "Today",
    title: "Continuing Dialogue",
    description:
      "Continues to engage scholars, civic groups, and the wider public on morality, identity, and social responsibility — contributing articles, talks, and organizational leadership across India.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* ── Hero ── */}
      <div className="bg-black text-white">
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
      </div>

      {/* ── Alternating Timeline ── */}
      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

          <h2 className="text-xs uppercase tracking-widest text-gray-400 text-center mb-16">
            Journey
          </h2>

          <div className="relative">
            {/* Center vertical line — desktop only */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={item.year} className="relative grid grid-cols-1 md:grid-cols-[1fr_32px_1fr] items-start gap-4 md:gap-0">

                    {/* LEFT column */}
                    <div className="md:pr-10 flex md:justify-end">
                      {isEven ? (
                        /* Date pill on left for even rows */
                        <span className="bg-black text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap mt-2 hidden md:inline-block">
                          {item.year}
                        </span>
                      ) : (
                        /* Card on left for odd rows */
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 w-full shadow-sm hidden md:block">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                          <h3 className="text-base font-semibold text-black mb-3 leading-snug">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* CENTER dot */}
                    <div className="hidden md:flex justify-center pt-2.5">
                      <div className="w-4 h-4 rounded-full bg-gray-50 border-2 border-gray-400 z-10 flex-shrink-0" />
                    </div>

                    {/* RIGHT column */}
                    <div className="md:pl-10">
                      {isEven ? (
                        /* Card on right for even rows */
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 w-full shadow-sm">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                          <h3 className="text-base font-semibold text-black mb-3 leading-snug">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      ) : (
                        <>
                          {/* Date pill on right for odd rows — desktop */}
                          <span className="bg-black text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap mt-2 hidden md:inline-block">
                            {item.year}
                          </span>
                          {/* Card visible on mobile for odd rows */}
                          <div className="bg-white border border-gray-100 rounded-2xl p-6 w-full shadow-sm md:hidden">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                            <h3 className="text-base font-semibold text-black mb-3 leading-snug">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                          </div>
                        </>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bio Blocks ── */}
      <div className="bg-white">
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

    </div>
  );
};

export default About;

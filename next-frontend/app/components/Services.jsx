import { FaLaptopCode, FaMobileAlt, FaPalette, FaCode } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "UX & UI",
      description: "Designing intuitive interfaces.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Web & Mobile App",
      description: "Web and mobile app development.",
    },
    {
      icon: <FaPalette />,
      title: "Design & Creative",
      description: "Visually stunning designs.",
    },
    {
      icon: <FaCode />,
      title: "Development",
      description: "Bringing visions to life.",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center">
        Collaborate with brands and agencies
      </h2>
      <div className="flex justify-around mt-8">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

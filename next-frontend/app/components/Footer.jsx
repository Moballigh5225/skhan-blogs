import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-black  border  py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">شبير عالم خان</h1>
            {/* <h2 className="text-2xl font-bold mb-4">SHABBIR ALAM KHAN</h2> */}
            {/* <p className="text-gray-400 leading-relaxed">
              IS A PROMINENT INDIAN MOTIVATIONAL SPEAKER BUT ALSO A REFORMER,
              GREAT CONTEMPORARY TEACHER, LIFE COACH, AND A CORPORATE TRAINER.
            </p> */}
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end">
            <div className="md:text-right">
              <h2 className="text-xl font-bold mb-4"></h2>
              <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4">
                <li>
                  <Link
                    href="/facebook"
                    style={{
                      color: "#4b5563", // Tailwind's gray-600
                      transition:
                        "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                      display: "inline-block", // Ensure the transform applies correctly
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "black"; // Change color on hover
                      e.currentTarget.style.transform = "scale(1.1)"; // Increase scale for pop out effect
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4b5563"; // Reset color
                      e.currentTarget.style.transform = "scale(1)"; // Reset scale
                    }}
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="/twitter"
                    style={{
                      color: "#4b5563",
                      transition:
                        "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                      display: "inline-block", // Ensure the transform applies correctly
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "black";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4b5563";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/linkedin"
                    style={{
                      color: "#4b5563",
                      transition:
                        "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                      display: "inline-block", // Ensure the transform applies correctly
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "black";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4b5563";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="  border-gray-700 mt-6 pt-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

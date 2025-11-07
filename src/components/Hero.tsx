import { Stethoscope, Calendar, Users } from "lucide-react";
// import Bg from '../../public/frontview.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      {/* <img
        // src={Bg}
        alt="Darshan Medical Centre front view"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        aria-hidden
      /> */}

      {/* Overlay & Texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5CE3F0] via-[#E30613]/30 to-[#FFFFFF]/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      {/* Floating Glow Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#5CE3F0]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#E30613]/10 rounded-full blur-2xl animate-pulse" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-neutral-white leading-tight tracking-tight">
            Welcome to Darshan Medical Centre
            <span className="block text-2xl md:text-3xl bg-gradient-to-r from-[#5CE3F0] to-[#E30613] bg-clip-text text-transparent italic my-8">
              Compassionate Care in the Heart of Puducherry
            </span>
          </h1>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 my-4 md:my-8">
            {/* Expert Doctors */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg ring-1 ring-[#5CE3F0]/40 min-w-[180px] justify-center">
              <Stethoscope className="w-5 h-5 text-[#5CE3F0] mr-2 shrink-0" />
              <span className="text-white/90 font-medium text-sm sm:text-base">
                Expert Doctors
              </span>
            </div>

            {/* Easy Appointments */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg ring-1 ring-[#5CE3F0]/40 min-w-[180px] justify-center">
              <Calendar className="w-5 h-5 text-[#E30613] mr-2 shrink-0" />
              <span className="text-white/90 font-medium text-sm sm:text-base">
                Easy Appointments
              </span>
            </div>

            {/* Patient-Centered Care */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg ring-1 ring-[#5CE3F0]/40 min-w-[180px] justify-center">
              <Users className="w-5 h-5 text-[#FFD700] mr-2 shrink-0" />
              <span className="text-white/90 font-medium text-sm sm:text-base">
                Patient-Centered Care
              </span>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="p-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {[
              {
                iconColor: "#32ad72ff",
                title: "Prime Location",
                desc: "Easily accessible in the heart of Puducherry for all your healthcare needs.",
                iconPath:
                  "M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.657M21 21H3V8a2 2 0 012-2h14a2 2 0 012 2v13z",
              },
              {
                iconColor: "#FFD700",
                title: "Advanced Facilities",
                desc: "Modern diagnostic tools and technology-driven treatment rooms for precision care.",
                iconPath:
                  "M9 17v-6h6v6m2 0a2 2 0 002-2v-6a2 2 0 00-2-2h-2l-2-2H9l-2 2H5a2 2 0 00-2 2v6a2 2 0 002 2h2",
              },
              {
                iconColor: "#b33900ff",
                title: "Easy Appointment Booking",
                desc: "Flexible appointment scheduling with both online and in-person options.",
                iconPath:
                  "M8 7V3m8 4V3m-9 8h10m-10 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                iconColor: "#5CE3F0",
                title: "24/7 Patient Support",
                desc: "Round-the-clock medical attention and guidance from our caring team.",
                iconPath: "M9 12h6m-3-3v6m-9 3h18",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gradient-to-br from-[#FDFDFD] via-[#F5FAFC] to-[#F9F9F9] p-10 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mb-3"
                  stroke={card.iconColor}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={card.iconPath}
                  />
                </svg>
                <span className="font-semibold text-lg mb-4 text-[#E30613]">
                  {card.title}
                </span>
                <span className="text-gray-600">{card.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;

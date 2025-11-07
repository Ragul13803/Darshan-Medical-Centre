import logo from '../../public/Darshan Medical Centre.jpeg'

const AboutSection = () => {
  return (
    <section className="mt-12">
      <div className="w-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 ring-1 ring-indigo-100/60 m-8 border-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* --- Title --- */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
            About Darshan Medical Centre
          </h2>

          {/* --- Logo --- */}
          <div className="flex-shrink-0 mt-10 md:mt-0 relative">
            <img
              src={logo}
              alt="Darshan Medical Centre logo"
              className="w-62 h-62 sm:w-40 sm:h-40 rounded-2xl border-4 border-violet-400 object-cover shadow-xl mx-auto my-6"
            />
          </div>

          {/* --- Intro Paragraph --- */}
          <p className="text-slate-600 text-center mt-2 max-w-4xl mx-auto">
            <span className="font-semibold">Darshan Medical Centre</span> is a trusted
            multispeciality healthcare facility located at 
            <span className="font-semibold"> 234, Bussy Street, MG Road Area, Puducherry – 605001</span>.  
            We are committed to providing compassionate, high-quality medical care
            with advanced facilities and a team of experienced doctors.
          </p>

          {/* --- Detailed Description --- */}
          <p className="text-lg opacity-90 my-8 leading-relaxed text-slate-700">
            <span className="font-semibold">Darshan Medical Centre</span> stands as one of
            Puducherry’s most reliable healthcare providers, offering
            personalized treatment in a patient-friendly environment. Conveniently
            situated in the heart of the city, our centre combines modern medical
            technology with compassionate service to deliver the best possible
            outcomes for patients of all ages.
            <br /><br />
            Our facility is equipped with advanced diagnostic tools, fully sanitized
            consultation rooms, and emergency care support. We cover a wide range of
            medical services including general medicine, cardiology, ENT, physiotherapy,
            diabetology, and preventive health check-ups.
            <br /><br />
            Founded with the mission of delivering accessible and affordable healthcare,
            <span className="font-semibold"> Darshan Medical Centre</span> emphasizes
            preventive medicine and community well-being. Our doctors and staff strive to
            ensure every patient receives personalized attention, transparent communication,
            and follow-up care.
            <br /><br />
            Whether you’re visiting for a consultation, diagnostics, or specialized treatment,
            we aim to make your healthcare journey comfortable, professional, and reassuring.
          </p>

          {/* --- Highlights --- */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
              <h3 className="font-semibold text-slate-900">Comprehensive Care</h3>
              <p className="text-slate-600 text-sm mt-1">
                Multispeciality services under one roof — from general consultation
                to advanced diagnostics and treatment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
              <h3 className="font-semibold text-slate-900">Experienced Medical Team</h3>
              <p className="text-slate-600 text-sm mt-1">
                Our doctors and staff bring years of experience in delivering
                accurate diagnosis and compassionate patient care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
              <h3 className="font-semibold text-slate-900">Modern Facilities</h3>
              <p className="text-slate-600 text-sm mt-1">
                Equipped with advanced equipment for precise diagnostics, efficient
                treatment, and a comfortable patient experience.
              </p>
            </div>
          </div>

          {/* --- Key Services --- */}
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center">
              Our Key Services
            </h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">General & Specialty Consultations</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Expert consultations in General Medicine, ENT, Cardiology, Diabetology,
                  and Physiotherapy. Our specialists focus on accurate diagnosis and
                  personalized treatment for every patient.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">Laboratory & Diagnostic Services</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Complete blood, urine, stool, and sputum investigations along with
                  microbiology and pathology testing. On-site lab ensures quick and
                  precise results.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">Imaging & Advanced Scans</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Equipped with modern diagnostic equipment including Ultrasound,
                  Podo Scans, VPT, ABI, ECG, and ECHO — for comprehensive health assessments.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">Preventive Health Check-ups</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Regular health packages for diabetes, heart care, allergy evaluation,
                  and general wellness — helping you stay proactive about your health.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">Physiotherapy & Rehabilitation</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Personalized physiotherapy sessions designed for post-surgery recovery,
                  joint pain relief, and mobility improvement — guided by skilled therapists.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow ring-1 ring-indigo-100/70">
                <h4 className="font-semibold text-slate-900">Community Health Camps</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Regular medical consultation camps offering free check-ups and
                  discounted investigations — promoting accessible healthcare for all.
                </p>
              </div>

            </div>
          </div>

          {/* --- Meet the Doctor --- */}
          <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Meet Our Doctor
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-indigo-100/70 inline-block text-left">
              <h4 className="font-semibold text-slate-900">Dr. Darshan Savery</h4>
              <p className="text-slate-600 text-sm mt-1">
                MBBS, MD — Founder & Chief Physician
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Dr. Darshan Savery is dedicated to providing quality healthcare through
                compassionate patient care, accurate diagnosis, and ethical medical practice.
                His vision is to make advanced healthcare accessible to every individual in Puducherry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

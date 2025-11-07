const ContactSection = () => {
  return (
    <section className="mt-12">
      <div className="relative w-auto rounded-3xl overflow-hidden bg-gradient-to-r from-[#C6D7F0] via-[#DDE9DB] to-[#D4E8C8] m-4 sm:m-6 md:m-8 border-2">
        {/* Background Image */}
        {/* <img
          src="/Boatel%20Swim%20Pool%20View.png"
          alt="Boatel pool view"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          aria-hidden="true"
        /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl text-[#2E473B] font-extrabold">Contact Us</h2>
            <p className="text-[#2E473B] mt-2 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
  We’d love to hear from you! Whether you’d like to book an appointment, 
  inquire about our medical services, or need assistance with healthcare guidance, 
  our team is here to help. Visit or contact us at 
  <span className="font-semibold"> Darshan Medical Centre, 234, Bussy St, MG Road Area, Puducherry – 605001</span>. 
  We’re committed to providing compassionate, reliable, and personalized medical care for every patient.
</p>

          </div>

          {/* Contact Info + Map */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10 items-start">
            {/* Contact Info Card */}
            <div className="flex flex-col gap-5 bg-white/10 backdrop-blur rounded-2xl px-6 sm:px-8 py-8 sm:py-10 ring-1 ring-white/20 shadow-lg">
              <div className="space-y-3 text-base sm:text-lg leading-relaxed text-[#2E473B]">
                <div>
                  <b>Phone:</b>{" "}
                  <a href="tel:8248614031" className="underline">
                    +91 82486 14031
                  </a>
                  {/* {" "}
                  /{" "}
                  <a href="tel:9047856736" className="underline">
                    +91 90478 56736
                  </a>{" "}
                  /{" "}
                  <a href="tel:04132975667" className="underline">
                    0413 2975667
                  </a> */}
                </div>

                <div>
                  <b>Address:</b>
                  <br />
                  234, Bussy St, <br />MG Road Area, <br />Puducherry, 605001

                </div>

                <div>
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:savery.medical.centre@gmail.com"
                    className="underline"
                  >
                    savery.medical.centre@gmail.com
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="tel:9047047567"
                  className="bg-white text-indigo-700 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-50 transition-colors shadow w-full sm:w-auto text-center"
                >
                  Call Now
                </a>
                {/* <a
                  href="https://wa.me/8248614031"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white font-semibold px-5 py-2 rounded-xl hover:bg-green-600 transition-colors shadow w-full sm:w-auto text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="/search"
                  className="bg-indigo-800 text-white font-semibold px-5 py-2 rounded-xl hover:bg-indigo-900 transition-colors shadow w-full sm:w-auto text-center"
                >
                  Book Appoitment
                </a> */}
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 sm:h-80 md:h-[350px] rounded-2xl overflow-hidden shadow-xl border-2 border-indigo-400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.639637495553!2d79.82520099999999!3d11.9301479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361000d21d1d7%3A0xd95a4928e135a822!2sDarshan%20Medical%20Centre%20%26%20Savery%20Labs%20(*2A13%20Groups)!5e0!3m2!1sen!2sin!4v1762449912047!5m2!1sen!2sin"               
                width="100%"
                height="100%"
                loading="lazy"
                title="Darshan Medical Centre Location"
                className="border-0"
              ></iframe>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.633032425007!2d79.82269587453179!3d11.930606736846592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361007efe50e1%3A0x384c3af8573b107a!2sDestiny%20Dreamz%20Villa!5e0!3m2!1sen!2sin!4v1762061345007!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

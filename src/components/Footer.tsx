import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  
} from "lucide-react";
// import logo from '../../public/Darshan Medical Centre.png'

const Footer = () => {
  return (
<footer className="bg-gradient-to-b from-[#C6D7F0] via-[#DDE9DB] to-[#D4E8C8] text-[#2E473B] py-10">
  <div className="max-w-full px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <img 
          src={'/public/Darshan Medical Centre.jpeg'}
           className="h-14 w-14 rounded-lg" />
          <span className="text-2xl font-bold text-[#3E9A6C]">Darshan Medical Centre</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-[#3E9A6C] hover:text-[#FFD94F] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#3E9A6C] hover:text-[#FFD94F] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#3E9A6C] hover:text-[#F8AFC3] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#3E9A6C] hover:text-[#F8AFC3] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#3E9A6C]">Quick Links</h3>
        <ul className="space-y-2">
          {["Home", "Hotels", "Destinations", "About Us", "Contact"].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#2E473B] hover:text-[#3E9A6C] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#3E9A6C]">Support</h3>
        <ul className="space-y-2">
          {["Help Center", "Booking Guide", "Cancellation Policy", "Privacy Policy", "Terms of Service"].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#2E473B] hover:text-[#3E9A6C] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#3E9A6C]">Contact Us</h3>
        <div className="space-y-3 text-[#2E473B]">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-[#3E9A6C]" />
            <span>savery.medical.centre@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-[#3E9A6C]" />
            <span>+91 82486 14031</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-10 text-[#3E9A6C]" />
            <span>
              234, Bussy St, <br />MG Road Area, <br />Puducherry, 605001
              {/* 131, Kandappa Mudaliar St, MG Road Area, <br />Puducherry - 605001 */}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-[#3E9A6C]/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-[#2E473B]/80 text-sm">
        © 2025 Darshan Medical Centre. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[#2E473B]/80 hover:text-[#3E9A6C] text-sm transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;

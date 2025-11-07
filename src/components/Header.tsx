import {  useNavigate } from "react-router-dom";
// import {
//   FileText,
//   Activity,
//   BarChart3,
//   Building2,
//   Calendar,
//   LogIn,
// } from "lucide-react";

// import logo from '../../public/Darshan Medical Centre.png'

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Clear search context when going to home page
    // search.clearSearchValues();
    navigate("/");
  };

  return (
    <>
     <header className="bg-gradient-to-r from-[#5CE3F0] via-[#E30613]/30 to-[#FFFFFF]/40 shadow-lg sticky top-0 z-50">
  <div className="max-w-full px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-3">
      {/* Logo */}
      <button
        onClick={handleLogoClick}
        className="flex items-center space-x-2 group"
      >
        <div className="rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
          <img 
          src={'/public/Darshan Medical Centre.jpeg'}
           className="h-12 w-12 rounded-lg" />
        </div>
        <span className="text-2xl font-bold text-[#2E473B] tracking-tight group-hover:text-[#3E9A6C] transition-colors">
          Darshan Medical Centre
        </span>
      </button>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {["Home", "About Us", "Contact Us"].map((link) => (
          <a
            key={link}
            href={link === "Home" ? "/" : `#${link.toLowerCase().replace(" ", "")}`}
            className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
          >
            {link}
          </a>
        ))}
{/* 
        {isLoggedIn ? (
          <>
            <Link
              className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
              to="/analytics"
            >
              <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Analytics
            </Link>

            <Link
              className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
              to="/my-bookings"
            >
              <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              My Bookings
            </Link>

            <Link
              className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
              to="/my-hotels"
            >
              <Building2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              My Hotels
            </Link>

            <Link
              className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
              to="/api-docs"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              API Docs
            </Link>

            <Link
              className="flex items-center text-[#2E473B]/90 hover:text-[#3E9A6C] px-4 py-2 rounded-lg font-medium hover:bg-[#C6D7F0]/20 transition-all duration-200 group"
              to="/api-status"
            >
              <Activity className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              API Status
            </Link>

            <SignOutButton />
          </>
        ) : (
          <Link
            to="/sign-in"
            className="flex items-center bg-[#3E9A6C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2E473B] hover:shadow-md transition-all duration-200 group"
          >
            <LogIn className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Sign In
          </Link>
        )} */}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-[#2E473B] p-2 rounded-lg hover:bg-[#C6D7F0]/20 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

    </>
  );
};

export default Header;

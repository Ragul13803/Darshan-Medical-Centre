import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";

const Home = () => {
  // const handleSearch = (searchData: any) => {
  //   console.log("Search initiated with:", searchData);
  // };

  const str = 'hello world'
  const words = str.split(' ')
  
  console.log(words.map(word => word.split('').at(0)?.toLocaleUpperCase()))

  return (
    <>
      <Hero
      //  onSearch={handleSearch}
        />

        {/* Gallery */}
        <GallerySection />

         {/* About Section - Full width band with content grid */}
         

        
        

        {/* About Us Section */}
        <AboutSection />

        {/* Contact Us Section */}
        <ContactSection />
    </>
  );
};

export default Home;

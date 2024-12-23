
import Footer from "./component/Footer";
import ContactBanner from "./component/ContactBanner";
import Navbar from "./component/Navbar";
import NewCollection from "./component/NewCollection";
import Editorpick from "./component/Editorpick";
import Greenbanner from "./component/Greenbanner";
import NeuralUniverse from "./component/NeuralUniverse";
import FeaturedPost from "./component/FeaturedPost";

export default function Home() {
  return (
    <div>
      <ContactBanner />
      <Navbar />
      <NewCollection />
      <Editorpick />
      <Greenbanner />
      <NeuralUniverse />
      <FeaturedPost />
      {/* <HeroSection /> */}
      <Footer />
    </div>
  );
}

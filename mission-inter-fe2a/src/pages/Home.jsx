import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home({ cards }) {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <Intro />
        <VideoList cards={cards} />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default Home;

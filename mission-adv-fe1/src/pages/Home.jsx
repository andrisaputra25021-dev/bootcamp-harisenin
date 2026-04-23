import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import useCourses from "../hooks/useCourses";

function Home() {
  const { courses, loading, error } = useCourses();

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <Intro />
        {loading && <p className="text-center py-10">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <VideoList cards={courses} />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default Home;

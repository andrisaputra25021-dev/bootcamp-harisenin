import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import VideoList from "../components/VideoList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import useCourseStore from "../store/useCourseStore";
import { useEffect } from "react";
import { getCourses } from "../services/api/cardsAPI";
import { useSelector, useDispatch } from "react-redux";
import { setCourses, setLoading, setError } from "../store/redux/courseSlice";

function Home() {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getCourses();
        dispatch(setCourses(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
        <Intro />
        <VideoList cards={courses ?? []} />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default Home;

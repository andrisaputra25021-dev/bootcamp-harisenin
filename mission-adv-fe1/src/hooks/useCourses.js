import { useState, useEffect } from "react";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../services/api/cardsAPI";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // get all cards
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //tambah card
  const createCourse = async (newCourse) => {
    try {
      const data = await addCourse(newCourse);
      setCourses((prev) => [...prev, data]);
    } catch (err) {
      setError(err.message);
    }
  };

  //update card
  const editCourse = async (id, updatedCourse) => {
    try {
      const data = await updateCourse(id, updatedCourse);
      setCourses((prev) =>
        prev.map((course) => (course.id === id ? data : course)),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  //delete card
  const removeCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    createCourse,
    editCourse,
    removeCourse,
  };
};

export default useCourses;

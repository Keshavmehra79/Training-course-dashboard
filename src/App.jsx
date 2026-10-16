
import { useState } from "react";
import CourseList from "./Components/CourseList";
import CourseDetails from "./Components/CourseDetails";
import initialCourses from "./data/course"
function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedCourseId, setSelectedCourseId] = useState(null);
        //demo
        // const ans=courses.filter((key)=>key.progress==100)

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId
  );

  function markCompleted(id) {
    setCourses((previousCourses) =>
      previousCourses.map((course) =>
        course.id === id
          ? { ...course, progress: 100 }
          : course
      )
    );
  }

  return (
  
    <div className="min-h-screen bg-blue-100 text-slate-800">
      <header className="border-b border-slate-200 bg-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <h1 className="text-2xl italic font-bold text-black-700">
            LearnHub
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Your personal learning dashboard
          </p>
        </div>
      </header>


      <main className="mx-auto max-w-6xl px-5 py-8">
        <section className="mb-8">
          <p className="mb-2 text-sm font-semibold text-blue-600">
            MY LEARNING
          </p>

          <h2 className="text-3xl font-bold">
            Training Course Dashboard
          </h2>

          <p className="mt-2 text-slate-500">
            Continue learning and track your progress.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Courses</p>
            <h3 className="mt-2 text-3xl font-bold">
              {courses.length}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Completed</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {courses.filter((course) => course.progress === 100).length}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">In Progress</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {courses.filter(
                (course) =>
                  course.progress > 0 && course.progress < 100
              ).length}
            </h3>
          </div>
        </section>

        <section className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 sm:w-52"
            >
              <option value="All">All Categories</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">
            Available Courses
          </h2>

          <CourseList
            courses={filteredCourses}
            onView={setSelectedCourseId}
            onComplete={markCompleted}
          />
        </section>

        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedCourseId(null)}
        />
      </main>
    </div>
  );
}

export default App;

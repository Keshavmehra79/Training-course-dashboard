
import CourseCard from "./CourseCard";

function CourseList({ courses, onView, onComplete }) {
  if (courses.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-800">
          No courses found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Try another search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onView={onView}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default CourseList;

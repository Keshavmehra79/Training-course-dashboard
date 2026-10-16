
function CourseCard({ course, onView, onComplete }) {
  const isCompleted = course.progress === 100;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {course.category}
        </span>

        <span className="text-sm font-semibold text-slate-600">
          {course.progress}%
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-800">
        {course.title}
      </h3>

      <p className="mb-5 mt-2 text-sm leading-6 text-slate-500">
        {course.description}
      </p>

      <div className="mb-5 h-2 w-full rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${
            isCompleted ? "bg-green-500" : "bg-blue-600"
          }`}
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => onView(course.id)}
          className="w-full rounded-lg border border-blue-600 py-2 font-medium text-blue-600 hover:bg-blue-50"
        >
          View Details
        </button>

        <button
          onClick={() => onComplete(course.id)}
          disabled={isCompleted}
          className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-green-100 disabled:text-green-700"
        >
          {isCompleted ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

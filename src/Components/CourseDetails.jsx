function CourseDetails({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <section className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Course Details</h2>

          <button
            onClick={onClose}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-100"
          >
            Close ✕
          </button>
        </div>

        <span className="mt-5 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {course.category}
        </span>

        <h3 className="mt-3 text-lg font-bold">{course.title}</h3>

        <p className="mt-2 leading-6 text-slate-500">
          {course.description}
        </p>

        <p className="mt-5 font-medium">
          Progress: {course.progress}%
        </p>

        <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
          <div
            className={`h-2 rounded-full ${
              course.progress === 100 ? "bg-green-500" : "bg-blue-600"
            }`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;
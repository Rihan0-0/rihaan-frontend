export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {/* Sessions Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 text-center" style={{ backgroundColor: "#7C4DFF" }}>
          <h3 className="text-lg font-bold text-white">Sessions</h3>
        </div>
        <div className="p-4 text-center">
          <p className="mt-2 text-sm text-gray-600 font-medium">
            April 20, 2024
          </p>
          <p className="text-gray-800 font-medium">
            Memorization:{" "}
            <span className="font-bold text-green-600">Very Good ✅</span>
          </p>
          <p className="text-gray-800 font-medium">
            Attendance:{" "}
            <span className="text-green-600 font-bold">Present</span>
          </p>
        </div>
      </div>

      {/* Exams Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 text-center" style={{ backgroundColor: "#FFD54F" }}>
          <h3 className="text-lg font-bold text-white">Exams</h3>
        </div>
        <div className="p-4 text-center">
          <p className="mt-2 text-gray-800 font-medium">Al-Baqara 1–5</p>
          <p className="text-gray-600 font-medium">May 5, 2024</p>
          <p className="text-3xl font-bold mt-2 text-gray-800">90</p>
        </div>
      </div>

      {/* Ranking Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 text-center" style={{ backgroundColor: "#26A69A" }}>
          <h3 className="text-lg font-bold text-white">Ranking</h3>
        </div>
        <div className="p-4 text-center">
          <div className="text-4xl mt-2">⭐</div>
          <p className="mt-2 text-gray-800 font-medium">Batch Rank</p>
          <p className="text-2xl font-bold" style={{ color: "#7C4DFF" }}>
            2nd
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function WelcomeCard() {
  // You can change this path to your actual student image
  const studentImagePath = "/images/students/Memorization.png";

  return (
    <div
      className="rounded-lg p-6 flex items-center shadow-md"
      style={{ backgroundColor: "#c2e2f1" }}
    >
      <div className="w-1/3 flex justify-center">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src={studentImagePath}
            alt="Student"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="w-2/3">
        <h2 className="text-xl font-bold text-gray-800">Welcome, Ahmed!</h2>
        <p className="text-gray-700 font-medium">Memorization Progress</p>
        <div className="w-full bg-white h-3 rounded mt-2 mb-1">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-lg font-bold text-gray-800">75%</p>
      </div>
    </div>
  );
}

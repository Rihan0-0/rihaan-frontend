import Image from "next/image";

export default function Header() {
  // You can change this path to your actual profile image
  const profileImagePath = "/images/profile/A1.png";

  return (
    <header className="bg-purple-600/95 backdrop-blur-sm text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Student Dashboard</h1>

      <div className="flex items-center space-x-6">
        <nav className="space-x-6">
          <a href="#" className="hover:text-purple-200 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-purple-200 transition-colors">
            Profile
          </a>
        </nav>

        {/* User Avatar */}
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors overflow-hidden">
         <Image src={profileImagePath} alt="Profile" width={40} height={40} className="rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
}

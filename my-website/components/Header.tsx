"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();

  // Determine the route type and user info
  const routeInfo = useMemo(() => {
    if (pathname.startsWith("/instructor/")) {
      return {
        type: "instructor",
        title: "أكاديمية ريحان - لوحة المعلم",
        userName: "الأستاذ أحمد محمد",
        userRole: "معلم",
        profileImage: "/images/profile/teacher.png",
        navItems: [
          { href: "/", label: "الرئيسية", icon: "🏠" },
          { href: "/instructor/1", label: "لوحة التحكم", icon: "📊" },
          { href: "/instructor/1/lectures", label: "المحاضرات", icon: "📖" },
          { href: "/instructor/1/students", label: "الطلاب", icon: "👥" },
          { href: "/instructor/1/evaluations", label: "التقييمات", icon: "📝" },
        ],
      };
    } else if (pathname.startsWith("/student/")) {
      return {
        type: "student",
        title: "أكاديمية ريحان - لوحة الطالب",
        userName: "أحمد محمد",
        userRole: "طالب",
        profileImage: "/images/profile/A1.png",
        navItems: [
          { href: "/", label: "الرئيسية", icon: "🏠" },
          { href: "/student/1", label: "لوحة التحكم", icon: "📊" },
          { href: "/student/1/progress", label: "التقدم", icon: "📈" },
          { href: "/student/1/schedule", label: "الجدول", icon: "📅" },
          { href: "/student/1/exams", label: "الامتحانات", icon: "📋" },
        ],
      };
    } else if (pathname.startsWith("/dashboard")) {
      return {
        type: "dashboard",
        title: "أكاديمية ريحان - لوحة التحكم",
        userName: "أحمد محمد",
        userRole: "مستخدم",
        profileImage: "/images/profile/A1.png",
        navItems: [
          { href: "/", label: "الرئيسية", icon: "🏠" },
          { href: "/dashboard", label: "لوحة التحكم", icon: "📊" },
          { href: "/dashboard/profile", label: "الملف الشخصي", icon: "👤" },
        ],
      };
    } else {
      return {
        type: "general",
        title: "أكاديمية ريحان",
        userName: null,
        userRole: null,
        profileImage: "/images/profile/default.png",
        navItems: [
          { href: "/", label: "الرئيسية", icon: "🏠" },
          { href: "/about", label: "من نحن", icon: "ℹ️" },
          { href: "/courses", label: "الدورات", icon: "📚" },
          { href: "/contact", label: "تواصل معنا", icon: "📞" },
        ],
      };
    }
  }, [pathname]);

  const getHeaderGradient = () => {
    switch (routeInfo.type) {
      case "instructor":
        return "bg-gradient-to-r from-emerald-600 to-teal-700";
      case "student":
        return "bg-gradient-to-r from-blue-600 to-indigo-700";
      case "dashboard":
        return "bg-gradient-to-r from-purple-600 to-purple-700";
      default:
        return "bg-gradient-to-r from-purple-600 to-purple-700";
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`${getHeaderGradient()} backdrop-blur-sm text-white p-4 card-shadow-lg border-b border-white/20`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Logo and User Info */}
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-white/80 transition-all duration-300 font-arabic flex items-center"
          >
            <span className="text-3xl ml-3">🕌</span>
            {routeInfo.title}
          </Link>

          {routeInfo.userName && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-semibold text-lg font-arabic">
                  مرحباً، {routeInfo.userName}
                </div>
                <div className="text-sm text-white/80 font-arabic">
                  {routeInfo.userRole}
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 overflow-hidden border-2 border-white/30 hover:border-white/50">
                <Image
                  src={routeInfo.profileImage}
                  alt="الملف الشخصي"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Row */}
        <nav className="border-t border-white/20 pt-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-2">
              {routeInfo.navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-arabic font-medium
                    ${
                      isActiveLink(item.href)
                        ? "bg-white/20 text-white shadow-md"
                        : "hover:bg-white/10 text-white/90 hover:text-white"
                    }
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Breadcrumb for specific routes */}
        {(routeInfo.type === "instructor" || routeInfo.type === "student") && (
          <div className="flex items-center gap-2 mt-3 text-sm text-white/70 font-arabic">
            <span>📍</span>
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>›</span>
            <span className="text-white">
              {routeInfo.type === "instructor" ? "لوحة المعلم" : "لوحة الطالب"}
            </span>
            {pathname.includes("/lectures") && (
              <>
                <span>›</span>
                <span className="text-white">المحاضرات</span>
              </>
            )}
            {pathname.includes("/students") && (
              <>
                <span>›</span>
                <span className="text-white">إدارة الطلاب</span>
              </>
            )}
            {pathname.includes("/progress") && (
              <>
                <span>›</span>
                <span className="text-white">التقدم الدراسي</span>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

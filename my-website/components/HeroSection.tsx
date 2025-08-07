import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-8 font-arabic leading-tight">
          أكاديمية ريحان لتحفيظ القرآن الكريم
        </h1>
        <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-arabic leading-relaxed">
          نحن نقدم تعليم القرآن الكريم بأحدث الطرق التعليمية مع متابعة دقيقة
          لتقدم كل طالب
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
          <div className="w-full md:w-1/2">
            <div
              className="rounded-3xl p-10 card-shadow-lg border border-white/20"
              style={{ backgroundColor: "rgba(194, 226, 241, 0.9)" }}
            >
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic">
                رؤيتنا
              </h2>
              <p className="text-gray-800 text-xl font-arabic leading-relaxed">
                إعداد جيل مؤمن متمسك بكتاب الله، قادر على حفظه وفهمه وتطبيقه في
                حياته اليومية
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="rounded-3xl p-10 card-shadow-lg border border-white/20"
              style={{ backgroundColor: "rgba(255, 213, 79, 0.9)" }}
            >
              <div className="text-5xl mb-6">📚</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic">
                رسالتنا
              </h2>
              <p className="text-gray-800 text-xl font-arabic leading-relaxed">
                تقديم تعليم قرآني متميز باستخدام أساليب حديثة ومتابعة شخصية لكل
                طالب
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

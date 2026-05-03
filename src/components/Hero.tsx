import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    title: "Медицина будущего начинается здесь",
    subtitle: "КрасГМУ — ведущий медицинский университет Сибири. 85 лет традиций, современная наука, тысячи врачей по всей России.",
    cta: "Поступить в 2025",
    ctaSecond: "Узнать подробнее",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/1574e0ea-805d-4f68-86e6-7e73247837de.jpg",
  },
  {
    title: "Подготовка врачей мирового уровня",
    subtitle: "Симуляционный центр, клинические базы, международное сотрудничество — всё для вашего профессионального роста.",
    cta: "Наши программы",
    ctaSecond: "Видео о вузе",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/245b130d-d6ee-4574-9d12-c044e3662d8b.jpg",
  },
]

const quickLinks = [
  { icon: "BookOpen", label: "Поступление в КрасГМУ", href: "#admission" },
  { icon: "Users", label: "Мастер-классы для школьников", href: "#masterclass" },
  { icon: "Award", label: "Конкурс научных работ", href: "#contest" },
  { icon: "GraduationCap", label: "Институт последипломного образования", href: "#postgrad" },
  { icon: "Shield", label: "Аккредитация специалистов", href: "#accreditation" },
  { icon: "Stethoscope", label: "Допуск к профессиональной деятельности", href: "#access" },
  { icon: "Building2", label: "Фармацевтический колледж", href: "#college" },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative">
      <div className="grid lg:grid-cols-[1fr_340px]" style={{ minHeight: "calc(100vh - 120px)" }}>
        {/* Main slider */}
        <div className="relative overflow-hidden bg-gray-900" style={{ minHeight: 520 }}>
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-14 pb-16 pt-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[hsl(345,75%,28%)] text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded mb-6">
                <Icon name="Star" size={12} />
                Входим в топ-20 медвузов России
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {slide.title}
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#admission"
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(345,75%,28%)] hover:bg-[hsl(345,75%,22%)] text-white font-semibold px-8 py-4 rounded transition-colors duration-200"
                >
                  <Icon name="ArrowRight" size={18} />
                  {slide.cta}
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-medium px-8 py-4 rounded transition-colors duration-200"
                >
                  {slide.ctaSecond}
                </a>
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-4 bg-white/40"}`}
                />
              ))}
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % slides.length)}
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name="ChevronRight" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links sidebar */}
        <div className="bg-white border-l border-gray-100 flex flex-col">
          <div className="bg-[hsl(345,75%,28%)] px-6 py-4">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
              <Icon name="LayoutGrid" size={16} />
              Быстрый доступ
            </h3>
          </div>
          <div className="flex-1 divide-y divide-gray-100">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-start gap-4 px-6 py-4 hover:bg-red-50 transition-colors duration-200 group"
              >
                <div className="mt-0.5 w-8 h-8 rounded-full bg-[hsl(345,75%,95%)] flex items-center justify-center shrink-0 group-hover:bg-[hsl(345,75%,28%)] transition-colors">
                  <Icon name={link.icon} size={16} className="text-[hsl(345,75%,28%)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-[hsl(345,75%,28%)] transition-colors leading-snug">
                    {link.label}
                  </span>
                </div>
                <Icon name="ChevronRight" size={16} className="text-gray-300 group-hover:text-[hsl(345,75%,28%)] mt-1 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[hsl(345,75%,28%)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "85+", label: "лет истории" },
            { value: "12 000", label: "студентов" },
            { value: "70+", label: "кафедр" },
            { value: "50+", label: "клинических баз" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
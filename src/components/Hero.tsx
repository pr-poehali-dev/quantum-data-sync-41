import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    tag: "Приём 2025 открыт",
    title: "Стань врачом,\nкоторому доверяют",
    subtitle: "КрасГМУ — ведущий медицинский университет Сибири. 85 лет подготовки специалистов, которые меняют здравоохранение страны.",
    cta: "Подать заявку",
    ctaSecond: "О университете",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/bucket/eadd84b9-a327-4b47-8567-31efe689ce6c.png",
  },
  {
    tag: "Наука и практика",
    title: "Учёба — это\nбольше, чем лекции",
    subtitle: "Симуляционный центр мирового класса, 50+ клинических баз и партнёрство с университетами 30 стран.",
    cta: "Наши программы",
    ctaSecond: "Центр науки",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/bucket/eadd84b9-a327-4b47-8567-31efe689ce6c.png",
  },
]

const directions = [
  { icon: "Stethoscope", label: "Лечебное дело", sub: "Бюджет · 6 лет", href: "#" },
  { icon: "Baby", label: "Педиатрия", sub: "Бюджет · 6 лет", href: "#" },
  { icon: "Smile", label: "Стоматология", sub: "Бюджет · 5 лет", href: "#" },
  { icon: "FlaskConical", label: "Фармация", sub: "Бюджет · 5 лет", href: "#" },
  { icon: "GraduationCap", label: "Ординатура", sub: "60+ специальностей", href: "#" },
  { icon: "BookOpen", label: "Повышение квалификации", sub: "Врачам и провизорам", href: "#" },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section>
      {/* Full-width hero */}
      <div className="relative overflow-hidden bg-gray-900" style={{ minHeight: 600 }}>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full" style={{ minHeight: 600 }}>
          <div className="max-w-2xl py-20">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {slide.tag}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line">
              {slide.title}
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#admission"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(345,75%,28%)] hover:bg-[hsl(345,75%,22%)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base"
              >
                {slide.cta}
                <Icon name="ArrowRight" size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-base backdrop-blur-sm"
              >
                {slide.ctaSecond}
              </a>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats overlay bottom right */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-8 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5">
          {[
            { value: "80+", label: "лет истории" },
            { value: "12 000", label: "студентов" },
            { value: "95%", label: "трудоустройство" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Directions strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
            {directions.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="group flex flex-col items-center gap-2 py-6 px-4 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(345,75%,95%)] flex items-center justify-center group-hover:bg-[hsl(345,75%,28%)] transition-colors duration-200">
                  <Icon name={d.icon} size={20} className="text-[hsl(345,75%,28%)] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-[hsl(345,75%,28%)] transition-colors leading-snug">{d.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{d.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
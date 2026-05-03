import Icon from "@/components/ui/icon"

const links = [
  { icon: "BookOpen", label: "Расписание занятий", href: "#" },
  { icon: "GraduationCap", label: "Электронный деканат", href: "#" },
  { icon: "Library", label: "Электронная библиотека", href: "#" },
  { icon: "Wifi", label: "Дистанционное обучение", href: "#" },
  { icon: "Award", label: "Портфолио студента", href: "#" },
  { icon: "Users", label: "Студенческий совет", href: "#" },
]

export function CallToAction() {
  return (
    <section id="students" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[hsl(345,75%,28%)] rounded-full" />
              <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(345,75%,28%)]">Для студентов</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Всё необходимое<br />в одном месте
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Личный кабинет, расписание, библиотека, документы — получите доступ к сервисам КрасГМУ без очередей.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[hsl(345,75%,28%)] hover:bg-red-50/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[hsl(345,75%,95%)] flex items-center justify-center shrink-0 group-hover:bg-[hsl(345,75%,28%)] transition-colors">
                    <Icon name={link.icon} size={17} className="text-[hsl(345,75%,28%)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[hsl(345,75%,28%)] transition-colors leading-snug">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[hsl(345,75%,28%)] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[hsl(345,75%,22%)] transition-colors"
            >
              <Icon name="LogIn" size={18} />
              Войти в личный кабинет
            </a>
          </div>

          {/* Right — image + stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/245b130d-d6ee-4574-9d12-c044e3662d8b.jpg"
                alt="Студенты КрасГМУ"
                className="w-full object-cover"
                style={{ height: 420 }}
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-[hsl(345,75%,28%)] flex items-center justify-center">
                <Icon name="TrendingUp" size={26} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-500">трудоустройство<br />выпускников</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

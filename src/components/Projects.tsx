import Icon from "@/components/ui/icon"

const programs = [
  {
    icon: "Stethoscope",
    name: "Лечебное дело",
    level: "Специалитет",
    years: "6 лет",
    seats: "250 бюджетных мест",
    description: "Классическая медицина: от терапии до хирургии. Широкая практика с первого года.",
    accent: "#1d4ed8",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-400",
    iconBg: "bg-blue-100 group-hover:bg-blue-600",
    iconColor: "text-blue-600 group-hover:text-white",
  },
  {
    icon: "Baby",
    name: "Педиатрия",
    level: "Специалитет",
    years: "6 лет",
    seats: "100 бюджетных мест",
    description: "Здоровье детей от рождения до совершеннолетия. Уникальный клинический опыт.",
    accent: "#15803d",
    bg: "bg-green-50",
    border: "border-green-100 hover:border-green-500",
    iconBg: "bg-green-100 group-hover:bg-green-600",
    iconColor: "text-green-600 group-hover:text-white",
  },
  {
    icon: "Smile",
    name: "Стоматология",
    level: "Специалитет",
    years: "5 лет",
    seats: "75 бюджетных мест",
    description: "Все направления стоматологии: терапия, хирургия, ортодонтия, имплантология.",
    accent: "#7c3aed",
    bg: "bg-violet-50",
    border: "border-violet-100 hover:border-violet-500",
    iconBg: "bg-violet-100 group-hover:bg-violet-600",
    iconColor: "text-violet-600 group-hover:text-white",
  },
  {
    icon: "FlaskConical",
    name: "Фармация",
    level: "Специалитет",
    years: "5 лет",
    seats: "50 бюджетных мест",
    description: "Разработка, производство и контроль лекарственных препаратов.",
    accent: "#b45309",
    bg: "bg-amber-50",
    border: "border-amber-100 hover:border-amber-500",
    iconBg: "bg-amber-100 group-hover:bg-amber-600",
    iconColor: "text-amber-600 group-hover:text-white",
  },
  {
    icon: "Brain",
    name: "Клиническая психология",
    level: "Специалитет",
    years: "5,5 лет",
    seats: "25 бюджетных мест",
    description: "Диагностика и коррекция нарушений психической деятельности в медицинской среде.",
    accent: "#be185d",
    bg: "bg-pink-50",
    border: "border-pink-100 hover:border-pink-500",
    iconBg: "bg-pink-100 group-hover:bg-pink-600",
    iconColor: "text-pink-600 group-hover:text-white",
  },
  {
    icon: "GraduationCap",
    name: "Ординатура",
    level: "60+ специальностей",
    years: "2–5 лет",
    seats: "Целевые и платные места",
    description: "Углублённая специализация после окончания специалитета.",
    accent: "#0f766e",
    bg: "bg-teal-50",
    border: "border-teal-100 hover:border-teal-500",
    iconBg: "bg-teal-100 group-hover:bg-teal-600",
    iconColor: "text-teal-600 group-hover:text-white",
  },
]

export function Projects() {
  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[hsl(345,75%,28%)] mb-2">Образование</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Выберите свой путь</h2>
            <p className="text-gray-500">Шесть направлений — одна цель: сделать медицину лучше</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 bg-[hsl(345,75%,28%)] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[hsl(345,75%,22%)] transition-colors"
          >
            Все программы
            <Icon name="ArrowRight" size={15} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <a
              key={p.name}
              href="#"
              className={`group flex flex-col p-6 rounded-2xl border-2 ${p.bg} ${p.border} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${p.iconBg}`}>
                  <Icon name={p.icon} size={22} className={`transition-colors duration-200 ${p.iconColor}`} />
                </div>
                <span className="text-xs font-medium text-gray-400 bg-white/70 px-2.5 py-1 rounded-full">{p.level}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{p.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/60">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Icon name="Clock" size={13} />
                  {p.years}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
                  <Icon name="CheckCircle" size={13} />
                  {p.seats}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[hsl(345,75%,28%)] flex items-center justify-center shrink-0">
              <Icon name="Calendar" size={22} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Приёмная кампания 2025</div>
              <div className="text-sm text-gray-500">Документы принимаются с 20 июня по 25 июля</div>
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 bg-[hsl(345,75%,28%)] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(345,75%,22%)] transition-colors text-sm"
          >
            Подать документы онлайн
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

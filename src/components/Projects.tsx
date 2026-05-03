import Icon from "@/components/ui/icon"

const faculties = [
  {
    icon: "Stethoscope",
    name: "Лечебный факультет",
    description: "Специальность «Лечебное дело». Подготовка врачей широкого профиля.",
    duration: "6 лет",
    budget: "Есть бюджет",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    icon: "Baby",
    name: "Педиатрический факультет",
    description: "Специальность «Педиатрия». Врачи для детей от рождения до 18 лет.",
    duration: "6 лет",
    budget: "Есть бюджет",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    icon: "Smile",
    name: "Стоматологический факультет",
    description: "Специальность «Стоматология». Все направления стоматологии.",
    duration: "5 лет",
    budget: "Есть бюджет",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600 bg-purple-100",
  },
  {
    icon: "FlaskConical",
    name: "Фармацевтический факультет",
    description: "Специальность «Фармация». Разработка и производство лекарств.",
    duration: "5 лет",
    budget: "Есть бюджет",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-600 bg-orange-100",
  },
  {
    icon: "Activity",
    name: "Клиническая психология",
    description: "Специальность «Клиническая психология». Психическое здоровье.",
    duration: "5 лет 6 мес",
    budget: "Есть бюджет",
    color: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-600 bg-pink-100",
  },
  {
    icon: "HeartPulse",
    name: "Социальная работа",
    description: "Бакалавриат. Медико-социальная помощь населению.",
    duration: "4 года",
    budget: "Есть бюджет",
    color: "bg-teal-50 border-teal-100",
    iconColor: "text-teal-600 bg-teal-100",
  },
]

export function Projects() {
  return (
    <section id="admission" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[hsl(345,75%,28%)] rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Факультеты и направления</h2>
              <p className="text-gray-500 text-sm mt-1">Выберите свой путь в медицине</p>
            </div>
          </div>
          <a
            href="#all-faculties"
            className="hidden md:inline-flex items-center gap-2 bg-[hsl(345,75%,28%)] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[hsl(345,75%,22%)] transition-colors"
          >
            <Icon name="BookOpen" size={15} />
            Все программы
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {faculties.map((faculty) => (
            <a
              key={faculty.name}
              href="#"
              className={`group flex flex-col gap-4 p-6 rounded-xl border-2 ${faculty.color} hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${faculty.iconColor}`}>
                  <Icon name={faculty.icon} size={22} />
                </div>
                <Icon name="ArrowUpRight" size={18} className="text-gray-300 group-hover:text-[hsl(345,75%,28%)] transition-colors" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[hsl(345,75%,28%)] transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faculty.description}</p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/60">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Icon name="Clock" size={13} />
                  {faculty.duration}
                </div>
                <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                  <Icon name="CheckCircle" size={13} />
                  {faculty.budget}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

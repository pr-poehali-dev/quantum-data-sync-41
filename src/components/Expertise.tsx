import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "Trophy",
    title: "Топ-20 медвузов России",
    description: "По версии RAEX рейтингового агентства. Признанное качество образования.",
  },
  {
    icon: "Building2",
    title: "50+ клинических баз",
    description: "Практика в ведущих больницах Красноярска с первого курса обучения.",
  },
  {
    icon: "Globe",
    title: "Международное сотрудничество",
    description: "Партнёрство с университетами 30 стран. Программы обмена и стажировки.",
  },
  {
    icon: "Microscope",
    title: "Современная наука",
    description: "Центр коллективного пользования. Гранты РНФ, РФФИ и международные проекты.",
  },
  {
    icon: "Users",
    title: "Сильное сообщество",
    description: "40 000+ выпускников по всему миру. Активная alumni-сеть и менторство.",
  },
  {
    icon: "Heart",
    title: "Студенческая жизнь",
    description: "Волонтёрство, спорт, культура и самоуправление. Учёба — это больше, чем лекции.",
  },
]

export function Expertise() {
  return (
    <section id="science" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[hsl(345,75%,28%)] rounded-full" />
            <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(345,75%,28%)]">Почему КрасГМУ</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            85 лет готовим врачей,<br />которым доверяют жизни
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Красноярский государственный медицинский университет — это не просто диплом. Это сообщество, наука и призвание.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <div key={item.title} className="group flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[hsl(345,75%,95%)] flex items-center justify-center group-hover:bg-[hsl(345,75%,28%)] transition-colors duration-300">
                <Icon name={item.icon} size={22} className="text-[hsl(345,75%,28%)] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-14 rounded-2xl bg-[hsl(345,75%,28%)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Приёмная кампания 2025</h3>
            <p className="text-white/75 text-base">Приём документов начинается 20 июня. Не пропустите сроки!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#admission"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(345,75%,28%)] font-semibold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon name="FileText" size={17} />
              Подать документы
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-medium px-7 py-3.5 rounded-lg hover:border-white transition-colors"
            >
              <Icon name="Phone" size={17} />
              Задать вопрос
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

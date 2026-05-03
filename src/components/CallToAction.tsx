import Icon from "@/components/ui/icon"

const forGroups = [
  {
    icon: "GraduationCap",
    group: "Абитуриентам",
    items: ["Условия приёма 2025", "Проходные баллы прошлых лет", "Целевое обучение", "Подать документы онлайн"],
    cta: "Всё о поступлении",
    color: "bg-blue-600",
    light: "bg-blue-50 text-blue-700",
  },
  {
    icon: "BookOpen",
    group: "Студентам",
    items: ["Личный кабинет", "Расписание занятий", "Электронная библиотека", "Стипендии и льготы"],
    cta: "Войти в кабинет",
    color: "bg-[hsl(345,75%,28%)]",
    light: "bg-red-50 text-red-700",
  },
  {
    icon: "Stethoscope",
    group: "Врачам",
    items: ["Повышение квалификации", "Аккредитация специалистов", "Ординатура", "Дистанционные курсы"],
    cta: "Записаться на курс",
    color: "bg-teal-600",
    light: "bg-teal-50 text-teal-700",
  },
]

export function CallToAction() {
  return (
    <section id="for-you" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[hsl(345,75%,28%)] mb-2">Всё в одном месте</p>
          <h2 className="text-3xl font-bold text-gray-900">Найдите нужное быстро</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {forGroups.map((g) => (
            <div key={g.group} className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className={`${g.color} px-6 py-5 flex items-center gap-3`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon name={g.icon} size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">{g.group}</h3>
              </div>

              {/* Links */}
              <div className="flex-1 divide-y divide-gray-50 bg-white">
                {g.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{item}</span>
                    <Icon name="ChevronRight" size={15} className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <a
                  href="#"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white ${g.color} hover:opacity-90 transition-opacity`}
                >
                  {g.cta}
                  <Icon name="ArrowRight" size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 relative rounded-2xl overflow-hidden bg-gray-900" style={{ minHeight: 220 }}>
          <img
            src="https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/1574e0ea-805d-4f68-86e6-7e73247837de.jpg"
            alt="КрасГМУ"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-12">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-1">Остались вопросы?</h3>
              <p className="text-white/65 text-base">Приёмная комиссия ответит в течение рабочего дня</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+73912212121"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors text-sm"
              >
                <Icon name="Phone" size={16} />
                +7 (391) 221-21-21
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(345,75%,28%)] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(345,75%,22%)] transition-colors text-sm"
              >
                <Icon name="MessageSquare" size={16} />
                Написать в чат
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

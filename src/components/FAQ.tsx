import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    question: "Какой проходной балл ЕГЭ нужен для поступления?",
    answer: "Минимальный балл зависит от направления. Для лечебного факультета в 2024 году на бюджет — от 232 баллов (биология + химия + русский язык). Точные цифры публикуются ежегодно в июле на сайте приёмной комиссии.",
  },
  {
    question: "Есть ли общежитие для студентов?",
    answer: "Да. КрасГМУ располагает несколькими общежитиями в Красноярске. Иногородние студенты, зачисленные на бюджет, обеспечиваются жильём в приоритетном порядке. Стоимость проживания — от 1 200 ₽ в месяц.",
  },
  {
    question: "Можно ли поступить после медицинского колледжа?",
    answer: "Да. Выпускники медицинских колледжей могут поступить на основе ЕГЭ на общих основаниях или пройти вступительные испытания, проводимые вузом. Предусмотрены квоты для лиц со средним профессиональным образованием.",
  },
  {
    question: "Как проходит целевое обучение?",
    answer: "Целевое обучение — это поступление по договору с работодателем (больницей, региональным Минздравом). После окончания вы обязаны отработать 3–5 лет по месту направления. Взамен — гарантированное место на бюджете и поддержка во время учёбы.",
  },
  {
    question: "Есть ли программы для иностранных граждан?",
    answer: "Да. КрасГМУ принимает иностранных студентов по квоте Правительства РФ и на коммерческой основе. Обучение ведётся на русском языке, предусмотрен подготовительный курс. Есть программа для англоязычных абитуриентов.",
  },
  {
    question: "Какова стоимость платного обучения?",
    answer: "Стоимость платного обучения в 2025 году: лечебный и педиатрический факультеты — от 220 000 ₽/год; стоматология — от 280 000 ₽/год; фармация — от 175 000 ₽/год. Предусмотрена рассрочка платежа.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[hsl(345,75%,28%)] rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${openIndex === index ? "border-[hsl(345,75%,28%)] bg-white shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                  >
                    <span className={`font-semibold text-sm leading-snug transition-colors ${openIndex === index ? "text-[hsl(345,75%,28%)]" : "text-gray-800"}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === index ? "bg-[hsl(345,75%,28%)] text-white rotate-45" : "bg-gray-100 text-gray-500"}`}>
                      <Icon name="Plus" size={16} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-[hsl(345,75%,28%)] p-7 text-white">
              <Icon name="Phone" size={28} className="mb-4 opacity-80" />
              <h3 className="font-bold text-lg mb-2">Приёмная комиссия</h3>
              <p className="text-white/75 text-sm mb-5">Пн–Пт: 9:00–18:00<br />Сб: 10:00–14:00</p>
              <a
                href="tel:+73912212121"
                className="block text-center bg-white text-[hsl(345,75%,28%)] font-bold py-3 rounded-lg hover:bg-white/90 transition-colors text-sm"
              >
                +7 (391) 221-21-21
              </a>
            </div>

            <div className="rounded-xl border-2 border-gray-100 bg-white p-7">
              <Icon name="MapPin" size={24} className="text-[hsl(345,75%,28%)] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                г. Красноярск,<br />
                ул. Партизана Железняка, 1<br />
                660022
              </p>
            </div>

            <div className="rounded-xl border-2 border-gray-100 bg-white p-7">
              <Icon name="Mail" size={24} className="text-[hsl(345,75%,28%)] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:priem@krasgmu.ru"
                className="text-[hsl(345,75%,28%)] text-sm font-medium hover:underline"
              >
                priem@krasgmu.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

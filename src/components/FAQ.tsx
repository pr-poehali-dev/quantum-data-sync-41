import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начинается работа над проектом?",
    answer:
      "Всё начинается с разговора. На первой встрече мы слушаем: о вас, об участке, о том, каким вы видите результат. Мы не торопимся с решениями — нам важно понять контекст. После консультации готовим краткое описание концепции и коммерческое предложение.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Стоимость зависит от типа и масштаба объекта. Проектирование частного дома, как правило, начинается от 3 000 ₽/м². Коммерческие и девелоперские проекты рассчитываются индивидуально. Первая консультация — бесплатно.",
  },
  {
    question: "Как долго длится проектирование?",
    answer:
      "Частный дом площадью до 300 м² — от 4 до 8 месяцев. Коммерческий объект — от 6 до 18 месяцев. Мы всегда согласовываем реалистичные сроки на старте и придерживаемся их: дорожим своей репутацией.",
  },
  {
    question: "Вы ведёте авторский надзор во время строительства?",
    answer:
      "Да. Авторский надзор — отдельная услуга, которую мы настоятельно рекомендуем. Он гарантирует, что строители реализуют проект именно так, как задумано. Мы выезжаем на объект на ключевых этапах и оперативно решаем вопросы, которые возникают в процессе.",
  },
  {
    question: "В каких городах вы работаете?",
    answer:
      "Наша студия базируется в Москве, но мы реализуем проекты по всей России. Для выездных проектов организуем регулярные посещения объекта и поддерживаем тесный контакт с заказчиком.",
  },
  {
    question: "Работаете ли вы с реконструкцией и перепланировкой?",
    answer:
      "Да, и это одно из наших любимых направлений. Вдохнуть новую жизнь в существующее здание, сохранив его характер — сложная и увлекательная задача. Мы работаем как с историческими объектами, так и с типовыми постройками советского периода.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
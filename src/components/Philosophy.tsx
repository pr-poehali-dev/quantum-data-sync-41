import Icon from "@/components/ui/icon"

const news = [
  {
    date: "28 апр 2025",
    category: "Наука",
    title: "Учёные КрасГМУ разработали метод ранней диагностики рака лёгкого по анализу крови",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/245b130d-d6ee-4574-9d12-c044e3662d8b.jpg",
  },
  {
    date: "25 апр 2025",
    category: "Поступление",
    title: "Приём документов на 2025/26 учебный год стартует 20 июня — всё о правилах подачи",
  },
  {
    date: "21 апр 2025",
    category: "События",
    title: "КрасГМУ победил в региональном конкурсе инновационных медицинских проектов",
  },
  {
    date: "17 апр 2025",
    category: "Международное",
    title: "Подписаны соглашения о сотрудничестве с университетами Германии и Китая",
  },
  {
    date: "12 апр 2025",
    category: "Наука",
    title: "Грант РНФ на 15 млн рублей — исследование нейродегенеративных заболеваний",
  },
]

const categoryColors: Record<string, string> = {
  "Наука": "bg-blue-50 text-blue-700",
  "Поступление": "bg-green-50 text-green-700",
  "События": "bg-purple-50 text-purple-700",
  "Международное": "bg-orange-50 text-orange-700",
}

export function Philosophy() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[hsl(345,75%,28%)] mb-2">Новости</p>
            <h2 className="text-3xl font-bold text-gray-900">Жизнь университета</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(345,75%,28%)] hover:underline">
            Все новости <Icon name="ArrowRight" size={15} />
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-6">
          {/* Featured */}
          <a href="#" className="group relative rounded-2xl overflow-hidden block bg-gray-900" style={{ minHeight: 440 }}>
            <img
              src={news[0].image}
              alt={news[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <span className="inline-block bg-[hsl(345,75%,28%)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                {news[0].category}
              </span>
              <h3 className="text-white text-2xl font-bold leading-snug">{news[0].title}</h3>
              <div className="flex items-center gap-2 mt-4 text-white/50 text-sm">
                <Icon name="Calendar" size={13} />
                {news[0].date}
              </div>
            </div>
          </a>

          {/* List */}
          <div className="flex flex-col gap-3">
            {news.slice(1).map((item, i) => (
              <a
                key={i}
                href="#"
                className="group flex gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[hsl(345,75%,28%)] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-snug group-hover:text-[hsl(345,75%,28%)] transition-colors">
                    {item.title}
                  </p>
                </div>
                <Icon name="ArrowUpRight" size={16} className="text-gray-300 group-hover:text-[hsl(345,75%,28%)] shrink-0 mt-1 transition-colors" />
              </a>
            ))}

            <a
              href="#"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 hover:border-[hsl(345,75%,28%)] hover:text-[hsl(345,75%,28%)] transition-colors text-sm font-medium mt-1"
            >
              Смотреть все новости
              <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

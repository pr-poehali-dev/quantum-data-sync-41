import Icon from "@/components/ui/icon"

const news = [
  {
    date: "28 апреля 2025",
    category: "Наука",
    title: "Учёные КрасГМУ открыли новый метод ранней диагностики онкологических заболеваний",
    image: "https://cdn.poehali.dev/projects/10314730-e5f5-4420-9775-f734c4efc3b5/files/245b130d-d6ee-4574-9d12-c044e3662d8b.jpg",
    hot: true,
  },
  {
    date: "25 апреля 2025",
    category: "Поступление",
    title: "Приёмная кампания 2025 года: документы принимаются с 20 июня",
    image: "",
    hot: false,
  },
  {
    date: "22 апреля 2025",
    category: "Студенческая жизнь",
    title: "КрасГМУ занял первое место в региональном конкурсе научных проектов",
    image: "",
    hot: false,
  },
  {
    date: "18 апреля 2025",
    category: "Международное",
    title: "Подписано соглашение о сотрудничестве с университетами Китая и Германии",
    image: "",
    hot: false,
  },
]

export function Philosophy() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[hsl(345,75%,28%)] rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">Новости и события</h2>
          </div>
          <a
            href="#news"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[hsl(345,75%,28%)] hover:underline"
          >
            Все новости
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* Featured news */}
          <a href="#" className="group relative overflow-hidden rounded-lg bg-gray-900 block" style={{ minHeight: 400 }}>
            <img
              src={news[0].image}
              alt={news[0].title}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[hsl(345,75%,28%)] text-white text-xs font-semibold px-2 py-1 rounded">
                  {news[0].category}
                </span>
                <span className="text-white/60 text-xs">{news[0].date}</span>
              </div>
              <h3 className="text-white text-xl font-bold leading-snug group-hover:text-white/90 transition-colors">
                {news[0].title}
              </h3>
            </div>
          </a>

          {/* News list */}
          <div className="flex flex-col gap-4">
            {news.slice(1).map((item, i) => (
              <a
                key={i}
                href="#"
                className="group flex gap-4 p-4 rounded-lg border border-gray-100 hover:border-[hsl(345,75%,28%)] hover:bg-red-50/30 transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[hsl(345,75%,28%)] bg-red-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-gray-800 font-medium leading-snug text-sm group-hover:text-[hsl(345,75%,28%)] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <Icon name="ArrowUpRight" size={18} className="text-gray-300 group-hover:text-[hsl(345,75%,28%)] shrink-0 mt-1 transition-colors" />
              </a>
            ))}

            <a
              href="#news"
              className="mt-auto inline-flex items-center justify-center gap-2 border-2 border-[hsl(345,75%,28%)] text-[hsl(345,75%,28%)] font-medium py-3 rounded-lg hover:bg-[hsl(345,75%,28%)] hover:text-white transition-colors duration-200 text-sm"
            >
              Все новости
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

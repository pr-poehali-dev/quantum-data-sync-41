import Icon from "@/components/ui/icon"

const footerLinks = [
  {
    title: "Университет",
    links: [
      { label: "История и традиции", href: "#" },
      { label: "Руководство", href: "#" },
      { label: "Структура", href: "#" },
      { label: "Документы", href: "#" },
      { label: "Вакансии", href: "#" },
    ],
  },
  {
    title: "Образование",
    links: [
      { label: "Факультеты", href: "#" },
      { label: "Расписание", href: "#" },
      { label: "Электронная библиотека", href: "#" },
      { label: "Дистанционное обучение", href: "#" },
      { label: "Аккредитация", href: "#" },
    ],
  },
  {
    title: "Поступление",
    links: [
      { label: "Условия приёма", href: "#" },
      { label: "Проходные баллы", href: "#" },
      { label: "Целевое обучение", href: "#" },
      { label: "Иностранным гражданам", href: "#" },
      { label: "Контакты приёмной комиссии", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[hsl(345,75%,28%)] flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-white/60 uppercase">КрасГМУ</div>
                <div className="text-sm font-bold text-white">им. проф. В.Ф. Войно-Ясенецкого</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Красноярский государственный медицинский университет — ведущий медицинский вуз Сибири. Готовим врачей с 1942 года.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(345,75%,28%)] transition-colors">
                <Icon name="Send" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(345,75%,28%)] transition-colors">
                <Icon name="Youtube" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(345,75%,28%)] transition-colors">
                <Icon name="Globe" size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-8">
            <a href="tel:+73912212121" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
              <Icon name="Phone" size={15} />
              +7 (391) 221-21-21
            </a>
            <a href="mailto:info@krasgmu.ru" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
              <Icon name="Mail" size={15} />
              info@krasgmu.ru
            </a>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Icon name="MapPin" size={15} />
              г. Красноярск, ул. Партизана Железняка, 1
            </span>
          </div>
          <p className="text-white/35 text-xs">© 2025 КрасГМУ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

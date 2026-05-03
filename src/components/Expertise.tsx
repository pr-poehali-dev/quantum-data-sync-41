import Icon from "@/components/ui/icon"

const pillars = [
  {
    icon: "Trophy",
    number: "01",
    title: "Топ медвузов России",
    body: "Входим в топ-20 по версии RAEX. Аккредитация Минздрава, международное признание дипломов.",
  },
  {
    icon: "Building2",
    number: "02",
    title: "50+ клинических баз",
    body: "Практика в больницах Красноярска начинается с первого курса — не в симуляторах, а с реальными пациентами.",
  },
  {
    icon: "Globe",
    number: "03",
    title: "Международное признание",
    body: "Партнёрство с университетами 30 стран. Программы двойных дипломов и стажировки за рубежом.",
  },
  {
    icon: "Microscope",
    number: "04",
    title: "Наука без барьеров",
    body: "Центр коллективного пользования оборудованием. Гранты РНФ и РФФИ. Публикации в Scopus и WoS.",
  },
  {
    icon: "HeartHandshake",
    number: "05",
    title: "40 000 выпускников",
    body: "Сильная alumni-сеть по всей России. Наставники-практики в каждой специальности.",
  },
  {
    icon: "Sparkles",
    number: "06",
    title: "Студенческая среда",
    body: "Волонтёрство, студсовет, спорт, культура. Здесь учёба — это образ жизни, а не просто лекции.",
  },
]

export function Expertise() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[hsl(345,75%,28%)] mb-3">Почему мы</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              КрасГМУ — это не просто<br className="hidden md:block" /> диплом врача
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Мы готовим специалистов, которые умеют думать, исследовать и лечить. С 1942 года тысячи наших выпускников работают в лучших клиниках страны.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {pillars.map((p) => (
            <div key={p.number} className="group bg-white p-8 hover:bg-[hsl(345,75%,28%)] transition-colors duration-300 cursor-default">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(345,75%,95%)] group-hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Icon name={p.icon} size={22} className="text-[hsl(345,75%,28%)] group-hover:text-white transition-colors" />
                </div>
                <span className="text-3xl font-black text-gray-100 group-hover:text-white/20 transition-colors select-none">
                  {p.number}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base mb-3 transition-colors">{p.title}</h3>
              <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { val: "80+", label: "лет истории", icon: "Clock" },
            { val: "12 000", label: "студентов сегодня", icon: "Users" },
            { val: "70+", label: "кафедр и лабораторий", icon: "BookOpen" },
            { val: "95%", label: "выпускников трудоустроены", icon: "TrendingUp" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[hsl(345,75%,95%)] flex items-center justify-center shrink-0">
                <Icon name={s.icon} size={18} className="text-[hsl(345,75%,28%)]" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
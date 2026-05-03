import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import Icon from "@/components/ui/icon"

const navItems = [
  { label: "Университет", href: "#about" },
  { label: "Поступающим", href: "#admission" },
  { label: "Обучающимся", href: "#students" },
  { label: "Наука", href: "#science" },
  { label: "Врачам", href: "#doctors" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[hsl(345,75%,28%)] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white/80 transition-colors">Сведения об образовательной организации</a>
            <a href="#" className="hover:text-white/80 transition-colors">Раздел для инвалидов и лиц с ОВЗ</a>
            <a href="#" className="hover:text-white/80 transition-colors">Выборы / конкурсный отбор</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <Icon name="LogIn" size={14} />
              <span>Войти</span>
            </a>
            <a href="#" className="hover:text-white/80 transition-colors"><Icon name="Send" size={14} /></a>
            <a href="#" className="hover:text-white/80 transition-colors"><Icon name="Eye" size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full border-2 border-[hsl(345,75%,28%)] flex items-center justify-center bg-[hsl(345,75%,28%)]">
                <Icon name="GraduationCap" size={22} className="text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-semibold tracking-widest text-[hsl(345,75%,28%)] uppercase">Красноярский</div>
                <div className="text-[10px] font-semibold tracking-widest text-[hsl(345,75%,28%)] uppercase">Государственный</div>
                <div className="text-[10px] font-semibold tracking-widest text-[hsl(345,75%,28%)] uppercase">Медицинский Университет</div>
              </div>
            </a>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[hsl(345,75%,28%)] hover:bg-red-50 rounded transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#admission"
              className="hidden lg:inline-flex items-center gap-2 bg-[hsl(345,75%,28%)] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[hsl(345,75%,22%)] transition-colors duration-200"
            >
              <Icon name="BookOpen" size={15} />
              Поступить
            </a>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}>
          <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-2 text-sm font-medium text-gray-700 hover:text-[hsl(345,75%,28%)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admission"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[hsl(345,75%,28%)] text-white px-5 py-2.5 rounded text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Поступить в КрасГМУ
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

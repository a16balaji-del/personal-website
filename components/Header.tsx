const navItems = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-pine shadow-nav" style={{ animation: "nav-drop 520ms ease both" }}>
      <nav
        className="mx-auto flex min-h-[54px] max-w-[72rem] items-center gap-8 overflow-x-auto px-6 sm:justify-center sm:gap-20"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            className="relative shrink-0 text-sm font-extrabold text-cream transition-opacity after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-mint after:transition-transform after:duration-300 hover:opacity-90 hover:after:scale-x-100 sm:text-base"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

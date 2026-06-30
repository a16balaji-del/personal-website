const socials = [
  { id: "instagram", name: "Instagram", href: "#" },
  { id: "youtube", name: "YouTube", href: "#" },
  { id: "linkedin", name: "LinkedIn", href: "#" }
];

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

function SocialIcon({ id, size }: { id: string; size: "sm" | "md" }) {
  const standardIconClass = size === "sm" ? "size-7" : "size-[45px]";

  if (id === "instagram") {
    return (
      <svg aria-hidden="true" className={standardIconClass} viewBox="0 0 48 48" fill="none">
        <rect x="9" y="9" width="30" height="30" rx="8" stroke="currentColor" strokeWidth="4" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="4" />
        <circle cx="33.5" cy="14.5" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (id === "youtube") {
    return (
      <svg aria-hidden="true" className={size === "sm" ? "h-7 w-9" : "h-[28px] w-[36px]"} viewBox="0 0 54 38" fill="none">
        <rect width="54" height="38" rx="10" fill="currentColor" />
        <path d="M22 11.5L37 19L22 26.5V11.5Z" fill="#f5efe7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={standardIconClass} viewBox="0 0 48 48" fill="none">
      <path d="M8 18H17V40H8V18Z" fill="currentColor" />
      <path d="M12.5 15C16 15 18.5 12.7 18.5 9.5C18.5 6.4 16 4 12.5 4C9 4 6.5 6.4 6.5 9.5C6.5 12.7 9 15 12.5 15Z" fill="currentColor" />
      <path d="M22 18H30.5V21.1C32 18.8 34.3 17.4 38 17.4C44 17.4 47 21.2 47 29.3V40H38V30.4C38 26.7 36.8 24.7 34.1 24.7C31.3 24.7 30.5 26.9 30.5 30.4V40H22V18Z" fill="currentColor" />
    </svg>
  );
}

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const sizeClass = size === "sm" ? "size-10 sm:size-12" : "size-[60px]";

  return (
    <div className={`flex justify-center gap-4 sm:gap-6 ${className}`} aria-label="Social links">
      {socials.map((social) => (
        <a
          className={`interactive-lift flex ${sizeClass} items-center justify-center rounded-full border-2 border-[#e4a06e] bg-cream text-[#e4a06e] hover:bg-[#e4a06e] hover:text-cream`}
          href={social.href}
          key={social.id}
          aria-label={social.name}
        >
          <SocialIcon id={social.id} size={size} />
        </a>
      ))}
    </div>
  );
}

type PortfolioItemProps = {
  title: string
  subtitle?: string
  description: string
  href?: string
  tech?: string[]
}

export function PortfolioItem({
  title,
  subtitle,
  description,
  href,
  tech,
}: PortfolioItemProps) {
  const content = (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
        <p className="text-foreground/70 mt-2 text-pretty">{description}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs border rounded-full text-muted-foreground border-border"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      {href && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      )}
    </div>
  )

  const className =
    "group block rounded-lg p-4 -mx-4 hover:bg-accent/10 transition-colors duration-200"

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

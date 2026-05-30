import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../mode-toggle";

const navItems = [
  { key: "h", label: "home", to: "/" },
  { key: "w", label: "work", href: "#work" },
  { key: "s", label: "skills", href: "#skills" },
] as const;

export function NavBar() {
  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex space-x-1 sm:space-x-4">
        {navItems.map((item) =>
          "to" in item ? (
            <Link
              key={item.key}
              to={item.to}
              className="hover:text-primary transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0"
            >
              <span className="hidden sm:inline">[{item.key}] </span>
              {item.label}
            </Link>
          ) : (
            <a
              key={item.key}
              href={item.href}
              className="hover:text-primary transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0"
            >
              <span className="hidden sm:inline">[{item.key}] </span>
              {item.label}
            </a>
          ),
        )}
      </div>
      <ModeToggle />
    </nav>
  );
}

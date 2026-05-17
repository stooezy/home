import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../mode-toggle";

export function NavBar() {
  return (
    <div className="p-2 flex gap-2 text-lg justify-between">
      <div className="flex gap-2">
        <Link
          to="/"
          activeProps={{
            className: "font-bold text-primary-foreground",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
      </div>
      <ModeToggle></ModeToggle>
    </div>
  );
}

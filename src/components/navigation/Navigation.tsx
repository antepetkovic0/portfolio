import Link from "next/link";
import { NAVIGATION_ROUTES } from "./navigation.types";

export default function Navigation() {
  return (
    <div className="flex w-full justify-between items-center p-8">
      <div>AP</div>
      <nav>
        <ul className="flex gap-4">
          {NAVIGATION_ROUTES.map((route) => (
            <li
              key={route.id}
              className="font-medium text-lg hover:text-rose-500"
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

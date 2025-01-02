import Link from "next/link";
import { Button } from "./ui/button";

export function SideBar() {
  return (
    <aside className="p-6">
      <nav className="flex justify-between items-center mt-12">
        <h1 className="text-5xl font-bold text-colorHighlight">Cheffia</h1>
        <div className="flex items-center">
          <Link href="#">
            <Button
              variant="ghost"
              className="mr-4 text-colorPrimary hover:text-buttonPrimaryHover text-1xl font-semibold"
            >
              Recursos
            </Button>
          </Link>

          <Link href="#">
            <Button
              variant="ghost"
              className="mr-4 text-colorPrimary hover:text-buttonPrimaryHover text-1xl font-semibold "
            >
              Preços
            </Button>
          </Link>

          <Link href="/login">
            <Button
              size="lg"
              className="bg-buttonPrimary text-buttonTextPrimary hover:bg-buttonPrimaryHover h-16 w-14 rounded-xl px-20 text-3xl font-semibold"
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </aside>
  );
}

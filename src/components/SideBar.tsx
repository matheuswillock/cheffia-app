import { Button } from "./ui/button";

export function SideBar() {
  return (
    <aside className="mt-12 p-6">
      <nav className="flex justify-between items-center ">
        <h1 className="text-5xl font-bold text-accentPrimary">Cheffia</h1>
        <div>
          <Button
            variant="ghost"
            className="mr-4 text-colorPrimary hover:text-buttonPrimaryHover text-1xl font-semibold"
          >
            Recursos
          </Button>

          <Button
            variant="ghost"
            className="mr-4 text-colorPrimary hover:text-buttonPrimaryHover text-1xl font-semibold"
          >
            Preços
          </Button>

          <Button
            size="lg"
            className="bg-buttonPrimary text-buttonTextPrimary hover:bg-buttonPrimaryHover"
          >
            Login
          </Button>
        </div>
      </nav>
    </aside>
  );
}
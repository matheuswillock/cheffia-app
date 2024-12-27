import { Button } from "./ui/button";

export function SideBar() {
  return (
    <aside className="mt-12 p-6">
      <nav className="flex justify-between items-center ">
        <h1 className="text-5xl font-bold text-red-600">Cheffia</h1>
        <div>
          <Button
            variant="ghost"
            className="mr-4 text-zinc-700 hover:text-red-600 text-1xl font-semibold"
          >
            Recursos
          </Button>

          <Button
            variant="ghost"
            className="mr-4 text-zinc-700 hover:text-red-600 text-1xl font-semibold"
          >
            Preços
          </Button>

          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-semibold">
            Começar
          </Button>
        </div>
      </nav>
      
    </aside>
  );
}
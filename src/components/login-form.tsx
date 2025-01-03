import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6 text-colorPrimary ", className)}
      {...props}
    >
      <Card className="backdrop-blur-sm bg-white/5 border border-white/20 shadow-lg pt-10 px-8">
        <CardHeader>
          <CardTitle className="text-6xl mb-4">Login</CardTitle>
          <CardDescription className="text-2xl">
            Digite seu email abaixo para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-3xl">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="h-12 text-3xl rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-3xl">
                    Senha
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-lg"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-12 text-3xl rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full text-2xl font-semibold h-12 rounded-xl bg-colorSecondary text-defaultColor hover:bg-colorPrimary"
              >
                Entrar
              </Button>
              <Button
                variant="outline"
                className="w-full bg-defaultColor text-2xl font-semibold h-12 rounded-xl hover:bg-colorPrimary hover:text-defaultColor"
              >
                Entrar com Google
              </Button>
            </div>
            <div className=" mt-10 mb-1 text-center text-lg">
              Não tem uma conta?{" "}
              <a href="#" className="underline underline-offset-4">
                Cadastre-se
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

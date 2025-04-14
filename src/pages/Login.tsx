
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already authenticated
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (username === "spotmkt" && password === "123") {
        // Set authentication state
        localStorage.setItem("isAuthenticated", "true");
        
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo ao painel SpotMkt!",
          variant: "default",
        });
        
        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        toast({
          title: "Erro de login",
          description: "Usuário ou senha incorretos.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-spotmkt-light via-background to-background p-4 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-spotmkt-dark mb-2">SpotMkt Dashboard</h1>
          <p className="text-muted-foreground">Gerencie suas campanhas de marketing digital</p>
        </div>
        
        <Card className="w-full animate-scale-in">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Entre com suas credenciais para acessar o painel
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-spotmkt hover:bg-spotmkt-dark" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    <span>Entrando...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <LogIn size={18} />
                    <span>Entrar</span>
                  </div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Usuário de demonstração: spotmkt / Senha: 123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;


import React from "react";
import { Bell, User, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Sessão encerrada",
      description: "Você foi desconectado com sucesso.",
    });
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <Menu size={20} />
          </Button>
          <h1 className="text-xl font-semibold text-spotmkt-dark hidden md:block">SpotMkt Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-spotmkt-accent"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="SpotMkt User" />
                  <AvatarFallback className="bg-spotmkt text-white">SM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">SpotMkt</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@spotmkt.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-destructive focus:text-destructive"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

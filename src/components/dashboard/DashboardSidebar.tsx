
import React from "react";
import { 
  LayoutDashboard, 
  LineChart, 
  Users, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Settings, 
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "#dashboard",
    active: true,
  },
  {
    title: "Campanhas",
    icon: LineChart,
    href: "#campanhas",
    notifications: 2,
  },
  {
    title: "Clientes",
    icon: Users,
    href: "#clientes",
  },
  {
    title: "Solicitações",
    icon: MessageSquare,
    href: "#solicitacoes",
    notifications: 4,
  },
  {
    title: "Calendário",
    icon: Calendar,
    href: "#calendario",
  },
  {
    title: "Relatórios",
    icon: FileText,
    href: "#relatorios",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "#configuracoes",
  },
];

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 bottom-0 left-0 z-30 w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
          <h2 className="text-xl font-bold">SpotMkt</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-3 md:hidden text-white hover:bg-sidebar-accent"
            onClick={() => setIsOpen(false)}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="px-3 py-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-md gap-x-3 hover:bg-sidebar-accent",
                    item.active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                  {item.notifications && (
                    <span className="ml-auto rounded-full bg-spotmkt-accent px-2 py-0.5 text-xs font-semibold">
                      {item.notifications}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DashboardSidebar;

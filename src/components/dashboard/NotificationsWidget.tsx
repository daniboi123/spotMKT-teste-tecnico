
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Calendar, 
  MessageSquare, 
  Users, 
  ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    title: "Novo comentário na publicação",
    description: "Maria comentou na publicação sobre produtos sustentáveis",
    time: "Há 10 minutos",
    type: "message",
  },
  {
    id: 2,
    title: "Reunião agendada",
    description: "Reunião de planejamento para campanha de verão",
    time: "Há 30 minutos",
    type: "calendar",
  },
  {
    id: 3,
    title: "Novo seguidor no Instagram",
    description: "Sua página ganhou 25 novos seguidores hoje",
    time: "Há 2 horas",
    type: "user",
  },
  {
    id: 4,
    title: "Campanha finalizada",
    description: "A campanha de remarketing atingiu o orçamento máximo",
    time: "Há 1 dia",
    type: "alert",
  },
];

const activities = [
  {
    id: 1,
    user: "Você",
    action: "alterou o status da",
    target: "solicitação #2489",
    time: "Há 15 minutos",
  },
  {
    id: 2,
    user: "Agência",
    action: "enviou um novo",
    target: "relatório de análise",
    time: "Há 2 horas",
  },
  {
    id: 3,
    user: "Sistema",
    action: "atualizou automaticamente",
    target: "métricas de campanhas",
    time: "Há 1 dia",
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "message":
      return <MessageSquare size={16} className="text-spotmkt" />;
    case "calendar":
      return <Calendar size={16} className="text-spotmkt-warning" />;
    case "user":
      return <Users size={16} className="text-spotmkt-success" />;
    default:
      return <Bell size={16} className="text-spotmkt-error" />;
  }
};

const NotificationsWidget: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-medium">Notificações & Atividades</CardTitle>
            <CardDescription>
              Acompanhe atualizações e atividades recentes
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-spotmkt/10 text-spotmkt border-0">
            4 novas
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="notifications">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="activities">Atividades</TabsTrigger>
          </TabsList>
          <TabsContent value="notifications" className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="mt-0.5">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground mt-1" />
              </div>
            ))}
            <Button variant="ghost" className="w-full text-spotmkt">
              Ver todas as notificações
            </Button>
          </TabsContent>
          <TabsContent value="activities" className="space-y-4">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="p-3 rounded-md border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      <span className="text-spotmkt">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-spotmkt">
              Ver histórico completo
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NotificationsWidget;

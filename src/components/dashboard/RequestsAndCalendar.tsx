
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const requests = [
  {
    id: 1,
    title: "Post para Instagram",
    description: "Criação de post sobre novo produto.",
    status: "completed",
    date: "28/10/2023",
    user: {
      name: "Carlos Silva",
      avatar: "/placeholder.svg",
      initials: "CS",
    },
  },
  {
    id: 2,
    title: "Anúncio Google Ads",
    description: "Campanha de conversão para página de vendas.",
    status: "in-progress",
    date: "31/10/2023",
    user: {
      name: "Ana Costa",
      avatar: "/placeholder.svg",
      initials: "AC",
    },
  },
  {
    id: 3,
    title: "Relatório de Desempenho",
    description: "Análise das campanhas de outubro.",
    status: "pending",
    date: "03/11/2023",
    user: {
      name: "Bruno Martins",
      avatar: "/placeholder.svg",
      initials: "BM",
    },
  },
];

const events = [
  { date: new Date(2025, 3, 15), count: 2 },
  { date: new Date(2025, 3, 18), count: 1 },
  { date: new Date(2025, 3, 22), count: 3 },
  { date: new Date(2025, 3, 25), count: 1 },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-spotmkt-success">Concluído</Badge>;
    case "in-progress":
      return <Badge className="bg-spotmkt-warning text-black">Em andamento</Badge>;
    case "pending":
      return <Badge variant="outline">Pendente</Badge>;
    default:
      return null;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 size={16} className="text-spotmkt-success" />;
    case "in-progress":
      return <Clock size={16} className="text-spotmkt-warning" />;
    case "pending":
      return <AlertCircle size={16} className="text-muted-foreground" />;
    default:
      return null;
  }
};

const RequestsAndCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-medium">Solicitações Recentes</CardTitle>
              <CardDescription>
                Gerencie seus pedidos de trabalho
              </CardDescription>
            </div>
            <Button size="sm" className="bg-spotmkt hover:bg-spotmkt-dark">
              <Plus size={16} className="mr-1" />
              Nova
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requests.map((request) => (
              <div 
                key={request.id}
                className="flex items-center justify-between p-3 rounded-md border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={request.user.avatar} alt={request.user.name} />
                    <AvatarFallback>{request.user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{request.title}</span>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{request.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <FileText size={12} className="mr-1" />
                        {request.user.name}
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {request.date}
                      </span>
                    </div>
                  </div>
                </div>
                {getStatusIcon(request.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Calendário de Marketing</CardTitle>
          <CardDescription>
            Visualize e planeje suas ações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              event: events.map(event => event.date),
            }}
            modifiersClassNames={{
              event: "event-day",
            }}
            components={{
              DayContent: ({ date }) => {
                const event = events.find(
                  (event) =>
                    event.date.getDate() === date.getDate() &&
                    event.date.getMonth() === date.getMonth() &&
                    event.date.getFullYear() === date.getFullYear()
                );

                return (
                  <div className="relative h-full w-full p-2">
                    <span>{date.getDate()}</span>
                    {event && (
                      <div className="absolute bottom-1 right-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-spotmkt"></div>
                      </div>
                    )}
                  </div>
                );
              },
            }}
          />
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Próximos Eventos</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm p-2 rounded-md bg-muted/50">
                <span>Lançamento Campanha Q2</span>
                <Badge variant="outline" className="bg-spotmkt/10 text-spotmkt border-0">
                  15/04
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm p-2 rounded-md bg-muted/50">
                <span>Reunião de Estratégia</span>
                <Badge variant="outline" className="bg-spotmkt/10 text-spotmkt border-0">
                  18/04
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestsAndCalendar;

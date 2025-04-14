
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { TrendingUp, TrendingDown, Users, MousePointerClick, Eye } from "lucide-react";

const campaignData = [
  { name: "Jan", facebook: 4000, instagram: 2400, google: 2400 },
  { name: "Fev", facebook: 3000, instagram: 1398, google: 2210 },
  { name: "Mar", facebook: 2000, instagram: 9800, google: 2290 },
  { name: "Abr", facebook: 2780, instagram: 3908, google: 2000 },
  { name: "Mai", facebook: 1890, instagram: 4800, google: 2181 },
  { name: "Jun", facebook: 2390, instagram: 3800, google: 2500 },
];

const engagementData = [
  { name: "Jan", taxa: 65 },
  { name: "Fev", taxa: 59 },
  { name: "Mar", taxa: 80 },
  { name: "Abr", taxa: 81 },
  { name: "Mai", taxa: 56 },
  { name: "Jun", taxa: 75 },
];

const CampaignMetrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Desempenho de Campanhas</CardTitle>
          <CardDescription>
            Investimento e resultados por plataforma nos últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="facebook" fill="#1877F2" name="Facebook" />
              <Bar dataKey="instagram" fill="#E1306C" name="Instagram" />
              <Bar dataKey="google" fill="#4285F4" name="Google" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Taxa de Engajamento</CardTitle>
            <CardDescription>
              Média de engajamento nas redes sociais (%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="taxa" 
                  stroke="#0496FF" 
                  strokeWidth={2} 
                  dot={{ fill: "#0496FF" }}
                  name="Taxa de Engajamento"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <MetricCard 
            title="Conversões" 
            value="124" 
            change="+14%" 
            trend="up" 
            icon={MousePointerClick}
          />
          <MetricCard 
            title="Alcance" 
            value="8.5k" 
            change="+23%" 
            trend="up" 
            icon={Eye}
          />
          <MetricCard 
            title="CPC Médio" 
            value="R$1.24" 
            change="-8%" 
            trend="down" 
            icon={TrendingDown}
            trendColorInverted
          />
          <MetricCard 
            title="Novos Seguidores" 
            value="532" 
            change="+12%" 
            trend="up" 
            icon={Users}
          />
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  trendColorInverted?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  trendColorInverted = false 
}) => {
  const getTrendColor = () => {
    if (trendColorInverted) {
      return trend === "up" ? "text-spotmkt-error" : "text-spotmkt-success";
    }
    return trend === "up" ? "text-spotmkt-success" : "text-spotmkt-error";
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className={`flex items-center text-xs ${getTrendColor()}`}>
              {trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="ml-1">{change}</span>
            </div>
          </div>
          <div className="bg-spotmkt-muted p-3 rounded-full">
            <Icon size={20} className="text-spotmkt" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignMetrics;

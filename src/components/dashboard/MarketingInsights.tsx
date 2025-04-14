
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp } from "lucide-react";

const sourceData = [
  { name: "Orgânico", value: 35, color: "#10B981" },
  { name: "Redes Sociais", value: 40, color: "#0496FF" },
  { name: "Email", value: 15, color: "#FBBF24" },
  { name: "Referência", value: 10, color: "#EF4444" },
];

const insights = [
  {
    title: "Aumento de 28% no tráfego orgânico",
    description: "As otimizações de SEO realizadas no último mês resultaram em um aumento significativo de tráfego.",
    tag: "SEO",
  },
  {
    title: "Taxa de conversão melhorou em 12%",
    description: "As novas landing pages têm apresentado resultados positivos na taxa de conversão.",
    tag: "Conversão",
  },
  {
    title: "Oportunidade: Público entre 25-34 anos",
    description: "Identificamos um aumento de engajamento nesta faixa etária que pode ser explorado.",
    tag: "Oportunidade",
  }
];

const MarketingInsights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Origem de Tráfego</CardTitle>
          <CardDescription>
            Distribuição de visitantes por canal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-medium">Insights e Recomendações</CardTitle>
              <CardDescription>
                Análises estratégicas baseadas em dados
              </CardDescription>
            </div>
            <Lightbulb className="h-5 w-5 text-spotmkt-accent" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-sm flex items-center gap-1">
                      <TrendingUp size={16} className="text-spotmkt" />
                      {insight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {insight.description}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-spotmkt/10 text-spotmkt border-0">
                    {insight.tag}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingInsights;

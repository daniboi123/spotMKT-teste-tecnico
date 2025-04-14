
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import CampaignMetrics from "@/components/dashboard/CampaignMetrics";
import MarketingInsights from "@/components/dashboard/MarketingInsights";
import RequestsAndCalendar from "@/components/dashboard/RequestsAndCalendar";
import NotificationsWidget from "@/components/dashboard/NotificationsWidget";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Protect route - redirect to login if not authenticated
  React.useEffect(() => {
    // Simple check - in a real app, this would be more robust
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="pt-6 px-4 pb-12 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-spotmkt-dark">Bem-vindo de volta, SpotMkt!</h1>
            <p className="text-muted-foreground">Aqui está um resumo das suas campanhas de marketing</p>
          </div>
          
          <div className="space-y-6">
            <CampaignMetrics />
            <MarketingInsights />
            <RequestsAndCalendar />
            <NotificationsWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

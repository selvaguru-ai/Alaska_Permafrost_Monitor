import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface TemperatureData {
  month: string;
  temperature: number;
}

interface RegionData {
  id: string;
  name: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  temperatureChange: number;
  permafrostDepth: number;
}

const DataDashboard = () => {
  const [timeFilter, setTimeFilter] = useState<string>("1year");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  // Mock temperature trend data
  const temperatureTrendData: TemperatureData[] = [
    { month: "Jan", temperature: -15 },
    { month: "Feb", temperature: -12 },
    { month: "Mar", temperature: -8 },
    { month: "Apr", temperature: -2 },
    { month: "May", temperature: 5 },
    { month: "Jun", temperature: 12 },
    { month: "Jul", temperature: 15 },
    { month: "Aug", temperature: 13 },
    { month: "Sep", temperature: 8 },
    { month: "Oct", temperature: 2 },
    { month: "Nov", temperature: -5 },
    { month: "Dec", temperature: -12 },
  ];

  // Mock region data
  const regionData: RegionData[] = [
    {
      id: "r1",
      name: "North Slope",
      riskLevel: "high",
      temperatureChange: 2.8,
      permafrostDepth: 45,
    },
    {
      id: "r2",
      name: "Interior",
      riskLevel: "medium",
      temperatureChange: 1.9,
      permafrostDepth: 30,
    },
    {
      id: "r3",
      name: "Western Alaska",
      riskLevel: "high",
      temperatureChange: 2.5,
      permafrostDepth: 35,
    },
    {
      id: "r4",
      name: "Southcentral",
      riskLevel: "low",
      temperatureChange: 1.2,
      permafrostDepth: 15,
    },
    {
      id: "r5",
      name: "Southeast",
      riskLevel: "low",
      temperatureChange: 0.8,
      permafrostDepth: 5,
    },
  ];

  // Function to render temperature trend chart
  const renderTemperatureChart = () => {
    const maxTemp =
      Math.max(...temperatureTrendData.map((d) => d.temperature)) + 5;
    const minTemp =
      Math.min(...temperatureTrendData.map((d) => d.temperature)) - 5;
    const range = maxTemp - minTemp;

    return (
      <div className="h-64 w-full bg-white">
        <div className="flex h-full items-end relative pt-5">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
            <span>{maxTemp}°C</span>
            <span>{Math.round((maxTemp + minTemp) / 2)}°C</span>
            <span>{minTemp}°C</span>
          </div>

          {/* Chart bars */}
          <div className="flex-1 flex items-end justify-around h-full pl-10">
            {temperatureTrendData.map((data, index) => {
              const height = ((data.temperature - minTemp) / range) * 100;
              const barColor =
                data.temperature > 0 ? "bg-red-500" : "bg-blue-500";

              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-6 ${barColor} rounded-t`}
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs mt-1">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Function to render heat map
  const renderHeatMap = () => {
    return (
      <div className="grid grid-cols-5 gap-2 h-64">
        {regionData.map((region) => {
          let bgColor = "bg-green-100";
          if (region.riskLevel === "medium") bgColor = "bg-yellow-100";
          if (region.riskLevel === "high") bgColor = "bg-orange-100";
          if (region.riskLevel === "critical") bgColor = "bg-red-100";

          return (
            <div
              key={region.id}
              className={`${bgColor} p-4 rounded-md flex flex-col justify-between border`}
            >
              <div className="font-medium">{region.name}</div>
              <div>
                <div className="text-sm">
                  Temp Change:{" "}
                  <span className="font-medium text-red-600">
                    +{region.temperatureChange}°C
                  </span>
                </div>
                <div className="text-sm">
                  Permafrost:{" "}
                  <span className="font-medium">{region.permafrostDepth}m</span>
                </div>
                <div className="mt-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      region.riskLevel === "low"
                        ? "bg-green-200 text-green-800"
                        : region.riskLevel === "medium"
                        ? "bg-yellow-200 text-yellow-800"
                        : region.riskLevel === "high"
                        ? "bg-orange-200 text-orange-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {region.riskLevel.charAt(0).toUpperCase() +
                      region.riskLevel.slice(1)}{" "}
                    Risk
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Data Dashboard</h1>
        <p className="text-muted-foreground">
          Explore temperature trends and climate change impacts across Alaska
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1year">Last 12 months</SelectItem>
                <SelectItem value="5years">Last 5 years</SelectItem>
                <SelectItem value="10years">Last 10 years</SelectItem>
                <SelectItem value="30years">Last 30 years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North Slope</SelectItem>
                <SelectItem value="interior">Interior</SelectItem>
                <SelectItem value="western">Western Alaska</SelectItem>
                <SelectItem value="southcentral">Southcentral</SelectItem>
                <SelectItem value="southeast">Southeast</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="temperature" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="temperature">Temperature Trends</TabsTrigger>
          <TabsTrigger value="impact">Regional Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="temperature">
          <Card>
            <CardHeader>
              <CardTitle>Temperature Trends</CardTitle>
              <CardDescription>
                Monthly average temperatures across Alaska for{" "}
                {timeFilter === "1year"
                  ? "the last 12 months"
                  : timeFilter === "5years"
                  ? "the last 5 years"
                  : timeFilter === "10years"
                  ? "the last 10 years"
                  : "the last 30 years"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderTemperatureChart()}
              <div className="mt-4 text-sm text-muted-foreground">
                <p>
                  The chart shows a clear warming trend, with winter
                  temperatures rising faster than summer temperatures.
                </p>
                <p>
                  Average annual temperature has increased by 2.5°C since 1970.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle>Regional Climate Impact</CardTitle>
              <CardDescription>
                Permafrost thaw risk assessment by region based on temperature
                changes and current permafrost depth
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderHeatMap()}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Key Findings</h3>
                <Separator className="mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-md">
                    <h4 className="font-medium mb-1">North Slope</h4>
                    <p className="text-sm">
                      Experiencing the fastest warming rate in Alaska, with
                      significant permafrost degradation affecting
                      infrastructure and ecosystems.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-md">
                    <h4 className="font-medium mb-1">Western Alaska</h4>
                    <p className="text-sm">
                      Coastal erosion accelerating due to permafrost thaw,
                      threatening several communities with potential relocation
                      needs.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-md">
                    <h4 className="font-medium mb-1">Interior</h4>
                    <p className="text-sm">
                      Moderate thaw risk with increasing ground instability
                      affecting roads and buildings in some areas.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-md">
                    <h4 className="font-medium mb-1">
                      Southcentral & Southeast
                    </h4>
                    <p className="text-sm">
                      Lower risk areas with minimal permafrost, but still
                      experiencing climate-related changes affecting local
                      ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataDashboard;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  FileUp,
  FileCheck,
  AlertTriangle,
  Download,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface PredictionToolProps {
  onPredictionComplete?: (result: PredictionResult) => void;
}

interface PredictionResult {
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  confidenceScore: number;
  temperatureChange: number;
  estimatedThawRate: number;
  recommendations: string[];
}

const PredictionTool: React.FC<PredictionToolProps> = ({
  onPredictionComplete = () => {},
}) => {
  const [activeTab, setActiveTab] = useState("upload");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [predictionResult, setPredictionResult] =
    useState<PredictionResult | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setValidationError(null);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationError(null);
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check file type (CSV, JSON, etc.)
    const validTypes = [
      "text/csv",
      "application/json",
      "application/vnd.ms-excel",
    ];
    if (!validTypes.includes(file.type)) {
      setValidationError(
        "Invalid file type. Please upload CSV or JSON files only.",
      );
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setValidationError("File too large. Maximum size is 10MB.");
      return;
    }

    setFile(file);
  };

  const processFile = () => {
    if (!file) return;

    setIsProcessing(true);
    setActiveTab("processing");

    // Simulate processing with progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setProcessingProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          // Mock prediction result
          const result: PredictionResult = {
            riskLevel: "Medium",
            confidenceScore: 87,
            temperatureChange: 2.3,
            estimatedThawRate: 4.7,
            recommendations: [
              "Monitor soil temperature quarterly",
              "Consider structural reinforcement for affected infrastructure",
              "Implement drainage systems to manage water from thawing permafrost",
            ],
          };

          setPredictionResult(result);
          onPredictionComplete(result);
          setActiveTab("results");
          setIsProcessing(false);
        }, 500);
      }
    }, 200);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      case "Critical":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const resetTool = () => {
    setFile(null);
    setPredictionResult(null);
    setValidationError(null);
    setProcessingProgress(0);
    setActiveTab("upload");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-background">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">
            Permafrost Thaw Risk Prediction Tool
          </CardTitle>
          <CardDescription>
            Upload soil and climate data to receive ML-based predictions on
            permafrost thaw risk.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload" disabled={isProcessing}>
                Upload Data
              </TabsTrigger>
              <TabsTrigger value="processing" disabled={!isProcessing}>
                Processing
              </TabsTrigger>
              <TabsTrigger value="results" disabled={!predictionResult}>
                Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="mt-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Upload size={40} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Drag and drop your data file here
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Supported formats: CSV, JSON (max 10MB)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <Separator className="w-16" />
                    <span className="mx-2 text-xs text-muted-foreground">
                      OR
                    </span>
                    <Separator className="w-16" />
                  </div>

                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                      <FileUp size={16} />
                      <span>Browse files</span>
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileInput}
                      accept=".csv,.json,.xlsx"
                    />
                  </Label>
                </div>
              </div>

              {validationError && (
                <Alert variant="destructive" className="mt-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{validationError}</AlertDescription>
                </Alert>
              )}

              {file && !validationError && (
                <div className="mt-4 p-4 border rounded-md bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileCheck size={24} className="text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="processing" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 space-y-6">
                <div className="animate-pulse p-4 rounded-full bg-primary/10">
                  <BarChart3 size={48} className="text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium">Processing your data</h3>
                  <p className="text-muted-foreground mt-2">
                    Our ML model is analyzing your soil and climate data
                  </p>
                </div>
                <div className="w-full max-w-md">
                  <Progress value={processingProgress} className="h-2" />
                  <p className="text-sm text-right mt-1 text-muted-foreground">
                    {processingProgress}%
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-6">
              {predictionResult && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <Card className="flex-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          Risk Assessment
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${getRiskColor(predictionResult.riskLevel)}`}
                          >
                            {predictionResult.riskLevel}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Confidence Score
                            </p>
                            <p className="text-2xl font-bold">
                              {predictionResult.confidenceScore}%
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="flex-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Key Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Temperature Change
                            </p>
                            <p className="text-2xl font-bold">
                              +{predictionResult.temperatureChange}°C
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Estimated Thaw Rate
                            </p>
                            <p className="text-2xl font-bold">
                              {predictionResult.estimatedThawRate} cm/year
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        {predictionResult.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <Button variant="outline" onClick={resetTool}>
                      Analyze New Data
                    </Button>
                    <Button className="flex items-center gap-2">
                      <Download size={16} />
                      Export Results
                    </Button>
                    <Button
                      className="flex items-center gap-2"
                      variant="secondary"
                    >
                      View on Map
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          {activeTab === "upload" && (
            <div className="flex justify-end w-full">
              <Button
                onClick={processFile}
                disabled={!file || !!validationError}
                className="flex items-center gap-2"
              >
                Process Data
                <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PredictionTool;

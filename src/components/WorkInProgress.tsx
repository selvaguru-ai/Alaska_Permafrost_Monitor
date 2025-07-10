import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-yellow-100">
              <Construction className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Work in Progress</CardTitle>
          <CardDescription>
            This feature is currently under development. Please check back soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            We're working hard to bring you the best permafrost monitoring
            experience. This section will be available shortly.
          </p>
          <Link to="/">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkInProgress;

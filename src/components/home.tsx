import React from "react";
import { Link } from "react-router-dom";
import {
  MapIcon,
  BarChart3Icon,
  BookOpenIcon,
  BrainCircuitIcon,
} from "lucide-react";
import InteractiveMap from "./InteractiveMap";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center space-x-2">
            <MapIcon className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold">ALASKA PERMAFROST MONITOR</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 text-sm font-medium text-blue-600"
            >
              <MapIcon className="w-4 h-4" />
              <span>Interactive Map</span>
            </Link>
            <Link
              to="/wip"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              <BrainCircuitIcon className="w-4 h-4" />
              <span>Prediction Tool</span>
            </Link>
            <Link
              to="/wip"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              <BarChart3Icon className="w-4 h-4" />
              <span>Data Dashboard</span>
            </Link>
            <Link
              to="/wip"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              <BookOpenIcon className="w-4 h-4" />
              <span>Educational Section</span>
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <MapIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-50 py-12">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Monitoring Alaska's Changing Permafrost
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Track, analyze, and predict permafrost thaw using satellite
                imagery and machine learning.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore the Map
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-6">
          <div className="container px-4 mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">
                  Interactive Alaska Permafrost Map
                </h3>
                <p className="text-sm text-gray-500">
                  Explore color-coded thaw risk zones across Alaska
                </p>
              </div>
              <div className="h-[600px] w-full">
                <InteractiveMap />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <BrainCircuitIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">Prediction Tool</h4>
                <p className="text-gray-600">
                  Upload soil and climate data to receive ML-based thaw risk
                  assessments for specific regions.
                </p>
                <Link
                  to="/wip"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Try the prediction tool →
                </Link>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <BarChart3Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">Data Dashboard</h4>
                <p className="text-gray-600">
                  Visualize temperature trends and climate change impacts with
                  interactive graphs and charts.
                </p>
                <Link
                  to="/wip"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View the dashboard →
                </Link>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <BookOpenIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">
                  Educational Resources
                </h4>
                <p className="text-gray-600">
                  Learn about the importance of permafrost to Alaska's ecosystem
                  and how AI assists in monitoring.
                </p>
                <Link
                  to="/wip"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Explore resources →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <MapIcon className="w-5 h-5" />
                <span className="font-medium">Alaska Permafrost Monitor</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Tracking and predicting permafrost thaw
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-sm text-gray-300 hover:text-white">
                Home
              </Link>
              <Link
                to="/wip"
                className="text-sm text-gray-300 hover:text-white"
              >
                Prediction Tool
              </Link>
              <Link
                to="/wip"
                className="text-sm text-gray-300 hover:text-white"
              >
                Data Dashboard
              </Link>
              <Link
                to="/wip"
                className="text-sm text-gray-300 hover:text-white"
              >
                Educational Section
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Alaska Permafrost Monitor. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

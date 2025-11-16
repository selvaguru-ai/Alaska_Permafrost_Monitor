import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const EducationalSection = () => {
  return (
    <div className="bg-white p-6 md:p-8 lg:p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Why Permafrost Matters
        </h1>

        <Tabs defaultValue="importance" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="importance">Permafrost Importance</TabsTrigger>
            <TabsTrigger value="ai">AI Detection</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="importance" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ecosystem Impact</CardTitle>
                  <CardDescription>
                    How permafrost affects Alaska's natural environment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?w=800&q=80"
                    alt="Alaska ecosystem"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    Permafrost serves as the foundation for Alaska's unique
                    ecosystems. As it thaws, landscapes transform, affecting
                    vegetation patterns, wildlife habitats, and water systems.
                    The release of previously frozen organic matter can alter
                    nutrient cycles and impact biodiversity throughout the
                    region.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Infrastructure Challenges</CardTitle>
                  <CardDescription>
                    Effects on buildings, roads, and utilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&q=80"
                    alt="Infrastructure damage"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    Buildings, roads, pipelines, and other infrastructure built
                    on permafrost depend on its stability. As permafrost thaws,
                    ground subsidence occurs, causing structural damage and
                    requiring costly repairs. Communities across Alaska face
                    increasing challenges maintaining essential infrastructure
                    as temperatures rise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Carbon Release</CardTitle>
                  <CardDescription>Climate feedback mechanisms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
                    alt="Carbon cycle"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    Permafrost contains vast amounts of frozen organic carbon.
                    When thawed, microbes decompose this material, releasing
                    greenhouse gases like carbon dioxide and methane. This
                    creates a feedback loop: warming causes thawing, which
                    releases gases that cause more warming. Alaska's permafrost
                    is a critical component in global climate regulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cultural Heritage</CardTitle>
                  <CardDescription>
                    Impact on Alaska Native communities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1494375364504-808bd1f3e688?w=800&q=80"
                    alt="Alaska Native culture"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    For thousands of years ago, Alaska Native communities have
                    developed ways of life adapted to permafrost landscapes.
                    Thawing affects traditional hunting and gathering practices,
                    food storage methods, and even the preservation of cultural
                    sites. Many communities face difficult decisions about
                    relocation as their ancestral lands transform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Permafrost Monitoring</CardTitle>
                <CardDescription>
                  How artificial intelligence is revolutionizing permafrost
                  research
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Satellite Imagery Analysis
                    </h3>
                    <img
                      src="https://images.unsplash.com/photo-1541185934-01b600ea069c?w=800&q=80"
                      alt="Satellite imagery"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700">
                      AI algorithms process vast amounts of satellite imagery to
                      detect subtle changes in landscape features that indicate
                      permafrost thaw. These systems can identify thermokarst
                      formation, vegetation shifts, and other indicators across
                      large geographic areas that would be impossible to monitor
                      manually.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Predictive Modeling
                    </h3>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                      alt="Data modeling"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700">
                      Machine learning models integrate climate data, soil
                      properties, and historical observations to predict future
                      permafrost conditions. These predictions help communities
                      and policymakers prepare for changes before they occur,
                      allowing for proactive rather than reactive management
                      strategies.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Our AI Approach
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Alaska Permafrost Tracking System uses a combination of
                    computer vision algorithms and deep learning models trained
                    on decades of field measurements and remote sensing data.
                    Our system can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Detect early warning signs of permafrost degradation
                    </li>
                    <li>
                      Classify risk levels based on multiple environmental
                      factors
                    </li>
                    <li>
                      Project thaw rates under different climate scenarios
                    </li>
                    <li>
                      Identify areas where intervention might prevent
                      infrastructure damage
                    </li>
                    <li>
                      Monitor recovery in areas where mitigation efforts are
                      underway
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Educational Resources</CardTitle>
                <CardDescription>
                  Materials to learn more about permafrost and climate change in
                  Alaska
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Research Papers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li>
                          <p className="font-medium">
                            Permafrost Carbon Feedback
                          </p>
                          <p className="text-sm text-gray-500">
                            Journal of Climate Research, 2023
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <Download className="h-4 w-4 mr-2" /> Download PDF
                          </Button>
                        </li>
                        <li>
                          <p className="font-medium">
                            Infrastructure Adaptation in Northern Communities
                          </p>
                          <p className="text-sm text-gray-500">
                            Arctic Engineering Journal, 2022
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <Download className="h-4 w-4 mr-2" /> Download PDF
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Educational Videos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li>
                          <p className="font-medium">
                            Permafrost Basics Explained
                          </p>
                          <p className="text-sm text-gray-500">
                            15 min documentary
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" /> Watch
                            Video
                          </Button>
                        </li>
                        <li>
                          <p className="font-medium">
                            AI in Environmental Monitoring
                          </p>
                          <p className="text-sm text-gray-500">
                            Technical overview, 22 min
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" /> Watch
                            Video
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Teaching Materials
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li>
                          <p className="font-medium">
                            Permafrost Curriculum Guide
                          </p>
                          <p className="text-sm text-gray-500">
                            For grades 6-12
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <Download className="h-4 w-4 mr-2" /> Download ZIP
                          </Button>
                        </li>
                        <li>
                          <p className="font-medium">
                            Climate Change in Alaska
                          </p>
                          <p className="text-sm text-gray-500">
                            Presentation slides with notes
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => {}}
                          >
                            <Download className="h-4 w-4 mr-2" /> Download PPT
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Partner Organizations
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "Alaska Climate Research Center",
                      "University of Alaska Fairbanks",
                      "Permafrost Research Institute",
                      "Indigenous Knowledge Network",
                    ].map((org, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center h-24 bg-gray-100 rounded-md p-4"
                      >
                        <p className="text-center text-sm font-medium">{org}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-6">
            Permafrost monitoring requires collaboration between scientists,
            communities, and policymakers. Learn how you can contribute to our
            understanding of Alaska's changing landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Join Citizen Science Program</Button>
            <Button variant="outline">Contact Research Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;

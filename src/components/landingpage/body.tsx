import React from "react";
const industries = [
  { name: "Manufacturing", description: "Factory equipment maintenance" },
  { name: "Automotive", description: "Vehicle diagnostics and repair" },
  { name: "IoT Devices", description: "Smart device troubleshooting" },
  { name: "Energy", description: "Power system maintenance" },
];
const Body = () => {
  return (
    <>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and intelligent repair process
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Image</h3>
              <p className="text-gray-600">
                Capture and upload a photo of the broken or malfunctioning
                equipment
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes the image and searches our vector database for
                matching cases
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Solutions</h3>
              <p className="text-gray-600">
                Receive detailed, step-by-step repair instructions and relevant
                documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 #52525b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Trusted by professionals across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className=" p-6 rounded-xl z-20 bg-gray-100 hover:shadow-xl hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;

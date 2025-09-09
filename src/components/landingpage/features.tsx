import { Camera, Database, Wrench, Zap } from "lucide-react";

 const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Image Recognition",
      description: "Upload photos of broken equipment for instant analysis and identification"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Vector Search",
      description: "Retrieve matching manuals and past repair cases from our TiDB database"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Step-by-Step Guidance",
      description: "Get AI-generated repair instructions tailored to your specific equipment"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Support",
      description: "Instant assistance for factories, IoT devices, and automotive systems"
    }
  ];

const Features = () => {
  return (
    <>
    <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology that transforms how you handle equipment maintenance and repairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="mb-6 text-black">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
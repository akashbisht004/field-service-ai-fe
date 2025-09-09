import { ArrowRight, Camera, CheckCircle, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedText,FadeInElement } from "../animated/animatedElements";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">

        <FadeInElement className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeInElement delay={300} className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                  <AnimatedText text="AI-Powered"/>
                  <span className="block text-gray-600">Field Service</span>
                  <span className="block">Assistant</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-lg">
                  <AnimatedText text="Transform equipment maintenance with intelligent image
                  recognition, vector search, and step-by-step AI guidance for
                  faster repairs."/>
                </p>
              </FadeInElement>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
                  onClick={() => router.push("/auth/signup")}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all flex items-center justify-center space-x-2 cursor-pointer">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-gray-600">Faster Repairs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-gray-600">AI Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="text-sm font-medium">
                      Equipment Analysis Complete
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          Motor bearing failure detected
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Repair manual retrieved</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                          Step-by-step guide generated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInElement>
      </section>
    </>
  );
};

export default Hero;

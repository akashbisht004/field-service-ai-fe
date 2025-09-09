"use client";

import React, { useState, useEffect } from 'react';
import { Camera, Wrench, Zap, Database, ArrowRight, Menu, X, Play, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const FieldServiceLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router=useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const industries = [
    { name: "Manufacturing", description: "Factory equipment maintenance" },
    { name: "Automotive", description: "Vehicle diagnostics and repair" },
    { name: "IoT Devices", description: "Smart device troubleshooting" },
    { name: "Energy", description: "Power system maintenance" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 20 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link className="flex items-center space-x-2"
            href={"/"}>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Field Service AI</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-gray-600 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-gray-600 transition-colors">How It Works</a>
              <a href="#industries" className="hover:text-gray-600 transition-colors">Industries</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
              onClick={()=>router.push("/auth/signup")} >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block hover:text-gray-600">Features</a>
                <a href="#how-it-works" className="block hover:text-gray-600">How It Works</a>
                <a href="#industries" className="block hover:text-gray-600">Industries</a>
                <a href="#contact" className="block hover:text-gray-600">Contact</a>
                <button className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={()=>router.push("/auth/signup")}>
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  AI-Powered
                  <span className="block text-gray-600">Field Service</span>
                  <span className="block">Assistant</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform equipment maintenance with intelligent image recognition, 
                  vector search, and step-by-step AI guidance for faster repairs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
                onClick={()=>router.push("/auth/signup")}>
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all flex items-center justify-center space-x-2 cursor-pointer">
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
                    <div className="text-sm font-medium">Equipment Analysis Complete</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Motor bearing failure detected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Repair manual retrieved</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Step-by-step guide generated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, fast, and intelligent repair process</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Image</h3>
              <p className="text-gray-600">
                Capture and upload a photo of the broken or malfunctioning equipment
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes the image and searches our vector database for matching cases
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Solutions</h3>
              <p className="text-gray-600">
                Receive detailed, step-by-step repair instructions and relevant documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Trusted by professionals across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-transparent hover:border-black transition-all">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Field Service?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of technicians already using AI to solve equipment issues faster and more accurately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
            onClick={()=>router.push("/auth/signup")}>
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all">
              Schedule Demo
            </button>
          </div>

          <div className="mt-12 text-gray-400">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold">Field Service AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing equipment maintenance with AI-powered image recognition 
                and intelligent repair guidance.
              </p>
              <div className="text-sm text-gray-400">
                © 2024 Field Service AI. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FieldServiceLanding;
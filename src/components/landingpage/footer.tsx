import { Wrench } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="rgba(30,30,30,0.9) 50% text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl text-gray-500 font-bold">Field Service AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing equipment maintenance with AI-powered image
                recognition and intelligent repair guidance.
              </p>
              <div className="text-sm text-gray-400">
                © 2024 Field Service AI. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

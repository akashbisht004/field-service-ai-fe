import { Menu, Wrench, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollY
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY:number
}) => {
  const router = useRouter();
  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link className="flex items-center space-x-2" href={"/"}>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Field Service AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-gray-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-gray-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#industries"
                className="hover:text-gray-600 transition-colors"
              >
                Industries
              </a>
              <a
                href="#contact"
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
              <button
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => router.push("/auth/signup")}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block hover:text-gray-600">
                  Features
                </a>
                <a href="#how-it-works" className="block hover:text-gray-600">
                  How It Works
                </a>
                <a href="#industries" className="block hover:text-gray-600">
                  Industries
                </a>
                <a href="#contact" className="block hover:text-gray-600">
                  Contact
                </a>
                <button
                  className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => router.push("/auth/signup")}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

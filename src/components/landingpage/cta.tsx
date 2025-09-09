import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CTA = () => {
  const router = useRouter();
  return (
    <>
      <section className="relative py-24 bg-gray-100 text-white overflow-hidden">
        {/* Gradient fade: dark gray center fading outwards */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(30,30,30,0.9) 20%, rgba(30,30,30,0.7) 40%, rgba(255,255,255,0) 80%)",
            pointerEvents: "none",
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Transform Your Field Service?
          </h2>
          <p className="text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Join thousands of technicians already using AI to solve equipment
            issues faster and more accurately.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-white text-black px-10 py-5 rounded-xl font-semibold text-lg
                hover:bg-gray-100 active:bg-gray-200
                transition-all duration-200 ease-out
                transform hover:scale-[1.02] active:scale-[0.98]
                shadow-2xl hover:shadow-white/20
                focus:outline-none focus:ring-4 focus:ring-white/30
                flex items-center justify-center space-x-3"
              onClick={() => router.push("/auth/signup")}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="bg-white text-black px-10 py-5 rounded-xl font-semibold text-lg
                hover:bg-gray-100 active:bg-gray-200
                transition-all duration-200 ease-out
                transform hover:scale-[1.02] active:scale-[0.98]
                shadow-2xl hover:shadow-white/20
                focus:outline-none focus:ring-4 focus:ring-white/30
                flex items-center justify-center space-x-3"
            >
              Schedule Demo
            </button>
          </div>

          <div className="mt-16 text-gray-400">
            <p className="text-lg">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;

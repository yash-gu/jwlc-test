import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroImages = import.meta.glob('./Screenshot*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
  const heroImage = Object.values(heroImages)[0];
  return (
    <section
      id="home"
      className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Jaipur Weight Loss Community
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Your journey to a healthier you starts here.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                We believe weight loss isn't hard — it's simple and achievable with the right support. Join our community and discover how easy it can be!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Join Community
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 font-semibold rounded-lg border-2 border-green-600 dark:border-green-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Fitness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full flex flex-col items-center justify-center text-white font-bold text-center">
                <span className="text-3xl">95%</span>
                <span className="text-sm">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-green-600 dark:text-green-400" />
      </div>
    </section>
  );
}

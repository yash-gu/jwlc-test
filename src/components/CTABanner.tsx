export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-700">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take the first step toward a healthier lifestyle today!
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Join thousands of members who have already transformed their lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Join Now
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border-2 border-white hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart, TrendingDown, Users, Utensils, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingDown,
      title: 'Weight Loss',
      description: 'Personalized plans to help you lose weight effectively and sustainably.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'Weight Gain',
      description: 'Healthy and structured programs designed for safe weight gain.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Online Coaching',
      description: 'Group sessions and one-on-one coaching tailored to your needs.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Utensils,
      title: 'Diet Planning',
      description: 'Customized meal plans based on individual goals and preferences.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Lifestyle Transformation',
      description: 'Building long-term healthy habits for sustained wellness.',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive wellness solutions for your health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl p-8 bg-white dark:bg-slate-700 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

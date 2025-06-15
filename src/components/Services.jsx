import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Kundli Analysis',
      description: 'Get detailed insights about your life path, personality, and future based on your birth chart (Kundli).',
      icon: '🔮',
    },
    {
      title: 'Marriage Compatibility',
      description: 'Understand your relationship compatibility through detailed Kundli Milan and Mangal Dosha analysis.',
      icon: '💑',
    },
    {
      title: 'Career Guidance',
      description: 'Discover your true calling and get guidance for career growth through Vedic astrology.',
      icon: '💼',
    },
    {
      title: 'Gemstone Consultation',
      description: 'Get personalized gemstone recommendations based on your planetary positions.',
      icon: '💎',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-saffron-50 to-spiritual-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-purple mb-4">
            Our Vedic Services
          </h2>
          <p className="text-temple-700 max-w-2xl mx-auto">
            Experience the ancient wisdom of Vedic astrology through our comprehensive range of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-saffron-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-deep-purple mb-3">
                {service.title}
              </h3>
              <p className="text-temple-700 mb-4">
                {service.description}
              </p>
              <button className="text-saffron-600 bg-white hover:text-deep-purple font-semibold flex items-center gap-2 transition-colors group border-none focus:outline-none">
                Know More
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
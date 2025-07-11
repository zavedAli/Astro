import mandalaImage from '../assets/mandala.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-saffron-50 to-spiritual-50 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mandala opacity-5"></div>
      
      {/* Mandala Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Mandala */}
        <div className="absolute left-8 top-20 w-24 opacity-10">
          <img 
            src={mandalaImage} 
            alt="Decorative Mandala" 
            className="w-full h-auto mix-blend-multiply"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
          />
        </div>
        
        {/* Bottom Right Mandala */}
        <div className="absolute right-12 bottom-32 w-1/3 opacity-15">
          <img 
            src={mandalaImage} 
            alt="Decorative Mandala" 
            className="w-full h-auto mix-blend-multiply transform scale-x-[-1]"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
          />
        </div>

        {/* Center Left Mandala */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-[250px] opacity-20">
          <img 
            src={mandalaImage} 
            alt="Decorative Mandala" 
            className="w-full h-auto mix-blend-multiply"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
          />
        </div>

        {/* Top Right Mandala */}
        <div className="absolute right-20 top-20 w-28 opacity-15">
          <img 
            src={mandalaImage} 
            alt="Decorative Mandala" 
            className="w-full h-auto mix-blend-multiply transform scale-x-[-1]"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
          />
        </div>
      </div>
      
      {/* Decorative Images */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Lakshmi Image */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48">
          {/* <img 
            src="/images/lakshmi.png" 
            alt="Goddess Lakshmi" 
            className="w-full h-full object-contain"
            loading="lazy"
            width="192"
            height="192"
          /> */}
        </div>
        
        {/* Elephant Image */}
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 transform translate-x-1/4 translate-y-1/4">
          {/* <img 
            src="/images/elephant.png" 
            alt="Decorative Elephant" 
            className="w-full h-full object-contain"
            loading="lazy"
            width="384"
            height="384"
          /> */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-deep-purple mb-6">
          Consult the Best Indian Astrologer Online
        </h1>
        
        <p className="text-xl md:text-2xl text-temple-700 mb-8 max-w-2xl mx-auto">
          Discover your destiny with authentic Vedic astrology readings from our expert pandits
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-holy-red text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl border-2 border-marigold">
            Book Pandit Ji
          </button>
          <button className="bg-white text-deep-purple px-8 py-3 rounded-md text-lg font-semibold hover:bg-saffron-50 transition-colors shadow-lg hover:shadow-xl border-2 border-deep-purple">
            Free Horoscope
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '10K+', label: 'Satisfied Clients' },
            { number: '15+', label: 'Expert Pandits' },
            { number: '98%', label: 'Accuracy Rate' },
            { number: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-saffron-200">
              <div className="text-2xl md:text-3xl font-bold text-holy-red mb-2">
                {stat.number}
              </div>
              <div className="text-temple-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 
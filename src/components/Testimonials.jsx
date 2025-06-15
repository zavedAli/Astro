const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      content: 'The Kundli analysis was incredibly accurate. Pandit Ji helped me understand my business prospects and make better decisions.',
      rating: 5,
    },
    {
      name: 'Rajesh Patel',
      role: 'Software Engineer',
      content: 'I was skeptical at first, but the career guidance through Vedic astrology was spot on. It helped me find my true calling.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Homemaker',
      content: 'The marriage compatibility analysis gave me clarity about my relationship. The remedies suggested by Pandit Ji worked wonders.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-spiritual-50 to-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-purple mb-4">
            Client Experiences
          </h2>
          <p className="text-temple-700 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences with our Vedic astrology services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-saffron-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-marigold">★</span>
                ))}
              </div>
              <p className="text-temple-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-deep-purple">
                  {testimonial.name}
                </h4>
                <p className="text-temple-500 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
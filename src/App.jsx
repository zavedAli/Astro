import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-screen max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <footer className="bg-deep-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Vedic Gyan</h3>
              <p className="text-saffron-200">
                Your trusted source for Vedic astrological guidance and insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-saffron-200 hover:text-marigold transition-colors">Home</a></li>
                <li><a href="#about" className="text-saffron-200 hover:text-marigold transition-colors">About</a></li>
                <li><a href="#services" className="text-saffron-200 hover:text-marigold transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-saffron-200 hover:text-marigold transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-saffron-200 hover:text-marigold transition-colors">Kundli Analysis</a></li>
                <li><a href="#" className="text-saffron-200 hover:text-marigold transition-colors">Marriage Compatibility</a></li>
                <li><a href="#" className="text-saffron-200 hover:text-marigold transition-colors">Career Guidance</a></li>
                <li><a href="#" className="text-saffron-200 hover:text-marigold transition-colors">Gemstone Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-saffron-200">Email: contact@vedicgyan.com</li>
                <li className="text-saffron-200">Phone: +1 (555) 123-4567</li>
                <li className="text-saffron-200">Hours: 24/7 Online Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-saffron-200/20 mt-8 pt-8 text-center text-saffron-200">
            <p>&copy; {new Date().getFullYear()} Vedic Gyan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

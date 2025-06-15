import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactButtons from './components/ContactButtons'
import SEO from './components/SEO'
import Breadcrumb from './components/Breadcrumb'
import SocialSidebar from './components/SocialSidebar'
import Blog from './pages/Blog'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <SEO />
          <Navbar />
          <SocialSidebar />
          <main className="w-screen max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={
                <>
                  <Breadcrumb items={[
                    { label: 'Home', url: '/' }
                  ]} />
                  <Hero />
                  <Services />
                  <Testimonials />
                </>
              } />
              <Route path="/services" element={
                <>
                  <Breadcrumb items={[
                    { label: 'Home', url: '/' },
                    { label: 'Services', url: '/services' }
                  ]} />
                  <Services />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Breadcrumb items={[
                    { label: 'Home', url: '/' },
                    { label: 'About', url: '/about' }
                  ]} />
                  <div className="py-20">
                    <h1 className="text-4xl font-display font-bold text-deep-purple mb-8">About Us</h1>
                    {/* Add About content here */}
                  </div>
                </>
              } />
              <Route path="/blog" element={
                <>
                  <Breadcrumb items={[
                    { label: 'Home', url: '/' },
                    { label: 'Blog', url: '/blog' }
                  ]} />
                  <Blog />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Breadcrumb items={[
                    { label: 'Home', url: '/' },
                    { label: 'Contact', url: '/contact' }
                  ]} />
                  <div className="py-20">
                    <h1 className="text-4xl font-display font-bold text-deep-purple mb-8">Contact Us</h1>
                    {/* Add Contact content here */}
                  </div>
                </>
              } />
            </Routes>
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
                    <li><a href="/" className="text-saffron-200 hover:text-marigold transition-colors">Home</a></li>
                    <li><a href="/about" className="text-saffron-200 hover:text-marigold transition-colors">About</a></li>
                    <li><a href="/services" className="text-saffron-200 hover:text-marigold transition-colors">Services</a></li>
                    <li><a href="/blog" className="text-saffron-200 hover:text-marigold transition-colors">Blog</a></li>
                    <li><a href="/contact" className="text-saffron-200 hover:text-marigold transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="/services#kundli" className="text-saffron-200 hover:text-marigold transition-colors">Kundli Analysis</a></li>
                    <li><a href="/services#marriage" className="text-saffron-200 hover:text-marigold transition-colors">Marriage Compatibility</a></li>
                    <li><a href="/services#career" className="text-saffron-200 hover:text-marigold transition-colors">Career Guidance</a></li>
                    <li><a href="/services#gemstone" className="text-saffron-200 hover:text-marigold transition-colors">Gemstone Consultation</a></li>
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
          <ContactButtons />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-2">
                <span className="text-primary-600 font-bold">C&C</span>
              </div>
              <span className="text-xl font-semibold">CareAndCure</span>
            </div>
            <p className="text-primary-100 mb-4">
              Providing holistic homeopathic healthcare solutions with a focus on natural healing and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-primary-100 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-primary-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-primary-100 hover:text-white transition-colors">Join Our Network</Link></li>
              <li><Link to="/login" className="text-primary-100 hover:text-white transition-colors">Doctor Login</Link></li>
              <li><Link to="/resources" className="text-primary-100 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/webinars" className="text-primary-100 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link to="/faq" className="text-primary-100 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@careandcure.com" className="text-primary-100 hover:text-white transition-colors">info@careandcure.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="text-primary-100 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="mt-4">
                <address className="text-primary-100 not-italic">
                  123 Healing Avenue<br />
                  Wellness District<br />
                  Healthy City, HC 10001
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-500">
          <p className="text-primary-100 text-center text-sm">
            &copy; {currentYear} CareAndCure Homeopathic Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Jaipur Wellness Community
            </h3>
            <p className="text-gray-400">
              Transforming lives through sustainable health goals and community support.
            </p>
            <p className="mt-4 text-sm text-green-300">आज ही एक हेल्दी शुरुआत करें!</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Weight Loss</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Weight Gain</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Online Coaching</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Diet Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:9680801786" className="hover:text-green-400 transition-colors">+91 9680801786</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:contact@jwlc.com" className="hover:text-green-400 transition-colors">contact@jwlc.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} />
                <div>
                  <div>J-128, Dhobiyon Ka Mod,</div>
                  <div>Near Oxford School, Shamshan Road,</div>
                  <div>Adarsh Nagar, Jaipur</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-semibold text-gray-300">Timing:</span>
                <span>8:30 AM – 9:30 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={18} className="text-red-500 fill-red-500" /> by Jaipur Weight Loss Community
          </p>
          <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
            &copy; {currentYear} JWLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Heart, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Tales by Bibi" className="h-12 w-auto" />
              <h3 className="text-xl font-display font-bold">Tales by Bibi</h3>
            </div>
            <p className="text-white/80 mb-4">
              Bringing African stories to life for children worldwide.
            </p>
            <p className="text-sm text-white/60">
              © 2026 Tales by Bibi. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-sunset transition-colors">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-sunset transition-colors">About</a></li>
              <li><a href="/authors" className="text-white/80 hover:text-sunset transition-colors">Authors</a></li>
              <li><a href="/order" className="text-white/80 hover:text-sunset transition-colors">Order Book</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Connect With Us</h3>
            <a href="mailto:talesbybibi@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-sunset transition-colors">
              <Mail className="h-5 w-5" />
              <span>talesbybibi@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-sunset fill-sunset" /> for children everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

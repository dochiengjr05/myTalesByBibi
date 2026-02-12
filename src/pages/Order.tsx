import { ShoppingBag, Phone } from 'lucide-react';

export default function Order() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sunset to-sunset-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Get Your Copy
          </h1>
          <p className="text-2xl text-white/90">
            Order Hoofbeats & Tails Today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Book Info Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <img
              src="/images/book-cover.png"
              alt="Hoofbeats & Tails Book Cover"
              className="rounded-lg w-full max-w-md mx-auto mb-6"
            />
            
            <h2 className="text-3xl font-display font-bold text-earth mb-4 text-center">
              Hoofbeats & Tails
            </h2>
            <p className="text-2xl text-sunset font-bold mb-6 text-center">KES 800</p>
            <p className="text-gray-700 mb-6 text-center">
              The Story of Three Wild Siblings — A heartwarming collection of African 
              folktales, legends, and myths perfect for young readers.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-3 text-gray-700">
                <ShoppingBag className="h-5 w-5 text-sunset" />
                <span>Perfect for ages 6-12</span>
              </div>
            </div>
            
            {/* M-PESA Payment Section */}
            <div className="bg-grass-light border-l-4 border-grass p-6 rounded-lg mb-6">
              <h3 className="font-display font-bold text-earth mb-3 flex items-center">
                <Phone className="h-5 w-5 text-sunset mr-2" />
                M-PESA Payment
              </h3>
              <p className="text-gray-700 mb-3">
                Make payment to place order and we will contact you within 12 hours to schedule delivery.
              </p>
              <p className="text-gray-700 mb-2">
                Send payment via M-PESA to:
              </p>
              <p className="text-2xl font-bold text-sunset mb-2">
                0728934854
              </p>
              <p className="text-sm text-gray-600">
                Amount: KES 800 (1 copy)
              </p>
            </div>
          </div>
          
          {/* Bulk Orders Section */}
          <div className="bg-grass-light rounded-lg p-6 border-l-4 border-grass mb-8">
            <h3 className="text-xl font-display font-bold text-earth mb-3">Bulk Orders</h3>
            <p className="text-gray-700 mb-3">
              Schools, libraries, and organizations: Contact us for special bulk pricing 
              and educational resources.
            </p>
            <p className="text-gray-700">
              Email us at: <a href="mailto:talesbybibi@gmail.com" className="text-sunset font-semibold hover:underline">talesbybibi@gmail.com</a>
            </p>
          </div>
          
          {/* Amazon Link */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <a 
              href="https://www.amazon.com/Hoofbeats-Tails-Story-Three-Siblings/dp/1990093981"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-sunset hover:bg-sunset-dark text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-200 shadow-lg"
            >
              Order on Amazon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

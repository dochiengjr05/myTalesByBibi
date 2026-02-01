import { useState } from 'react';
import { ShoppingBag, Package, Mail, Phone, User, MapPin, CheckCircle } from 'lucide-react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    quantity: 1,
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send order to backend API
      const response = await fetch('http://localhost:8081/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Order submitted:', formData);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            quantity: 1,
          });
        }, 3000);
      } else {
        console.error('Failed to submit order');
        alert('Failed to submit order. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Book Info & Amazon Link */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <img
                  src="/images/book-cover.png"
                  alt="Hoofbeats & Tails Book Cover"
                  className="rounded-lg w-full mb-6"
                />
                
                <h2 className="text-3xl font-display font-bold text-earth mb-4">
                  Hoofbeats & Tails
                </h2>
                <p className="text-xl text-sunset font-bold mb-4">KES 850</p>
                <p className="text-gray-700 mb-6">
                  The Story of Three Wild Siblings — A heartwarming collection of African 
                  folktales, legends, and myths perfect for young readers.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Package className="h-5 w-5 text-sunset" />
                    <span>Hardcover & Paperback available</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Package className="h-5 w-5 text-sunset" />
                    <span>Full-color illustrations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Package className="h-5 w-5 text-sunset" />
                    <span>Perfect for ages 6-12</span>
                  </div>
                </div>
                
                {/* Amazon Purchase Button */}
                <a
                  href="/coming-soon"
                  className="w-full flex items-center justify-center space-x-3 bg-[#FF9900] hover:bg-[#E88B00] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg mb-4"
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span>Buy Now on Amazon</span>
                </a>
                
                <p className="text-center text-sm text-gray-600">
                  Fast shipping with Amazon Prime
                </p>
              </div>
              
              <div className="bg-grass-light rounded-lg p-6 border-l-4 border-grass">
                <h3 className="font-display font-bold text-earth mb-2">Bulk Orders</h3>
                <p className="text-gray-700">
                  Schools, libraries, and organizations: Contact us for special bulk pricing 
                  and educational resources.
                </p>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-display font-bold text-earth mb-6">
                  Pre-Order Form
                </h2>
                <p className="text-gray-700 mb-6">
                  Fill out the form below to reserve your copy. We'll contact you when the 
                  book is ready for delivery.
                </p>
                
                {submitted ? (
                  <div className="bg-grass-light border-l-4 border-grass p-6 rounded-lg">
                    <div className="flex items-center space-x-3 text-grass-dark mb-4">
                      <CheckCircle className="h-8 w-8" />
                      <h3 className="text-xl font-bold">Order Received!</h3>
                    </div>
                    <p className="text-gray-700">
                      Thank you for your order. We'll be in touch soon with more details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                        <User className="h-4 w-4 text-sunset" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                        <Mail className="h-4 w-4 text-sunset" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                        <Phone className="h-4 w-4 text-sunset" />
                        <span>Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                        <MapPin className="h-4 w-4 text-sunset" />
                        <span>Shipping Address *</span>
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                        placeholder="Street address"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="text-gray-700 font-medium mb-2 block">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                          placeholder="City"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="text-gray-700 font-medium mb-2 block">
                          Country *
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                        <Package className="h-4 w-4 text-sunset" />
                        <span>Quantity</span>
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 10, 20, 50].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'copy' : 'copies'}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Payment Information */}
                    <div className="bg-grass-light border-l-4 border-grass p-6 rounded-lg">
                      <h3 className="font-display font-bold text-earth mb-3 flex items-center">
                        <Phone className="h-5 w-5 text-sunset mr-2" />
                        M-PESA Payment
                      </h3>
                      <p className="text-gray-700 mb-2">
                        After submitting your order, please send payment via M-PESA to:
                      </p>
                      <p className="text-lg font-bold text-sunset mb-2">
                        0728934854
                      </p>
                      <p className="text-sm text-gray-600">
                        Amount: KES {850 * formData.quantity} ({formData.quantity} {formData.quantity === 1 ? 'copy' : 'copies'})
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-sunset hover:bg-sunset-dark text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Submit Pre-Order
                    </button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      * Required fields. We'll never share your information.
                    </p>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      Order confirmations will be sent to talesbybibi@gmail.com
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

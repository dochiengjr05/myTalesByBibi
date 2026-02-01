import { BookOpen, Heart, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky to-sky-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Hoofbeats & Tails
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 italic">
              The Story of Three Wild Siblings
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Have you ever wondered how the zebra got his stripes? Or why horses and 
              donkeys live with humans while zebras still roam wild and free across the African savannah?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="inline-flex items-center justify-center space-x-2 bg-sunset hover:bg-sunset-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <ShoppingBag className="h-6 w-6" />
                <span>Order Your Copy</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-sand text-sky-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                <BookOpen className="h-6 w-6" />
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-16 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-lg shadow-xl p-4">
                <img
                  src="/images/book-cover.png"
                  alt="Hoofbeats & Tails Book Cover"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-earth mb-6">
                A Tale of Family, Courage & Choice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Long ago, they were one family. Meet the triplets, a <strong>Zebra</strong>, 
                <strong> Donkey</strong>, and a <strong>Horse</strong> — three spirited siblings 
                who begin life side by side until a sudden twist of fate sends them journeying in 
                different directions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As each one follows a unique path, they learn about <strong>courage</strong>, 
                <strong> friendship</strong>, and the choices that shape who they will become.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                A heartwarming tale filled with wonder, adventure, and timeless lessons 
                perfect for young readers who love animal stories and magical "how it all began" adventures.
              </p>
              <Link
                to="/authors"
                className="inline-flex items-center space-x-2 text-sky-dark hover:text-sunset font-semibold text-lg"
              >
                <Users className="h-5 w-5" />
                <span>Meet the Authors →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-16 bg-grass-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-earth mb-12">
            Meet the Three Siblings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Milia */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <div className="w-full h-80 bg-white flex items-center justify-center">
                <img
                  src="/images/zebra.png"
                  alt="Milia"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-earth mb-2">Milia</h3>
                <p className="text-gray-700">
                  Bold and free-spirited, Zebra loves to zigzag across the wild with his wildebeest and buffalo friends. With curious eyes and happy hooves, he sometimes trots along on their great migration, turning the journey between Tanzania and Kenya into one big adventure.
                </p>
              </div>
            </div>

            {/* Punda */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <div className="w-full h-80 bg-white flex items-center justify-center">
                <img
                  src="/images/donkey.png"
                  alt="Punda"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-earth mb-2">Punda</h3>
                <p className="text-gray-700">
                  Loyal and hardworking, Donkey loves helping others and soon finds himself a treasured friend to humans. With gentle steps and a big heart, he happily lends a hoof wherever he's needed.
                </p>
              </div>
            </div>

            {/* Farasi */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <div className="w-full h-80 bg-white flex items-center justify-center">
                <img
                  src="/images/horse.png"
                  alt="Farasi"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-earth mb-2">Farasi</h3>
                <p className="text-gray-700">
                  Graceful and noble, Horse loves to run, race, and show off her strength in friendly competition. With a joyful spirit and a caring heart, she brings excitement, help, and happiness to the human families who welcome her.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6 fill-white" />
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Start Your Adventure Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of families discovering the magic of African storytelling
          </p>
          <Link
            to="/order"
            className="inline-flex items-center space-x-2 bg-white hover:bg-sand text-sunset px-10 py-5 rounded-full text-xl font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <ShoppingBag className="h-6 w-6" />
            <span>Get Your Copy Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

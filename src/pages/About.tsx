import { Flame, Heart, BookOpen, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sunset to-sunset-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            About Tales by Bibi
          </h1>
          <p className="text-2xl text-white/90 italic">
            Stories from the Heart of Africa
          </p>
        </div>
      </section>

      {/* What is Bibi */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Flame className="h-16 w-16 text-sunset mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-earth mb-6">
              The Spirit of Bibi
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In Swahili, <strong className="text-sunset">"Bibi"</strong> means grandmother — 
              the wise elder, the keeper of stories, the heart of the family.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For countless generations across Africa, grandmothers have been the storytellers, 
              gathering children around flickering fires as darkness falls over the savannah. 
              Under starlit skies, they weave tales of wisdom, adventure, and wonder — stories 
              that teach, inspire, and connect us to our roots.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These magical evenings by the fireplace were more than entertainment. They were 
              lessons wrapped in wonder, morals hidden in adventure, and cultural heritage 
              passed down through the gentle voice of Bibi.
            </p>
            
            <div className="bg-sand-light border-l-4 border-sunset p-6 my-8 rounded-r-lg">
              <p className="text-lg text-gray-700 italic">
                "Around the fire, under the stars, Bibi's voice brought our world to life — 
                teaching us about courage, kindness, and the bonds that tie all living things together."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-grass-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/book-cover.png"
                alt="Hoofbeats & Tails Book"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <Heart className="h-16 w-16 text-sunset mb-6 fill-sunset" />
              <h2 className="text-4xl font-display font-bold text-earth mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Tales by Bibi</strong> honors this beautiful tradition by bringing 
                authentic African stories to children around the world. We believe that every 
                child deserves to see themselves in the stories they read and to discover the 
                rich tapestry of cultures that make our world beautiful.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our carefully crafted tales, we aim to:
              </p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-sunset mr-3">•</span>
                  <span>Celebrate African culture, heritage, and storytelling traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunset mr-3">•</span>
                  <span>Share timeless lessons about courage, friendship, and family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunset mr-3">•</span>
                  <span>Spark curiosity and wonder in young readers everywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunset mr-3">•</span>
                  <span>Bridge cultures and bring families together through stories</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-sunset/10 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-2xl p-8">
                  <BookOpen className="h-16 w-16 text-sunset mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-earth text-center mb-4">
                    Our Story Collection
                  </h3>
                  <p className="text-gray-700 text-center mb-6">
                    <em>Hoofbeats & Tails: The Story of Three Wild Siblings</em> is the 
                    first book in our collection, featuring a range of short stories across 
                    diverse genres.
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sunset rounded-full"></div>
                      <span>Legends that honour heroes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sunset rounded-full"></div>
                      <span>Folktales with moral lessons</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sunset rounded-full"></div>
                      <span>Myths exploring our world</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sky-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-sky-dark mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-earth mb-6">
              Bringing Cultures Together
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              While deeply rooted in African traditions, our stories speak to universal 
              themes that resonate with children from all walks of life, creating bridges 
              of understanding and empathy across cultures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-earth mb-3">Authentic</h3>
              <p className="text-gray-700">
                Stories rooted in genuine African folklore and cultural traditions
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-grass rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-earth mb-3">Educational</h3>
              <p className="text-gray-700">
                Carefully crafted to inspire learning and moral development
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-earth mb-3">Inclusive</h3>
              <p className="text-gray-700">
                Stories that welcome and celebrate children from everywhere
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

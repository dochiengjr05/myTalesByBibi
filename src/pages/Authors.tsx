import { Heart, BookOpen, Globe, Users } from 'lucide-react';

export default function Authors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-grass to-grass-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            About the Authors
          </h1>
          <p className="text-2xl text-white/90">
            Esther and Mercy Ondiek
          </p>
        </div>
      </section>

      {/* Authors Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-display font-bold text-earth mb-6">
                Two Sisters, One Dream
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-sunset">Esther and Mercy Ondiek</strong>, two African 
                sisters, share a profound passion for bringing African stories to life for 
                children worldwide — a passion cultivated through years of working closely 
                with young minds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esther's experience as a teacher-librarian in Kenya and Mercy's work as an 
                assistant librarian and children's home volunteer (both in Kenya and later in 
                the United States) provided a foundation for their commitment to children's literacy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                While they delighted in the timeless fairy tales they read aloud, they realized 
                there was a noticeable absence of books curated to reflect African stories, voices, 
                and cultural heritage. <strong>This gap became their driving motivation.</strong>
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/authors.jpg"
                alt="Esther and Mercy Ondiek"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-sunset mx-auto mb-6 fill-sunset" />
              <h2 className="text-4xl font-display font-bold text-earth mb-6">
                Inspired by Grandmother's Tales
              </h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              Inspired by the rich folklore lovingly narrated by their grandmother, 
              <strong className="text-sunset"> Esther and Mercy</strong> created their own 
              collection to celebrate African culture, educate and enrich young minds, and 
              bring together readers from all walks of life.
            </p>
            
            <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-sunset">
              <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                "Through their writing, they aim to spark the reader's imagination and kindle 
                curiosity about life and its many mysteries."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Their stories honor the timeless tradition of storytelling passed down through 
                generations, while making these precious narratives accessible to a global audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Their Work Section */}
      <section className="py-16 bg-sky-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 text-sky-dark mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-earth mb-6">
              Their First Collection
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              <em className="font-display text-sunset">Hoofbeats and Tails: The Story of Three Wild Siblings</em> is 
              the first book in their collection
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This debut collection features a range of short stories across diverse genres, including:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-grass-light rounded-lg">
                <div className="w-12 h-12 bg-sunset rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">L</span>
                </div>
                <h3 className="font-display font-bold text-earth mb-2">Legends</h3>
                <p className="text-gray-700 text-sm">Stories that honour heroes</p>
              </div>
              
              <div className="text-center p-6 bg-sand-light rounded-lg">
                <div className="w-12 h-12 bg-sunset rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <h3 className="font-display font-bold text-earth mb-2">Folktales</h3>
                <p className="text-gray-700 text-sm">Tales with moral lessons</p>
              </div>
              
              <div className="text-center p-6 bg-sky-light rounded-lg">
                <div className="w-12 h-12 bg-sunset rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="font-display font-bold text-earth mb-2">Myths</h3>
                <p className="text-gray-700 text-sm">Exploring life's mysteries</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Each story explores the <strong>interactions between all living things</strong>, 
              teaching valuable lessons about courage, friendship, family, and the choices that 
              shape our lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-grass">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            A Bridge Between Cultures
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Through their dedication to authentic storytelling and cultural education, 
            Esther and Mercy are building bridges between Africa and the world, ensuring 
            that the next generation grows up with a rich, diverse library that celebrates 
            all cultures.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <Heart className="h-8 w-8 mx-auto mb-2 fill-white" />
              <p className="font-semibold">Authentic Stories</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Cultural Heritage</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Global Impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

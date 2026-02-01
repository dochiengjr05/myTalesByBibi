export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-sand-light">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-earth mb-8">
              Coming Soon to Amazon!
            </h1>
            
            <div className="mb-8">
              <img
                src="/images/save-the-date.jpg"
                alt="Book Release - February 12, 2026"
                className="rounded-lg w-full max-w-2xl mx-auto shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-700 mb-6">
              Mark your calendars! Hoofbeats & Tails will be available on Amazon on <strong>February 12, 2026</strong>.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              In the meantime, you can pre-order your copy through our pre-order form.
            </p>
            
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-sunset hover:bg-sunset-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Pre-Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

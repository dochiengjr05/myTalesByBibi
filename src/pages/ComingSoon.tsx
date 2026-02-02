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
          </div>
        </div>
      </section>
    </div>
  );
}

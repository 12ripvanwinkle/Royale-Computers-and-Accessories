<section className="testimonials-section py-32">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-semibold text-white">
        Client Voices
      </h2>
      <p className="mt-2 text-gray-400">
        Success stories from real clients.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="testimonial-card rounded-3xl bg-neutral-900/70 p-8 flex flex-col justify-between"
        >
          <p className="text-gray-400 leading-relaxed">
            {item.quote}
          </p>

          <div className="mt-10">
            <p className="text-white font-medium">
              {item.name}
            </p>
            <p className="text-sm text-gray-500">
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

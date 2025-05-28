
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "TravelHive gave me the adventure of a lifetime. The Himalyan tour was absolutely breathtaking, and I made friends that I'll cherish forever.",
      tour: "Mountain Peaks Adventure"
    },
    {
      id: 2,
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "The Lakshadweep Islands expedition exceeded all my expectations. Professional guides, stunning locations, and an incredible group of fellow adventurers.",
      tour: "The Sea Explorer"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      quote: "The Sundarbans Mangrove Forest tour was life-changing. TravelHive's attention to detail and commitment to sustainable travel made it even more special.",
      tour: "Forest Discovery"
    }
  ];

  return (
    <section 
      id="stories" 
      className="py-20 parallax relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 text-shadow">
            We Make People Genuinely Happy
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-shadow">
            Don't just take our word for it - hear from our incredible community of adventurers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-white/80 text-sm">{testimonial.tour}</p>
                </div>
              </div>
              
              <blockquote className="text-white/90 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

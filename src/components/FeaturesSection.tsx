
import { Leaf, Users, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Explore Nature",
      description: "Discover breathtaking landscapes and connect with the natural world in its purest form."
    },
    {
      icon: Users,
      title: "Meet Like-minded People",
      description: "Join a community of adventurous souls and create lifelong friendships on your journey."
    },
    {
      icon: Heart,
      title: "Experience Life",
      description: "Push your boundaries and create unforgettable memories that will last a lifetime."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            Exciting Tours for Adventurous People
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600">
            <p>
              At TravelHive, we believe that life's greatest adventures are waiting just beyond your comfort zone. 
              Our carefully curated tours are designed to immerse you in the world's most spectacular destinations 
              while fostering meaningful connections with fellow travelers.
            </p>
            <p>
              Whether you're seeking the thrill of mountain peaks, the serenity of untouched wilderness, or the 
              cultural richness of ancient civilizations, our expert guides will lead you on a journey that 
              transforms not just your itinerary, but your perspective on life itself.
            </p>
            <p>
              Join thousands of adventurers who have discovered that the best stories aren't told – they're lived. 
              Your next great adventure starts here.
            </p>
          </div>
        </div>
        
        <div id="features" className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

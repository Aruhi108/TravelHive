
import { Button } from '@/components/ui/button';
import { Users, Clock, MapPin, Star } from 'lucide-react';

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      name: "The Sea Explorer",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      duration: "7 days",
      groupSize: "8-12 people",
      location: "Lakshadeep Islands",
      difficulty: "Moderate",
      price: "10,299",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "Mountain Peaks Adventure",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      duration: "10 days",
      groupSize: "6-10 people",
      location: "Himalyan Moutain",
      difficulty: "Challenging",
      price: "12,199",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Forest Discovery",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      duration: "5 days",
      groupSize: "10-15 people",
      location: "Sundarbans Mangrove Forest",
      difficulty: "Easy",
      price: "10099",
      rating: 4.7,
      reviews: 203
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            Most Popular Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of extraordinary adventures
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div 
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-xs text-gray-500">({tour.reviews})</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {tour.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-4 h-4 mr-2 flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full ${
                        tour.difficulty === 'Easy' ? 'bg-green-400' :
                        tour.difficulty === 'Moderate' ? 'bg-yellow-400' : 'bg-red-400'
                      }`} />
                    </div>
                    <span className="text-gray-600">{tour.difficulty}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">{tour.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <Button 
                    onClick={scrollToBooking}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;

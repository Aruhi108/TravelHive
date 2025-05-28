
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    tour: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.tour) {
      toast({
        title: "Please fill in all required fields",
        description: "Full name, email, and tour selection are required.",
        variant: "destructive"
      });
      return;
    }

    console.log('Booking form submitted:', formData);
    
    toast({
      title: "Booking request sent!",
      description: "We'll get back to you within 24 hours to confirm your adventure.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      tour: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Booking Form */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
              Book Your Adventure
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to embark on your next great adventure? Fill out the form below and we'll help you plan the perfect trip.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-base font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="mt-2 h-12 text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2 h-12 text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="tour" className="text-base font-medium text-gray-700">
                  Select Tour *
                </Label>
                <Select onValueChange={(value) => handleChange('tour', value)} value={formData.tour}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Choose your adventure" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="sea-explorer">The Sea Explorer - Croatian Islands</SelectItem>
                    <SelectItem value="mountain-peaks">Mountain Peaks Adventure - Swiss Alps</SelectItem>
                    <SelectItem value="forest-discovery">Forest Discovery - Amazon Rainforest</SelectItem>
                    <SelectItem value="custom">Custom Adventure (Contact us)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-base font-medium text-gray-700">
                  Message (Optional)
                </Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-2 w-full h-32 px-3 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                  placeholder="Tell us about your preferences, special requirements, or questions..."
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Send Booking Request
              </Button>
            </form>
          </div>
          
          {/* Right Side - Image and Stats */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2051&q=80"
                alt="Adventure travelers"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">2,500+</div>
                    <div className="text-sm text-gray-600">Happy Travelers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">150+</div>
                    <div className="text-sm text-gray-600">Destinations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">4.9★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

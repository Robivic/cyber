import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { MapPin, Clock, Phone, Mail, Car, Users, Coffee, Heart, ArrowRight, Navigation, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo } from '../data/mockData';

const VisitPage = () => {
  const whatToExpect = [
    {
      icon: Coffee,
      title: "Warm Welcome",
      description: "Our friendly greeters will welcome you with a smile and help you find your way around."
    },
    {
      icon: Users,
      title: "Inspiring Worship",
      description: "Experience heartfelt worship through contemporary music and biblical messages."
    },
    {
      icon: Heart,
      title: "Genuine Community",
      description: "Meet new friends and feel the love of our church family from day one."
    }
  ];

  const serviceFeatures = [
    {
      title: "Nursery Care",
      description: "Safe and loving care for infants and toddlers during service",
      icon: "👶"
    },
    {
      title: "Kids Ministry",
      description: "Age-appropriate activities and lessons for children",
      icon: "🎨"
    },
    {
      title: "Accessible",
      description: "Wheelchair accessible with designated seating areas",
      icon: "♿"
    },
    {
      title: "Parking",
      description: "Free parking available with designated visitor spots",
      icon: "🚗"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Plan Your Visit
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Visit Us This Sunday
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            We can't wait to meet you! Here's everything you need to know for your first visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Directions className="mr-2 w-5 h-5" />
              Get Directions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/connect">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
              Service Times
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              When We Meet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service time that works best for you and your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {churchInfo.servicesTimes.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 group border-0 bg-gradient-to-br from-blue-50 to-green-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.day}
                  </CardTitle>
                  <Badge className="mx-auto bg-blue-100 text-blue-700">
                    {service.time}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium mb-4">
                    {service.type}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold group">
                    <Star className="mr-2 w-4 h-4" />
                    I'll Be There
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div>
              <Badge className="mb-6 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
                Find Us
              </Badge>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Our Location
              </h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {churchInfo.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      {churchInfo.phone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      {churchInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 rounded-lg group">
                  <Directions className="mr-2 w-5 h-5" />
                  Get Directions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-4 rounded-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl shadow-xl h-96 lg:h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                  <p className="text-gray-400 text-sm">
                    Two Rivers, Nairobi
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
              First Time?
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We want your first visit to be comfortable and welcoming. Here's what you can expect when you join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whatToExpect.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Additional Services & Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            We Can't Wait to Meet You!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Come as you are and experience the warmth of our church family. Your first visit is just the beginning of an incredible journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Heart className="mr-2 w-5 h-5" />
              Let Us Know You're Coming
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/connect">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitPage;
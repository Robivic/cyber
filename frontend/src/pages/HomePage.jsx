import React from 'react';
import Hero from '../components/Hero';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Calendar, Users, Heart, Play, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { churchInfo, ministries, upcomingEvents, recentSermons } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Latest Sermon Section */}
      <section id="latest-sermon" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
              Latest Message
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Recent Sermons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be inspired by God's Word through our weekly messages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recentSermons.slice(0, 3).map((sermon, index) => (
              <Card key={sermon.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full">
                      <Play className="w-6 h-6 mr-2" />
                      Watch Sermon
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {sermon.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{sermon.preacher}</span>
                    <span className="text-sm text-gray-500">{sermon.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {sermon.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {sermon.scripture} • {sermon.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full group">
                View All Sermons
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              Get Involved
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your place in our church family through meaningful ministry and fellowship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.slice(0, 6).map((ministry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="relative">
                  <img
                    src={ministry.image}
                    alt={ministry.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white mb-2">
                      {ministry.age}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {ministry.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {ministry.description}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {ministry.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {ministry.leader}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ministries">
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full group">
                Explore All Ministries
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
              What's Coming Up
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for special events, conferences, and community gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.slice(0, 4).map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-4 text-sm mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full group">
                View All Events
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're new to faith or looking for a church home, we'd love to welcome you into our family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/visit">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
                <MapPin className="mr-2 w-5 h-5" />
                Plan Your First Visit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/connect">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold group">
                <Heart className="mr-2 w-5 h-5" />
                Connect With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
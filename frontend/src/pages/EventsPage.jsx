import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, Clock, MapPin, Play, Download, User, ArrowRight, Video, CalendarDays } from 'lucide-react';
import { upcomingEvents, recentSermons } from '../data/mockData';

const EventsPage = () => {
  const [selectedSermon, setSelectedSermon] = useState(null);

  const handleWatchSermon = (sermon) => {
    setSelectedSermon(sermon);
    // In a real app, this would open a video player or modal
    console.log('Playing sermon:', sermon.title);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Stay Connected
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Events & Sermons
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay up-to-date with our upcoming events and be inspired by our latest messages
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="events" className="space-y-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white shadow-lg rounded-xl p-2">
              <TabsTrigger 
                value="events" 
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-3 px-6 font-semibold transition-all duration-300"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Upcoming Events</span>
              </TabsTrigger>
              <TabsTrigger 
                value="sermons" 
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-3 px-6 font-semibold transition-all duration-300"
              >
                <Video className="w-4 h-4" />
                <span>Recent Sermons</span>
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join us for these special events, conferences, and community gatherings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      {/* Event Date Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 text-center">
                          <div className="text-2xl font-black text-blue-600">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-xs font-semibold text-gray-600 uppercase">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                      </div>
                      
                      {/* Event Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                            <p className="font-semibold text-gray-900">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                            <p className="font-semibold text-gray-900">{event.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg group">
                          Register Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Events */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold">
                  Load More Events
                </Button>
              </div>
            </TabsContent>

            {/* Recent Sermons Tab */}
            <TabsContent value="sermons" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Recent Sermons
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Be inspired and grow in your faith through our weekly messages
                </p>
              </div>

              {/* Featured Sermon */}
              {recentSermons.length > 0 && (
                <Card className="overflow-hidden mb-12 border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <img
                        src={recentSermons[0].thumbnail}
                        alt={recentSermons[0].title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer"
                           onClick={() => handleWatchSermon(recentSermons[0])}>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                        Featured
                      </Badge>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 px-3 py-1 text-sm">
                        Latest Sermon
                      </Badge>
                      <h3 className="text-3xl font-black text-gray-900 mb-4">
                        {recentSermons[0].title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {recentSermons[0].description}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {recentSermons[0].preacher}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {recentSermons[0].date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {recentSermons[0].duration}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold group"
                          onClick={() => handleWatchSermon(recentSermons[0])}
                        >
                          <Play className="mr-2 w-4 h-4" />
                          Watch Now
                        </Button>
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          <Download className="mr-2 w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Other Sermons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentSermons.slice(1).map((sermon) => (
                  <Card key={sermon.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                           onClick={() => handleWatchSermon(sermon)}>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">
                        {sermon.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{sermon.preacher}</span>
                        <span className="text-sm text-gray-500">{sermon.date}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {sermon.title}
                      </CardTitle>
                      <div className="text-sm text-gray-600 font-medium">
                        {sermon.scripture}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {sermon.description}
                      </p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleWatchSermon(sermon)}
                        >
                          <Play className="mr-1 w-3 h-3" />
                          Watch
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                          <Download className="mr-1 w-3 h-3" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Sermons */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold">
                  View Sermon Archive
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter and never miss an event or sermon. Stay connected with our church family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Calendar className="mr-2 w-5 h-5" />
              Subscribe to Calendar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
              Get Notifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Users, Clock, User, ArrowRight, Heart, BookOpen, Star, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ministries } from '../data/mockData';

const MinistriesPage = () => {
  const getMinistryIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'kids ministry':
        return Star;
      case 'youth ministry':
        return Users;
      case "women's ministry":
        return Heart;
      case "men's ministry":
        return User;
      case 'outreach ministry':
        return Globe;
      default:
        return BookOpen;
    }
  };

  const getMinistryColor = (index) => {
    const colors = [
      'from-pink-500 to-rose-500',
      'from-blue-500 to-indigo-500', 
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Get Involved
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Our Ministries
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Find your place in our church family through meaningful ministry and fellowship
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Heart className="mr-2 w-5 h-5" />
              Join a Ministry
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

      {/* Ministries Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Find Your Ministry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every ministry offers unique opportunities to serve, grow, and connect with others who share your passion for God's work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = getMinistryIcon(ministry.name);
              const colorClass = getMinistryColor(index);
              
              return (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Ministry Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{ministry.name}</h3>
                          <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 mt-1">
                            {ministry.age}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {ministry.description}
                    </p>

                    {/* Ministry Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Meeting Time</p>
                          <p className="font-semibold text-gray-900">{ministry.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Leader</p>
                          <p className="font-semibold text-gray-900">{ministry.leader}</p>
                        </div>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What We Do</h4>
                      <div className="flex flex-wrap gap-2">
                        {ministry.activities.map((activity, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className={`flex-1 bg-gradient-to-r ${colorClass} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-lg group`}>
                        Join This Ministry
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministry Leaders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              Leadership
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ministry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated ministry leaders are here to guide, support, and help you grow in your faith journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  Want to Lead?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Feel called to ministry leadership? We're always looking for passionate individuals to join our leadership team.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  Need Support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our ministry leaders are here to provide spiritual guidance, prayer support, and biblical counseling.
                </p>
                <Link to="/connect">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                    Get Help
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                  Explore More
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Not sure which ministry fits you? Let's talk about your interests, gifts, and how you can serve.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
                  Schedule Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Your gifts, talents, and passion have a place in our ministry. Join us in making a difference in our community and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/connect">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
                <Heart className="mr-2 w-5 h-5" />
                Connect With Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/visit">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
                Visit This Sunday
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
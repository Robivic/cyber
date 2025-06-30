import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Heart, Star, Users, BookOpen, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { beliefs, leadership, churchInfo } from '../data/mockData';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Our Story
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            About {churchInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            A community built on faith, love, and the transformative power of God's Word
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Community Focused</h3>
              <p className="text-white/80 text-sm">Building lasting relationships in Christ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <BookOpen className="w-8 h-8 text-green-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Bible Centered</h3>
              <p className="text-white/80 text-sm">Grounded in God's unchanging Word</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-red-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Love Driven</h3>
              <p className="text-white/80 text-sm">Serving with compassion and grace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                Our Mission
              </Badge>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Transforming Lives Through Christ
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Believers Church Two Rivers, our mission is to create a loving, inclusive community where people 
                can encounter Jesus Christ, grow in their faith, and discover their God-given purpose. We believe 
                every person has immense value and potential in God's kingdom.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Worship</h4>
                    <p className="text-gray-600 text-sm">Celebrating God's goodness through authentic worship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fellowship</h4>
                    <p className="text-gray-600 text-sm">Building meaningful relationships in Christ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-3 h-3 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discipleship</h4>
                    <p className="text-gray-600 text-sm">Growing in spiritual maturity and biblical knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-3 h-3 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mission</h4>
                    <p className="text-gray-600 text-sm">Reaching our community and the world with God's love</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Church community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl shadow-xl">
                <h4 className="font-bold text-lg">Our Vision</h4>
                <p className="text-sm text-blue-100">
                  To be a beacon of hope and transformation in Nairobi and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              What We Believe
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our Core Beliefs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These foundational truths guide everything we do as a church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {belief.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
              Our Team
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders who shepherd and guide our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                    {leader.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Join Our Church Family
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We believe you have a place in our community. Come discover what God has in store for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/visit">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
                Visit This Sunday
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/connect">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
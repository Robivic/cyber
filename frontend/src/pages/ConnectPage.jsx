import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Heart, Users, HandHeart, Send, Clock, MapPin, User, ArrowRight, UserPlus, HandMetal } from 'lucide-react';
import { smallGroups, volunteerOpportunities, mockStorage } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const ConnectPage = () => {
  const [prayerRequest, setPrayerRequest] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    privacy: 'private'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePrayerRequestSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      mockStorage.addPrayerRequest(prayerRequest);
      toast({
        title: "Prayer Request Submitted",
        description: "Thank you for sharing your prayer request. Our prayer team will be praying for you.",
      });
      setPrayerRequest({ name: '', email: '', phone: '', request: '', privacy: 'private' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setPrayerRequest(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Join Our Community
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Connect & Grow
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Find your place in our church family through small groups, volunteer opportunities, and prayer support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Small Groups</h3>
              <p className="text-white/80 text-sm">Connect with others in meaningful fellowship</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <HandHeart className="w-8 h-8 text-green-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p className="text-white/80 text-sm">Use your gifts to serve others</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-red-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Prayer</h3>
              <p className="text-white/80 text-sm">Share your prayer requests with our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="groups" className="space-y-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-white shadow-lg rounded-xl p-2">
              <TabsTrigger 
                value="groups" 
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-3 px-4 font-semibold transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                <span>Small Groups</span>
              </TabsTrigger>
              <TabsTrigger 
                value="volunteer" 
                className="flex items-center space-x-2 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg py-3 px-4 font-semibold transition-all duration-300"
              >
                <HandHeart className="w-4 h-4" />
                <span>Volunteer</span>
              </TabsTrigger>
              <TabsTrigger 
                value="prayer" 
                className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg py-3 px-4 font-semibold transition-all duration-300"
              >
                <HandMetal className="w-4 h-4" />
                <span>Prayer</span>
              </TabsTrigger>
            </TabsList>

            {/* Small Groups Tab */}
            <TabsContent value="groups" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Small Groups
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join a small group to build deeper relationships, study God's Word, and grow together in faith
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {smallGroups.map((group, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">
                          Open Group
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {group.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed">
                        {group.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Meeting Time</p>
                            <p className="font-semibold text-gray-900 text-sm">{group.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                            <p className="font-semibold text-gray-900 text-sm">{group.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Group Leader</p>
                          <p className="font-semibold text-gray-900 text-sm">{group.leader}</p>
                          <p className="text-xs text-gray-500">{group.contact}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold group">
                          <UserPlus className="mr-2 w-4 h-4" />
                          Join Group
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold">
                  Start a New Group
                </Button>
              </div>
            </TabsContent>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Volunteer Opportunities
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Use your gifts, talents, and passion to serve others and make a difference in our community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {volunteerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <HandHeart className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-100 text-green-700">
                          {opportunity.commitment}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                        {opportunity.ministry}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed">
                        {opportunity.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Available Roles</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {opportunity.roles.map((role, idx) => (
                            <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-700">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold group">
                          <HandHeart className="mr-2 w-4 h-4" />
                          Apply to Volunteer
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold">
                  Volunteer Interest Form
                </Button>
              </div>
            </TabsContent>

            {/* Prayer Tab */}
            <TabsContent value="prayer" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Prayer Requests
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Share your prayer requests with our community. Our prayer team commits to praying for every request we receive.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Pray className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center text-gray-900">
                      Submit a Prayer Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePrayerRequestSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            type="text"
                            value={prayerRequest.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your name"
                            required
                            className="bg-white/80"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            value={prayerRequest.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="bg-white/80"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone (Optional)
                        </label>
                        <Input
                          type="tel"
                          value={prayerRequest.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+254 700 123 456"
                          className="bg-white/80"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prayer Request *
                        </label>
                        <Textarea
                          value={prayerRequest.request}
                          onChange={(e) => handleInputChange('request', e.target.value)}
                          placeholder="Please share your prayer request here..."
                          rows={4}
                          required
                          className="bg-white/80"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Privacy Setting
                        </label>
                        <Select value={prayerRequest.privacy} onValueChange={(value) => handleInputChange('privacy', value)}>
                          <SelectTrigger className="bg-white/80">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">Private - Prayer team only</SelectItem>
                            <SelectItem value="public">Public - Share with congregation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-lg group"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 w-5 h-5" />
                            Submit Prayer Request
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 text-center">
                        <strong>Privacy Notice:</strong> All prayer requests are treated with confidentiality and respect. 
                        Private requests are only shared with our prayer team, while public requests may be shared with our congregation for collective prayer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
            Ready to Get Connected?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Take the next step in your faith journey. Join us this Sunday and discover how you can grow in community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Users className="mr-2 w-5 h-5" />
              Visit This Sunday
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
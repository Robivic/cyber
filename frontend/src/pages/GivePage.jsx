import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Heart, CreditCard, Smartphone, Building2, Gift, Shield, Users, ArrowRight, DollarSign, Lock } from 'lucide-react';
import { mockStorage } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const GivePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('tithe');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const quickAmounts = [25, 50, 100, 250, 500, 1000];
  
  const givingOptions = [
    {
      id: 'tithe',
      title: 'Tithe',
      description: 'Regular tithe offering to support the church ministry',
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'offering',
      title: 'General Offering',
      description: 'General offerings for church operations and outreach',
      icon: Heart,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'missions',
      title: 'Missions',
      description: 'Support our local and international mission work',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'building',
      title: 'Building Fund',
      description: 'Contribute to our church building and facilities',
      icon: Building2,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'special',
      title: 'Special Projects',
      description: 'Support specific ministry projects and events',
      icon: Gift,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Secure payment with Visa, Mastercard, or American Express',
      icon: CreditCard
    },
    {
      id: 'mobile',
      title: 'Mobile Money',
      description: 'Pay with M-Pesa, Airtel Money, or other mobile services',
      icon: Smartphone
    },
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: 'Direct bank transfer to our church account',
      icon: Building2
    }
  ];

  const handleDonation = async () => {
    if (!donationAmount || !donationType) {
      toast({
        title: "Please fill all fields",
        description: "Select an amount and donation type to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const donation = {
        amount: parseFloat(donationAmount),
        type: donationType,
        timestamp: new Date().toISOString()
      };
      
      mockStorage.addDonation(donation);
      
      toast({
        title: "Thank you for your generosity!",
        description: `Your ${donationType} donation of KES ${donationAmount} has been processed successfully.`,
      });
      
      setDonationAmount('');
      setDonationType('tithe');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur-md">
            Generous Giving
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Give with Joy
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your generous giving helps us fulfill our mission and serve our community with love
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-red-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Cheerful Giving</h3>
              <p className="text-white/80 text-sm">"God loves a cheerful giver" - 2 Cor 9:7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="w-8 h-8 text-green-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Secure Giving</h3>
              <p className="text-white/80 text-sm">Safe and encrypted payment processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Community Impact</h3>
              <p className="text-white/80 text-sm">Making a difference in our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
              Ways to Give
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Choose Your Giving Option
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the area where you feel called to support our ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {givingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card 
                  key={option.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl group border-0 ${
                    donationType === option.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50' 
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white'
                  }`}
                  onClick={() => setDonationType(option.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Donation Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Make a Donation
                </CardTitle>
                <p className="text-gray-600">
                  Your generous giving makes a real difference in our community
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Amount (KES)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount.toString() ? "default" : "outline"}
                        className={`h-12 ${
                          donationAmount === amount.toString() 
                            ? 'bg-blue-600 text-white' 
                            : 'border-gray-300 text-gray-700 hover:bg-blue-50'
                        }`}
                        onClick={() => setDonationAmount(amount.toString())}
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">KES</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="bg-white/80"
                    />
                  </div>
                </div>

                {/* Donation Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Type
                  </label>
                  <Select value={donationType} onValueChange={setDonationType}>
                    <SelectTrigger className="bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {givingOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      {paymentMethods.map((method) => (
                        <TabsTrigger key={method.id} value={method.id} className="text-xs">
                          {method.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <TabsContent key={method.id} value={method.id} className="mt-4">
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Icon className="w-8 h-8 text-blue-600" />
                            <div>
                              <h4 className="font-medium text-gray-900">{method.title}</h4>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                          </div>
                        </TabsContent>
                      );
                    })}
                  </Tabs>
                </div>

                {/* Donation Button */}
                <Button 
                  onClick={handleDonation}
                  disabled={isProcessing || !donationAmount}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg group"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Lock className="mr-2 w-5 h-5" />
                      Give KES {donationAmount || '0'} Securely
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Secure & Encrypted</span>
                  </div>
                  <p className="text-sm text-green-700">
                    All donations are processed through secure, encrypted payment systems. 
                    Your financial information is never stored on our servers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
              Your Impact
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Where Your Giving Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every donation makes a direct impact in our community and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Community Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Supporting families in need, food distribution, and community development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Youth Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Empowering the next generation through education, mentorship, and spiritual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Church Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Maintaining our facilities, utilities, and providing a welcoming worship environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Mission Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Supporting local and international missions to spread the Gospel worldwide.
                </p>
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
            Thank You for Your Generosity
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Your faithful giving enables us to continue serving our community and spreading God's love. 
            Every gift, no matter the size, makes a meaningful difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold group">
              <Heart className="mr-2 w-5 h-5" />
              Set Up Recurring Giving
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold">
              Contact Our Finance Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivePage;
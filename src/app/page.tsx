import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import Header from "@/components/layout/Header";
import { ArrowRightIcon, StarIcon, GlobeAltIcon, CurrencyDollarIcon, HeartIcon, CalendarIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-slate-50 via-white to-himalayan-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-600/5 to-himalayan-900/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-saffron-50 to-saffron-100 text-saffron-800 border border-saffron-200/50 shadow-sm">
                <span className="mr-2">🎉</span>
                Now Serving 500+ Nepali & Bhutanese Businesses Globally
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Empower Your{" "}
              <span className="bg-gradient-to-r from-crimson-600 via-crimson-500 to-himalayan-900 bg-clip-text text-transparent">
                Nepali & Bhutanese
              </span>{" "}
              <br className="hidden sm:block" />
              Business
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              From QR menus and online ordering to cultural event management and priest bookings — 
              we're the complete digital platform built specifically for our diaspora community worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="cultural" size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-200">
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm">
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center">
                <HeartIcon className="h-5 w-5 text-crimson-500 mr-2" />
                <span className="font-medium">500+ Nepali businesses already onboard</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-saffron-500 mr-2" />
                <span className="font-medium">4.9/5 customer satisfaction</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-slate-400">•</span>
                <span className="ml-2 font-medium">No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything Your Business Needs to Thrive
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From digital storefront to cultural event management — one platform, endless possibilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <ShoppingBagIcon className="h-10 w-10 text-saffron-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Digital Business Tools</h3>
            <p className="text-slate-600 text-lg leading-relaxed">QR menus, online ordering, payment processing, and customer management all in one place.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-himalayan-100 to-himalayan-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <GlobeAltIcon className="h-10 w-10 text-himalayan-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Professional Web Presence</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Custom websites, SEO optimization, and professional branding that reflects your cultural identity.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-crimson-100 to-crimson-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <CalendarIcon className="h-10 w-10 text-crimson-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Cultural Services Hub</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Connect with priests, book wedding vendors, manage temple donations, and organize cultural events.</p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div id="pricing" className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Four Tiers of Digital Empowerment
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Choose the perfect solution for your business needs — from startups to established enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tier 1: SaaS Starter */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-saffron-200 bg-white group">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <StarIcon className="h-8 w-8 text-saffron-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">SaaS Starter</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">
                  $20-$50<span className="text-lg font-normal text-slate-500">/month</span>
                </CardDescription>
                <p className="text-sm text-slate-500 font-medium mt-1">Perfect for small businesses</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex items-center">
                    <span className="text-saffron-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Business page builder</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">QR menu generator</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Basic CRM</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Payment processing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Mobile responsive design</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-saffron-200 text-saffron-700 hover:bg-saffron-50 font-semibold">Get Started</Button>
              </CardContent>
            </Card>

            {/* Tier 2: Managed Setup */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-himalayan-200 bg-white group">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-himalayan-100 to-himalayan-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <GlobeAltIcon className="h-8 w-8 text-himalayan-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">Managed Setup</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">
                  $500-$1500<span className="text-lg font-normal text-slate-500"> one-time</span>
                </CardDescription>
                <p className="text-sm text-slate-500 font-medium mt-1">Full-service digital transformation</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex items-center">
                    <span className="text-himalayan-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Custom website design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-himalayan-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-himalayan-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Professional branding</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-himalayan-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Social media setup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-himalayan-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Staff training included</span>
                  </li>
                </ul>
                <Button variant="default" className="w-full bg-himalayan-600 hover:bg-himalayan-700 font-semibold">Contact Sales</Button>
              </CardContent>
            </Card>

            {/* Tier 3: Automation */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-crimson-200 bg-white group">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-crimson-100 to-crimson-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <CurrencyDollarIcon className="h-8 w-8 text-crimson-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">Automation</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">
                  $1500-$5000<span className="text-lg font-normal text-slate-500"> project</span>
                </CardDescription>
                <p className="text-sm text-slate-500 font-medium mt-1">Enterprise-grade automation</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex items-center">
                    <span className="text-crimson-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Inventory management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-crimson-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-crimson-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Accounting integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-crimson-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Advanced CRM</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-crimson-500 mr-3 font-bold">✓</span>
                    <span className="font-medium">Multi-location support</span>
                  </li>
                </ul>
                <Button variant="cultural" className="w-full font-semibold shadow-lg">Learn More</Button>
              </CardContent>
            </Card>

            {/* Tier 4: Cultural Events */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-saffron-300 bg-gradient-to-br from-saffron-50 via-white to-saffron-50/50 group">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-4 py-2 text-sm rounded-bl-2xl font-bold shadow-lg">
                Most Popular
              </div>
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-crimson-100 via-saffron-100 to-himalayan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span className="text-3xl">🎭</span>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">Cultural Events</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">
                  Free<span className="text-lg font-normal text-slate-500"> + commission</span>
                </CardDescription>
                <p className="text-sm text-slate-500 font-medium mt-1">Connect with cultural services</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-slate-600 mb-8">
                  <li className="flex items-center">
                    <span className="text-saffron-600 mr-3 font-bold">✓</span>
                    <span className="font-medium">Event listings & calendar</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-600 mr-3 font-bold">✓</span>
                    <span className="font-medium">Priest booking system</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-600 mr-3 font-bold">✓</span>
                    <span className="font-medium">Temple donations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-600 mr-3 font-bold">✓</span>
                    <span className="font-medium">Wedding vendors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-saffron-600 mr-3 font-bold">✓</span>
                    <span className="font-medium">Cultural calendar</span>
                  </li>
                </ul>
                <Button variant="saffron" className="w-full font-semibold shadow-lg">Explore Services</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Cultural Section */}
      <div id="cultural" className="bg-himalayan-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preserving Culture, Embracing Technology
            </h2>
            <p className="text-xl text-himalayan-100 mb-8 max-w-3xl mx-auto">
              Built specifically for the Nepali and Bhutanese diaspora, connecting communities 
              across the globe while honoring our rich cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold mb-2">Himalayan Design</h3>
              <p className="text-himalayan-200 text-sm">
                UI inspired by the beauty of the Himalayas and traditional Nepali art
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Cultural Calendar</h3>
              <p className="text-himalayan-200 text-sm">
                Integrated Nepali calendar with festivals and religious observances
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-himalayan-200 text-sm">
                Connecting Nepali and Bhutanese businesses worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-2">Religious Services</h3>
              <p className="text-himalayan-200 text-sm">
                Book priests, manage temple donations, organize cultural events
              </p>
            </div>
          </div>

          {/* Cultural Services Showcase */}
          <div className="bg-himalayan-800/50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Cultural Services Marketplace</h3>
              <p className="text-himalayan-200">Connect with trusted service providers for all your cultural needs</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-saffron-600 rounded-lg p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white">🕉️</span>
                </div>
                <p className="text-sm text-himalayan-200">Priest Booking</p>
              </div>
              <div className="text-center">
                <div className="bg-crimson-600 rounded-lg p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white">💒</span>
                </div>
                <p className="text-sm text-himalayan-200">Wedding Vendors</p>
              </div>
              <div className="text-center">
                <div className="bg-saffron-600 rounded-lg p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white">🏛️</span>
                </div>
                <p className="text-sm text-himalayan-200">Temple Donations</p>
              </div>
              <div className="text-center">
                <div className="bg-crimson-600 rounded-lg p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white">🎊</span>
                </div>
                <p className="text-sm text-himalayan-200">Event Planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-himalayan-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-lg text-slate-600">
              Real businesses, real results - see how we're empowering the Nepali diaspora
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-saffron-50 to-white border-saffron-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-saffron-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-himalayan-900">Momo Kitchen NYC</h4>
                    <p className="text-sm text-slate-500">Restaurant Owner</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  "Our online orders increased by 300% after implementing the QR menu system. 
                  The cultural design really resonates with our customers!"
                </p>
                <div className="flex items-center">
                  <div className="flex text-saffron-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="ml-2 text-sm text-slate-500">+$4,000/month revenue</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-himalayan-50 to-white border-himalayan-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-himalayan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-himalayan-900">Sherpa Supplies</h4>
                    <p className="text-sm text-slate-500">Retail Business</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  "The managed setup service transformed our entire digital presence. 
                  Professional, cultural, and effective - exactly what we needed."
                </p>
                <div className="flex items-center">
                  <div className="flex text-saffron-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="ml-2 text-sm text-slate-500">200% online growth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-crimson-50 to-white border-crimson-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-crimson-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">NT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-himalayan-900">Nepal Temple Austin</h4>
                    <p className="text-sm text-slate-500">Religious Organization</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  "Managing donations and booking priests has never been easier. 
                  The cultural calendar integration keeps our community connected."
                </p>
                <div className="flex items-center">
                  <div className="flex text-saffron-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="ml-2 text-sm text-slate-500">500+ active members</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-crimson-600/20 to-himalayan-900/20"></div>
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-crimson-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of Nepali and Bhutanese businesses already thriving on our platform. 
              Start your free trial today and see the difference authentic, culturally-aware technology can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-himalayan-900 hover:bg-slate-100">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-6 text-sm text-crimson-100">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-himalayan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/logo-enhanced-white.svg" 
                  alt="Desi Digital Hub - Connecting Cultures Digitally" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-himalayan-200 text-sm">
                Empowering the global Nepali and Bhutanese business community with authentic, 
                culturally-aware digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-himalayan-200">
                <li><a href="#" className="hover:text-white transition-colors">SaaS Starter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Managed Setup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automation Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cultural Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-himalayan-200">
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cultural Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-himalayan-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-himalayan-800 mt-8 pt-8 text-center">
            <p className="text-himalayan-200 text-sm">
              © 2025 Desi Digital Hub. Built with ❤️ for the global Nepali and Bhutanese community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

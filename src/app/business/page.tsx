'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import { 
  BuildingStorefrontIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
  ClockIcon,
  CameraIcon,
  PlusIcon
} from "@heroicons/react/24/outline"

export default function BusinessPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [businessData, setBusinessData] = useState({
    name: '',
    description: '',
    category: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    email: '',
    website: '',
    hours: {
      monday: { open: '', close: '', closed: false },
      tuesday: { open: '', close: '', closed: false },
      wednesday: { open: '', close: '', closed: false },
      thursday: { open: '', close: '', closed: false },
      friday: { open: '', close: '', closed: false },
      saturday: { open: '', close: '', closed: false },
      sunday: { open: '', close: '', closed: false }
    },
    specialties: [],
    languages: [],
    paymentMethods: []
  })

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    if (session.user.role !== 'BUSINESS_OWNER' && session.user.role !== 'SERVICE_PROVIDER' && session.user.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }
    
    setLoading(false)
  }, [session, status, router])

  const businessCategories = [
    'Restaurant',
    'Grocery Store',
    'Clothing Store',
    'Travel Agency',
    'Beauty Salon',
    'Auto Service',
    'Real Estate',
    'Healthcare',
    'Education',
    'Financial Services',
    'Religious Services',
    'Cultural Center',
    'Event Planning',
    'Photography',
    'Catering',
    'Other'
  ]

  const nepaliSpecialties = [
    'Momo', 'Dal Bhat', 'Newari Cuisine', 'Thakali Cuisine', 
    'Tibetan Food', 'Bhutanese Cuisine', 'Chow Mein', 'Biryani',
    'Thukpa', 'Gundruk', 'Dhido', 'Sel Roti', 'Yomari',
    'Traditional Sweets', 'Ayurvedic Products', 'Handicrafts',
    'Traditional Clothing', 'Jewelry', 'Incense', 'Religious Items'
  ]

  const languages = [
    'Nepali', 'Hindi', 'English', 'Dzongkha', 'Tibetan', 
    'Newari', 'Maithili', 'Bhojpuri', 'Tamang', 'Gurung'
  ]

  const paymentMethods = [
    'Cash', 'Credit Card', 'Debit Card', 'PayPal', 'Venmo', 
    'Apple Pay', 'Google Pay', 'Zelle', 'Bank Transfer', 'Esewa', 'Khalti'
  ]

  const handleInputChange = (field: string, value: string) => {
    setBusinessData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleHoursChange = (day: string, field: string, value: string | boolean) => {
    setBusinessData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day as keyof typeof prev.hours],
          [field]: value
        }
      }
    }))
  }

  const handleArrayToggle = (field: string, value: string) => {
    setBusinessData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? prev[field as keyof typeof prev].filter((item: string) => item !== value)
        : [...prev[field as keyof typeof prev], value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement business registration API call
    console.log('Business registration data:', businessData)
    alert('Business registration functionality will be implemented with the backend API')
  }

  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-full animate-pulse mb-4 mx-auto"></div>
          <p className="text-slate-600">Loading business management...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Business Management</h1>
          <p className="text-slate-600">
            Register and manage your Nepali or Bhutanese business to connect with the diaspora community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BuildingStorefrontIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Tell us about your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="e.g., Himalayan Kitchen"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={businessData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {businessCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={businessData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  placeholder="Describe your business, specialties, and what makes you unique..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Location
              </CardTitle>
              <CardDescription>
                Where can customers find you?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={businessData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="NY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    value={businessData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="10001"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={businessData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={businessData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="https://your-website.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <CardTitle>Specialties & Offerings</CardTitle>
              <CardDescription>
                What special products or services do you offer?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {nepaliSpecialties.map((specialty) => (
                  <label key={specialty} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessData.specialties.includes(specialty)}
                      onChange={() => handleArrayToggle('specialties', specialty)}
                      className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                    />
                    <span className="text-sm text-gray-700">{specialty}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages Spoken</CardTitle>
              <CardDescription>
                What languages can you serve customers in?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {languages.map((language) => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessData.languages.includes(language)}
                      onChange={() => handleArrayToggle('languages', language)}
                      className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                How can customers pay?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {paymentMethods.map((method) => (
                  <label key={method} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessData.paymentMethods.includes(method)}
                      onChange={() => handleArrayToggle('paymentMethods', method)}
                      className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                    />
                    <span className="text-sm text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push('/dashboard')}>
              Cancel
            </Button>
            <Button type="submit" variant="cultural" className="shadow-lg">
              Register Business
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

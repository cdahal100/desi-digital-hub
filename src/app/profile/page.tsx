'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import { 
  UserIcon,
  EnvelopeIcon,
  MapPinIcon,
  LanguageIcon,
  BellIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    nepaliRegion: '',
    businessType: '',
    languages: [],
    notifications: {
      email: true,
      sms: false,
      cultural: true,
      business: true
    }
  })

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    // Initialize with session data
    setProfileData(prev => ({
      ...prev,
      name: session.user.name || '',
      email: session.user.email || ''
    }))
    
    setLoading(false)
  }, [session, status, router])

  const nepaliRegions = [
    'Bagmati Province',
    'Gandaki Province', 
    'Karnali Province',
    'Lumbini Province',
    'Province No. 1',
    'Province No. 2',
    'Sudurpashchim Province'
  ]

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail/Shopping',
    'Professional Services',
    'Healthcare',
    'Education',
    'Real Estate',
    'Travel & Tourism',
    'Cultural Services',
    'Technology',
    'Other'
  ]

  const languages = [
    'Nepali', 'Hindi', 'English', 'Dzongkha', 'Tibetan', 
    'Newari', 'Maithili', 'Bhojpuri', 'Tamang', 'Gurung'
  ]

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleLanguageToggle = (language: string) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update API call
    console.log('Profile update data:', profileData)
    alert('Profile update functionality will be implemented with the backend API')
  }

  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-full animate-pulse mb-4 mx-auto"></div>
          <p className="text-slate-600">Loading profile...</p>
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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Profile Settings</h1>
          <p className="text-slate-600">
            Manage your account settings and preferences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent bg-gray-50"
                    readOnly
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Location
                  </label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                    placeholder="City, State/Country"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cultural Background */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Cultural Background
              </CardTitle>
              <CardDescription>
                Help us connect you with relevant cultural content and businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nepali Region of Origin
                  </label>
                  <select
                    value={profileData.nepaliRegion}
                    onChange={(e) => handleInputChange('nepaliRegion', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  >
                    <option value="">Select a region</option>
                    {nepaliRegions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                    <option value="Bhutan">Bhutan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Interest
                  </label>
                  <select
                    value={profileData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LanguageIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Languages
              </CardTitle>
              <CardDescription>
                Select the languages you speak
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {languages.map((language) => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profileData.languages.includes(language)}
                      onChange={() => handleLanguageToggle(language)}
                      className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BellIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose how you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                    <p className="text-xs text-gray-500">Receive updates via email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={profileData.notifications.email}
                    onChange={(e) => handleNotificationChange('email', e.target.checked)}
                    className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                    <p className="text-xs text-gray-500">Receive updates via text message</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={profileData.notifications.sms}
                    onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                    className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Cultural Event Updates</span>
                    <p className="text-xs text-gray-500">Get notified about festivals and cultural events</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={profileData.notifications.cultural}
                    onChange={(e) => handleNotificationChange('cultural', e.target.checked)}
                    className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Business Updates</span>
                    <p className="text-xs text-gray-500">News about local Nepali & Bhutanese businesses</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={profileData.notifications.business}
                    onChange={(e) => handleNotificationChange('business', e.target.checked)}
                    className="rounded border-gray-300 text-crimson-600 focus:ring-crimson-500"
                  />
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-crimson-600" />
                Account Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Password</h4>
                  <p className="text-xs text-gray-500">Last updated 30 days ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray-500">Add an extra layer of security</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push('/dashboard')}>
              Cancel
            </Button>
            <Button type="submit" variant="cultural" className="shadow-lg">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

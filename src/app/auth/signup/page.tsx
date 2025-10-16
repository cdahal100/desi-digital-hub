'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {
  const [formData, setFormData] = useState({
    role: 'CUSTOMER',
    businessType: '',
    serviceType: ''
  })
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [emailLoading, setEmailLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true)
      setError('')
      
      // Store form data in sessionStorage to use after OAuth callback
      sessionStorage.setItem('signupData', JSON.stringify(formData))
      
      const result = await signIn('google', {
        callbackUrl: '/dashboard',
        redirect: false,
      })
      
      if (result?.error) {
        setError('Authentication failed. Please try again.')
      } else if (result?.url) {
        router.push(result.url)
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address.')
      return
    }

    setEmailLoading(true)
    setError('')
    setMessage('')
    
    try {
      // Store form data for after email verification
      sessionStorage.setItem('signupData', JSON.stringify(formData))
      
      const result = await signIn('email', {
        email,
        callbackUrl: '/dashboard',
        redirect: false,
      })
      
      if (result?.error) {
        setError('Failed to send signup link. Please try again.')
      } else {
        setMessage('Check your email for a signup link!')
        setEmail('')
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setEmailLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail/Shopping', 
    'Professional Services',
    'Healthcare',
    'Education',
    'Real Estate',
    'Travel & Tourism',
    'Technology',
    'Manufacturing',
    'Import/Export',
    'Other'
  ]

  const serviceTypes = [
    'Priest/Religious Services',
    'Wedding Planning',
    'Event Planning',
    'Photography/Videography',
    'Catering Services',
    'Music/DJ Services',
    'Decoration Services',
    'Transportation Services',
    'Cultural Teaching',
    'Translation Services',
    'Legal Services',
    'Accounting Services',
    'Consulting Services',
    'Other Professional Services'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-himalayan-50">
      {/* Enhanced Header with Prominent Logo */}
      <header className="relative z-10 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo-enhanced.svg"
                  alt="Desi Digital Hub"
                  width={240}
                  height={60}
                  className="h-16 sm:h-20 lg:h-24 w-auto group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </Link>
            <div className="text-sm text-slate-700 bg-white/80 rounded-full px-4 py-2 border border-slate-200">
              Already have an account?{' '}
              <Link href="/auth/signin" className="font-semibold text-crimson-600 hover:text-crimson-700 transition-colors">
                Sign in →
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Enhanced Circular Logo above content */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="bg-gradient-to-br from-white via-gray-50 to-white w-24 h-24 rounded-full shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:border-crimson-200">
                <Image
                  src="/logo-icon.svg"
                  alt="Desi Digital Hub"
                  width={56}
                  height={56}
                  className="w-14 h-14 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-crimson-200 opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute -inset-2 rounded-full border border-himalayan-300 opacity-20"></div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent mb-4 tracking-tight">
              Create Your Professional Account
            </h2>
            <div className="relative">
              <p className="text-sm text-gray-700 leading-relaxed max-w-xl mx-auto font-medium">
                Join our <span className="text-crimson-600 font-semibold">exclusive network</span> of Nepali & Bhutanese business professionals and unlock new opportunities for <span className="text-himalayan-600 font-semibold">growth</span>
              </p>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-crimson-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-1 -right-3 w-3 h-3 bg-gradient-to-br from-himalayan-400 to-blue-400 rounded-full opacity-30 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/95 backdrop-blur-sm py-12 px-10 shadow-2xl sm:rounded-3xl border border-gray-100 relative overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-crimson-600 via-orange-500 to-himalayan-600"></div>
            <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
            
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {message}
              </div>
            )}

            {/* Role Selection */}
            <div className="space-y-5">
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-3">Select your role:</label>
                <div className="space-y-2">
                  {[
                    { value: 'CUSTOMER', label: '🛍️ Customer', description: 'Looking for card design, wedding services, priests, and cultural events' },
                    { value: 'SMALL_BUSINESS', label: '🏪 Small Business', description: 'Need basic digital tools: website, QR menus, payment processing' },
                    { value: 'GROWING_BUSINESS', label: '🏢 Growing Business', description: 'Need managed setup: custom websites, automation, inventory systems' },
                    { value: 'SERVICE_PROVIDER', label: '🎭 Service Provider', description: 'Provide services: priests, vendors, professionals, cultural services' },
                  ].map((role) => (
                    <div key={role.value} className="relative">
                      <label className="flex items-start cursor-pointer group">
                        <input
                          type="radio"
                          name="role"
                          value={role.value}
                          checked={formData.role === role.value}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                          className="flex-shrink-0 mt-1 h-4 w-4 text-crimson-600 border-gray-300 focus:ring-crimson-500"
                        />
                        <div className="ml-3 flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-crimson-600 transition-colors">
                            {role.label}
                          </div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-0.5">
                            {role.description}
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business/Service Type Selection */}
              {(formData.role === 'SMALL_BUSINESS' || formData.role === 'GROWING_BUSINESS') && (
                <div className="mt-5">
                  <label htmlFor="businessType" className="block text-base font-semibold text-gray-900 mb-2">
                    Business category:
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 text-sm bg-white hover:border-gray-400 transition-colors"
                  >
                    <option value="" className="text-gray-500">Select your business category</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="text-gray-900">{type}</option>
                    ))}
                  </select>
                </div>
              )}

              {formData.role === 'SERVICE_PROVIDER' && (
                <div className="mt-5">
                  <label htmlFor="serviceType" className="block text-base font-semibold text-gray-900 mb-2">
                    Service category:
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 text-sm bg-white hover:border-gray-400 transition-colors"
                  >
                    <option value="" className="text-gray-500">Select your service category</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type} className="text-gray-900">{type}</option>
                    ))}
                  </select>
                </div>
              )}

            <div className="mt-6">
              <button
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="w-full flex justify-center items-center px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors group"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {isLoading ? 'Creating account...' : 'Continue with Google'}
              </button>

              {/* Divider */}
              <div className="relative mt-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-gray-500 font-medium">or</span>
                </div>
              </div>

              {/* Email Signup Form */}
              {!showEmailForm ? (
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="w-full mt-5 flex justify-center items-center px-4 py-2.5 border border-crimson-300 rounded-lg shadow-sm bg-crimson-50 text-sm font-medium text-crimson-700 hover:bg-crimson-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Sign up with email
                </button>
              ) : (
                <form onSubmit={handleEmailSignUp} className="mt-5 space-y-3">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 text-sm bg-white hover:border-gray-400 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      disabled={emailLoading}
                      className="flex-1 group relative flex justify-center py-2.5 px-3 border border-transparent text-sm font-medium rounded-lg text-white bg-crimson-600 hover:bg-crimson-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {emailLoading ? 'Sending...' : 'Send magic link'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowEmailForm(false)
                        setEmail('')
                        setError('')
                        setMessage('')
                      }}
                      className="px-3 py-2.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
            </div>
          </div>

          {/* Enhanced Community Welcome Section */}
          <div className="mt-10 bg-gradient-to-r from-crimson-50/80 via-white to-himalayan-50/80 rounded-xl p-8 border border-gradient-to-r border-crimson-100 shadow-lg backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-crimson-200/30 to-orange-200/30 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-himalayan-200/30 to-blue-200/30 rounded-full translate-y-8 -translate-x-8"></div>
            
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                <span className="text-2xl mr-3 animate-bounce">🌟</span>
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Join Our Professional Community
                </span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed max-w-lg mx-auto font-medium">
                Connect with <span className="text-crimson-600 font-semibold">thousands</span> of Nepali & Bhutanese entrepreneurs and customers building <span className="text-himalayan-600 font-semibold">successful businesses</span> across the United States
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-crimson-600 hover:text-crimson-700 font-medium transition-colors underline-offset-4 hover:underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-crimson-600 hover:text-crimson-700 font-medium transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

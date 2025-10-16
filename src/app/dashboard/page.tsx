'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import { 
  BuildingStorefrontIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  CreditCardIcon,
  QrCodeIcon,
  UserGroupIcon,
  BellIcon,
  HeartIcon
} from "@heroicons/react/24/outline"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/auth/signin')
      return
    }
    
    setLoading(false)
  }, [session, status, router])

  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-full animate-pulse mb-4 mx-auto"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const getSubscriptionBadge = () => {
    const subscription = session.user.subscriptionTier || 'FREE'
    const colors = {
      FREE: 'bg-gray-100 text-gray-800',
      STARTER: 'bg-blue-100 text-blue-800',
      MANAGED: 'bg-purple-100 text-purple-800',
      AUTOMATION: 'bg-gradient-to-r from-crimson-100 to-himalayan-100 text-crimson-800'
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[subscription as keyof typeof colors]}`}>
        {subscription.charAt(0) + subscription.slice(1).toLowerCase()}
      </span>
    )
  }

  const getDashboardItems = () => {
    const baseItems = [
      {
        title: 'Profile Settings',
        description: 'Manage your account and preferences',
        icon: CogIcon,
        href: '/profile',
        color: 'from-slate-500 to-slate-600'
      },
      {
        title: 'Billing & Subscription',
        description: 'Manage your subscription and billing',
        icon: CreditCardIcon,
        href: '/billing',
        color: 'from-green-500 to-green-600'
      },
      {
        title: 'Cultural Events',
        description: 'Discover and book cultural events',
        icon: CalendarIcon,
        href: '/events',
        color: 'from-saffron-500 to-saffron-600'
      },
      {
        title: 'Community',
        description: 'Connect with other Nepali & Bhutanese businesses',
        icon: UserGroupIcon,
        href: '/community',
        color: 'from-crimson-500 to-crimson-600'
      }
    ]

    if (session.user.role === 'BUSINESS_OWNER' || session.user.role === 'SERVICE_PROVIDER') {
      baseItems.unshift(
        {
          title: 'My Business',
          description: 'Manage your business profile and services',
          icon: BuildingStorefrontIcon,
          href: '/business',
          color: 'from-himalayan-600 to-himalayan-700'
        },
        {
          title: 'QR Menu Generator',
          description: 'Create and manage QR code menus',
          icon: QrCodeIcon,
          href: '/qr-menu',
          color: 'from-blue-500 to-blue-600'
        },
        {
          title: 'Analytics',
          description: 'View your business performance',
          icon: ChartBarIcon,
          href: '/analytics',
          color: 'from-purple-500 to-purple-600'
        }
      )
    }

    if (session.user.role === 'ADMIN') {
      baseItems.unshift({
        title: 'Admin Panel',
        description: 'Manage platform users and settings',
        icon: CogIcon,
        href: '/admin',
        color: 'from-red-500 to-red-600'
      })
    }

    return baseItems
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {getGreeting()}, {session.user.name}!
              </h1>
              <p className="text-slate-600 mt-2">
                Welcome to your Desi Digital Hub dashboard
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {getSubscriptionBadge()}
              <Button variant="outline" size="sm">
                <BellIcon className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        {(session.user.role === 'BUSINESS_OWNER' || session.user.role === 'SERVICE_PROVIDER') && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <ChartBarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                <BuildingStorefrontIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 restaurants, 1 service</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Reviews</CardTitle>
                <HeartIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">Based on 127 reviews</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDashboardItems().map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-crimson-600 transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {item.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-4 p-0 h-auto text-crimson-600 hover:text-crimson-700"
                    onClick={() => router.push(item.href)}
                  >
                    Access →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto flex-col py-6 space-y-2">
              <QrCodeIcon className="w-8 h-8 text-blue-600" />
              <span>Generate QR Menu</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 space-y-2">
              <CalendarIcon className="w-8 h-8 text-saffron-600" />
              <span>Book Cultural Event</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 space-y-2">
              <BuildingStorefrontIcon className="w-8 h-8 text-crimson-600" />
              <span>Add Business</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-6 space-y-2">
              <UserGroupIcon className="w-8 h-8 text-himalayan-600" />
              <span>Join Community</span>
            </Button>
          </div>
        </div>

        {/* Cultural Highlight */}
        <div className="mt-12 bg-gradient-to-r from-crimson-50 to-himalayan-50 rounded-lg p-6 border border-crimson-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-full flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Cultural Connection</h3>
              <p className="text-slate-600">Stay connected with your heritage</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">
            Upcoming: Dashain Festival 2024 - Find local celebrations, traditional food, and cultural events in your area.
          </p>
          <Button variant="cultural" size="sm">
            Explore Cultural Events
          </Button>
        </div>
      </div>
    </div>
  )
}

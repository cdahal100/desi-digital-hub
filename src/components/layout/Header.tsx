'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/Button"
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Header() {
  const { data: session, status } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSignIn = () => {
    signIn(undefined, { callbackUrl: '/dashboard' })
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <header className="relative z-10 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo-enhanced.svg"
                  alt="Desi Digital Hub - Connecting Cultures Digitally"
                  width={240}
                  height={60}
                  className="h-16 sm:h-20 lg:h-24 w-auto"
                />
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              Pricing
            </a>
            <a href="#cultural" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
              Cultural Services
            </a>
            
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-crimson-600 to-himalayan-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {session.user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span>{session.user.name}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                      {session.user.email}
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    {session.user.role === 'BUSINESS_OWNER' && (
                      <Link
                        href="/business"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Business
                      </Link>
                    )}
                    {session.user.role === 'ADMIN' && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-600 hover:text-slate-900"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Link href="/auth/signup">
                  <Button variant="default" size="sm" className="shadow-sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

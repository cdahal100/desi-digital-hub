import Image from 'next/image'
import Link from 'next/link'

export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-himalayan-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image
            src="/logo-enhanced.svg"
            alt="Desi Digital Hub"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-100">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check your email
            </h2>
            <p className="text-gray-600 mb-6">
              We've sent you a magic link to sign in to your account. 
              Please check your email and click the link to continue.
            </p>
            <div className="space-y-4">
              <Link
                href="/auth/signin"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-crimson-600 to-himalayan-900 hover:from-crimson-700 hover:to-himalayan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson-500"
              >
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

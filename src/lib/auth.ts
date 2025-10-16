import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'
import { UserRole } from '@prisma/client'

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })
]

// Only add EmailProvider if email configuration is available and in production
if (
  process.env.NODE_ENV === 'production' &&
  process.env.EMAIL_SERVER_HOST && 
  process.env.EMAIL_SERVER_USER && 
  process.env.EMAIL_FROM
) {
  const EmailProvider = require('next-auth/providers/email').default
  providers.push(
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  )
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      // Include user role and profile in JWT token
      if (user) {
        token.role = user.role || UserRole.CUSTOMER
        token.userId = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      if (token) {
        session.user.id = token.userId as string
        session.user.role = token.role as UserRole
      }
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Allow sign in
      return true
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  events: {
    async createUser({ user }) {
      // Set default role and subscription for new users
      await prisma.user.update({
        where: { id: user.id },
        data: {
          role: UserRole.CUSTOMER,
        },
      })
    },
  },
}

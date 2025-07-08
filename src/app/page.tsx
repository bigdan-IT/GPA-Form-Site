import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { LoginPage } from '@/components/auth/LoginPage'
import { DashboardPage } from '@/components/dashboard/DashboardPage'

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return <LoginPage />
  }

  return <DashboardPage />
} 
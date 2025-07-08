'use client'

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { 
  FileText, 
  Users, 
  Settings, 
  BarChart3, 
  Plus, 
  LogOut,
  User,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export function DashboardPage() {
  const { data: session } = useSession()
  const user = session?.user

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN'

  const navigationItems = [
    {
      title: 'Available Forms',
      description: 'View and submit forms',
      icon: FileText,
      href: '/forms',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'My Submissions',
      description: 'View your form submissions',
      icon: BarChart3,
      href: '/submissions',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    ...(isAdmin ? [
      {
        title: 'Manage Forms',
        description: 'Create and edit forms',
        icon: Plus,
        href: '/admin/forms',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
      },
      {
        title: 'View Responses',
        description: 'View all form responses',
        icon: BarChart3,
        href: '/admin/responses',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
      },
      {
        title: 'User Management',
        description: 'Manage user roles and permissions',
        icon: Users,
        href: '/admin/users',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
      },
    ] : []),
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">GPA Staff Forms</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{user?.name}</span>
                {isAdmin && (
                  <Shield className="h-4 w-4 text-primary-600" />
                )}
              </div>
              <button
                onClick={() => signOut()}
                className="btn btn-outline btn-sm flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h2>
          <p className="text-gray-600">
            {isAdmin 
              ? 'You have administrator access. Manage forms, view responses, and control user access.'
              : 'Access your forms and track your submissions.'
            }
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card p-6 hover:shadow-medium transition-shadow duration-200 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Forms</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">My Submissions</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            {isAdmin && (
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Responses</p>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 
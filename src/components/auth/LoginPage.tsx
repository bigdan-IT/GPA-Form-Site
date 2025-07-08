'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { GraduationCap, Shield, FileText } from 'lucide-react'

export function LoginPage() {
  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            GPA Staff Forms
          </h2>
          <p className="text-gray-600">
            Secure form submission system for school staff
          </p>
        </div>

        {/* Login Card */}
        <div className="card p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sign in to your account
              </h3>
              <p className="text-sm text-gray-600">
                Use your school Google account to access the forms system
              </p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full btn btn-outline btn-lg flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors"
            >
              <FcGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Only authorized staff members can access this system
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <Shield className="h-5 w-5 text-primary-600" />
            <div>
              <h4 className="font-medium text-gray-900">Secure Access</h4>
              <p className="text-sm text-gray-600">Restricted to school staff only</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
            <FileText className="h-5 w-5 text-primary-600" />
            <div>
              <h4 className="font-medium text-gray-900">Easy Forms</h4>
              <p className="text-sm text-gray-600">Submit and manage forms efficiently</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
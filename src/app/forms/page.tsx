import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { FormsList } from '@/components/forms/FormsList'

export default async function FormsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/')
  }

  // Fetch available forms for the user
  const forms = await prisma.form.findMany({
    where: {
      isActive: true,
      OR: [
        { isPublic: true },
        { createdBy: session.user.id }
      ]
    },
    include: {
      creator: {
        select: {
          name: true,
          email: true
        }
      },
      _count: {
        select: {
          responses: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Forms</h1>
          <p className="text-gray-600 mt-2">
            View and submit forms for your school
          </p>
        </div>
        
        <FormsList forms={forms} />
      </div>
    </div>
  )
} 
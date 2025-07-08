'use client'

import Link from 'next/link'
import { FileText, Calendar, User, BarChart3 } from 'lucide-react'

interface Form {
  id: string
  title: string
  description: string | null
  createdAt: Date
  creator: {
    name: string | null
    email: string | null
  }
  _count: {
    responses: number
  }
}

interface FormsListProps {
  forms: Form[]
}

export function FormsList({ forms }: FormsListProps) {
  if (forms.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No forms available</h3>
        <p className="mt-1 text-sm text-gray-500">
          There are currently no forms available for submission.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {forms.map((form) => (
        <Link
          key={form.id}
          href={`/forms/${form.id}`}
          className="card p-6 hover:shadow-medium transition-shadow duration-200 group"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {form.title}
                </h3>
                {form.description && (
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {form.description}
                  </p>
                )}
              </div>
              <FileText className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{form.creator.name || form.creator.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(form.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 className="h-4 w-4" />
                <span>{form._count.responses} responses</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 
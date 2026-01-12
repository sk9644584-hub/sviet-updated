import { Sidebar } from '@/components/Research/Sidebar'
import React from 'react'
import { DataTable } from './Table'
export const metadata = {
  title: "Patents"
}
const page = () => {


  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm">
                {/* About Department Section */}
                <div
                  id="overview"
                  className="p-6 border-b border-gray-200"
                >
                  <DataTable />
                </div>


              </div>
            </div>

            {/* Left Sidebar - Navigation */}
            <Sidebar activeRoute={4} />
          </div>
        </div>
      </main>

    </div>)
}

export default page
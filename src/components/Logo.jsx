import React from 'react';

function Logo({ width = '100px' }) {  
    return (
        <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">BlogKeeper</span>
            </div>
            </div>
            </div>
            </nav>
    )
}

export default Logo
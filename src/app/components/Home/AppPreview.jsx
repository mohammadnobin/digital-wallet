

import { CheckCircle} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function AppPreview() {
  return (
    <div>
      {/* App Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
               Your complete solution in one place
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Simple interface, powerful features. Manage all your payments,
                track expenses, and grow your savings from anywhere.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Quick Payments
                    </h4>
                    <p className="text-gray-600">
                      Send money using just phone numbers or QR codes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Bill Management
                    </h4>
                    <p className="text-gray-600">
                      Automate recurring payments and never miss a due date
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Smart Analytics
                    </h4>
                    <p className="text-gray-600">
                      Track spending patterns and optimize your budget
                    </p>
                  </div>
                </div>
              </div>

             <div className="mt-10">
               <Link href="/registration" className=" cursor-pointer bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
               <button >
                Register now !
                </button> 
              </Link>
             </div>
            </div>

            {/* Right Phone Mockup */}
            <div >
              <img className="rounded-2xl" src="/laptop.png" alt="laptop" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


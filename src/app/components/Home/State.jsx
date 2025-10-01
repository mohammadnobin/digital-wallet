
import React from 'react';

export default function State() {
  return (
    <div>
       {/* Stats Section */}
      <section className="bg-gray-50 py-8 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
              <div className="text-gray-600 font-medium">Monthly Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


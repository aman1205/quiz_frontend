import React from "react";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Event Card 1 --> */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">25</div>
                <div>MAR</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                ML Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Introduction to Neural Networks and Deep Learning fundamentals
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* <!-- Event Card 2 --> */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">15</div>
                <div>APR</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hackathon
              </h3>
              <p className="text-gray-600 mb-4">
                24-hour ML hackathon with exciting prizes and mentorship
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>9:00 AM - Next Day</span>
              </div>
            </div>
          </div>

          {/* <!-- Event Card 3 --> */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">30</div>
                <div>APR</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Guest Lecture
              </h3>
              <p className="text-gray-600 mb-4">
                Industry experts sharing insights on AI in production
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>4:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;

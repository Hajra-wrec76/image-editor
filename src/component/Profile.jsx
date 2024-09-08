import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Profile Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile</h1>
      
      {/* Credits and Image Manipulation Counters */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {/* Credits Available */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">CREDITS AVAILABLE</h2>
            <div className="flex items-center mt-2">
              <span className="text-4xl font-bold text-yellow-500">8</span>
              <img
                src="https://pixel-genius.vercel.app/assets/icons/coins.svg" // You can use your custom coin icon
                alt="Coins Icon"
                className="ml-2"
              />
            </div>
          </div>
        </div>

        {/* Image Manipulation Done */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">IMAGE MANIPULATION DONE</h2>
            <div className="flex items-center mt-2">
              <span className="text-4xl font-bold text-blue-500">0</span>
              <img
                src="https://img.icons8.com/fluency/48/picture.png" // You can use your custom image manipulation icon
                alt="Image Icon"
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sample Edits Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sample Edits</h2>
        <div className="border border-gray-300 rounded-lg p-6 flex items-center justify-center text-gray-400 text-lg">
          Empty List
        </div>
      </div>
    </div>
  );
};

export default Profile;

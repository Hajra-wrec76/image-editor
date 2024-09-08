import React, { useState } from 'react';

const ImageRestore = () => {
  const [originalImage, setOriginalImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOriginalImage(URL.createObjectURL(file));
    }
  };

  const handleApplyTransformation = () => {
    // Add logic to apply transformation here
    console.log("Applying transformation...");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Restore Image</h1>
      <p className="text-gray-600 mb-8">Refine images by removing noise and imperfections</p>

      {/* Image Title Input */}
      <div className="mb-8">
        <label className="block text-gray-700 text-lg mb-2">Image Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image title"
        />
      </div>

      {/* Original and Transformed Image Preview */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Original Image Section */}
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Original</h2>
          <div className="w-full h-64 border border-dashed border-purple-500 rounded-lg flex items-center justify-center">
            {originalImage ? (
              <img src={originalImage} alt="Original Upload" className="object-contain h-full" />
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <span className="text-purple-500 text-lg">Click here to upload image</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>

        {/* Transformed Image Section */}
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Transformed</h2>
          <div className="w-full h-64 border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Transformed Image</span>
          </div>
        </div>
      </div>

      {/* Apply Transformation Button */}
      <button
        onClick={handleApplyTransformation}
        className="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition duration-300"
      >
        Apply Transformation
      </button>
      <button
        // onClick={handleApplyTransformation}
        className="w-full bg-gradient-to-r from-purple-400 mt-2 to-blue-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 transition duration-300"
      >
      Download
      </button>
    </div>
  );
};

export default ImageRestore;

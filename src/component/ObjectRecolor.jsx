import React, { useState } from 'react';

const ObjectRecolor = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleApplyTransformation = () => {
    // Logic for applying the recoloring transformation
  };

  const handleDownload = () => {
    // Logic for downloading the transformed image
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-white">
      <h1 className="text-4xl font-bold text-indigo-900 mb-2">Object Recolor</h1>
      <p className="text-gray-500 mb-8">Identify and recolor objects from the image</p>

      <div className="w-full max-w-2xl">
        {/* Image Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-indigo-900">Image Title</label>
          <input
            type="text"
            className="mt-2 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter image title"
          />
        </div>

        {/* Object to recolor and Replacement Color */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-indigo-900">Object to recolor</label>
            <input
              type="text"
              className="mt-2 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Specify the object to recolor"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-indigo-900">Replacement Color</label>
            <input
              type="text"
              className="mt-2 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Specify the replacement color"
            />
          </div>
        </div>

        {/* Original and Transformed Images */}
        <div className="flex space-x-8 mt-8">
          {/* Original Image */}
          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-indigo-900">Original</h2>
            <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 h-64 flex items-center justify-center">
              {image ? (
                <img src={image} alt="Uploaded" className="max-h-full" />
              ) : (
                <label className="cursor-pointer">
                  <div className="text-center text-indigo-500">
                    <span className="text-4xl">+</span>
                    <p className="mt-2">Click here to upload image</p>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Transformed Image */}
          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-indigo-900">Transformed</h2>
            <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 h-64 flex items-center justify-center">
              <span className="text-indigo-500">Transformed Image</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          <button
            onClick={handleApplyTransformation}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg shadow-md text-lg"
          >
            Apply Transformation
          </button>
          <button
            onClick={handleDownload}
            className="w-full bg-indigo-300 hover:bg-indigo-400 text-white py-2 rounded-lg shadow-md text-lg"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectRecolor;


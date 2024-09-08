import React, { useState } from 'react';

const GenerativeFill = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleApplyTransformation = () => {
    // Logic for applying transformation
  };

  const handleDownload = () => {
    // Logic for downloading the transformed image
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">Generative Fill</h1>
      <p className="text-gray-500 mb-8">Enhance an image's dimensions using AI outpainting</p>

      <div className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image Title</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter image title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Aspect Ratio</label>
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select size</option>
            <option>16:9</option>
            <option>4:3</option>
            <option>1:1</option>
          </select>
        </div>

        <div className="flex space-x-8 mt-8">
          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-2">Original</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-64 flex items-center justify-center">
              {image ? (
                <img src={image} alt="Uploaded" className="max-h-full" />
              ) : (
                <label className="cursor-pointer">
                  <div className="text-center text-gray-500">
                    <span className="block">Click here to upload image</span>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </div>
                </label>
              )}
            </div>
          </div>

          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-2">Transformed</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-64 flex items-center justify-center">
              <span className="text-gray-400">Transformed Image</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleApplyTransformation}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg mb-4"
          >
            Apply Transformation
          </button>
          <button
            onClick={handleDownload}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerativeFill;




import React, { useState } from 'react';

const BackgroundRemove = () => {
  const [image, setImage] = useState(null);
  const [transformedImage, setTransformedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyTransformation = () => {
    // Simulate a transformation process (replace this with actual logic)
    setTransformedImage(image); // For now, we are just showing the original image
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Background Remove</h1>
        <p className="text-center mb-8 text-gray-500">
          Removes the background of the image using AI
        </p>
        
        {/* Image Title Input */}
        <input
          type="text"
          placeholder="Image Title"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Original and Transformed Image Sections */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center border-dashed border-2 border-gray-300 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Original</h2>
            {image ? (
              <img src={image} alt="Uploaded" className="max-h-60 object-contain" />
            ) : (
              <label className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Click here to upload image</span>
                  <input type="file" className="hidden" onChange={handleImageUpload} />
                </div>
              </label>
            )}
          </div>

          <div className="flex flex-col items-center border-dashed border-2 border-gray-300 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Transformed</h2>
            {transformedImage ? (
              <img
                src={transformedImage}
                alt="Transformed"
                className="max-h-60 object-contain"
              />
            ) : (
              <div className="text-gray-500">Transformed Image</div>
            )}
          </div>
        </div>

        {/* Apply Transformation and Download Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={applyTransformation}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Apply Transformation
          </button>
          <button
            onClick={() => alert('Download functionality coming soon!')}
            className="bg-purple-300 text-white px-6 py-3 rounded-lg hover:bg-purple-400 transition"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemove;


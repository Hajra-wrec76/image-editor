import React from 'react';

const EditCard = ({ image, title, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <span className="font-semibold text-lg">{title}</span>
        <img src={icon} alt="icon" className="w-6 h-6"/>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Home</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        <EditCard 
          image="./girl.png" 
          title="Remove Background" 
          icon="https://pixel-genius.vercel.app/assets/icons/camera.svg" 
        />
        <EditCard 
          image="./flowers.png" 
          title="Recolor Object" 
          icon="https://pixel-genius.vercel.app/assets/icons/filter.svg" 
        />
        <EditCard 
          image="./Enhance_Image.png" 
          title="Enhance Image" 
          icon="https://pixel-genius.vercel.app/assets/icons/image.svg" 
        />
        <EditCard 
          image="./sky.png" 
          title="Remove Object" 
           icon="https://pixel-genius.vercel.app/assets/icons/stars.svg" 
        />
        <EditCard 
          image="./cloud.png" 
          title="Adjust Image Size" 
          icon="https://pixel-genius.vercel.app/assets/icons/scan.svg" 
        />
      </div>
    </div>
  );
};

export default Home;



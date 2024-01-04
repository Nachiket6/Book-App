// Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://picsum.photos/1600/900/?random'
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBackgroundImage(`https://picsum.photos/1600/900/?random&t=${Date.now()}`);
  //   },10000); // Change the image every 5 seconds (adjust as needed)

  //   return () => clearInterval(interval);
  // }, []);

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section style={backgroundStyles} className='w-full h-screen'>
    <div className="flex w-1/4">
      {/* Main Content */}
      <div className="flex-1 p-4 bg-opacity-75 ">
        <h1 className="text-2xl font-semibold text-white mb-4">Dashboard</h1>

        {/* Sample Content Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl fo nt-semibold mb-2">Total Books</h2>
          <p className="text-gray-600">There are 500 books in the bookstore.</p>

          {/* Button to open Shop Page */}
          <Link to="/shop">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-black">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;

import { useState } from 'react';

const packagesData = [
    { name: 'Eco Tourism', description: 'Immerse yourself in the pristine beauty of East Africa.' },
    { name: 'Family Tours', description: 'Create lasting memories with your loved ones.' },
    { name: 'Museums and Archeological Tours', description: 'Unravel the rich history and cultural heritage.' },
    { name: 'Home Stays', description: 'Experience the warmth and hospitality of East Africa with our urban and rural home stay programs.' },
    { name: 'White Water Rafting', description: 'Feel the adrenaline rush with white-water rafting on the River Nile.' },
    { name: 'Bungee Jumping', description: 'Experience the thrill of bungee jumping over the River Nile.' },
    { name: 'Gorilla Eco Tracking', description: 'Embark on a journey to track and observe gorillas in their natural habitat in Uganda and Rwanda.' },
    { name: 'Boating and Fishing', description: 'Set sail on Lake Victoria for boating and fishing escapades amidst breathtaking scenery.' },
    { name: 'Cultural Tours', description: 'Embark on enlightening cultural tours around the Great Lakes region, connecting with local communities and traditions.' },
    { name: 'Community Development Tours', description: 'Engage in meaningful experiences with community development tours in Western Kenya, contributing to sustainable growth.' },
    // Add more package data here...
  ];
  

const PackagesCard = ({ name, description }) => (
  <div className="p-4 border rounded shadow">
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const PackageList = ({ packages }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {packages.map((packageItem, index) => (
      <PackagesCard key={index} {...packageItem} />
    ))}
  </div>
);

const Packages = () => {
  const [visiblePackages, setVisiblePackages] = useState(3);

  const loadMorePackages = () => {
    setVisiblePackages(prevVisiblePackages => prevVisiblePackages + 3);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Packages</h1>
      <PackageList packages={packagesData.slice(0, visiblePackages)} />
      {visiblePackages < packagesData.length && (
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-licorice text-white rounded hover:bg-harvestGold"
            onClick={loadMorePackages}
          >
            Load More Packages
          </button>
        </div>
      )}
    </div>
  );
};

export default Packages;
// import front from "../assets/travel.avif"
// import { useState } from 'react';

// function About() {
//   const [isWhyChooseUsVisible, setIsWhyChooseUsVisible] = useState(false);

//   const handleShowWhyChooseUs = () => {
//     setIsWhyChooseUsVisible(!isWhyChooseUsVisible);
//   };
//     return (
      
//         <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8" id="about">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="max-w-lg">
//               <h2 className="text-3xl font-extrabold text-harvestGold sm:text-4xl">About Us</h2>
//               <p className="mt-4 text-gray-500 text-x">BranHerick is a dynamic and innovative company dedicated to providing comprehensive business solutions, world-class training programs, and transformative team-building experiences. With a commitment to excellence and a passion for empowering businesses, we are your partner in achieving sustainable growth and success.</p>
//               <h3 className="text-harvestGold font-bold text-xl">Our Mission:</h3>
//               <p className="text-gray-500 text-x">At BranHerick our mission is to equip organizations with the knowledge, skills, and strategies they need to thrive in today’s rapidly evolving business landscape. We believe that strong businesses are built on knowledgeable teams, efficient processes, and cohesive work environments. Through our integrated services, we help you unlock your full potential.</p>
//               <div className="text-center">
//                 {/* <h3 className="text-harvestGold mb-4 font-bold">Why Choose Us:</h3> */}
//                 <ul className={`flex flex-col space-y-4 ${!isWhyChooseUsVisible && 'hidden'}`}>
//                   <li className="flex flex-col">
//                     <span className=" text-harvestGold mr-2">Expertise</span>
//                     <span className="text-gray-500 text-x">
//                       Our team comprises seasoned professionals with a wealth of industry knowledge and hands-on experience.
//                     </span>
//                   </li>
//                   <li className="flex flex-col">
//                  <span className=" text-harvestGold mr-2">Customization</span>
//                  <span className="text-gray-500 text-x">
//                    We understand that every business is unique. Our solutions, training, and team-building programs are customized to align with your specific objectives.
//                  </span>
//                 </li>
//                 <li className="flex flex-col">
//                 <span className=" text-harvestGold mr-2">Results Driven</span>
//               <span className="text-gray-500 text-x">
//                  We are committed to delivering measurable results that positively impact your bottom line.
//                </span>
//                </li>
//                <li className="flex flex-col">
//                <span className=" text-harvestGold mr-2">Innovation</span>
//                <span className="text-gray-500 text-x">
//                  We stay at the forefront of industry trends and technology to ensure our clients remain competitive in an ever-changing landscape.
//                </span>
//              </li>
//                 </ul>
//                 {!isWhyChooseUsVisible && (
//                   <button
//                     className="text-xl text-harvestGold font-medium px-2 py-1 rounded hover:bg-licorice hover:text-cream mt-2 transition-all duration-300 ease-in-out"
//                     onClick={handleShowWhyChooseUs}
//                   >
//                     Why Choose Us <span className="ml-2">&#8594;</span>
//                   </button>
//                 )}
//                 {isWhyChooseUsVisible && (
//                   <button
//                     className="text-xl text-harvestGold font-medium px-2 py-1 rounded hover:bg-licorice hover:text-cream mt-2 transition-all duration-300 ease-in-out"
//                     onClick={handleShowWhyChooseUs}
//                   >
//                     Show Less <span className="ml-2">&#8594;</span>
//                   </button>
//                 )}
//               </div>
              
//             </div>
//             <div className="mt-12 md:mt-0">
//               <img src={front} alt="About Us Image" className="object-cover rounded-md" />
//             </div>
//           </div>
//         </div>
      
//     );
//   }
  
//   export default About;

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import traveling from "../assets/travel2.mp4";

function About() {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const handleShowMore = () => {
    setIsMoreVisible(!isMoreVisible);
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-lg md:order-2">
          <ReactPlayer
            url={traveling}
            width="100%" // Set the width to 100% for responsiveness
            height="auto" // Allow the height to adjust automatically
            className="rounded-md"
            controls
          />
        </div>
        <div className="max-w-lg md:order-1">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-harvestGold sm:text-4xl">About Us</h2>
            <p className="text-gray-600 mb-6">
              BranHerick is a dynamic and innovative company dedicated to providing comprehensive business solutions, world-class training programs, and transformative team-building experiences. With a commitment to excellence and a passion for empowering businesses, we are your partner in achieving sustainable growth and success.
            </p>
            {!isMoreVisible && (
              <button
                className="text-lg text-harvestGold font-medium px-2 py-1 rounded hover:bg-licorice hover:text-cream mt-4 transition-all duration-300 ease-in-out"
                onClick={handleShowMore}
              >
                Read More <span className="ml-2">&#8595;</span>
              </button>
            )}
            {isMoreVisible && (
              <>
                <h3 className="text-xl font-bold text-harvestGold mb-2">Why Choose Us:</h3>
                <ul className="flex flex-col space-y-4">
                  <li className="flex flex-col">
                    <span className="text-harvestGold">Expertise:</span>
                    <span className="text-gray-600">
                      Our team comprises seasoned professionals with a wealth of industry knowledge and hands-on experience.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-harvestGold">Customization:</span>
                    <span className="text-gray-600">
                      We understand that every business is unique. Our solutions, training, and team-building programs are customized to align with your specific objectives.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-harvestGold">Results Driven:</span>
                    <span className="text-gray-600">
                      We are committed to delivering measurable results that positively impact your bottom line.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-harvestGold">Innovation:</span>
                    <span className="text-gray-600">
                      We stay at the forefront of industry trends and technology to ensure our clients remain competitive in an ever-changing landscape.
                    </span>
                  </li>
                </ul>
                <button
                  className="text-lg text-harvestGold font-medium px-2 py-1 rounded hover:bg-licorice hover:text-cream mt-4 transition-all duration-300 ease-in-out"
                  onClick={handleShowMore}
                >
                  Read Less <span className="ml-2">&#8593;</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


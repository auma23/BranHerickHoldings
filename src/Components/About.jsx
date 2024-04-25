

function About() {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-harvestGold sm:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-500 text-xs">BranHerick is a dynamic and innovative company dedicated to providing comprehensive business solutions, world-class training programs, and transformative team-building experiences. With a commitment to excellence and a passion for empowering businesses, we are your partner in achieving sustainable growth and success.</p>
            <h3 className="text-harvestGold">Our Mission:</h3>
            <p className="text-gray-500 text-xs">At BranHerick our mission is to equip organizations with the knowledge, skills, and strategies they need to thrive in today’s rapidly evolving business landscape. We believe that strong businesses are built on knowledgeable teams, efficient processes, and cohesive work environments. Through our integrated services, we help you unlock your full potential.</p>
            <h3 className="text-harvestGold">Why Choose Us:</h3>
           <ul className="bg-white divide-y divide-licorice-50 max-w-m">
             <li className="px-6 py-4 flex justify-between">
              <span className="font-bold text-harvestGold mr-2">Expertise</span>  <span className="text-gray-500 text-xs"> – Our team comprises seasoned professionals with a wealth of industry knowledge and hands-on experience.</span>
             </li>
             <li className="px-6 py-4 flex justify-between">
              <span className="font-bold text-harvestGold mr-2">Customization</span> <span className="text-gray-500 text-xs"> – We understand that every business is unique. Our solutions, training, and team-building programs are customized to align with your specific objectives.</span> 
             </li>
             <li className="px-6 py-4 flex justify-between">
              <span className="font-bold text-harvestGold mr-2">Results Driven</span> <span className="text-gray-500 text-xs">– We are committed to delivering measurable results that positively impact your bottom line.</span>
             </li>
             <li className="px-6 py-4 flex justify-between">
              <span className="font-bold text-harvestGold mr-2">Innovation</span> <span className="text-gray-500 text-xs"> – We stay at the forefront of industry trends and technology to ensure our clients remain competitive in an ever-changing landscape.</span> 
             </li>
          </ul>

            <div className="mt-8">
              <a href="#" className="text-licorice hover:text-harvestGold font-medium">Learn more about us
                <span className="ml-2">&#8594;</span></a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img src="./src/assets/front.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
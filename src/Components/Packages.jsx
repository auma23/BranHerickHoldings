
function Packages() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">Packages</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <BasicPlan />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <StandardPlan />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <PremiumPlan />
        </div>
      </div>
    </div>
  );
}

function BasicPlan() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Basic plan</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">29</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <i className="fas fa-users text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">1 team member</span>
        </li>
        <li className="flex">
          <i className="fas fa-cloud-upload-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">10GB Cloud storage</span>
        </li>
        <li className="flex">
          <i className="fas fa-handshake text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">Sketch Files</span>
        </li>
        <li className="flex">
          <i className="fas fa-plug text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">API Access</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-code text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">Complete documentation</span>
        </li>
        <li className="flex">
          <i className="fas fa-phone-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">24×7 phone & email support</span>
        </li>
      </ul>
      <button type="button" className="text-white bg-licorice hover:bg-harvestGold focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  );
}

function StandardPlan() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <i className="fas fa-users text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">1 team member</span>
        </li>
        <li className="flex">
          <i className="fas fa-cloud-upload-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">10GB Cloud storage</span>
        </li>
        <li className="flex">
          <i className="fas fa-handshake text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Sketch Files</span>
        </li>
        <li className="flex">
          <i className="fas fa-plug text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">API Access</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-code text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">Complete documentation</span>
        </li>
        <li className="flex">
          <i className="fas fa-phone-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 line-through">24×7 phone & email support</span>
        </li>
      </ul>
      <button type="button" className="text-white bg-licorice hover:bg-harvestGold focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  );
}

function PremiumPlan() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">99</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <i className="fas fa-users text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">1 team member</span>
        </li>
        <li className="flex">
          <i className="fas fa-cloud-upload-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">10GB Cloud storage</span>
        </li>
        <li className="flex">
          <i className="fas fa-handshake text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Sketch Files</span>
        </li>
        <li className="flex">
          <i className="fas fa-plug text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">API Access</span>
        </li>
        <li className="flex">
          <i className="fas fa-file-code text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 ">Complete documentation</span>
        </li>
        <li className="flex">
          <i className="fas fa-phone-alt text-blue-700 dark:text-blue-500"></i>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">24×7 phone & email support</span>
        </li>
      </ul>
      <button type="button" className="text-white bg-licorice hover:bg-harvestGold focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  );
}

export default Packages;


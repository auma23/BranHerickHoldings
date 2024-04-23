

function Hero() {
  return (
<div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center transition-opacity duration-500 ease-in-out" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80')", height: '500px'}}>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-60 transition-opacity duration-500 ease-in-out"  style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">BRANHERICK HOLDINGS IS</h2>
            <h4 className="mb-6 text-xl font-semibold">a Dynamic and Innovative Company Dedicated to Providing Comprehensive Business Solutions</h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Load More
            </button>
          </div>
        </div>
    </div> 
  </div>
</div>
  )
}

export default Hero
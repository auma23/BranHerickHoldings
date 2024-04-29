import coverpage from "../assets/coverpage.jpg";

function Hero() {
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center transition-opacity duration-500 ease-in-out"
        style={{ height: "600px" }}
      >
        <img src={coverpage} className="absolute inset-0 object-cover h-full w-full" alt="Branherick Holdings Coverpage" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-60 transition-opacity duration-500 ease-in-out" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-earthYellow">
              <h2 className="mb-4 text-4xl font-semibold">BRANHERICK HOLDINGS IS</h2>
              <h4 className="mb-6 text-xl font-semibold">a Dynamic and Innovative Company Dedicated to Providing Comprehensive Business Solutions</h4>
              <button
                type="button"
                className="rounded border-2 border-cream px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-earthYellow transition duration-150 ease-in-out hover:border-licorice hover:bg-licorice hover:bg-opacity-10 hover:text-cream focus:border-harvestGold focus:text-harvestGold focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

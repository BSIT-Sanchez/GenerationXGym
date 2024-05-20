
const Banner = () => {
  return(
    <section className="mt-5 md:mt-0">
      <div className="mx-auto max-w-screen-xl px-2 py-8 sm:py-12  lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="images/banner.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-xl lg:text-3xl">Transform Your <span className="span">Fitness</span> Journey</h2>

            <p className="mt-4 text-[#4b5563] text-sm">
            Our fitness gym application provides you with a dedicated mentor who will guide you through your fitness journey, ensuring you achieve your goals.
            </p>

            <a
              href="/"
              className="mt-8 inline-block rounded-sm bg-[#34d399] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#10b981]focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner
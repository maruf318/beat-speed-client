const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[400px] md:h-[700px]"
        style={{
          backgroundImage: "url(https://i.imgur.com/9HPCPhm.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" max-w-7xl mx-auto">
            <h1 className="mb-5 text-3xl md:text-8xl w-full font-bold">
              Your Dream Car Awaits
            </h1>
            <p className="m-5 text-sm  hidden md:block ">
              Welcome to the ultimate destination for automotive enthusiasts and
              car buyers alike. At Beat Speed, we are dedicated to helping you
              find the perfect vehicle that suits your style, needs, and budget.
              With a wide selection of the latest models and trusted pre-owned
              vehicles, we are here to make your dream of owning the ideal car a
              reality. Browse our diverse inventory, explore our financing
              options, and let us guide you on your journey to the driver seat.
              Start your automotive adventure today!
            </p>
            {/* <button className="btn bg-white text-red-600">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

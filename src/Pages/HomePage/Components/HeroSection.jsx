import video from "../../../assets/video.mp4";

const HeroSection = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold md:text-7xl">
          Welcome to Our Website
        </h1>

        <p className="mt-4 text-xl">
          We create amazing digital experiences.
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 font-semibold">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default HeroSection;
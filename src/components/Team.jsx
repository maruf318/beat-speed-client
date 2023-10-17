const Team = () => {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                <span className="text-red-700"> Team</span> Beat Speed
              </h2>
              <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                Our team members are not just professionals; they are
                enthusiasts who share a common love for cars. With a wealth of
                knowledge and experience in the industry, they are here to
                assist you in making informed decisions.
              </p>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-3">
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src="https://i.ibb.co/bv0zdmG/salome-guruli-6-Gg-Cy-Nn-F6-Zs-unsplash.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 className="text-2xl">Chris Brown</h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                  src="https://i.ibb.co/0VBwcbz/robert-godwin-SPc-Fp-XIME6-M-unsplash.jpg"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Muller Junior</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src="https://i.ibb.co/hXQBM2X/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Xinyue</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Operations Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

import Navbar from "./NavBar";

export default function AcademicHeader() {

  return (
    <>
      <div className="relative h-28 overflow-hidden bg-gray-50">
        {/* Image de fond */}
        <div
          className="h-full w-full bg-center bg-no-repeat flex"
          style={{
            backgroundImage: "url(/images/fond.jpg)",
          }}
        >
          <div className="flex  items-center justify-start h-full w-full relative z-10 px-4 sm:px-6 lg:px-8 gap-2">
            <img
              src="/images/logo.png"
              alt="Logo Université Numérique"
              className="h-16 sm:h-20 shadow-xl object-cover transition-transform duration-300 hover:scale-105 mb-2"
            />
            <div className=" justify-start">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#12283E] leading-tight tracking-tight text-center">
                Université Numérique du Niger
              </h1>
              <p className="text-sm sm:text-base text-[#12283E] italic leading-relaxed mt-1">
                Le savoir accessible partout pour tous
              </p>
            </div>

          </div>
            <div className="flex  items-center justify-end h-full w-full relative z-10 px-4 sm:px-6 lg:px-8 gap-2">
                <img
                    src="/images/nig7.png"
                    alt="Logo Université Numérique"
                    className="h-32 sm:h-40 shadow-xl object-cover transition-transform duration-300 hover:scale-105 mb-2"
                />

            </div>
        </div>
      </div>

      {/* Barre de navigation */}
      <Navbar />
    </>
  );
}

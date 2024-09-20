export default function HeroSection() {
    return (
      <section className="relative bg-white min-h-screen flex items-center justify-center px-4 ml-14">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Bagian Kiri - Teks */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Agatha, Solusi cerdas dengan respon yang cepat!
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Solusi cerdas yang siap menggantikan customer care dengan respons cepat memberikan pengalaman yang lebih baik.
            </p>
            <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-xl">
              Try It For Free
              <img src="/arrow-right.svg" alt="Arrow Right" className="inline-block ml-2 w-4 h-4" />
            </button>
          </div>
  
          {/* Bagian Kanan - Gambar */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* Gambar Lingkaran */}
            <div className="absolute md:-left-60 w-[1000px] z-0">
              <img src="/circle.svg" alt="Lingkaran" className="w-full h-full object-contain" />
            </div>
  
            {/* Gambar Ponsel */}
            <div className="relative w-[200px] md:w-[500px] h-[400px] md:h-[500px] z-10">
              <img src="/phone.svg" alt="Ponsel" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    );
  }
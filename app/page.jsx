import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="/logo.svg" alt="Logo Agatha" className="w-32" />
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 mb-20 md:left-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
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
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute w-[1000px] z-0">
            <img src="/circle.svg" alt="Lingkaran" className="w-full h-full object-contain" />
          </div>
          <div className="relative w-[200px] md:w-[500px] h-[400px] md:h-[500px] z-10">
            <img src="/phone.svg" alt="Ponsel" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChat = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center mb-20 transform -translate-y-10">
      {/* Gambar di kiri */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Lingkaran blur di belakang gambar */}
        <div className="absolute w-[500px] h-[500px] bg-[#C00DC8] rounded-full blur-[500px] opacity-80 z-[-1] left-[-100px]"></div>
        {/* Gambar ponsel */}
        <div className="absolute w-[300px] z-0 left-[100px]">
          <img src="/phone2.svg" alt="Lingkaran" className="w-full h-full object-contain" />
        </div>
      </div>
      {/* Teks di kanan */}
      <div className="text-center md:text-right mb-20 md:mb-0 md:mr-20">
        <p className="text-[#9B03B8] text-7xl font-bold mb-20">AI Chat</p>
        <h2 className="text-3xl font-bold mb-10">
          Optimalkan layanan rumah sakit <br /> anda dengan Voice Agatha AI!
        </h2>
        <p className="text-lg mb-10">
          Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!
        </p>
        <img src="/table.svg" alt="Table" className="w-[400px] h-auto mb-6 ml-auto" />
      </div>
    </div>
  );
};

const AIVoice = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center mt-20 mb-20 transform translate-y-10 relative">
      <div className="text-center md:text-left mb-6 md:mb-0 md:mr-8">
        <p className="text-[#9B03B8] text-7xl font-bold mb-10">Voice</p>
        <h2 className="text-3xl font-bold mb-10">Jangan Biarkan Pasien Melewatkan<br /> Jadwal Kontrol Mereka!</h2>
        <p className="text-lg mb-10">Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!</p>
        <img src="/table.svg" alt="Table" className="w-[400px] h-auto mb-6" />
      </div>
      {/* Lingkaran blur di belakang gambar */}
      <div className="absolute w-[500px] h-[500px] bg-[#C00DC8] rounded-full blur-[500px] opacity-80 z-[-1] right-[-100px]"></div>

      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute w-[600px] z-0">
          <img src="/video.svg" alt="Lingkaran" className="w-full h-full object-contain transform translate-x-20" />
        </div>
      </div>
    </div>
  );
};

const AIReminder = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center mb-20 mt-20 transform translate-y-20 px-6">
      {/* Gambar di kiri */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Lingkaran blur di belakang gambar */}
        <div className="absolute w-[500px] h-[500px] bg-[#C00DC8] rounded-full blur-[500px] opacity-80 z-[-1] left-[-100px]"></div>
        {/* Gambar ponsel */}
        <div className="absolute w-[300px] z-0 left-[100px]">
          <img src="/phone2.svg" alt="Lingkaran" className="w-full h-full object-contain" />
        </div>
      </div>
      {/* Teks di kanan */}
      <div className="text-center md:text-right mb-20 md:mb-0 md:mr-20">
        <p className="text-[#9B03B8] text-7xl font-bold mb-20">AI Reminder</p>
        <h2 className="text-3xl font-bold mb-10">
          Jangan biarkan pasien melewatkan <br /> jadwal kontrol mereka!
        </h2>
        <p className="text-lg mb-10">
          Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!
        </p>
        <img src="/table.svg" alt="Table" className="w-[400px] h-auto mb-6 ml-auto" />
      </div>
    </div>
  );
};


const Features = () => {
  return (
    <section className={`relative bg-white py-20 md:left-10 ${poppins.className}`}>
      <AIChat />
      <AIVoice />
      <AIReminder />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-gray-500">&copy; Agatha 2024</p>
    </footer>
  );
};
const Home = () => {
  return (
    <div className={`${poppins.className}`}>
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
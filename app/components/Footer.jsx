import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

export default function Footer() {
    return (
      <section className={`relative bg-white h-auto flex items-center justify-center px-4 ml-20 ${poppins.className}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Bagian Kiri - Teks */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:mr-8">
            <p className="text-[#9B03B8] text-7xl font-bold mb-10">AI Reminder</p>
            {/* Title and Text */}
            <div className="mb-6">
              <h2 className="text-5xl font-bold mb-10">Jangan Biarkan Pasien Melewatkan<br /> Jadwal Kontrol Mereka!</h2>
              <p className="text-lg mb-10">Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!</p>
            </div>
            {/* Tabel Image */}
            <div className="mb-6">
              <img src="/table.svg" alt="Table" className="w-[400px] h-auto" />
            </div>
          </div>
  
          {/* Bagian Kanan - Gambar */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* Gambar Lingkaran */}
            <div className="absolute w-[1000px] z-0" style={{ right: '-20px' }}>
              <img src="/footer.svg" alt="Lingkaran" className="w-full h-full object-contain" />
            </div>
  
            {/* Gambar Ponsel */}
            {/* <div className="relative w-[200px] md:w-[500px] h-[400px] md:h-[500px] z-10"> */}
              {/* <img src="" alt="Ponsel" className="w-full h-full object-contain" /> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }
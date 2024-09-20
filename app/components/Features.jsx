import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

const Features = () => {
    return (
        <section className={`relative bg-white h-auto flex items-center justify-center px-4 ml-20 ${poppins.className}`}>
            <div className="container mx-auto flex flex-col gap-8">
                {/* AI Voice */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-purple-700">AI Voice</h2>
                    <p className="mt-4 text-gray-600">
                        Optimalkan layanan rumah sakit Anda dengan Voice Agatha AI.
                    </p>
                    <img src="/mockup4.png" alt="AI Voice" className="w-40 mx-auto md:mx-0 mt-6" />
                </div>

                {/* AI Chat */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-purple-700">AI Chat</h2>
                    <p className="mt-4 text-gray-600">
                        Akses informasi pasien dengan mudah bersama Chat AI Agatha Di WhatsApp!
                    </p>
                    <img src="/mockup3.png" alt="AI Chat" className="w-40 mx-auto md:mx-0 mt-6" />
                </div>
            </div>
        </section>
    );
};

export default Features;
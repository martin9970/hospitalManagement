import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const backgroundImages = [
  '/images/new-aashif-medical-hall-thawe-gopalganj-medical-equipment-dealers-a4MZyYHTfj.jpg',
  '/images/gettyimages-1312706504-612x612.jpg',
  '/images/images.jpeg',
  '/images/photo-1519494026892-80bbd2d6fd0d.avif',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // 3 seconds per image (1 sec animation + 2 sec display)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={backgroundImages[currentImageIndex]}
          alt="Hospital"
          loading="lazy"
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -100 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full h-full object-cover object-center"
          style={{ 
            width: '100%', 
            height: '100%',
            display: 'block'
          }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-center text-center min-h-[80vh]">

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Welcome to <br />
                <span className="text-blue-500">
                  Aashique Medical Hall Thawe
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 px-2">
                Expert care, advanced technology, and a commitment to your health and well-being.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

                <Link
                  to="/appointment"
                  className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                >
                  Book Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="tel:+917702021224"
                  className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  Emergency Contact
                  <Phone className="ml-2 h-5 w-5" />
                </a>

              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* 🔥 Stats Section (NOW RESPONSIVE) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {[
              { label: 'Qualified Doctors', value: '100+' },
              { label: 'Success Rate', value: '99%' },
              { label: 'Modern Rooms', value: '500+' },
              { label: 'Happy Patients', value: '50k+' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">

                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-semibold mt-1">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}
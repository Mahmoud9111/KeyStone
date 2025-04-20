import { Plus } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -200]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100">
      {/* Navigation */}
      <header className="w-full p-5 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-light">
            KeyStone<span className="text-base align-super">*</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-white/80 transition-colors">Home</a>
            <a href="/about" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="/projects" className="text-white hover:text-white/80 transition-colors">Projects</a>
            <a href="/discover" className="text-white hover:text-white/80 transition-colors">Discover</a>
          </nav>
          <button className="text-white">
            <Plus className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* House Image with Overlaid Title */}
      <div className="relative w-full max-w-7xl mx-auto mt-auto">
        <div className="absolute top-1/12 left-0 right-0 z-20">
          <div className="text-center px-4 w-full">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-medium text-white mb-6 leading-tight">
              Extraordinary
              <br />
              living begins here.
            </h1>
            <p className="text-white/90 text-base md:text-2xl max-w-2xl mx-auto">
              Timeless architecture, exclusive locations, and luxury homes designed to inspire your next chapter.
            </p>
          </div>
        </div>
        <motion.img
          style={{ y }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="images/hero.avif"
          alt="Modern luxury home with minimalist architecture"
          width={900}
          height={300}
          className="w-full h-auto z-1000"
        />
      </div>        
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

    </div>
  )
}

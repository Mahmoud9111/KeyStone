import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 })
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative w-full flex flex-col items-center justify-between bg-gradient-to-b from-sky-300 to-sky-100">
          <div className="container mx-auto px-4 flex flex-col items-center justify-between h-full z-10">
            <motion.div 
              ref={textRef}
              initial={{ y: 100, opacity: 0 }}
              animate={isTextInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mt-12"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
                Your dream
                <br />
                home awaits.
              </h1>
              <p className="text-white text-lg md:text-xl max-w-xl mx-auto mb-10">
                Whether you're exploring our homes or envisioning something custom, we're here to bring your dream to
                life.
              </p>
              <motion.a
                ref={buttonRef}
                initial={{ y: 50, opacity: 0 }}
                animate={isButtonInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-sky-800 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div 
              ref={imageRef}
              initial={{ y: 100, opacity: 0 }}
              animate={isImageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full max-w-7xl mt-12 md:mt-16 relative"
            >
              <img
                src="/images/footerimg.png"
                alt="Modern luxury home with multiple levels and a swimming pool"
                className="w-full h-full object-cover rounded-t-lg"
              />
              <footer className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent py-12">
                <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="flex gap-12 text-white/90 text-lg">
                    <a href="/contact" className="hover:text-white">
                      Contact
                    </a>
                    <a href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </a>
                    <a href="/terms" className="hover:text-white">
                      Terms
                    </a>
                  </div>

                  <div className="my-6 md:my-0">
                    <a href="/" className="text-white text-3xl font-light">
                    KeyStone<span className="text-sky-200">*</span>
                    </a>
                  </div>

                  <div className="text-white/90 text-lg">© 2025 Haven Dream. All rights reserved.</div>
                </div>
              </footer>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

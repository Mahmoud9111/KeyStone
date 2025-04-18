import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import { Button } from "../Components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Discover() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
          Discover insights,
          <br />
          trends, and inspiration.
        </h2>
        <Button variant="outline" className="rounded-full px-4 py-2 border-black">
          View all <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Featured Article */}
      <motion.div 
        ref={ref}
        className="grid md:grid-cols-4 mb-16"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="md:col-span-2 bg-gray-200 rounded-lg aspect-[6/2] md:aspect-[16/14] overflow-hidden">
          <img
            src="/images/qaimg.jpg"
            alt="Luxury Boutique Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 bg-gray-50 rounded-lg p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Must Read
            </div>
            <h3 className="text-3xl md:text-4xl font-medium mb-4">
              The Rise of Boutique Architecture in Luxury Living
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Discover how boutique architecture is redefining luxury living with its focus on uniqueness,
              personalization, and timeless design.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" alt="Emily Chambers" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-medium">Emily Chambers</p>
                <p className="text-sm text-gray-500">Marketing Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0
            }
          }
        }}
      >
        {/* Article 1 */}
        <motion.div 
          className="flex flex-col"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        >
          <div className="bg-gray-200 rounded-lg aspect-[4/3] md:aspect-[16/9] overflow-hidden mb-4">
            <img
              src="/images/dis1.jpg"
              alt="AI and Home Automation"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium mb-3">The Future of Luxury: AI and Automation in Home Design</h3>
          <div className="mt-auto">
          </div>
        </motion.div>

        {/* Article 2 */}
        <motion.div 
          className="flex flex-col"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        >
          <div className="bg-gray-200 rounded-lg aspect-[4/3] md:aspect-[16/9] overflow-hidden mb-4">
            <img
              src="/images/dis1.jpg"
              alt="Sustainable Building Materials"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium mb-3">Are Sustainable Materials the Future of Homes?</h3>
          <div className="mt-auto">
          </div>
        </motion.div>

        {/* Article 3 */}
        <motion.div 
          className="flex flex-col"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        >
          <div className="bg-gray-200 rounded-lg aspect-[4/3] md:aspect-[16/9] overflow-hidden mb-4">
            <img
              src="/images/qaimg.jpg"
              alt="Minimalist Luxury Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium mb-3">Exploring Minimalism with a Touch of Luxury</h3>
          <div className="mt-auto">
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

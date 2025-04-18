"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"

// FaqSection Component
const FaqSection = React.forwardRef(({ className, title, description, items, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-8 sm:py-12 md:py-16 w-full bg-white text-black", className)}
      {...props}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 md:mb-16 text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-black text-left">
            {title}
          </h2>
          {description && <p className="text-sm sm:text-base text-gray-600 max-w-2xl text-left">{description}</p>}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-[90%] sm:max-w-[95%] lg:max-w-[1480px] mx-auto text-left space-y-2 sm:space-y-3">
          {items.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
})
FaqSection.displayName = "FaqSection"

// Internal FaqItem component
const FaqItem = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { question, answer, index } = props

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "border border-gray-200",
        isOpen ? "bg-gray-50" : "hover:bg-gray-50/50",
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 h-auto text-left flex items-start hover:bg-transparent text-black"
      >
        <h3
          className={cn(
            "text-base sm:text-lg font-medium transition-colors duration-200",
            "text-gray-600 flex-1",
            isOpen && "text-black",
          )} 
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 pt-2 sm:pt-3">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})
FaqItem.displayName = "FaqItem"

// Main FAQ Component with example data
function FAQ() {
  // Example FAQ items
  const faqItems = [
    {
      question: "How does your AI invoice processing work?",
      answer:
        "Our AI-powered platform automatically reads, extracts, and organizes key data from invoices, eliminating the need for manual entry. Simply upload your invoice, and our AI processes it in real-time, providing you with structured data ready for analysis or export.",
    },
    {
      question: "Can I export invoice data to multiple file formats?",
      answer:
        "Yes! Our tool supports various export options, including Excel, PDF, and CSV formats, allowing you to seamlessly integrate the extracted data into your accounting systems or share it with your team.",
    },
    {
      question: "What types of invoices can your AI handle?",
      answer:
        "Our AI is designed to handle a wide range of invoice types, whether structured or unstructured. Whether it’s a standard purchase invoice, utility bill, or custom format, our AI adapts to various invoice layouts and ensures accurate data extraction.",
    },
    {
      question: "How does the AI chatbot help with financial calculations?",
      answer:
        "Our intelligent AI chatbot is built to assist with a variety of financial tasks. From performing complex calculations to generating custom financial reports, it helps you make data-driven decisions quickly. Simply ask the chatbot for specific calculations, and it delivers results instantly.",
    },
    {
      question: "Is your platform easy to integrate with my existing systems?",
      answer:
        "Absolutely! Our platform is designed for seamless integration with popular accounting software and ERP systems. With our flexible export options and API capabilities, you can quickly sync the extracted data with your current tools, ensuring a smooth workflow with minimal disruption.",
    },
  ]

  return (
    <main className="py-12 bg-white">
      <FaqSection
        title="Frequently Asked Questions"
        description="Find answers to commonly asked questions about our platform and services."
        items={faqItems}
      />
    </main>
  )
}

// Export both components
export { FaqSection }
export default FAQ


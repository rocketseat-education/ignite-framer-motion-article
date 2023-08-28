import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Este elemento começará invisível e aparecerá suavemente!
      </motion.div>
    </main>
  )
}
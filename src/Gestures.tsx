import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div
        dragSnapToOrigin
        whileHover={{ scale: 1.2 }}
        whileDrag={{ scale: 1.5 }}
        drag
      >
        Este é um exemplo de animação interativa!
      </motion.div>
    </main>
  )
}
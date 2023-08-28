import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, translateY: -50 },
  visible: { opacity: 1, translateY: 0 },
};

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        Este é um exemplo de animação com variants!
      </motion.div>
    </main>
  )
}
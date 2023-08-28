import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    translateY: -50
  },
  animateFirst: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1,
    },
  },
  animateSecond: {
    scale: 0.5,
    transition: {
      delay: 1, // Adiciona o atraso de 1s nessa segunda animação
      duration: 1,
    },
  }
};

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div
        initial="initial"
        animate={["animateFirst", "animateSecond"]}
        variants={variants}
        transition={{
          delay: 0.2
        }}
      >
        Este elemento irá passar por duas animações com um atraso de 0.2 segundos na segunda!
      </motion.div>
    </main>
  )
}
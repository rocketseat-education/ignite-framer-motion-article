import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const CARDS = [
	{
		description: 'Olá mundo',
	},
	{
		description: 'Eu sou uma descrição',
	},
	{
		description: 'Doge esteve aqui',
	},
]

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        {CARDS.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            variants={variants}
            whileInView="visible"
            transition={{ delay: index * 0.05 }}
            viewport={{
              once: true, // Somente acontece uma vez
              amount: 0.6 // Respeita a regra de 60% do conteúdo na tela
            }}
            className="bg-white p-8 text-slate-500"
          >
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
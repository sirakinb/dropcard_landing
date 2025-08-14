"use client";
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ delay?: number; className?: string }>;

export default function StepItem({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



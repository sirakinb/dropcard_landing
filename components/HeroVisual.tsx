"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function HeroVisual({ src, alt, priority }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1040px] drop-shadow-2xl"
    >
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px] xl:h-[680px] rounded-2xl overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill
          sizes="(max-width: 1024px) 90vw, 760px"
          className="object-contain origin-center scale-[1.2] md:scale-[1.35] lg:scale-[1.45]"
        />
      </div>
    </motion.div>
  );
}



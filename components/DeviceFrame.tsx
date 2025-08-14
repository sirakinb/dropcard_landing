import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function DeviceFrame({ src, alt, priority, className }: Props) {
  return (
    <div className={clsx('relative mx-auto w-full max-w-sm aspect-[9/19.5] drop-shadow-xl', className)}>
      <div className="absolute inset-0 rounded-[2rem] bg-stone-100 border border-stone-300 shadow-inner-soft">
        <div className="absolute inset-[8px] rounded-[1.6rem] bg-black/90">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-black rounded-b-2xl" />
          <Image
            src={src}
            alt={alt}
            priority={priority}
            fill
            sizes="(max-width: 768px) 80vw, 360px"
            className="rounded-[1.4rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}



import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

export default function Section({ id, children, className, as = 'section' }: SectionProps) {
  const Comp: any = as as any;
  return (
    <Comp id={id} className={clsx('max-w-7xl mx-auto px-6 lg:px-8 py-16', className)}>
      {children}
    </Comp>
  );
}



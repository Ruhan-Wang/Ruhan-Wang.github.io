import Image from 'next/image';

interface FoxProps {
  className?: string;
}

export function FoxLike({ className = '' }: FoxProps) {
  return (
    <Image
      src="/fox-mascot.png"
      alt=""
      width={326}
      height={512}
      className={`fox-like object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

export function FooterFox({ className = '' }: FoxProps) {
  return (
    <Image
      src="/fox-mascot.png"
      alt=""
      width={326}
      height={512}
      className={`footer-fox object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

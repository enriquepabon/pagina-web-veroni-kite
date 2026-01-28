import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glassmorphism = false,
}: CardProps) {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';
  
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:-translate-y-1'
    : '';
  
  const backgroundStyles = glassmorphism
    ? 'bg-white/10 backdrop-blur-md border border-white/20'
    : 'bg-white shadow-lg';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${backgroundStyles} ${className}`}>
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

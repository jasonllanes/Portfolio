import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

const Card = ({ children, className = '', onClick, hoverable = false }: CardProps) => (
    <div
        className={cn(
            'bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300',
            hoverable &&
            'hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1',
            onClick && 'cursor-pointer',
            className
        )}
        onClick={onClick}
    >
        {children}
    </div>
);

export default Card;

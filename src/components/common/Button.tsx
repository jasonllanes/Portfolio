import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
    {
        variants: {
            variant: {
                primary:
                    'bg-[var(--accent-blue)] text-white border border-[var(--accent-blue)] hover:bg-transparent hover:text-[var(--accent-blue)] hover:shadow-[var(--shadow-glow)]',
                outline:
                    'bg-transparent text-[var(--accent-blue)] border border-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white hover:shadow-[var(--shadow-glow)]',
                ghost:
                    'bg-transparent text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]',
            },
            size: {
                sm: 'px-4 py-1.5 text-sm',
                md: 'px-5 py-2.5 text-sm',
                lg: 'px-7 py-3 text-base',
            },
            fullWidth: {
                true: 'w-full',
                false: '',
            },
        },
        defaultVariants: { variant: 'primary', size: 'md', fullWidth: false },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

const Button = ({ children, variant, size, fullWidth, className, ...rest }: ButtonProps) => (
    <button className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...rest}>
        {children}
    </button>
);

export { buttonVariants };
export default Button;

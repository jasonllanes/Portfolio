interface ParallaxSectionProps {
    quote?: string;
    author?: string;
}

const ParallaxSection = ({
    quote = '"The only way to do great work is to love what you do."',
    author = '— Steve Jobs',
}: ParallaxSectionProps) => (
    <div className="parallax-bg min-h-[320px] flex items-center justify-center text-center overflow-hidden relative">
        {/* Glow overlay */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                    'linear-gradient(135deg,rgba(79,142,247,0.1) 0%,rgba(34,211,238,0.05) 50%,rgba(129,140,248,0.1) 100%)',
            }}
        />
        <div className="relative z-10 max-w-[700px] px-6 py-12 flex flex-col items-center gap-4">
            <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-medium text-[var(--text-primary)] leading-relaxed italic">
                {quote}
            </p>
            <span className="text-sm text-[var(--accent-cyan)] font-semibold tracking-wide">
                {author}
            </span>
        </div>
    </div>
);

export default ParallaxSection;

const Meteors = ({ number }) => {
    // Create an array of meteor objects
    const meteors = Array.from({ length: number || 20 }, (_, index) => ({
        id: index,
        size: Math.floor(Math.random() * 40) + 30,
        left: Math.floor(Math.random() * 100),
        delay: Math.floor(Math.random() * 2000),
        duration: Math.floor(Math.random() * 1000) + 2000,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {meteors.map(meteor => (
                <span
                    key={meteor.id}
                    className="absolute top-1/4 animate-meteor"
                    style={{
                        left: `${meteor.left}%`,
                        width: `${meteor.size}px`,
                        transform: 'rotate(35deg)',
                        animationDelay: `${meteor.delay}ms`,
                        animationDuration: `${meteor.duration}ms`,
                    }}
                >
                    {/* Meteor head */}
                    <span className="absolute left-0 top-1/2 w-[15%] h-[3px] -translate-y-1/2 bg-white/40 rounded-full" />
                    
                    {/* Meteor trail */}
                    <span className="absolute left-[15%] top-1/2 w-[85%] h-px -translate-y-1/2 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
                </span>
            ))}
        </div>
    );
};

export default Meteors;
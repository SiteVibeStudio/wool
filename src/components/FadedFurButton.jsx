import React from 'react';

export default function FadedFurButton({ label, texture = 'pink', onClick = undefined }) {
  const bgImage =
    texture === 'pink'
      ? "url('/textures/pink-fur.png')"
      : "url('/textures/blue-fur.png')";

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center px-10 py-5 rounded-full overflow-visible transition-all duration-300 hover:scale-105 active:scale-95 min-w-[300px]"
      style={{ background: 'transparent' }}
    >
      {/* Fur Texture Layer with Soft-Edge Radial Mask */}
      <div
        className="absolute inset-0 w-full h-full rounded-full"
        style={{
          backgroundImage: bgImage,
          backgroundSize: '110%',
          backgroundPosition: 'center',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%)',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%)',
        }}
      />
      {/* White Inner Glow on Hover */}
      <div
        className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 28px rgba(255,255,255,0.45)' }}
      />
      {/* Label */}
      <span
        className="relative z-10 font-bold tracking-widest uppercase text-sm md:text-base"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#fff',
          textShadow: '0 2px 6px rgba(0,0,0,0.55)',
        }}
      >
        {label}
      </span>
    </button>
  );
}

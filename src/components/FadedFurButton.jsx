import React from 'react';

export default function FadedFurButton({ label, texture = 'pink', onClick = undefined }) {
  const bgImage =
    texture === 'pink'
      ? "url('/textures/pink-fur.png')"
      : texture === 'burgundy'
      ? "url('/textures/burgundy-wool.png')"
      : "url('/textures/blue-fur.png')";

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 active:translate-y-1 min-w-[300px] outline-none"
      style={{ background: 'transparent' }}
    >
      {/* Fabric Texture Layer with Soft-Edge Radial Mask */}
      <div
        className="absolute inset-0 w-full h-full rounded-full transition-all duration-300 group-active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage: bgImage,
          backgroundSize: '115%',
          backgroundPosition: 'center',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
        }}
      />
      
      {/* Wool "Press" Inner Glow on Click */}
      <div
        className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 pointer-events-none"
        style={{ 
          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      />

      {/* Label */}
      <span
        className="relative z-10 font-bold tracking-widest uppercase text-sm md:text-base transition-transform duration-300 group-active:scale-95"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: '#fff',
          textShadow: '0 2px 4px rgba(0,0,0,0.4)',
        }}
      >
        {label}
      </span>
    </button>
  );
}

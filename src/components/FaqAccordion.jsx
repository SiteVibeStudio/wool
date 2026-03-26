import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is the First Session like?',
    a: 'Your first session is a private, confidential conversation designed to understand your unique needs and aspirations. We begin gently, with no pressure and complete discretion.',
  },
  {
    q: 'Am I Mentally Forced?',
    a: 'Absolutely not. Every aspect of your journey is entirely voluntary and guided by your own pace and comfort. Our role is to support, never to coerce.',
  },
  {
    q: 'Am I Mentally Secure?',
    a: 'Our clinical standards are among the highest in London, ensuring your psychological safety at every step. You are in the hands of seasoned professionals.',
  },
  {
    q: 'Confidential by Protocol',
    a: 'All sessions and records are protected by strict clinical confidentiality protocols in line with GDPR and UK psychological practice standards.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      {faqs.map((item, i) => (
        <div 
          key={i} 
          className={`soft-cushion stitching transition-all duration-500 overflow-hidden ${open === i ? 'p-6' : 'p-4'}`}
          style={{ 
            borderColor: open === i ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.05)',
            borderStyle: 'dashed'
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center text-left text-sm text-gray-700 tracking-wide hover:text-gray-900 transition-colors"
          >
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{item.q}</span>
            <span
              className="text-gray-400 text-[10px] transition-transform duration-500 ml-4 flex-shrink-0"
              style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}
            >
              ▼
            </span>
          </button>
          
          <div 
            className={`grid transition-all duration-500 ease-in-out ${open === i ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p
                className="text-xs text-gray-500 leading-relaxed pr-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

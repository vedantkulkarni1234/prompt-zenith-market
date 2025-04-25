
import { ReactNode } from 'react';

interface ParadoxContainerProps {
  children: ReactNode;
}

export default function ParadoxContainer({ children }: ParadoxContainerProps) {
  return (
    <div className="relative">
      {/* Paradox effect background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zenith-500/10 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zenith-300/10 rounded-full blur-[100px] animate-pulse-soft" 
          style={{ animationDelay: '-2s' }}
        />
      </div>
      
      {/* Main content with glass effect */}
      <div className="relative z-0 card-glass backdrop-blur-2xl">
        {children}
      </div>
    </div>
  );
}

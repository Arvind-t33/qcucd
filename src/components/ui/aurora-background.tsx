"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {

  useEffect(() => {
    // Keep the height adjustment but make it more efficient
    const updateDocHeight = () => {
      document.documentElement.style.setProperty(
        '--doc-height', 
        `${Math.max(document.body.scrollHeight, window.innerHeight)}px`
      );
    };
    
    updateDocHeight();
    window.addEventListener('resize', updateDocHeight);
    
    // Use a throttled observer to reduce update frequency
    let timeout: NodeJS.Timeout;
    const observer = new MutationObserver(() => {
      if (!timeout) {
        timeout = setTimeout(() => {
          updateDocHeight();
          timeout = null;
        }, 100);
      }
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true 
    });
    
    return () => {
      window.removeEventListener('resize', updateDocHeight);
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "transition-bg relative min-h-screen w-full flex flex-col bg-zinc-900 text-slate-950",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          position: 'fixed',  // Keep background fixed during scroll
          width: '100%',
          height: '100%',
          zIndex: 0,
          
          // Preserve all the original CSS variables
          "--aurora": "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
          "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
          "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          "--blue-300": "#93c5fd",
          "--blue-400": "#60a5fa",
          "--blue-500": "#3b82f6",
          "--indigo-300": "#a5b4fc",
          "--violet-200": "#ddd6fe",
          "--black": "#000",
          "--white": "#fff",
          "--transparent": "transparent",
        } as React.CSSProperties}
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
          style={{
            transform: 'translateZ(0)',  // Force hardware acceleration
            backfaceVisibility: 'hidden', // Improve performance
            WebkitBackfaceVisibility: 'hidden',
            backgroundAttachment: 'fixed', // Keep background fixed during scroll
          }}
        ></div>
      </div>
      <div className="relative flex-grow" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};
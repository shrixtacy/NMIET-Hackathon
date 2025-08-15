'use client';

import FaultyTerminal from '@/components/FaultyTerminal';

export default function TestTerminal() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <h1 style={{ color: '#ffffff', fontFamily: 'monospace', zIndex: 10 }}>
        FaultyTerminal Test
      </h1>
      
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      
      <p style={{ color: '#ffffff', fontFamily: 'monospace' }}>
        Move your mouse over the terminal to see interactive effects
      </p>
    </div>
  );
}
import React, { Suspense, lazy } from "react";

const Antigravity = lazy(() => import("./Antigravity"));

type GlobalAntigravityBackgroundProps = {
  className?: string;
};

const GlobalAntigravityBackground = ({
  className,
}: GlobalAntigravityBackgroundProps) => {
  return (
    <div
      className={[
        "pointer-events-none fixed inset-0 z-0",
        "opacity-70",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Antigravity
          className="h-full w-full"
          count={520}
          magnetRadius={14}
          ringRadius={10}
          waveSpeed={1.2}
          waveAmplitude={1.25}
          particleSize={1.4}
          lerpSpeed={0.05}
          color="hsl(var(--primary))"
          autoAnimate
          particleVariance={1}
          particleShape="tetrahedron"
        />
      </Suspense>
    </div>
  );
};

export default GlobalAntigravityBackground;


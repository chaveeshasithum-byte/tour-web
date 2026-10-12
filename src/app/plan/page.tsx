'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PlanRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/plan-your-journey');
  }, [router]);

  return (
    <div className="py-32 text-center space-y-4">
      <h2 className="text-xl font-serif text-[#252720]">Loading Custom Tour Planner...</h2>
      <p className="text-xs text-[#77756D]">Redirecting to our comprehensive journey planner.</p>
    </div>
  );
}

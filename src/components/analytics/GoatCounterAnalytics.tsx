'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface GoatCounterAnalyticsProps {
  endpoint?: string;
}

export default function GoatCounterAnalytics({ endpoint }: GoatCounterAnalyticsProps) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!endpoint || !isReady || !window.goatcounter || lastTrackedPath.current === pathname) {
      return;
    }

    window.goatcounter.count({
      path: pathname,
      title: document.title,
    });
    lastTrackedPath.current = pathname;
  }, [endpoint, isReady, pathname]);

  if (!endpoint) {
    return null;
  }

  return (
    <Script
      id="goatcounter-analytics"
      src="https://gc.zgo.at/count.js"
      data-goatcounter={endpoint}
      data-goatcounter-settings='{"no_onload":true}'
      strategy="afterInteractive"
      onLoad={() => setIsReady(true)}
    />
  );
}

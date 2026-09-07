interface GoatCounterCountOptions {
  path?: string | (() => string);
  title?: string;
  referrer?: string;
  event?: boolean;
  no_session?: boolean;
}

declare global {
  interface Window {
    goatcounter?: {
      count: (options?: GoatCounterCountOptions) => void;
    };
  }
}

export function trackEvent(path: string, title: string) {
  if (typeof window === 'undefined' || !window.goatcounter) {
    return;
  }

  window.goatcounter.count({
    path,
    title,
    event: true,
  });
}

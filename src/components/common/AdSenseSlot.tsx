'use client';

import React from 'react';
import { ADS_ENABLED, ADSENSE_PUBLISHER_ID } from '@/lib/config';

export interface AdSenseSlotProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
}

/**
 * Reusable AdSense Component
 * Renders Google AdSense ads only if ADS_ENABLED is true
 * Placeholder for ads even when disabled for seamless transition to enabled state
 */
export const AdSenseSlot: React.FC<AdSenseSlotProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidth = true,
}) => {
  if (ADS_ENABLED) {
    // Render placeholder when ads disabled
    return (
      <div className="my-6 p-6 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center">
        <p className="text-sm text-gray-600">
          Advertisement space
        </p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
        }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth.toString()}
      />
    </div>
  );
};

export default AdSenseSlot;

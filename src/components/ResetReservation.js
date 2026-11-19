'use client';

import { useEffect } from 'react';
import { useReservation } from '@/components/ReservationContext';

export default function ResetReservation() {
  const { resetRange } = useReservation();

  useEffect(() => {
    resetRange();
  }, [resetRange]);

  return null;
}

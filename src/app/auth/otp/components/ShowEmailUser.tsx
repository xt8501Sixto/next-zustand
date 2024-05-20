'use client';

import { useAuthStore } from '@/app/stores';
import { useEffect, useState } from 'react';

export const ShowEmailUser = () => {
  const [showEmail, setShowEmail] = useState<string | undefined>();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setShowEmail(user?.username || '');
  }, [user]);

  return <div>{showEmail}</div>;
};
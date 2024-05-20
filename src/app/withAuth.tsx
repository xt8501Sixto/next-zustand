import { useEffect, useState } from 'react';
import { useAuthStore } from './stores';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthComponent = (props: React.PropsWithChildren<any>) => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
      const checkUser = () => {
        const storedState = localStorage.getItem('auth-storage');
        if (storedState) {
          const parsedState = JSON.parse(storedState);
          if (parsedState && parsedState.state && parsedState.state.user) {
            useAuthStore.setState({ user: parsedState.state.user });
          }
        }
        setIsHydrated(true);
      };

      if (!user) {
        checkUser();
      } else {
        setIsHydrated(true);
      }
    }, [user]);

    useEffect(() => {
      if (isHydrated && !user) {
        router.replace('/auth/login');
      }
    }, [isHydrated, user, router]);

    if (!isHydrated) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuthComponent;
};

const getDisplayName = (WrappedComponent: React.ComponentType<any>) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;
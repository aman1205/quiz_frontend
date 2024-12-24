import { useLayoutEffect } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  useLayoutEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      )}
    </>
  );
};

export default PageLoader;

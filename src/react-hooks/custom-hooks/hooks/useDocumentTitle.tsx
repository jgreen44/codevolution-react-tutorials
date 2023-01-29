import { useEffect } from 'react';

export const useDocumentTitle = (count: number) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};

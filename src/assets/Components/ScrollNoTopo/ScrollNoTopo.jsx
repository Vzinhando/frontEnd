import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollNoTopo() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollNoTopo;
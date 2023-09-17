const { useRef } = require('react');

function useRenderCounter() {
  const count = useRef(0);
  return ++count.current;
}

export default useRenderCounter;

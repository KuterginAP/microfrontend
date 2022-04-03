import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  const refContainer = useRef(null);

  useEffect(() => {
    mount(refContainer.current)
  }, []);

  return(
    <div ref={refContainer}></div>
  );
}
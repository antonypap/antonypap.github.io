import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const formatThousandsNoRounding = (num, decimalPlaces = 0) => {
  const str = String(num).split('.');
  const intPart = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decPart = (str[1] || '').padEnd(decimalPlaces, '0').slice(0, decimalPlaces);
  return decimalPlaces ? `${intPart},${decPart}` : intPart;
};

const PageNotFound = () => {
  const [hasRun, setHasRun] = useState(false);
  const countRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!hasRun && countRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const countTo = Number(countRef.current.getAttribute('data-count'));
            const duration = 3000;
            const startTime = performance.now();

            const animateCount = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              const currentCount = Math.min(
                countTo,
                Math.floor((countTo * elapsedTime) / duration),
              );
              countRef.current.textContent = formatThousandsNoRounding(currentCount);

              if (elapsedTime < duration) {
                requestAnimationFrame(animateCount);
              } else {
                countRef.current.textContent = formatThousandsNoRounding(countTo);
              }
            };

            requestAnimationFrame(animateCount);
            setHasRun(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(countRef.current);
      return () => observer.disconnect();
    }
  }, [hasRun]);

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta name="description" content="The content you are looking for cannot be found." />
        </Helmet>
        <h1 id="countUp" ref={countRef} data-count="404" className="number">0</h1>
        <p>
          This may not mean anything.<br />
          I&apos;m probably working on something that has blown up.
        </p>
        <p><Link to="/">Return to Earth</Link></p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;

import React, { useState, useEffect } from 'react';

import details from '../info';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    // TODO: Check this before 19 Jan 2038 :)
    const birthTime = new Date(870498000 * 1000);
    setAge(((Date.now() - birthTime) / divisor).toFixed(10));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

// TODO: add more integrations with APIs
const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: details.city,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 53,
  //   link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
];

export default data;

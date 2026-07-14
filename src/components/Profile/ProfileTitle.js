import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const titles = [
  'AI Engineer',
  'ML Enthusiast',
  'F1 Fanatic 🏎️',
  'Guitar Hero in Training 🎸',
  'Debugging Detective 🔍',
  'API Adventurer 🌐',
  'Weekend Chef 👨‍🍳',
  'Cloud Tamer ☁️',
  'Lifelong Student 📚',
  'Late Night Coder 🌙',
];

const PersonalTitle = () => {
  const titlesMap = titles.flatMap((title) => [
    title, // Type out the title
    2000, // Wait for 1 second after typing
    '', // Clear the title
    500, // Wait for 500ms before typing the next title
  ]);

  return (
    <h3>
      <TypeAnimation
        sequence={titlesMap}
        wrapper="span"
        cursor
        preRenderFirstString
        speed={10}
        repeat={Infinity} // This will make it loop infinitely
        style={{ display: 'inline-block' }}
      />
    </h3>
  );
};

export default PersonalTitle;

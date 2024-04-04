import React from 'react';

import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';
import t7 from './t7.jpg';
import t8 from './t8.jpg';
import t9 from './t9.jpg';

export const SportsPage = () => {
  const trophyImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

  return (
    <div className="sports-achievements" id='SportPage-block'>
      <h1 className="sports-achievements-heading">Sports</h1><br/><br/>

      <div className="sports-achievements-paragraph">
        <p className="text-center mb-4">
          Engaging in sports and achieving championships hold immense significance beyond mere victories. Sports instill invaluable life lessons, teaching individuals the essence of discipline, perseverance, and resilience. 
          Through rigorous training and participation in competitive events, athletes cultivate a strong work ethic and learn to overcome obstacles with determination. 
          Moreover, sports foster camaraderie and teamwork, emphasizing the importance of collaboration and mutual support in achieving common goals.
        </p>
      </div>

      <div className="sports-achievements-paragraph">
        <p className="text-center mb-4">
          Beyond physical prowess, participation in sports promotes holistic well-being, enhancing both mental and emotional health. 
          Championships symbolize the culmination of athletes' hard work and dedication, serving as a testament to their skills and capabilities. 
          These achievements inspire others, motivating individuals to set ambitious goals and strive for excellence in their respective endeavors. 
          Ultimately, sports and championships contribute to personal growth, character development, and the cultivation of a vibrant and resilient community.
        </p>
      </div>

      <div className="trophy-grid">
        {trophyImages.map((trophy, index) => (
          <div className="trophy-item" key={index}>
            <img src={trophy} alt={`Trophy ${index + 1}`} className="trophy-image" />
            <p>Champion {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;

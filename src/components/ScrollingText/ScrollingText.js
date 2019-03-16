import React from 'react';
import '../../main.scss';

const ScrollingText = ({episode, title, text}) => {
  return (
    <div className='ScrollingText'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode {episode}</p>
            <h1>{title}</h1>
          </div>    
          <p>{text}</p>
        </div>
      </section>
    </div>
  )
}

export default ScrollingText;

import React from 'react';

const About = () => {
    return (
      <div>
        {/* <h1>Seven / Jung Kook</h1>
        <h1>Butter / BTS</h1>
        <h1>Vitual Insanity / Jamirqui</h1>
        <hr />
        <h1>Pump it up / Elvis costello</h1>
        <h1>Paint The Town Red  / あああDoja cat これを作り中</h1>
        <h1>Moves like a jugar / Maroon 5</h1> */}
        <div>1つ前の歌詞</div>
        <div>Monday, Tuesday</div>
        <div>正解</div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button onClick={() => console.log('ボタンがクリックされました')}>回答する</button>
        </div>
      </div>
    );
  };
  
  export default About;
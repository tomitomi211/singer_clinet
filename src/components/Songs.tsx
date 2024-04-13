import React, { useEffect, useState } from 'react';

const CircularProgress: React.FC<{ percentage: number }> = ({ percentage }) => {
  const radius = 70; // 円の半径
  const strokeWidth = 20; // 円の線の幅
  const viewBoxSize = radius * 2; // viewBoxのサイズ

  // パーセンテージから円形グラフの長さを計算
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="gold"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
      />
    </svg>
  );
};

const Songs = () => {
  const [showLyrics, setShowLyrics] = useState<boolean>(false);

  useEffect(() => {
    const toggleButton = document.getElementById('toggleButton');
    const elementToToggle = document.getElementById('elementToToggle');

    if (toggleButton && elementToToggle) {
      toggleButton.addEventListener('click', function() {
        setShowLyrics(!showLyrics);
      });
    }

    const textElement = document.getElementById('text');
    const inputBox = document.getElementById('inputBox') as HTMLInputElement;
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    if (checkButton && textElement && result) {
      const text = textElement.textContent;

      checkButton.addEventListener('click', () => {
        const userInput = inputBox.value.trim();
        if (userInput === text) {
          result.textContent = 'Correct!';
          result.style.color = 'green';
        } else {
          result.textContent = 'Incorrect! Try again.';
          result.style.color = 'red';
        }
      });
    }

    // クリーンアップ
    return () => {
      if (toggleButton && elementToToggle) {
        toggleButton.removeEventListener('click', function() {
          setShowLyrics(!showLyrics);
        });
      }
    };
  }, [showLyrics]);

  return (
    <div>
      <div>Paint the town red</div>
      <div>
        {/* 円形のグラフ */}
        <CircularProgress percentage={50} />
      </div>
      <div id="text">Walk on by</div>
      <input id="inputBox" type="text" />
      <button id="checkButton">Check</button>
      <div id="result"></div>

      <button id="toggleButton">歌詞全文を見る</button>
      <div id="elementToToggle" style={{ display: showLyrics ? 'block' : 'none' }}>
        <div>By</div>
        <div>Walk on by</div>
        <div>Walk on by</div>
      </div>
    </div>
  );
};

export default Songs;

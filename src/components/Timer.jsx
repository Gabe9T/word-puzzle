// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import './App.css';

// function App() {
  
// });

// const savedTime = parseInt(localStorage.getItem("savedTime"), 10) || 0; 
// const [time, setTime] = useState(new Date(savedTime));
// const [running, setRunning] = useState(false);
// const [startTime, setStartTime] = useState(null);

// function startTimer() {
//     const savedTime = parseInt(localStorage.getItem("pausedTime"), 10);
  
//     if (savedTime) {
//       const newStartTime = new Date().getTime() - savedTime;
//       setStartTime(newStartTime);
//     } else {
//       const newStartTime = new Date();
//       setStartTime(newStartTime);
//       localStorage.setItem('startTime', newStartTime);
//     }
//     setRunning(true);
//   };

//   function pauseTimer() {
//     if (running) {
//       setRunning(false);
//       localStorage.setItem('pausedTime', time.getTime());
//     }
//   };

//   function resetTimer() {
//     setTime(new Date(0));
//     setRunning(false);
//     setStartTime(null);
//     localStorage.setItem("savedTime", 0);
//     localStorage.removeItem('startTime');
//     localStorage.removeItem('pausedTime');
//   };

//   function formattedTime() {
//     const minutes = format(time, 'mm');
//     const seconds = format(time, 'ss');
//     const milliseconds = format(time, 'SS');
//     return `${minutes}:${seconds}:${milliseconds}`;
//   };


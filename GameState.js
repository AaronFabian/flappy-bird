import { scoreUI, liveScoreUI } from './canvas';

export default class GameState {
   static startScreen() {
      scoreUI.innerText = 0;
      liveScoreUI.classList.remove('live-score');

      return `<h2>Flappy Bird</h2>
      <p>Press Enter to Start &#9654;</p>`;
   }

   static lostScreen(score) {
      liveScoreUI.classList.add('live-score');

      return `<h2>Oops! You Lost</h2>
      <p class="result-point">score : <span>${score}</span></p>
      <p>Press Enter to coninue playing &#9654;</p>`;
   }
}

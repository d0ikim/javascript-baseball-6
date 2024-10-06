import { MissionUtils } from '@woowacourse/mission-utils';

class Score {
  // 이 클래스가 하는 일: 점수와 관련된 정보를 저장하고, 수정 및 반환한다
  /*
  객체는 어떤 역할을 해야할까요? 
  어떤 메소드를 제공해할까요?
*/
  constructor() {
    this.ball = 0;
    this.strike = 0;
  }

  /* 컴퓨터는 입력한 숫자에 대한 결과(볼, 스트라이크 개수) 계산 */
  calculate_score() {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (computer[i] === input[j]) {
          if (i === j) {
            //console.log("스트라이크+1");
            score.strike++;
          } else {
            //console.log("볼+1");
            score.ball++;
          }
        }
      }
    }
    return score;
  }
}
export default Score;

import { MissionUtils } from '@woowacourse/mission-utils';

// 이 클래스가 하는 일: 입출력을 담당하고, 입력 시 입력된 요소를 잘 처리해서 게임에게 전달해준다.
class View {
  /* 게임 시작 문구 출력 */
  print_guide() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  /* 1-1. 숫자 답 뭔지 보기 (나중에 지우고 App.js에서도 없애) */
  print_number(generatedNumbers) {
    MissionUtils.Console.print(`정답 : ${generatedNumbers}`);
  }

  /* 슽, 볼 점수 매개변수로 score객체 전달받아 출력 */
  print_score(score) {
    if (score.strike && score.ball)
      // 슽 볼 둘다 0이 아닐때=둘다걸릴때
      MissionUtils.Console.print(`${score.strike}스트라이크 ${score.ball}볼`);
    else if (score.strike !== 0 && !score.ball)
      // 슽만 걸릴때
      MissionUtils.Console.print(`${score.strike}스트라이크`);
    else if (score.ball !== 0 && !score.strike)
      // 볼만 걸릴때
      MissionUtils.Console.print(`${score.ball}볼`);
    else MissionUtils.Console.print('낫싱'); //슽도 볼도 다 안걸릴때
  }

  /* 종료 문구 출력 */
  print_end() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

export default View;

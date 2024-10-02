import { MissionUtils } from '@woowacourse/mission-utils';

// 이 클래스가 하는 일: 입출력을 담당하고, 입력 시 입력된 요소를 잘 처리해서 게임에게 전달해준다.
class View {
  /* 게임 시작 문구 출력 */
  print_guide() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  /* 1-1. 숫자 답 뭔지 보기 */
  print_number(computer) {
    // comment: computer 대신 다른 변수명 사용해주세요. 어떤 변수명이 더 잘 읽히고 맥락상 맞을까요?
    MissionUtils.Console.print(`정답 : ${computer}`);
  }

  /* Game.get_score() 에서 반환한 값 출력 */
  print_score(game) {
    if (game.strike && game.ball)
      // 슽 볼 둘다 0이 아닐때=둘다걸릴때
      MissionUtils.Console.print(`${game.strike}스트라이크 ${game.ball}볼`);
    else if (game.strike !== 0 && !game.ball)
      // comment: strike, ball 멤버변수에 직접 접근하기보다는, 적절한 method를 호출해서 사용하는게 좋습니다.
      // 슽만 걸릴때
      MissionUtils.Console.print(`${game.strike}스트라이크`);
    else if (game.ball !== 0 && !game.strike)
      // 볼만 걸릴때
      MissionUtils.Console.print(`${game.ball}볼`);
    else MissionUtils.Console.print('낫싱'); //슽도 볼도 다 안걸릴때
  }
}

export default View;

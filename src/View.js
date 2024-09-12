import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';

// 이 클래스가 하는 일: 입출력을 담당하고, 입력 시 입력된 요소를 잘 처리해서 게임에게 전달해준다.
class View {
  constructor() {
    this.game = new Game();
  }

  /* 게임 시작 문구 출력 */
  print_guide() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  /* 1-1. 숫자 답 뭔지 보기 */
  print_number() {
    MissionUtils.Console.print(`정답 : ${this.game.computer}`);
  }

  /* Game.get_score() 에서 반환한 값 출력 */
  print_score() {}
}
export default View;

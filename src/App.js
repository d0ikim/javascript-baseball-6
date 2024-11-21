import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';
import View from './View.js';
import Score from './Score.js';

class App {
  constructor() {
    this.game = new Game();
    this.view = new View();
    this.score = new Score();
  }
  async play() {
    while (this.game.is_playing) {
      // comment1: 이 코드를 처음 보는 사람이, again === 1 이 부분을 봤을 때, 이해하기 힘들 수 있다.
      // (magic number) -> 1이 뭐지? 1이 뭐길래 1일때만 계속 play를 하는거지? 어떤 사람은 1을 on으로 쓰고, 어떤 사람을
      // magic number 사용을 지양해주세요. -> homework 매직넘버가 뭔지 한번 알아서 포스트 작성해주세요. 수정까지 부탁드립니다.
      // 내부 변수/내부 정보를 웬만해서는 밖에서 맘대로 꺼내쓰게 하면 안됩니다(정보은닉)

      this.game.generate_number(); // 정답생성
      this.view.print_number(this.game.generatedNumbers);

      let input_numbers; // 입력숫자 넣을 변수
      input_numbers = await this.game.get_user_numbers();
      let current_score = this.score.calculate_score(); // 슽, 볼 점수 계산해 변수 cur에 담기(?)
      this.view.print_score(current_score); // 점수 출력

      this.view.print_end(); // 종료문구 출력
      this.game.is_playing = Number(
        await MissionUtils.Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        )
      );
      // console.log(typeof this.again);
      // console.log(this.again);
      // comment3: 보통 console.log는 커밋 내용에 포함하지 않습니다. 실수에 가까운 커밋으로 보이는 경우가 대부분...
      // 디버깅용 로그들은 잠시 지우고 커밋하거나, 디버깅툴을 직접 사용하는 게 좋습니다.

      if (this.game.again == 2) return; //종료이건가?
      //else try catch? 오입력 예외처리?
    }
  }
}
const app = new App();
app.play();
export default App;

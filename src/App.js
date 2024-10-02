import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';
import View from './View.js';

class App {
  // comment: constructor로 처리되는 게 더 적절하지 않을까요? (아래 두 줄)
  constructor() {
    this.game = new Game();
    this.view = new View();
  }
  async play() {
    while (this.game.again === 1) {
      // comment: 이 코드를 처음 보는 사람이, again === 1 이 부분을 봤을 때, 이해하기 힘들 수 있다.
      // (magic number) -> 1이 뭐지? 1이 뭐길래 1일때만 계속 play를 하는거지? 어떤 사람은 1을 on으로 쓰고, 어떤 사람을
      // magic number 사용을 지양해주세요. -> homework 매직넘버가 뭔지 한번 알아서 포스트 작성해주세요. 수정까지 부탁드립니다.
      // 여기서 한 단계 더 나아가자면, 지금 플레이중인지 아닌지를 리턴하는 메소드를 구현해서 제공하는 게 가장 좋습니다.
      // 내부 변수/내부 정보를 웬만해서는 밖에서 맘대로 꺼내쓰게 하면 안됩니다.
      // while (this.game.is_playing()) 이라는 메소드로 수정해주세요.

      this.game.generate_number();
      this.view.print_number(this.game.generatedNumbers);

      await this.game.qna(); // comment: method 이름은 항상 동사로 시작해야합니다. 그리고 축약어 사용 X. 좋은 이름을 생각해보세요.
      this.game.get_score();
      /*
      
        comment: get_XX()라는 코드를 보면, 해당하는 XX가 리턴되는 걸 기대합니다. 지금은 아무것도 리턴되지 않네요.
        아래처럼 수정해볼까요?
        (내부 동작이 뭔가를 바로 가져온다(get)는 것보다는 계산을 수행해서 가져오는 동작이라 calculate 같은 네이밍이 더 좋아보여요)

        score = this.game.calculate_score();
        this.view.print_score(score);
      
      */
      this.view.print_score(this.game);

      // 종료 문구 출력
      // comment: 종료 문구 출력은 어디에 구현해야할까요?

      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.again = Number(
        await MissionUtils.Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        )
      );
      console.log(typeof this.again);
      console.log(this.again);
      // comment: 보통 console.log는 커밋 내용에 포함하지 않습니다. 실수에 가까운 커밋으로 보이는 경우가 대부분...
      // 디버깅용 로그들은 잠시 지우고 커밋하거나, 디버깅툴을 직접 사용하는 게 좋습니다.

      if (this.game.again == 2) return; //종료이건가?
      //else try catch? 오입력 예외처리?
    }
  }
}
const app = new App();
app.play();
export default App;

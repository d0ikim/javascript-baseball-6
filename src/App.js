import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './Game.js';
import View from './View.js';

/*
comment
  1. 지금은 파일 하나/클래스 하나에 모든 코드가 다 들어가 있는데, 쪼개는 걸 한번 해보겠습니다.
   기존에 구현된 코드를 Game.js, View.js 기반으로 돌아가도록 쪼개보세요.


  // 이 클래스가 하는 일: 게임과 관련된 정보를 저장하고, 규칙을 적용하여 게임을 진행시킨다.
  class Game {
      function get_score(???){
        for (let i = 0; i < input.length; i++) {
          for (let j = 0; j < input.length; j++) {
            if (computer[i] === input[j]) {
              if (i === j) {
                //console.log("스트라이크+1");
                strike++;
              } else {
                //console.log("볼+1");
                ball++;
              }
            }
          }
        }
      }
  }

  // 이 클래스가 하는 일: 입출력을 담당하고, 입력 시 입력된 요소를 잘 처리해서 게임에게 전달해준다.
  class View{}

  # 첫 번째 리팩토링 -> 아래처럼 클래스 기반으로 게임이 수행되도록 해주세요.#
  1. play() 함수 안에는 우리가 만든 클래스 (game, view) 함수 말고는 아무것도 실행되지 않아야함.
  2. 기본적으로 game, view 클래스 안에 함수를 정의하고, 필요하면 다른 클래스를 직접 생성해서 그 친구를 이용해도 됨.

  class App {
    play(){
      while ( game.is_not_finished() ) {
        game.start()
        view.print_guide()

        score = game.calculate_score(view.get_user_answer())
        view.print_score()

        ...
      }
    }
  }
*/

class App {
  async play() {
    while (Game.again === 1) {
      const game = new Game();
      const view = new View();

      game.start();
      game.generate_number();
      view.print_number();

      game.qna();

      game.get_score();
        // 결과 출력
        if (strike && ball)
          // 슽 볼 둘다 0이 아닐때=둘다걸릴때
          MissionUtils.Console.print(`${strike}스트라이크 ${ball}볼`);
        else if (strike !== 0 && !ball)
          // 슽만 걸릴때
          MissionUtils.Console.print(`${strike}스트라이크`);
        else if (ball !== 0 && !strike)
          // 볼만 걸릴때
          MissionUtils.Console.print(`${ball}볼`);
        else MissionUtils.Console.print('낫싱'); //슽도 볼도 다 안걸릴때
      }
      // 종료 문구 출력
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      again = Number(
        await MissionUtils.Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        )
      );
      console.log(typeof again);
      console.log(again);
    }
    if (again === 2) return; //종료이건가?
    //else try catch? 오입력 예외처리?
  }
}

const app = new App();
app.play();
export default App;

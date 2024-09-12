import { MissionUtils } from "@woowacourse/mission-utils";

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
      while game.is_not_finished(){
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
    let again = 1;

    while (again === 1) {
      console.log("숫자 야구 게임을 시작합니다.");

      // 1. 컴퓨터가 임의의 3자리 숫자(배열[2]) 설정 - Random.pickNumberInRange() // 123
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      // 1-1. 숫자 답 뭔지 보기
      MissionUtils.Console.print(`정답 : ${computer}`);

      // 4. 플레이어가 컴퓨터가선택한 3개의 숫자를 모두 맞힐 때 까지 2-3을 반복한다.
      let strike = 0;
      let ball = 0;
      while (strike !== 3) {
        // 볼, 스트라이크 카운트는 계속 초기화
        strike = ball = 0;
        // 2. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력 - Console.readLineAsync() 이용
        let input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        // 2-1. 사용자 입력숫자 확인용
        //MissionUtils.Console.print(`입력한 숫자 : ${input}`);

        // 2-2. 사용자 입력숫자 배열로 찢기
        let bac = Math.trunc(input / 100);
        let sip = Math.trunc((input - bac * 100) / 10);
        let il = input - Math.trunc(input / 100) * 100 - sip * 10;
        input = [bac, sip, il];
        //console.log(`배열로 찢은 입력값 : ${input}`);

        // 3. 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
        for (let i = 0; i < input.length; i++) {
          for (let j = 0; j < input.length; j++) {
            if (computer[i] === input[j]) {
              if (i === j) {
                //console.log("    스트라이크+1");
                strike++;
              } else {
                //console.log("    볼+1");
                ball++;
              }
            }
          }
        }
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
        else MissionUtils.Console.print("낫싱"); //슽도 볼도 다 안걸릴때
      }
      // 종료 문구 출력
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      again = Number(
        await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
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

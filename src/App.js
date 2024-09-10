import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
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
    console.log(`배열로 찢은 입력값 : ${input}`);

    // 3. 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (computer[i] === input[i]) {
          console.log("스트라이크+1");
          strike++;
        } else if (computer[i] === input[j + 1]) {
        }
      }
    }
  }
}

const app = new App();
app.play();
export default App;

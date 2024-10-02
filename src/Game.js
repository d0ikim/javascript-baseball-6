import { MissionUtils } from '@woowacourse/mission-utils';

// 이 클래스가 하는 일: 게임과 관련된 정보를 저장하고, 규칙을 적용하여 게임을 진행시킨다.

/*
 comment: Score class를 하나 만들어서 사용해주세요. (리팩토링 코멘트)
  Score -> strike ball
  객체는 어떤 역할을 해야할까요? 
  어떤 메소드를 제공해할까요?
  어떤 변수를 갖고 있어야할까요?
*/
class Game {
  constructor() {
    // 필요한 변수들을 생성자에서 미리 다 선언해야한대
    this.again = 1;
    this.generatedNumbers = [];
    /*
      1 = some_number
      [1,2] = some_numbers
    */
    this.strike = 0;
    this.ball = 0;
    this.hundred = 0; // comment: 영어로 수정해주세요.
    this.ten = 0;
    this.one = 0;
    this.input;
  }

  /* 1. 컴퓨터가 임의의 3자리 숫자(배열[2]) 설정 
  Random.pickNumberInRange()
  */
  generate_number() {
    while (this.generatedNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.generatedNumbers.includes(number)) {
        this.generatedNumbers.push(number);
      }
    }
  }

  /* 4. 플레이어가 컴퓨터가선택한 3개의 숫자를 모두 맞힐 때 까지 2-3을 반복 */

  async qna() {
    while (this.strike !== 3) {
      // 볼, 스트라이크 카운트는 계속 초기화
      this.strike = this.ball = 0;
      // 2. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력 - Console.readLineAsync() 이용
      this.input =
        await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      // 2-1. 사용자 입력숫자 확인용
      //MissionUtils.Console.print(`입력한 숫자 : ${input}`);

      // 2-2. 사용자 입력숫자 배열로 찢기
      this.hundred = Math.trunc(this.input / 100);
      this.ten = Math.trunc((this.input - this.hundred * 100) / 10);
      this.one =
        this.input - Math.trunc(this.input / 100) * 100 - this.ten * 10;
      this.input = [this.hundred, this.ten, this.one];
      //console.log(`배열로 찢은 입력값 : ${input}`);
    }
  }

  /* 3. 컴퓨터는 입력한 숫자에 대한 결과(볼, 스트라이크 개수) 계산 */
  get_score() {
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

  /* 재시작 여부(1) */
  is_not_finished() {
    again = 1;
    return again;
  }
}

export default Game;

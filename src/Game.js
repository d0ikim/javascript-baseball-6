import { MissionUtils } from '@woowacourse/mission-utils';

// 이 클래스가 하는 일: 게임과 관련된 정보를 저장하고, 규칙을 적용하여 게임을 진행시킨다.
class Game {
  constructor() {
    // 필요한 변수들을 생성자에서 미리 다 선언해야한대
    this.playing = 0; // 플레이중(1) 아님(0)
    this.generatedNumbers = [];
    /*
      1 = some_number
      [1,2] = some_numbers
    */
    this.hundred = 0;
    this.ten = 0;
    this.one = 0;
    this.input;
  }

  /* 1. 플레이중(1) -> 플레이중아님(0) 상태 on/off 토글 메소드
   */
  is_playing() {
    if (this.playing === 0) {
      // 플레이중이 아닌 상태일때 이 메소드 만나면
      this.playing = 1; // 플레이중으로 변환
    } else this.playing = 0; // 플레이중일 시 이 메소드 만나면, 플레이중아님으로 변환
    return this.playing;
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
    console.log(`배열이니? ${this.generatedNumbers}`); //배열로드갓는지 확인해보자
  }

  /* 4. 플레이어가 컴퓨터가선택한 3개의 숫자를 모두 맞힐 때 까지 2-3을 반복 */
  async get_user_numbers() {
    while (this.playing === 1) {
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
      console.log(`배열로 찢은 입력값 : ${input}`);
    }
    return this.input;
  }

  /* 재시작 여부(1) */
  is_not_finished() {
    again = 1;
    return again;
  }
}

export default Game;

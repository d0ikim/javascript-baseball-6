import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    // 숫자 랜덤 생성
    
    
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    console.log(`입력한 숫자: ${input}`)
    



  }
}

new App().play();
export default App;

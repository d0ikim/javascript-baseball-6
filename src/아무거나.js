function waitForInput() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let userInput = 123; // 여기서 숫자를 입력받았다고 가정
      resolve(userInput);
    }, 2000); // 2초 기다리기
  });
}

async function playGame() {
  console.log("숫자를 입력해주세요...");
  let input = await waitForInput();
  console.log(`입력한 숫자는 ${input}입니다.`);
}

playGame();

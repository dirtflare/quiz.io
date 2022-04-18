//クイズの問題 x (選択4・3問)
const quiz = [
  {
    question: 'ばい菌をやっつける「けん」ってどんな「けん」？',
    answers: [ 'ゆうしゃのけん', 'ふくおかけん', 'せっけん', '奈須 冬吾'],
    correct: 'せっけん'
  }, {  
    question: '焼いても、焼いても、食べられないパンは？',
    answers: [ 'フライパン', 'ゆうしゃのパン', '奈須 冬吾', '食パン'],
    correct: 'フライパン'
  }, {
    question: '陸上でリレー競技の最後の走者のことをなんと言う？',
    answers: [ 'ナス', 'リーダー', '大将', 'アンカー'],
    correct: 'アンカー'
  }, {
    question: '米女性ラッパーKELISの元旦那のレジェンドラッパーは？',
    answers: [ 'ZEEBRA', 'ENOKI', '奈須', 'NAS'],
    correct: 'NAS'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

//問題数がもうなければこれを実行
const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}





// const quiz = [
//   {
//     question = 'ばい菌をやっつける「けん」ってどんな「けん」？'
//     answers = [
//   'ゆうしゃのけん','ふくおかけん','せっけん','奈須 冬吾'
//     ];
//     correct = 'せっけん'
//   }, {
//     question: '焼いても、焼いても、食べられないパンは？',
//     answers: [ 'フライパン', 'ゆうしゃのパン', '奈須 冬吾', '食パン'],
//     correct: 'フライパン'
//   }, {
//     question: '陸上でリレー競技の最後の走者のことをなんと言う？',
//     answers: [ 'NAS', 'リーダー', '大将', 'アンカー'],
//     correct: 'アンカー'
//   }
// ];

// const quizLength = quiz.length;
// let quizIndex = 0;


// // const question = 'ばい菌をやっつける「けん」ってどんな「けん」？'
// // const answers = [
// //   'ゆうしゃのけん',
// //   'ふくおかけん',
// //   'せっけん',
// //   '奈須 冬吾'
// // ];
// // const correct = 'せっけん'



// //定数の文字列をHTMLに反映させる (constクイズの問題文、選択肢を定義)
// // const setuQuiz = () => {
// //   document.getElementById('js-question').textContent = question;
// //   let buttonIndex = 0;
// //   let buttonLength = $button.length;
// //   while (buttonIndex < buttonIndex){
// //   $button[buttonIndex].textContent = answers[buttonIndex];
// //   buttonIndex++;
// //   }
// // }

// document.getElementById('js-question').textContent = quiz[quizIndex].question;

// const $button = document.getElementsByTagName('button')

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while (buttonIndex < buttonIndex){
//   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
//   buttonIndex++;
// }
// setupQuiz();

// const clickHandler = (e) => {
//   if (quiz[quizIndex].correct === e.target.textContent) {
//     window.alert('正解!');
//   } else {
//     window.alert('不正解!');
//   }

//   quizIndex++;

//   if (quizIndex < quizlength) {
//     //問題がまだあるならこちら実行

//   } else{
//     //問題がもうないならこちら実行
//     window.alert('終了')
//   }
  

// };
// //ボタンをクリックしたら正誤判定
// let handleIndex = 0;
// const buttonLength = $button.length;
// while (handleIndex < buttonLength) {

//   handleIndex++;
// }

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
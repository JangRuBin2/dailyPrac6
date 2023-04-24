let baiscData = {
  header: {
    id : "header",
    type : "div",
    children : null
  },
  main: {
    id : "main",
    type : "div",
    children : null
    // children : 'null'
  },
  footer: {
    id : "footer",
    type : "div",
    children : null,
    // test: "되냐?"
  }
}
// 배열은 어디에 사용하나요?
let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array) {
// console.log(baiscData.footer.children)
const basicDataValues = Object.keys(baiscData)
// console.log(basicDataValues)
for(let i=0; i<basicDataValues.length; i++) {
  // null 찾기
//  console.log(baiscData[values[i]].children);
  if(baiscData[basicDataValues[i]].children === null) {
    console.log("children 속성은 null 입니다")
    // console.log(baiscData[basicDataValues[i]].id)
    const tagName = baiscData[basicDataValues[i]].id
    const element = document.createElement(tagName);
    document.body.appendChild(element)
    

  } else {
    console.log(basicDataValues[i]+"의 children 속성이 null이 아닙니다")
  }
 
}
  // basic 객체의 children 속성이 null 데이터 타입이 할당되있는지를 판별하고
  // null 데이터 타입이 할당 되있으면 매개변수를 각각 할당한다
  let value;
  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하세요
  return value;
}

console.log(exampleOne(baiscData, elementData));

// const whatObj = Object.keys(baiscData)
// // console.log(whatObj)
// const baiscDataChildren =Object.keys(whatObj[0])
// console.log(baiscDataChildren)
// if(test)
// console.log(baiscDataChildren[2])
// for(let i=0; i< whatObj.length; i++) {
//   const baiscDataChildren = Object.keys(baiscData[i]);
//   if(Object.keys(whatObj[i])) {
//     console.log(baiscDataChildren)
//   }
// }

// function test(tagName) {
//   const element = document.createElement(tagName);
  // 위 코드가 동작하려면 tagName에 대한 정의를 해줘야 함
// }
// ex1 -> 선언하면서 div을 만들거야
// test("div")
// ex2 -> 미리 있는 데이터를 사용할거야 
// tagName = "div";
// test(tagName)
// 이렇게 함수를 만든다고 가정했을 때
// tagName을 가져와서 함수를 실행하잖아요
// 근데 tagName이 문자열이든 뭐든 선언이나 호출을 해줘야하는데
// tagName에 대한내용이 해경씨 코드에서 안보이는 것 같아요

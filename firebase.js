const firebaseConfig = {
    apiKey: "AIzaSyCIriRjMvXsAIMC_VJlAawwMAYc9hsq-98",
    authDomain: "project-gh-d079d.firebaseapp.com",
    databaseURL: "https://project-gh-d079d-default-rtdb.firebaseio.com",
    projectId: "project-gh-d079d",
    storageBucket: "project-gh-d079d.appspot.com",
    messagingSenderId: "1069439050802",
    appId: "1:1069439050802:web:ecb0ad19a202800c68082b",
    measurementId: "G-WGS19CFMG3"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}

// 데이터 읽기 실습
function readUserData() {
    database.ref("users/").on("value", (snapshot) => {
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        // console.log(Object.keys(data));
        // console.log(data["gang2648"]);
        // console.log(data[keys[0]]);

        // 데이터베이스 웹 페이지 출력
        // <실습 1번 문제>
        const result = document.getElementById("result");

        // <실습 2번 문제>
        const findId = document.member.findId.value;

        for (let i = 0; i < Object.keys(data).length; i++) {
            // <실습 1번 문제> @
            result.innerHTML += `
                <table border="1">
                    <tr>
                       <td>이메일 </td>
                       <td>${data[keys[i]].email}</td>
                    </tr>
                    <tr>
                        <td>닉네임 </td>
                        <td>${data[keys[i]].nick}</td>
                    </tr>`;

            // <실습 2번 문제> @
            // if (findId === keys[i]) {
            //     result.innerHTML = `
            //     <table border="1">
            //         <tr>
            //             <td>이메일 </td>
            //             <td>${data[keys[i]].email}</td>
            //         </tr>
            //         <tr>
            //             <td>닉네임 </td>
            //             <td>${data[keys[i]].nick}</td>
            //         </tr>
            //     </table>`;
            // }
        }
        resultHTML += "</table>";
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// < 1 >
const btn = document.signUp.btn;
const readBtn = document.getElementById("readBtn");



readBtn.addEventListener("click", (event) => {
    event.preventDefault();
    readUserData();
});

btn.addEventListener("click", (event) => {
    event.preventDefault();

    const id = document.signUp.id.value;
    const email = document.signUp.email.value;
    const nick = document.signUp.nick.value;

    console.log(id);
    console.log(email);
    console.log(nick);

    writeUserData(id, email, nick);
});


// < 2 >
// let btn = document.querySelector("form")[3];
// console.log(btn);

// btn.addEventListener("click", (event) => {
//     event.preventDefault();

//     let id = document.querySelector("form")[0].value;
//     let email = document.querySelector("form")[1].value;
//     let nick = document.querySelector("form")[2].value;
//     console.log(id);
//     console.log(email);
//     console.log(nick);
// });


// < 3 >
// let signUp = document.signUp.elements;

// let btn = signUp[3];

// btn.addEventListener("click", (event) => {
//     event.preventDefault();

//     console.log(signUp[0].value);
//     console.log(signUp[1].value);
//     console.log(signUp[2].value);
// });
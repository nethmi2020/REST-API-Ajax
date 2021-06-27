// let textButton=document.querySelector("#text-btn");
// textButton.addEventListener('click',function(){
//     // ajax

//     // create an ajax request
//     let xhr=new XMLHttpRequest();
//     xhr.open('GET','./data/message.txt', true);
//     //send the request
//     xhr.send();

    
//     //process the request
//     xhr.onload = () =>{
//         if(xhr.status ===  200){

//             let data =xhr.responseText;
//             displayTextData(data);
//         }
//     };
// });

// //display textdata
// let displayTextData = (data) => {
//     let htmlTemplate  =`<h3>${data}</h3>`;
//     document.querySelector('#text-card').innerHTML = htmlTemplate;
// };

let jsonButton=document.querySelector("#json-btn");
jsonButton.addEventListener('click',function(){
    // ajax

    // create an ajax request
    let xhr=new XMLHttpRequest();
    xhr.open('GET','./data/mobiles.json', true);
    //send the request
    xhr.send();

    
    //process the request
    xhr.onload = () =>{
        if(xhr.status ===  200){

            let data =xhr.responseText;
            let mobile=JSON.parse(data);
            console.log(mobile);
            displayJsonData(mobile);
        }
    };
});

//display textdata
let displayJsonData = (mobile) => {
    let htmlTemplate  =`<ul>
                    <li>${mobile.id}</li>
                    <li>${mobile.brand}</li>
                    <li>${mobile.Color}</li>
                    <li>${mobile.Price}</li>
                    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};
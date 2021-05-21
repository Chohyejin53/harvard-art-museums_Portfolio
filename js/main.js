// //메인 로고 작품 이미지 (ajax 이용)

// var mainImgUrl = "https://api.harvardartmuseums.org/object";
// mainImgUrl += "?person=monet";
// mainImgUrl += "&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
// mainImgUrl += "&size=100";
// console.log("url: " + mainImgUrl);

// $.ajax({
//     type: "GET",
//     url: mainImgUrl,
//     dataType: "json",
//     async: false,
//     success: function (data) {
//         // console.log(data);
//         var records = data.records;
//         var mainLogoImg = [];
//         var tag = "";
//             for(var i = 0; i < records.length; i++) {

//                 // undefined값을 걸러주고 계속 실행시키기
//                 if (records[i].images == undefined) {
//                     // console.log("error");
//                     continue;
//                 }
//                 mainLogoImg[i] = records[i].images[0].baseimageurl;

//             }
//             console.log(mainLogoImg);    
//         // console.log(tag);

//         var randomNum = Math.round(Math.random()*mainLogoImg.length);
        
//         console.log(randomNum);

//         tag += '<div class="img_obj">'
//         tag += '<img src=' + mainLogoImg[randomNum] + '>'
//         tag += '</div>'
        

//         $(".main_img").append(tag);

//     },
//     error: function (request, status, error) {
//         console.log("code:" + request.status);
//         console.log("message:" + request.responseText);
//         console.log("error:" + error);
//     }
// });


//메인 로고 작품 이미지

var tag = "";
var mainLogoImg = [];
mainLogoImg[0] = "images/main_img/main_img1.jpg";
mainLogoImg[1] = "images/main_img/main_img2.jpg";
mainLogoImg[2] = "images/main_img/main_img3.jpg";
mainLogoImg[3] = "images/main_img/main_img4.jpg";
mainLogoImg[4] = "images/main_img/main_img5.jpg";
mainLogoImg[5] = "images/main_img/main_img6.jpg";
mainLogoImg[6] = "images/main_img/main_img7.jpg";
mainLogoImg[7] = "images/main_img/main_img8.jpg";
mainLogoImg[8] = "images/main_img/main_img9.jpg";
mainLogoImg[9] = "images/main_img/main_img10.jpg";

var randomNum = Math.round(Math.random()*mainLogoImg.length);

tag += '<div class="img_obj">'
tag += '<img src=' + mainLogoImg[randomNum] + '>'
tag += '</div>'

$(".main_img").append(tag);
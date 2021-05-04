// 오늘날짜 구하기 
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = new Date();
nowYear = today.getFullYear();
nowMonth = monthNames[today.getMonth()];
nowDate = today.getDate();

// console.log(nowYear);
// console.log(nowMonth);
// console.log(nowDate);

$(".current_year").append(nowYear);
$(".now_month").append(nowMonth);
$(".now_date").append(nowDate);


//오늘의 색
var spectrumUrl = "https://api.harvardartmuseums.org/spectrum";
var currentMonth = today.getMonth() + 1;
spectrumUrl += "?q=month:" + currentMonth;
spectrumUrl += "&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
spectrumUrl += "&size=50";
console.log("url: " + spectrumUrl);
    
    $.ajax({
        type: "GET",
        url: spectrumUrl,
        dataType: "json",
        async: false,
        success: function (data) {
            // console.log(data);
            var records = data.records;

            //sort해서 day기준 오름차순으로 정렬맞춰주기
            records.sort(function (a, b) { 
                return a.day < b.day ? -1 : a.day > b.day ? 1 : 0;  
            });
            // console.log(records);

            for(var i = 0; i < records.length; i++) {
                if(records[i].day == nowDate) {
                    var todayColor = records[i].color;
                    }
                }

                $(".current_year, .now_month, .now_date").css({"color" : todayColor});
                $(".color_bar").css({"background" : todayColor});
            

        },
        error: function (request, status, error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

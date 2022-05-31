const th_num = '๐๑๒๓๔๕๖๗๘๙'
const roman_num = '0123456789'
function arnonNum(roNum) {
    str_roNum = roNum.toString()
    // .split("").reverse().join("")
    // reverse string

    console.log(str_roNum)
    // console.log(str_roNum,typeof(str_roNum))
    var th = ''
    for (var i = 0; i<str_roNum.length;i++) {
        // console.log(str_roNum[i])
        if (str_roNum[i] === '-') {
            th += '-'
        }
        else {
            th += th_num[roman_num.indexOf(str_roNum[i])]
        }
    }
    return th.replace(undefined,".")
}

function roNum(str_thNum) {
    var ro = ''
    for (var i = 0; i<str_thNum.length;i++) {
        // console.log(th_num.indexOf(str_thNum[i]))
        ro += th_num.indexOf(str_thNum[i])
    }
    console.log(parseFloat(ro))
    return parseFloat(ro)
}
fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
.then(res => res.json())
.then(data => showData(data))
.catch((e) => {
    console.log("Error",e);
})
function showData(data) {
    const query = data[0]
    const today = query['txn_date'].split("-");
    const th_month = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
    document.getElementById("year").innerHTML = arnonNum(parseInt(today[0]) + 543);
    // document.getElementById("month").innerHTML = parseInt(today[1]);
    document.getElementById("month").innerHTML = th_month[parseInt(today[1])-1];
    document.getElementById("date").innerHTML = arnonNum(parseInt(today[2]));
    document.getElementById("new_case").innerHTML = `${arnonNum(query['new_case'] - Math.round(Math.sqrt(query['new_case'])*1.96))} - ${arnonNum(query['new_case'] + Math.round(Math.sqrt(query['new_case'])*1.96))}`;
    document.getElementById("total_case").innerHTML = arnonNum(query['total_case']);
    document.getElementById("new_death").innerHTML = arnonNum(query['new_death']);
    document.getElementById("total_death").innerHTML = arnonNum(query['total_death']);
    document.getElementById("new_recovered").innerHTML = arnonNum(query['new_recovered']);
    document.getElementById("total_recovered").innerHTML = arnonNum(query['total_recovered']);
}
const element_unit = document.querySelectorAll('span.unit');
element_unit.forEach(function(userItem) {
    userItem.innerHTML = "ราย";
});
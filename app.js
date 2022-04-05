
fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
.then(res => {
    console.log("Resolve",res);
    return res.json();
})
.then((data) => {
    console.log(data[0]);
    const query = data[0]
    // document.getElementById("today").innerHTML = query['txn_date'];
    const today = query['txn_date'].split("-");
    const th_month = ['มกราคม','กุมภาพันธ์','มีนายกโง่','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
    document.getElementById("year").innerHTML = parseInt(today[0]) + 543;
    // document.getElementById("month").innerHTML = parseInt(today[1]);
    document.getElementById("month").innerHTML = th_month[parseInt(today[1])-1];
    document.getElementById("date").innerHTML = parseInt(today[2]);
    document.getElementById("new_case").innerHTML = query['new_case'];
    document.getElementById("total_case").innerHTML = query['total_case'];
    document.getElementById("new_death").innerHTML = query['new_death'];
    document.getElementById("total_death").innerHTML = query['total_death'];
    document.getElementById("new_recovered").innerHTML = query['new_recovered'];
    document.getElementById("total_recovered").innerHTML = query['total_recovered'];
})
.catch((e) => {
    // alert("Error",e);
})
const element_unit = document.querySelectorAll('span.unit');
element_unit.forEach(function(userItem) {
    userItem.innerHTML = "ราย";
});
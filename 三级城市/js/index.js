var oProvince = document.getElementById('province');
var oCity = document.getElementById('city');
var oDistrict = document.getElementById('district');
var oPlen = provinceList.length;
var cityAry;
function init() {
    for (var i = 0; i < oPlen; i++){
        oProvince.options.add(new Option(provinceList[i].name, provinceList[i].name))
    }
    changeProvince();
    oProvince.onchange = changeProvince;
    oCity.onchange = changeCity;
}
init();
function changeProvince() {
    oCity.options.length = 0;
    var index = oProvince.selectedIndex;
    cityAry = provinceList[index].cityList;
    var oClen = cityAry.length;
    for(var i = 0; i < oClen; i++){
        oCity.options.add(new Option(cityAry[i].name, cityAry[i].name));
    }
    changeCity();
}
function changeCity() {
    oDistrict.options.length = 0;
    var index = oCity.selectedIndex;
    var districtAry = cityAry[index].districtList; 
    var oDlen = districtAry.length;
    for(var i = 0; i < oDlen; i++){
        oDistrict.options.add(new Option(districtAry[i], districtAry[i]));
    }
}
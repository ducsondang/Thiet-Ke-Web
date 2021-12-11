//
//1 2 3
//1 2 3 4
// js index.html
function setHeigthDanhGia(nameClass) {
    // var test = document.querySelector('#setHeight').getAttribute('class')
    // console.log(test);
    if (!document.querySelector('#setHeight').getAttribute('class').includes(nameClass)) {
        document.querySelector('#setHeight').classList.add(nameClass)
        document.querySelector('#clickft').innerHTML = 'Thu Gọn'
    } else {
        document.querySelector('#setHeight').classList.remove(nameClass)
        document.querySelector('#clickft').innerHTML = 'Xem Thêm'
    }
        
}


function callHoverEvent(Id, nameClass) {
    if (document.querySelector(`#${Id}`).getAttribute('class').includes(nameClass) == false){
        document.querySelector(`#${Id}`).classList.add(nameClass)
    } else {
        document.querySelector(`#${Id}`).classList.remove(nameClass)
    }
}




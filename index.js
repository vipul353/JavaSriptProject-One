setInterval(() => {
    var date = new Date();
    document.getElementById('hour').textContent = `${date.getHours()%12}`;
    document.getElementById('minute').textContent = date.getMinutes();
    document.getElementById('second').textContent = date.getSeconds();
    document.getElementById('tr').innerText = `${date.getHours()%12}`;
    document.getElementById('mr').innerText = date.getMinutes();
    document.getElementById('sr').innerText = date.getSeconds();
  //   let image = document.getElementById("imgs");
  //  console.log(    image.style.backgroundImage = "url('./images/night.png')")
    currentTimeHeadingUpadte();
  }, 1000);


  var time = (new Date().getHours());
if(time > 11) {
  var pm = document.getElementById('am-pm').textContent = 'PM';
  var pm = document.getElementById('amr').textContent = 'PM';
}

else if(time <= 11 && time >= 0) {
  var am = document.getElementById('am-pm').textContent = 'AM';
  var am = document.getElementById('amr').textContent = 'AM';
}

let wakeupTime = document.getElementsByClassName("wakeupTime");
let wakeUpValues = document.getElementById("wakeUpValues");
let forwakeUpValue = document.getElementsByClassName("forwakeUpValue");

let lunchTime = document.getElementsByClassName("lunchTime");
let lunchValues = document.getElementById("lunchValues");
let forlunchValue = document.getElementsByClassName("forlunchValue");

let napTime = document.getElementsByClassName("napTime");
let napTimeValues = document.getElementById("napTimeValues");
let napTimeValue = document.getElementsByClassName("napTimeValue");

let nightTime = document.getElementsByClassName("nightTime");
let nightTimeValues = document.getElementById("nightTimeValues");
let nightTimeValue = document.getElementsByClassName("nightTimeValue");

function cardUpdate() {
  if (wakeUpValues.value == 24) {
    wakeupTime[0].innerHTML = `${forwakeUpValue[0].innerHTML}`;
  } else {
    wakeupTime[0].innerHTML = `${forwakeUpValue[wakeUpValues.value].innerHTML}`;
  }
  if (lunchValues.value == 24) {
    lunchTime[0].innerHTML = `${forlunchValue[0].innerHTML}`;
  } else {
    lunchTime[0].innerHTML = `${forlunchValue[lunchValues.value].innerHTML}`;
  }
  if (napTimeValues.value == 24) {
    napTime[0].innerHTML = `${napTimeValue[0].innerHTML}`;
  } else {
    napTime[0].innerHTML = `${napTimeValue[napTimeValues.value].innerHTML}`;
  }
  if (nightTimeValues.value == 24) {
    nightTime[0].innerHTML = `${nightTimeValue[0].innerHTML}`;
  } else {
    nightTime[0].innerHTML = `${
      nightTimeValue[nightTimeValues.value].innerHTML
    }`;
  }
}

var msg = document.getElementById("msg")
var msgr = document.getElementById("msgr") 

function currentTimeHeadingUpadte() {
  let time = new Date();
  let hrs = time.getHours();
  if (hrs > 0 && hrs <= 10) {
    msg.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    msgr.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hrs > 10 && hrs <= 14) {
    msg.innerHTML = " LET'S HAVE SOME LUNCH !!";
    msgr.innerHTML = " LET'S HAVE SOME LUNCH !!";
  } else if (hrs > 14 && hrs <= 20) {
    msg.innerHTML =
      " STOP YAWNING , GET SOME TEA..   ITS JUST EVENING!";
      msgr.innerHTML =
      " STOP YAWNING , GET SOME TEA..   ITS JUST EVENING!";
  } else {
    msg.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
    msgr.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
  }
}

function updateImage(){
     let image = document.getElementById("imgs");
     let imgr = document.getElementById("imgr");
     let txtMsg = document.getElementById("txtMsg");
     let  time = new Date();
     let hour = time.getHours();
     if (hour == wakeUpValues.value) {
      image.style.backgroundImage = "url('./images/Component.svg')"
      imgr.style.backgroundImage = "url('./images/Component.svg')"
      txtMsg.innerText = "GOOD MORNING!! WAKE UP !!"
     } else if (hour == lunchValues.value){
      image.style.backgroundImage = "url('./images/lunch.png')"
      imgr.style.backgroundImage = "url('./images/lunch.png')"
      txtMsg.innerText = "LET'S HAVE SOME LUNCH !!"
     }else if (hour == napTimeValues.value){
      image.style.backgroundImage = "url('./images/tea.png')"
      imgr.style.backgroundImage = "url('./images/tea.png')"
      txtMsg.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
     }else if (hour == nightTimeValues.value){
      image.style.backgroundImage = "url('./images/night.png')"
      imgr.style.backgroundImage = "url('./images/night.png')"
      txtMsg.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
     }
}


function setAlarm() {
  cardUpdate();
  updateImage();

}
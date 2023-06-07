setInterval(() => {
    var date = new Date();
    document.getElementById('hour').textContent = `${date.getHours()%12}`;
    document.getElementById('minute').textContent = date.getMinutes();
    document.getElementById('second').textContent = date.getSeconds();

  }, 1000);


  var time = (new Date().getHours());
if(time > 11) {
  var pm = document.getElementById('am-pm').textContent = 'PM';
}

else if(time <= 11 && time >= 0) {
  var am = document.getElementById('am-pm').textContent = 'AM';
}
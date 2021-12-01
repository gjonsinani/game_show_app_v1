$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=Viti&units=metric&APPID=65adee7506f2c94d5bf64c9532477ce8",
  function (data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
    console.log(icon);

  }
);

var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;

var cloudsButton= document.createElement('button');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = cloudImage;
document.body.appendChild(cloudsButton);

var dayButton = document.createElement('button');
dayButton.textContent = "Day"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

var halfNightButton = document.createElement('button');
halfNightButton.textContent = "Night1"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

var moreNightButton= document.createElement('button');
moreNightButton.textContent = "Night2"
moreNightButton.onclick = moreNight;
document.body.appendChild(moreNightButton);

var fullNightButton = document.createElement('button');
fullNightButton.textContent = "Night3"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);

var noneButton= document.createElement('button');
noneButton.textContent = "None"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);


var rainButton= document.createElement('button');
rainButton.textContent = "Rain Test"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

var smokeButton= document.createElement('button');
smokeButton.textContent = "New Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);
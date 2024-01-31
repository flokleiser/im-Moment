var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

var isSmoking= false;
var smokeInterval;
var smokeInterval2;

var party = SmokeMachine(ctxDetail, [50,50,50])

// toggleSmoking();

function toggleSmoking() {
    isSmoking = !isSmoking;
    if (isSmoking) {
        console.log('smoke')

        // canvasDetail.width = 1000;
        // canvasDetail.height = 1000;
        
        canvasDetail.width = 1500;
        canvasDetail.height = 1500;

        party.start()
        smokeInterval = setInterval(function() {
            // party.addSmoke(580, 500, 0.5); 
            party.addSmoke(980, 1000, 0.5); 
            
        }, 80); 
        smokeInterval2 = setInterval(function() {
            party.addSmoke(650, 1150, 0.3); 
            party.addSmoke(150, 1200, 0.6); 
            
        }, 120); 
    }
    else {
        party.stop() 
        console.log('no smoke')
        clearInterval(smokeInterval); 
        clearInterval(smokeInterval2);

        // ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
    }
}
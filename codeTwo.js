function playCraps(){
    console.log("playCraps() function Started");

    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    var sum = die1+die2
    console.log(sum)
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumsRes").innerHTML = "Sum = " + sum;
    if (sum == 7 || sum == 11) {
        loss = loss +1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "Craps - you loose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLE - you win";
    }
    else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML = 
            "Draw - You neither won nor lost. Please try again.";
    }
    
}

function blastoff(){
    var currTime = 20;
        document.getElementById("countDownTimer").innerHTML = currTime;
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 2000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 4000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 6000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 8000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 10000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 12000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 14000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 16000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 18000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = "Blastoff";
        }, 20000);
}

function btrBlastoff(){
    console.log("btrBlastoff() started");
    var currTime = 50;
    for(var i = 0; i < 11; i = i++){
        setTimeout(function(){
            if(currTime >= 25){
                //if conditons are true
                document.getElementById("countDownTimer").innerHTML = currTime; 
            } else if (currTime == 0){
                //if else if conditons are true
                document.getElementById("countDownTimer").innerHTML = "blastoff";
            }else {
                //if conditons are false
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than 1/2 way to lunch, time left = " + currTime;
            }
            currTime = currTime - 2;
        },i * 5000);
    }
}


function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData; 
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() started");
    mysound = new sound("us-lab-background.mp3")
    mysound.play();
}
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile
    this.sound.setAttribute("preload", "audio")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound)
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData {
constructor(
    time_seconds,
    longitude,
    latitude,
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure,
    bmpsensor_temp,
    digSensor_temp,
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC,
    UV,
    accelX,
    accelY,
    accelZ,
    magneticY,
    magneticX,
    magneticZ,
    gyroX,
    gyroY,
    gyroZ,
){
    this.time_seconds = time_seconds;
    this.longitude = longitude;
    this.latitude = latitude;
    this.gps_altitude = gps_altitude;
    this.bmpSensor_altitude = bmpSensor_altitude;
    this.bmpSensor_pressure = bmpSensor_pressure;
    this.bmpsensor_temp = bmpsensor_temp;
    this.digSensor_temp = digSensor_temp;
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2;
    this.cssSensor_TVOC = cssSensor_TVOC;
    this.UV = UV;
    this.accelX = accelX;
    this.accelY = accelY;
    this.accelZ = accelZ;
    this.magneticY = magneticY
    this.magneticX = magneticX
    this.magneticZ = magneticZ
    this.gyroX = gyroX;
    this.gyroY = gyroY;
    this.gyroZ = gyroZ;


}
}
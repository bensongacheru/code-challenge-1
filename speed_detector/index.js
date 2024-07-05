function speedDetector(speed) {
    if (speed<=70) {
        return 'Ok'
    }
    else if (speed > 70 && speed<=75) {
        return 'Points:1'
    }
    else if (speed>75 &&speed<=80) {
        return 'Points:2'
    }
    else if (speed >80 &&speed<=85) {
        return 'Points:3'
    }
    else if (speed>85 &&speed<=90) {
        return 'Points:4'
    }
    else if (speed>90 &&speed<=95) {
        return 'Points:5'
    }
    else if (speed>95 &&speed<=100) {
        return 'Points:6'
    }
    else if (speed>100 &&speed<=105) {
        return 'Points:7'
    }
    else if (speed>105 &&speed<=110) {
        return 'Points:8'
    }
    else if (speed>110 &&speed<=115) {
        return 'Points:9'
    }
    else if (speed>115 && speed<=120) {
        return 'Points:10'
    }
    else if (speed >120 && speed<=125) {
        return 'Points:11'
    }
    else if (speed > 125 && speed<=130) {
        return 'Points:12'
    }
    else if (speed>130 && speed >=135) {
        return 'licence suspended'
    }

    }
console.log(speedDetector(136));
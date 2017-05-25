"use strict";

(function(){
  
    //make sure the page is loaded
    window.onload = function(){

        let reset = document.querySelector("#reset");
        let resetCnt = document.querySelector("#num-resets");
        let teamOneShoot = document.querySelector("#teamone-shoot");
        let teamOneShots = document.querySelector("#teamone-numshots");
        let teamOneHits = document.querySelector("#teamone-numhits");
        let teamTwoShoot = document.querySelector("#teamtwo-shoot");
        let teamTwoShots = document.querySelector("#teamtwo-numshots");
        let teamTwoHits = document.querySelector("#teamtwo-numhits");
        let fanFare = new Audio("assets/audio/fanfare_x.wav");
        let missed = new Audio("assets/audio/boing_x.wav");
        let resetSnd = new Audio("assets/audio/cash_register_x.wav")
        
        reset.addEventListener("click", function(){
            teamOneShots.innerHTML = 0;
            teamTwoShots.innerHTML = 0;
            teamOneHits.innerHTML = 0;
            teamTwoHits.innerHTML = 0;
            resetCnt.innerHTML = parseInt(resetCnt.innerHTML) + 1;
            resetSnd.play();
        });
        
        teamOneShoot.addEventListener("click", function(){ 
            checkShot(teamOneShots, teamOneHits);
//            
        });
        
        teamTwoShoot.addEventListener("click", function(){
            checkShot(teamTwoShots, teamTwoHits);
        });
        
        function checkShot(shots, hits){
            shots.innerHTML = parseInt(shots.innerHTML) +1;
            if ((Math.floor((Math.random() * 1000) + 1) % 2) == 0) {
                hits.innerHTML = parseInt(hits.innerHTML) + 1;
                fanFare.play();
            } else {
                missed.play();
            }
        }
    }
    
})();
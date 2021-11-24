class batuGuntingKertas{
    #arr = []
    #running;
    constructor(){
        this.#arr = ['batu', 'kertas', 'gunting']
        this.#running = true
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    restart(){
        this.#running = true
        this.img = document.querySelectorAll(".img")
        for(this.i=0 ; this.i<this.img.length ; this.i++){
            this.img[this.i].style.backgroundColor = "transparent"
        }
        document.getElementById('hasil').innerHTML = ""
        document.querySelector(".content h1").style.display= "block";
    }

    play(str){
        if(this.#running == false){return true}
        this.player1 = str
        this.hasil = document.getElementById('hasil')
        this.com = this.#arr[this.getRndInteger(0,3)]
    
        document.querySelector(".player1 ."+this.player1).style.backgroundColor="rgb(255,255,255, 0.6)"
        document.querySelector(".com .img."+this.com).style.backgroundColor = "rgb(255,255,255, 0.6)"
    
        document.querySelector(".content h1").style.display= "none";
        if(this.player1 === 'batu'){
            if(this.com === 'batu'){ this.hasil.innerHTML = "<p>DRAW</p>"}
            else if(this.com === 'kertas'){this.hasil.innerHTML = "COM <p>WIN</>"}
            else{this.hasil.innerHTML = "PLAYER 1 <p>WIN</p>"}
        }
        else if(this.player1 === 'kertas'){
            if(this.com === 'batu'){ this.hasil.innerHTML = "PLAYER 1 <p>WIN</p>"}
            else if(this.com === 'kertas'){this.hasil.innerHTML =  "<p>DRAW</p>"}
            else{this.hasil.innerHTML = "COM <p>WIN</p>"}
        }
        else{
            if(this.com === 'batu'){ this.hasil.innerHTML =  "COM <p>WIN</p>" }
            else if(this.com === 'kertas'){this.hasil.innerHTML =  "PLAYER 1 <p>WIN</p>"}
            else{this.hasil.innerHTML = "<p>DRAW</p>"}
        }
    
        this.#running=false
    }
}

let game = new batuGuntingKertas()
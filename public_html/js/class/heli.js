/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const vy_lim = 20;
const height_lim = 600;

class helicop extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
    }

    draw() {
        super.draw(this._name);
    }
    
    move() {
        super.move();
        /*check velocity limits*/
        if(this.vy > vy_lim) this.vy = vy_lim;
	if(this.vy < -vy_lim) this.vy = -vy_lim;
	
	/*check height limits*/
	if(this.y > height_lim) {
            this.y = height_lim;
            this.vy = 0;
	}
	if(this.y < 0) {
            this.y = 0;
            this.vy = 0;
	}
        
        //the next if is to stop the red helicopters from going too far out of the screen
        if(this.x<-100) {
            this.x = -100;
            this.vx = 0;
	}
    }
    
    setCara(cara) {
        document.getElementById("cara").innerHTML = cara;
    }
    
    setCaraEnemic(cara) {
        document.getElementById("cara2").innerHTML = cara;
    }
}
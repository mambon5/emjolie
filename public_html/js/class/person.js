/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class person extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
    }

    draw() {
        super.draw(this._name);
    }
    
    move() {
        //super.move();
    }
    
    setCara(cara) {
        document.getElementById("cara_huma").innerHTML = cara;
    }
}
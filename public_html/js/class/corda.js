/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class rope extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
        this._angle = 0;
    }

    //draw() {
        //super.draw(this._name);
    //}
    
    move() {
        //super.move();
        this._angle += Math.random()*4 - 2;
        if(this._angle < 0) this._angle = 0.01; 
        if(this._angle > 45) this._angle = 45;
        document.getElementById(this._name).style.transform = "rotate(" + this._angle + "deg)";
    }
    
    get angle() {
        return this._angle;
    }
    
    set angle(ep) {
        this._angle = ep;
    }
}
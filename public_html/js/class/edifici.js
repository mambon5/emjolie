/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class edifici extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
    }

    draw() {
        super.draw(this._name);
    }
    
    move() {
        //super.move();
    }
    
    setColour(colour) {
        document.getElementById(this._name).style.backgroundColor = colour;
    }
    
    createWindows() {
        var id = this._name;
        var colors = ["LightCyan", "#bf7873", "#e9b088", "greenyellow"];
        var fileshor = 4;
        var filesver = 13;
        var height = this._height;
        var width = this._width;
        var border = 3;
        
        randquadrats(id,colors,fileshor,filesver,height,width,border);
    }
}
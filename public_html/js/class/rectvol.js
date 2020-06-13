class rectvol extends rect {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height);
        this._vx = vx; //comm t'agrada canviar els .noms a les this variables! ;p
        this._vy = vy;
        this._ax = ax;
        this._ay = ay;
        this._name = name;
    }
    get vx() {
        return this._vx;
    }
    get vy() {
        return this._vy;
    }
    get ax() {
        return this._ax;
    }
    get ay() {
        return this._ay;
    }
    get name() {//no fiquem set (es fa al contructor i no es pot canviar després)
        return this._name;
    }
    set vx(ep) {
        this._vx = ep;
    }
    set vy(ep) {
        this._vy = ep;
    }
    set ax(ep) {
        this._ax = ep;
    }
    set ay(ep) {
        this._ay = ep;
    }
    
    draw() {
        document.getElementById(this._name).style.top = this.y + "px";
        document.getElementById(this._name).style.left = this.x + "px";
        document.getElementById(this._name).style.width = this.width + "px";
        document.getElementById(this._name).style.height = this.height + "px";
    }
    
    move() {
        this.vy = this.vy + this.ay;
	this.y = this.y + this.vy;
        this.x = this.x + this.vx;
    }
}
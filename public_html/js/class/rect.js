class rect {
  constructor(left,top,width,height) {
    this._x = left;
    this._y = top;
    this._width = width;
    this._height = height;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  
  set x(ep) {
    this._x = ep;
  }
  set y(ep) {
    this._y = ep;
  }
  set width(ep) {
    this._width = ep;
  }
  set height(ep) {
    this._height = ep;
  }
}
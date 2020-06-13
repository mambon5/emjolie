/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function checkxoc(rect1, rect2) {
   if(rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y) 
   {
       return true;
   }
   return false;
}



function paboveline(p1,p2, p3, ab=true) { //point 3 above line formed by p1,p2.
    var pts = [p1, p2];
    pts.sort(sortfunction1);
    p1 = pts[0]; p2 = pts[1];
    var m = (p2[1]-p1[1])/(p2[0]-p1[0]);
    var n = p2[1]- m*p2[0];
    if(ab) return ( p3[1] >= m*p3[0] + n ) ;
    return (p3[1] <= m*p3[0] + n);
}

function xocrotatedrect(p1,p2,p3,p4, rect2) {
    //p11, p22, p33, p44 are the four points forming the rotated rectangle, rect2 is NOT rotated
    var pts = [p1, p2, p3, p4];
    pts.sort(sortfunction1);//sorts points from smallest to biggest x, and smallest to biggest y
    var pt24 = [pts[1],pts[2]];
    pt24.sort(sortfunctiony);
    //these two sorts have sorted the points of the rotated rectangle in counter-clockwise order startnig at left-uppermost corner of
    //rotated rectangle:
    var p = [pts[0], pt24[0], pts[3], pt24[1]];
    
    var q1 = [rect2.x, rect2.y];
    var q2 = [rect2.x+rect2.width, rect2.y];
    var q3 = [rect2.x, rect2.y + rect2.height];
    var q4 = [rect2.x+rect2.width, rect2.y+ rect2.height];
    
    var q = [q1, q2, q3, q4];
    
    q.sort(sortfunction1);
    
    return( paboveline(p[1],p[2], q[1]) && paboveline(p[0], p[3], q[2], ab=false) &&
            paboveline(p[2], p[3], q[0], ab=false) && paboveline(p[0], p[1], q[3])  ); 
    
    
    /*q2 > p2, p3
    q3 < p1, p4
    q1 < p3, p4
    q4 > p1 p2
    */
}

function sortfunctiony(a,b) { //sorts points from smallest to biggest y
    return a[1] - b[1];
}

function sortfunction1(a,b) { //sorts points from smallest to biggest x, and smallest to biggest y
    if(a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
}

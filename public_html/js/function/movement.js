/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function caratrista() {
    document.getElementById("cara").innerHTML=":(";
}

function moveheli(rectvol){
	//rectvol.vy=rectvol.vy+=rectvol.ay;
	//rectvol.y = rectvol.y+rectvol.vy;
        //rectvol.x = rectvol.x+rectvol.vx;
        rectvol.move();
        
        /*check speed limits*/
	if(rectvol.vy>20) rectvol.vy=20;
	if(rectvol.vy<-20) rectvol.vy= -20;
	
	/*check height limits*/
	if(rectvol.y>600) { 
		rectvol.y=600;
		rectvol.vy = 0;
	}
	if(rectvol.y<0) {
		rectvol.y=0;
		rectvol.vy = 0;
	}
        //the next if is to stop the red helicopters from going too far out of the screen
        if(rectvol.x<-100) {
		rectvol.x=-100;
		rectvol.vx = 0;
	}
}

function movebloc(rect, i){
	if(i===0) { 
            i = bloc.length-1;
	} else {
            i=i-1;
        }
        
	rect.x = rect.x + rect.vx;
	if(rect.x < -rect.width) {
		rect.x = 1100 ;
		rect.y = bloc[i].y +  Math.floor(Math.random() * (150)-75 );
		if(rect.y<200) rect.y=200;
		if(rect.y>450) rect.y=450;
                if(i===5 && rescatat) {
                    rescatat=false;
                    document.getElementById("human1").style.visibility="visible";
                }
	}
}
function movehuman() {
    human.x = bc6.x+10; human.y = bc6.y-90;
}
function volare(id) {
        if(mou) { 
	 heli.vy = heli.vy - 6;
	 heli.y += heli.vy;	 
     }
}
#creant joc, Chicago, Romà JOrdi, Maig 2020



randquadrats = function(id='alo',colors=c('blue'),fileshor=2,filesver=7,height=500,width=250,border=5) {
  
  splith = c(border);
  amplada = width/fileshor-2*border;

  for(i in 2:fileshor)  {
    ampli = splith[i-1] + amplada
    splith = c(splith, ampli)
  }
  
  splitv = c(border);
  alcada = height/filesver-2*border;

  for(i in 2:filesver)
  {
    ampli = splitv[i-1] + alcada;
    splitv = c(splitv, ampli)
    
  }
  
  
  parraf = '';
  for(i in 1:(fileshor) ) {
    for(j in 1:(filesver) ) {
      color = sample(colors,1);
      linia = paste0("<div class='finestra' style='top:",splitv[j],"px;left:",splith[i],
        "px;background-color:",color,";width:",(amplada-border/2),"px;height:",(alcada-border/2),"px'>  </div>");
      parraf=paste0(parraf,linia);
    }
    parraf = paste0(parraf,"\n")
  }
  
  return(parraf)
}

sink("mapa.txt",split=TRUE)
cat(randquadrats(filesver = 3))
sink()
splitv = c()

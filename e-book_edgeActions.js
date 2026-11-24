/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-atras}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("inicio");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-siguiente}", "click", function(sym, e) {
         sym.play("intro");
         
         sym.$("Intro")[0].currentTime = 0;
         if (sym.$("Intro")[0].paused) {
         	sym.$("Intro")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-iniciar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("tabla");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("tabla");
         
         // Pausar una pista de audio 
         sym.$("Intro")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag3");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Video-Intro-final_Subtitulos")[0].currentTime = 0;
         if (sym.$("Video-Intro-final_Subtitulos")[0].paused) {
         	sym.$("Video-Intro-final_Subtitulos")[0].play();
         }
         
         sym.$("Intro")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("intro");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("Intro")[0].currentTime = 0;
         if (sym.$("Intro")[0].paused) {
         	sym.$("Intro")[0].play();
         }
         
         
         // Pausar una pista de vídeo 
         sym.$("Video-Intro-final_Subtitulos")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag4");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("ATP")[0].currentTime = 0;
         if (sym.$("ATP")[0].paused) {
         	sym.$("ATP")[0].play();
         }
         
         // Pausar una pista de vídeo 
         sym.$("Video-Intro-final_Subtitulos")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag3");
         
         // Pausar una pista de vídeo 
         sym.$("ATP")[0].pause();
         
         
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Video-Intro-final_Subtitulos")[0].currentTime = 0;
         if (sym.$("Video-Intro-final_Subtitulos")[0].paused) {
         	sym.$("Video-Intro-final_Subtitulos")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag5");
         
         
         // Pausar una pista de vídeo 
         sym.$("ATP")[0].pause();
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Hidro")[0].currentTime = 0;
         if (sym.$("Hidro")[0].paused) {
         	sym.$("Hidro")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag4");
         
         // Pausar una pista de vídeo 
         sym.$("Hidro")[0].pause();
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("ATP")[0].currentTime = 0;
         if (sym.$("ATP")[0].paused) {
         	sym.$("ATP")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag6");
         
         // Pausar una pista de vídeo 
         sym.$("Hidro")[0].pause();
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Video-dialogos2")[0].currentTime = 0;
         if (sym.$("Video-dialogos2")[0].paused) {
         	sym.$("Video-dialogos2")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag5");
         
         // Pausar una pista de vídeo 
         sym.$("Video-dialogos2")[0].pause();
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Hidro")[0].currentTime = 0;
         if (sym.$("Hidro")[0].paused) {
         	sym.$("Hidro")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag6}", "click", function(sym, e) {
         sym.play("pag7");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p7")[0].currentTime = 0;
         if (sym.$("au-p7")[0].paused) {
         	sym.$("au-p7")[0].play();
         }
         
         // Pausar una pista de vídeo 
         sym.$("Video-dialogos2")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-p7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag6");
         
         // Pausar una pista de audio 
         sym.$("au-p7")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag8");
         
         // Pausar una pista de audio 
         sym.$("au-p7")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p8")[0].currentTime = 0;
         if (sym.$("au-p8")[0].paused) {
         	sym.$("au-p8")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag8}", "click", function(sym, e) {
         sym.play("pag7");
         
         
         // Pausar una pista de audio 
         sym.$("au-p8")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p7")[0].currentTime = 0;
         if (sym.$("au-p7")[0].paused) {
         	sym.$("au-p7")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag8}", "click", function(sym, e) {
         sym.play("pag9");
         
         // Pausar una pista de audio 
         sym.$("au-p8")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p9")[0].currentTime = 0;
         if (sym.$("au-p9")[0].paused) {
         	sym.$("au-p9")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag9}", "click", function(sym, e) {
         
         sym.play("pag8");
         sym.$("au-p9")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p8")[0].currentTime = 0;
         if (sym.$("au-p8")[0].paused) {
         	sym.$("au-p8")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag9}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag10");
         
         // Pausar una pista de audio 
         sym.$("au-p9")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p10")[0].currentTime = 0;
         if (sym.$("au-p10")[0].paused) {
         	sym.$("au-p10")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag11");
         
         // Pausar una pista de audio 
         sym.$("au-p10")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag9");
         
         // Pausar una pista de audio 
         sym.$("au-p10")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p9")[0].currentTime = 0;
         if (sym.$("au-p9")[0].paused) {
         	sym.$("au-p9")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag11}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag10");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p10")[0].currentTime = 0;
         if (sym.$("au-p10")[0].paused) {
         	sym.$("au-p10")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag11}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag12");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("vid-fosfagenica")[0].currentTime = 0;
         if (sym.$("vid-fosfagenica")[0].paused) {
         	sym.$("vid-fosfagenica")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag12}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag11");
         
         // Pausar una pista de vídeo 
         sym.$("vid-fosfagenica")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag12}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag13");
         
         // Pausar una pista de vídeo 
         sym.$("vid-fosfagenica")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-pa13")[0].currentTime = 0;
         if (sym.$("au-pa13")[0].paused) {
         	sym.$("au-pa13")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag13}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag12");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("vid-fosfagenica")[0].currentTime = 0;
         if (sym.$("vid-fosfagenica")[0].paused) {
         	sym.$("vid-fosfagenica")[0].play();
         }
         
         // Pausar una pista de audio 
         sym.$("au-pa13")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag13}", "click", function(sym, e) {
         sym.play("pag14");
         
         // Pausar una pista de audio 
         sym.$("au-pa13")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p14")[0].currentTime = 0;
         if (sym.$("au-p14")[0].paused) {
         	sym.$("au-p14")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18750, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag14}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag13");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-pa13")[0].currentTime = 0;
         if (sym.$("au-pa13")[0].paused) {
         	sym.$("au-pa13")[0].play();
         }
         
         // Pausar una pista de audio 
         sym.$("au-p14")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag14}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag15");
         
         // Pausar una pista de audio 
         sym.$("au-p14")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p15")[0].currentTime = 0;
         if (sym.$("au-p15")[0].paused) {
         	sym.$("au-p15")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag14");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p14")[0].currentTime = 0;
         if (sym.$("au-p14")[0].paused) {
         	sym.$("au-p14")[0].play();
         }
         
         // Pausar una pista de audio 
         sym.$("au-p15")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag16");
         
         // Pausar una pista de audio 
         sym.$("au-p15")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag16}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag15");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p15")[0].currentTime = 0;
         if (sym.$("au-p15")[0].paused) {
         	sym.$("au-p15")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag16}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag17");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p17")[0].currentTime = 0;
         if (sym.$("au-p17")[0].paused) {
         	sym.$("au-p17")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-ima-p16}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("ima2-p16").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-ima-p16}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("ima2-p16").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag16");
         
         // Pausar una pista de audio 
         sym.$("au-p17")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag18");
         
         // Pausar una pista de audio 
         sym.$("au-p17")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag17");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p17")[0].currentTime = 0;
         if (sym.$("au-p17")[0].paused) {
         	sym.$("au-p17")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag19");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${datocurioso-pag18}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("datocurioso").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${datocurioso-pag18}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("datocurioso").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag19}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag18");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag19}", "click", function(sym, e) {
         sym.play("pag20");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag20}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag19");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag20}", "click", function(sym, e) {
         sym.play("pag21");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag21}", "click", function(sym, e) {
         
         sym.play("pag20");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag21}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag22");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p22")[0].currentTime = 0;
         if (sym.$("au-p22")[0].paused) {
         	sym.$("au-p22")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag22}", "click", function(sym, e) {
         
         sym.play("pag21");
         
         // Pausar una pista de audio 
         sym.$("au-p22")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag22}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag23");
         
         // Pausar una pista de audio 
         sym.$("au-p22")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag23}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag22");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p22")[0].currentTime = 0;
         if (sym.$("au-p22")[0].paused) {
         	sym.$("au-p22")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag23}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag24");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag24}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag23");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag24}", "click", function(sym, e) {
         sym.play("pag25");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p25")[0].currentTime = 0;
         if (sym.$("au-p25")[0].paused) {
         	sym.$("au-p25")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag25}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("pag24");
         
         // Pausar una pista de audio 
         sym.$("au-p25")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag25}", "click", function(sym, e) {
         sym.play("pag26");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p25")[0].currentTime = 0;
         if (sym.$("au-p25")[0].paused) {
         	sym.$("au-p25")[0].play();
         }
         sym.$("au-p25")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${proceso-pag22}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("proceo-pag22").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${proceso-pag22}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("proceo-pag22").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag26}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag25");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag26}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag27");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p27")[0].currentTime = 0;
         if (sym.$("au-p27")[0].paused) {
         	sym.$("au-p27")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag28}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag27");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag28}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag29");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag29}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag28");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag29}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag30");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ver-imapag28}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("ima-pag28").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ver-imapag28}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("ima-pag28").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dato-importante}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("ima-pag29").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dato-importante}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("ima-pag29").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag30}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag29");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag30}", "click", function(sym, e) {
         sym.play("pag31");
         
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p31")[0].currentTime = 0;
         if (sym.$("au-p31")[0].paused) {
         	sym.$("au-p31")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag27}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag26");
         
         // Pausar una pista de audio 
         sym.$("au-p27")[0].pause();
         
         
         // Pausar una pista de vídeo 
         sym.$("Video2")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag27}", "click", function(sym, e) {
         sym.play("pag28");
         sym.$("au-p27")[0].pause();
         sym.$("Video2")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag31}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag30");
         
         // Pausar una pista de audio 
         sym.$("au-p31")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag31}", "click", function(sym, e) {
         sym.play("pag32");
         
         
         // Pausar una pista de audio 
         sym.$("au-p31")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p32")[0].currentTime = 0;
         if (sym.$("au-p32")[0].paused) {
         	sym.$("au-p32")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag32}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("pag31");
         sym.$("au-p32")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p31")[0].currentTime = 0;
         if (sym.$("au-p31")[0].paused) {
         	sym.$("au-p31")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag32}", "click", function(sym, e) {
         sym.play("pag33");
         
         
         // Pausar una pista de audio 
         sym.$("au-p32")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag33}", "click", function(sym, e) {
         sym.play("pag32");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag33}", "click", function(sym, e) {
         sym.play("pag34");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p34")[0].currentTime = 0;
         if (sym.$("au-p34")[0].paused) {
         	sym.$("au-p34")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag34}", "click", function(sym, e) {
         sym.play("pag33");
         
         // Pausar una pista de audio 
         sym.$("au-p34")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag34}", "click", function(sym, e) {
         sym.play("pag35");
         
         // Pausar una pista de audio 
         sym.$("au-p34")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag35}", "click", function(sym, e) {
         sym.play("pag34");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag35}", "click", function(sym, e) {
         sym.play("pag36");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag36}", "click", function(sym, e) {
         sym.play("pag35");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag36}", "click", function(sym, e) {
         sym.play("pag37");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p37")[0].currentTime = 0;
         if (sym.$("au-p37")[0].paused) {
         	sym.$("au-p37")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag37}", "click", function(sym, e) {
         sym.play("pag36");
         
         // Pausar una pista de audio 
         sym.$("au-p37")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag37}", "click", function(sym, e) {
         sym.play("pag38");
         
         // Pausar una pista de audio 
         sym.$("au-p37")[0].pause();
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p38")[0].currentTime = 0;
         if (sym.$("au-p38")[0].paused) {
         	sym.$("au-p38")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag38}", "click", function(sym, e) {
         sym.play("pag37");
         
         // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
         sym.$("au-p37")[0].currentTime = 0;
         if (sym.$("au-p37")[0].paused) {
         	sym.$("au-p37")[0].play();
         }
         
         
         // Pausar una pista de audio 
         sym.$("au-p38")[0].pause();
         
         
         // Pausar una pista de audio 
         sym.$("au-p38")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag38}", "click", function(sym, e) {
         sym.play("pag39");
         
         // Pausar una pista de audio 
         sym.$("au-p38")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag39}", "click", function(sym, e) {
         sym.play("pag38");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag39}", "click", function(sym, e) {
         sym.play("pag40");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag40}", "click", function(sym, e) {
         sym.play("pag39");
         
         // Pausar una pista de vídeo 
         sym.$("Anim-R6-viaGlucolitica-bp")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag40}", "click", function(sym, e) {
         sym.play("pag41");
         
         // Pausar una pista de vídeo 
         sym.$("Anim-R6-viaGlucolitica-bp")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag41}", "click", function(sym, e) {
         
         sym.play("pag40");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag41}", "click", function(sym, e) {
         sym.play("pag42");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atr-pag42}", "click", function(sym, e) {
         sym.play("pag41");
         sym.$("Lactato-glucolitica-bp")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sig-pag42}", "click", function(sym, e) {
         sym.play("pag43");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("VideoFinal-Despedida-smaller")[0].currentTime = 0;
         if (sym.$("VideoFinal-Despedida-smaller")[0].paused) {
         	sym.$("VideoFinal-Despedida-smaller")[0].play();
         }
         
         // Pausar una pista de vídeo 
         sym.$("Lactato-glucolitica-bp")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-proceso}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("proceso");
         
         // Reproducir una pista de vídeo desde el principio, independientemente del estado de reproducción actual 
         sym.$("Lactato-glucolitica-bp")[0].currentTime = 0;
         if (sym.$("Lactato-glucolitica-bp")[0].paused) {
         	sym.$("Lactato-glucolitica-bp")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cerrar-proceso}", "click", function(sym, e) {
         
         sym.play("pag42");
         
         // Pausar una pista de vídeo 
         sym.$("Lactato-glucolitica-bp")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-reiniciar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("inicio");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-act}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("act/act-ebook.html", "_blank");
         

      });
      //Edge binding end

      // Función auxiliar para reactivar el audio al cambiar de página
      function reactivarAudioPagina() {
         sym.setVariable("audioSilenciado", false);
         $("audio").prop("muted", false);
         sym.$("act-sound").hide().css("opacity", 0);
         sym.$("off-sound").show().css("opacity", 0);
      }

      // Al avanzar o retroceder a cualquier otra página, reactiva el audio automáticamente
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         reactivarAudioPagina();
      });
      //Edge binding end

      // Botón off-sound: alterna entre silenciar y reactivar el audio de la página actual
      Symbol.bindElementAction(compId, symbolName, "${off-sound}", "click", function(sym, e) {
         var silenciado = !sym.getVariable("audioSilenciado");
         sym.setVariable("audioSilenciado", silenciado);

         $("audio").prop("muted", silenciado);
         sym.$("off-sound").css("opacity", 0);

         if (sym.$("act-sound").length > 0 && silenciado) {
            sym.$("off-sound").hide();
            sym.$("act-sound").show().css("opacity", 0);
         }
      });
      //Edge binding end

      // Botón act-sound: reactiva el audio si usas botones separados
      Symbol.bindElementAction(compId, symbolName, "${act-sound}", "click", function(sym, e) {
         sym.setVariable("audioSilenciado", false);
         $("audio").prop("muted", false);
         sym.$("act-sound").hide().css("opacity", 0);
         sym.$("off-sound").show().css("opacity", 0);
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-264244432");
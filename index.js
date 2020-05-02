import "./style.css";
var i = 0;
var k =0;


function move() {
var viagem = 0;
var contato1=0;
var contato2=0;

var radios1 = document.getElementsByName('optradio1');
var radios2 = document.getElementsByName('optradio2');
var radios3 = document.getElementsByName('optradio3');
var sintomas = document.getElementsByName('sintomas');
var tosse;
var cans;
var febre;
var difResp;


tosse= sintomas[0].checked;
febre= sintomas[1].checked;
cans = sintomas[2].checked;
difResp = sintomas[3].checked; 
console.log(difResp);    




for (var i = 0, length = radios1.length; i < length; i++) {
  if (radios1[i].checked) {
    // do whatever you want with the checked radio
    viagem = radios1[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
for (var i = 0, length = radios2.length; i < length; i++) {
  if (radios2[i].checked) {
    // do whatever you want with the checked radio
    contato1 = radios2[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
for (var i = 0, length = radios3.length; i < length; i++) {
  if (radios3[i].checked) {
    // do whatever you want with the checked radio
    contato2 = radios3[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
}

  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        if (width==100) {

          if(tosse||cans||tosse&&cans){
            if(febre&&difResp)
              $("#showD").show();
            else if(febre)              
                $("#showW").show();           
            else
              $("#showI").show(); }
          else if(viagem==1||contato1==1)
            $("#showI").show();
          else
            $("#showP").show();


        }


		    } }
    }
  }
  window.move=move;
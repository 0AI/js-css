function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function test(){
    if ($('#tab2').hasClass('active') === true) {
        $("#ow-depart").val($("#rw-depart").val())
        $("#ow-return").val($("#rw-return").val())
    }  
    else if ($('#tab3').hasClass('active') === true) {
        $("#rw-depart").val($("#ow-depart").val())
        $("#rw-return").val($("#ow-return").val())
    }
    else {sleep(100)}
}

setInterval(test,200);

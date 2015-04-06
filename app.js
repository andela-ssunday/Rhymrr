    //A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats
    //https://wordsapiv1.p.mashape.com/words/example?mashape-key=A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats

    var rhymrr = {

      url : "https://wordsapiv1.p.mashape.com/words/car/rhymes?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s",
      param : {
        q : "",
        key : "FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s",
      },

      init : function(){
          $("#submit").click(function(){

            rhymrr.validate($("#word").val());
          });
      },

      validate : function(w){
        if(w!==" "){
          //alert("hello");
          this.q = w;
          //console.log(this.q );
          $.getJSON(rhymrr.url,rhymrr.param,function(data){
              rhymrr.loadrr(data);
          });
        }
      },

      loadrr : function(data){  
        var displayData = "";
        $.each(data.rhymes, function(index,value){
            for(i in value){
              displayData += "<div class='col s12'>"+value[i]+"</div>";
              //console.log(JSON.stringify(value[i]));
            }
        });
        
        $(".rhymes .row").append(displayData);
      }
    }
    $(document).ready(rhymrr.init);
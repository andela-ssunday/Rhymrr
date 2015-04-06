    //A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats
    //https://wordsapiv1.p.mashape.com/words/example?mashape-key=A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats

    var rhymrr = {
      //q : " ",
      /*param : {
        key : "FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s"
      },
      */
      //urls : "https://wordsapiv1.p.mashape.com/words/"+(this.q)+"/rhymes?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s",
      init : function(){
          $("#submit").click(function(){
            //$("#progress").show();
            $(".rhymes .row").empty();
            rhymrr.validate($("#word").val());
          });
      },

      validate : function(w){
       // if(w !=== " "){
          //this.q = w;
          var url = "https://wordsapiv1.p.mashape.com/words/"+w+"/rhymes?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s";
          var url2 = "https://wordsapiv1.p.mashape.com/words/"+w+"/?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s";
          
          $.getJSON(url,function(data1){
            $.getJSON(url2,function(data2){
                rhymrr.loadrr(data1,data2);
            });             
            //rhymrr.loadrr(data);
          });


          
       // }
      },

      loadrr : function(data1,data2){  
        var displayData = "";
          displayData +="<div class='col s12'>Pronunciation: /"+data1.pronunciation.all+"/</div>";
          displayData += "<div class='section'></div>";     
          displayData +="<div class='col s12'> "+data1.word+"("+data2.results[0].partOfSpeech+"): "+data2.results[0].definition+"</div>";
          displayData += "<div class='section'>";
          displayData += "<h5>Rhymes</h5>";
          displayData += "<div class='divider'></div>";
          displayData += "<div class='section'>";
          displayData += "<div class='col s12'>";
        $.each(data1.rhymes, function(index,value){
            for(i in value){
              displayData+=value[i]+"  ,    ";
            }
        });
        displayData +="</div></div>";
        if(data2){

            displayData2 = "<div class='section'>";
            displayData2 += "<h5>synonyms</h5>";
            displayData2 += "<div class='divider'></div>";
            displayData2 += "<div class='section'>";
            for(i in data2.results[0].synonyms){
              displayData2 += "<div class='col s1'><a href='#'>"+data2.results[0].synonyms[i]+"</a></div>";
            }
            displayData2 +="</div>";
        }
        $(".rhymes .r").append(displayData);
        $(".rhymes .s").append(displayData2);
      }
    }
    $(document).ready(
     // function(){
        //$("#progress").hide();
        rhymrr.init
      //}
      
      );

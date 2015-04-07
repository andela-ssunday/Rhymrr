    //A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats
    //https://wordsapiv1.p.mashape.com/words/example?mashape-key=A7kjl0oyjJmshtmVwMo0B63BH1yCp1dZ1b5jsnddyuSeToBats

    var rhymrr = {
      //q : " ",
      /*param : {
        key : "FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s"
      },
      */
      //urls : "https://wordsapiv1.p.mashape.com/words/"+(this.q)+"/rhymes?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s",
      //<div class='indeterminate'></div>
                      //</div>
      word: " ",
      init : function(){
          $("#submit").click(function(){
            //$("#progress").show();
            $(".rhymes .s").empty();
            $(".rhymes .r").empty();
            $(".rhymes .s").append("<div class='progress'><div class='indeterminate'></div></div>");
            rhymrr.validate($("#word").val());
          });
  
      },
      syn_click : function(val){
            //$("#progress").show();
            $(".rhymes .s").empty();
            $(".rhymes .r").empty();
            $(".rhymes .s").append("<div class='progress'><div class='indeterminate'></div></div>");
            rhymrr.validate(val);

      },
      validate : function(w){
       // if(w !=== " "){
          //this.q = w;
          //$(".rhymes .row").empty();
            //$(".rhymes .s").empty();
            //$(".rhymes .r").empty();
            //if(w.length>0)
          var url = "https://wordsapiv1.p.mashape.com/words/"+w+"/rhymes?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s";
          var url2 = "https://wordsapiv1.p.mashape.com/words/"+w+"/?mashape-key=FIeIgVUX99mshnrwbPqGpxdoHLhrp1MZTObjsnKX9VcVFQ8Z5s";
          
          $.getJSON(url,function(data1){
            $.getJSON(url2,function(data2){
                rhymrr.loadrr(data1,data2);
            });             
            //rhymrr.loadrr(data);
          }).fail(function(jqxhr) {
            $(".rhymes .s").empty();
              alert("The word doesnt exist!");
          });
          
       // }
      },

      loadrr : function(data1,data2){  
        if(data1.word){
          if(data1.rhymes.all){
              var displayData = "";
                displayData +="<div class='col s12'>Pronunciation: /"+(data1.pronunciation.all || data1.pronunciation)+"/</div>";
                displayData += "<div class='section'></div>";     
                displayData +="<div class='col s12'> "+data1.word+"("+data2.results[0].partOfSpeech+"): "+data2.results[0].definition+"</div>";
                displayData += "<div class='section'>";
                displayData += "<h5>Rhymes</h5>";
                displayData += "<div class='divider'></div>";
                displayData += "<div class='section'>";
                displayData += "<div class='col s12' style='text-align:justify;'>";
              $.each(data1.rhymes, function(index,value){
                  for(i in value){
                    displayData+=value[i]+"  &nbsp;&nbsp;  ";
                  }
              });
              displayData +="</div></div>";
           }else{
           // displayData += "No rhymes found for "+data1.word;
           }
          if(data2.results[0].synonyms){
              //alert("naaaaa");
              displayData2 = "<div class='section'>";
              displayData2 += "<h5>synonyms</h5>";
              displayData2 += "<div class='divider'></div>";
              displayData2 += "<div class='section'>";
              for(i in data2.results[0].synonyms){
                rhymrr.word = data2.results[0].synonyms[i];
                console.log(word);
                displayData2 += '<a href="#" onClick = "rhymrr.syn_click(rhymrr.word)">'+data2.results[0].synonyms[i]+'</a> &nbsp;&nbsp; ';
              }
              displayData2 +="</div>";
          }
        }else{
          displayData2 ="word does not exist. :(";
        }
        $(".rhymes .s").empty();
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

$(document).ready(function() {
  console.log("ready!");


var streams = [
  "freecodecamp",
  "storbeck",
  "terakilobyte",
  "TakeTV",
  "MedryBW",
  "RobotCaleb",
  "thomasballinger",
  "noobs2ninjas",
  "beohoff",
  "CODZOMBIES",
  "CODZOMBIES"
];
  console.log("THis is the streams: ", streams);
//jquery run
  
 //-------------------------------------------From the fcc tutorial
    function search () {
     // $(".online, .offline, .unavailable").empty();
      //showAll();  
      var searchTerm = $("#searchTerm").val();
      var user = searchQuery.replace(/[^A-Z0-9_]/ig, "");
      console.log("This is the user: ", user);
      $.ajax({
        url: "https://api.twitch.tv/kraken/streams/" + user,
        dataType: "jsonp",
        data: {
          format: "json"
        },
        success: function (data) {
          fetchData(data);                    
        }
      });
    }
    function fetchData (data) {
        if (data.stream === null) {
            url = data._links.channel.substr(38);
            updateOfflineUsers();
        }
        else if (data.status == 422 || data.status == 404) {
            status = data.message;
            updateHTML(".unavailable");
        }
        else {
            if (data.stream.channel.logo !== null) {
                picture = 'url("' + data.stream.channel.logo + '")';
            }
            else {
                picture = 'url("https://cdn.rawgit.com/ayoisaiah/freeCodeCamp/master/twitch/images/placeholder-2.jpg")';
            }
            url = data._links.channel.substr(38);
            status = "<a href='https://twitch.tv/" + url + "' target='_blank'" + "'>" + data.stream.channel.display_name +  "</a>" + " is currently streaming " + data.stream.game;
            updateHTML(".online");
        }
    }
 //-------------------------------------------From the fcc tutorial


    //-------------------------------------------
    const collection = [];
    var data = {};
    function twitchy(i) {
      var imgSizeAttr = 25;
      $.ajax({
	type: "GET",
	url: `https://api.twitch.tv/kraken/channels/`+streams[i]+"?callback=?",
	//url: `https://api.twitch.tv/kraken/channels/${i}`,
	     headers: {"client-ID": "y7s0s4ezeun3ptu223pxgjyljhl6rf"},
	success: res => {
          //console.log('res');
          collection.push(res);
	  data.name=res.display_name;
	  data.url=res.url;
	  data.game=res.game;
	  data.followers=res.followers;
	  data.status=res.status;
	  data.logo=res.logo;
	  data.updated_at=res.updated_at;
	  data.language=res.language;
	  data.mature=res.mature;
	  data.views=res.views;
	  data.stream=res.streams;
	  
          // console.log("Name", data);
          //  console.log("Game", res.game);
          //  console.log("status", res.status);
          //  console.log("logo", res.logo);
          //  console.log("language", res.language);
          //  console.log("mature", res.mature);
          //  console.log("updated_at", res.updated_at);
          //  console.log(res.url);
          //  console.log("followers", res.followers);
          //  console.log("views", res.views);
//	  if (res.game===null) {
	    $(".logo").append( 
              "<br><div class='well'><img src=" +
		res.logo +
		" alt=" +
		res.display_name +
 		" height=" +
		imgSizeAttr +
		" width=" +
		imgSizeAttr +
		">"+"<a href='"
		+data.url+
		"'>"
		+data.name+"</a>"+//display name
	      "<p>Status"+data.status+"</p></div>" //status//url link for anchor tag
            );
//	  }
	  
	  if (data.status=== null)
	  {
            // alert(res.display_name+" is not online");
	    console.log(res.display_name+" is online!");
	  } else {
           // alert(res.display_name+" is online!");
	    console.log(res.display_name+" is Offline!");
	  }
	 
          //$(".channelName").append("<br>" + res.display_name);
          //$(".Status").append("<br>" + res.url);
        //console.log(res);
        //console.log(res);
        //console.log(res);
        //console.log('funcs', collection);
	},
	error: err => {
          console.log("err");
          console.log(err);
	}
      });
    }


    
    for (let i = 0; i < streams.length; i += 1) {
      twitchy(streams[i]);
    }
  //console.log('funcs', collection);
//  }); //end of $(document).ready(function()











  
  // var streams =[
  //   "summit1g",
  //   "ESL_SC2",
  //   "cretetion",
  //   "storbeck",
  //   "habathcx",
  //   "RobotCaleb",
  //   "noobs2ninjas",
  //   "gamesdonequick",
  //   "OgamingSC2",
  //   "freecodecamp",
  // "TurtleWolf"
  // ];
  // var data = {};
  // $("#searchButton").on("click", function(){
  //   //h="+searchTerm+"&format=json&callback=?";
  //   var searchTerm = $("#searchTerm").val();
  //   console.log(searchTerm);
  //   var url: `https://api.twitch.tv/kraken/channels/${i}`;
  
  //   $.ajax({
  //     url: url,
  //     method: "GET",
  //     headers: {"client-ID": "y7s0s4ezeun3ptu223pxgjyljhl6rf"},
  //     async: false,
  //     dataType: "jsonp",
  //   }).done((res, err) => {
  //     console.log(res);
  //       console.log("Name", res.display_name);
  //       console.log("Game", res.game);
  //       console.log("status", res.status);
  //       console.log("logo", res.logo);
  //       console.log("language", res.language);
  //       console.log("mature", res.mature);
  //       console.log("updated_at", res.updated_at);
  //       console.log(res.url);
  //       console.log("followers", res.followers);
  //       console.log("views", res.views);
  //     // console.log("res[1][0a]",res[1][0]);
  //     // console.log("res[2][0]",res[2][0]);
  //     // console.log("res[3][0]",res[3][0]);
  //     $("#response").html("");
  //     for(var i = 0; i < res[1].length; i++) {
  //   	$("#response").append("<div id='newDiv'class='well'>" +
  //   			      "<h1><a href=' " + res[3][i]+ "'>"+
  //   			      res[1][i] +
  //   			      "</a></h1>"+
  //   			      "<h2>" + res[2][i] +
  //   			      "</h2>" +
  //   			      "</div>");
  //     }
  //     data.res = JSON.stringify(res);
  //   }).fail((jqXHR, textStatus, errorThrown) => {
  //     console.log(jqXHR.status);
  //     console.log(textStatus);
  //     console.log(errorThrown);
  //   }).always(() => {
  //     console.log("Complete");
  //   });
    
  });
  

function loadXMLDoc()
{
var xmlhttp;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    txt="";
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("record");
    for (i=0;i<x.length;i++)
      {
      txt=txt+"<strong style=\"background-color:#f39951;padding:1px 6px; border:0px; border-radius:2px;color:#ffffff; font-family:Calibri; \">";
      xx=x[i].getElementsByTagName("name");
        {
        try
          {
          txt=txt + xx[0].firstChild.nodeValue + "</strong><br/><div style=\"list-style-type: none;margin-top:10px;margin-left:25px; color:#303030; font-family:Calibri; width:650px \">";
          }
        catch (er)
          {
          txt=txt + "?</strong><br/><div style=\"list-style-type: none;margin-top:10px;margin-left:25px; color:#303030; font-family:Calibri; width:650px \">";
          }
        }
      xx=x[i].getElementsByTagName("explanation");
        {
        try
          {
          txt=txt +  xx[0].firstChild.nodeValue + "</div><div style=\"list-style-type: none;margin-left:25px; font-family:Calibri\"><a style=\"text-decoration:none; color:#f39951;\" href=\"";
          }
        catch (er)
          {
          txt=txt +  "?</div><div style=\"list-style-type: none;margin-left:25px; font-family:Calibri\"><a style=\"margin-left:25px;text-decoration:none; color:#f39951;\"  href=\"";
          }
        }
      xx=x[i].getElementsByTagName("URL");
        {
        try
          {
          txt=txt +  xx[0].firstChild.nodeValue + "\" target=\"_blank\"/>"+xx[0].firstChild.nodeValue+"</a></div><br/>Tags:<br/></div><div style=\"width:100%;display: inline-flex;\"><div style=\"font-family:Calibri; margin-top:10px;margin-left:25px; width:45px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e\">";
          }
        catch (er)
          {
          txt=txt +  "\" target=\"_blank\"/>?</a></div><br/>Tags:<br/></div><div style=\"width:100%;display: inline-flex;\"><div style=\"font-family:Calibri; margin-top:10px;margin-left:25px; width:45px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e\">";
          }
        }
      xx=x[i].getElementsByTagName("tag1");
        {
        try
          {
          txt=txt +  xx[0].firstChild.nodeValue +"</div><div style=\"font-family:Calibri; margin-top:10px;margin-left:25px;width:70px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e\">";
          }
        catch (er)
          {
          txt=txt + "</div><div style=\"font-family:Calibri; margin-top:10px;margin-left:25px;width:70px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e\">";
          }
        }
       xx=x[i].getElementsByTagName("tag2");
        {
        try
          {
          txt=txt +  xx[0].firstChild.nodeValue +"</div>";
          }
        catch (er)
          {
          txt=txt + "</div>";
          }
        }
       xx=x[i].getElementsByTagName("tag3");
        {
		if(xx.nodeValue!= ""){
		try
		  {
		  txt=txt + "<div style=\"font-family:Calibri; margin-top:10px;margin-left:25px;width:45px;background-color:#e4edf4; padding:2px 6px; border:0px; border-radius:3px; color:#3e6d8e\">"+ xx[0].firstChild.nodeValue +"</div></div><br><br/><br/>";
		  }
		catch (er)
		  {
		  txt=txt + "</div><br/><br/><br/>";
		  }
		}
	}
      }


    document.getElementById('myDiv').innerHTML=txt;
    }
  }
xmlhttp.open("GET","info.xml",true);
xmlhttp.send();
	$("header").css("height",$("header").height()+860+'px');
	$("#loadbutton").text('XML Loaded');
}

$( document ).ready(function() {
	
	$("#loadbutton").hover(function(){
			$(this).stop().animate({
				opacity:"0.8"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});



});


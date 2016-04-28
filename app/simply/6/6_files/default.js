function hideISPContent()
{
	if(document.getElementById("sBar")){
                //alert("sBar");
		document.getElementById("sBar").style.display="none";
	}
        if(document.getElementsByTagName("DIV"))
	{
		var dElements=document.getElementsByTagName("DIV");
		for(i=0;i<dElements.length;i++)
		{
			if(dElements(i).style.zIndex=="9000")
			{
				//alert("add")
				dElements(i).style.display="none";
			}	
			//selElements(i).style.display="none";
		}
	}
        if(document.getElementsByTagName("CENTER"))
	{
		var selElements=document.getElementsByTagName("CENTER");
		for(i=0;i<selElements.length;i++)
		{
			//if(selElements(i).nextSibling.innerHTML=="<BR>")
			//{
				//alert(selElements(i).nextSibling.innerHTML)
				selElements(i).nextSibling.style.display="none";
			//}	
			selElements(i).style.display="none";
		}
	}
  }
var cdTitle="";
function contentDiv()
{
	var cdContent=event.srcElement.innerHTML;
	cdTitle=event.srcElement.title;

	var titleHtml='<Div style="width:495;height:37px; background-image:url(images/contentDivTit.jpg);font-family:verdana;fontsize:12px;font-weight:bold;color:black"  valign="center">'+cdTitle +'</Div>';
	var contentHtml='<Div style="width:495;height:150;background-image:url(images/contentDivBg.jpg)"'+ cdContent+'</div>';
	var footerHtml='<Div height="26" style="width:495;height:45;background-image:  url(images/contentDivbottom.jpg);font-family:verdana;fontsize:10px;"></div>'

	event.srcElement.innerHTML=titleHtml + contentHtml + footerHtml;
	cdTitle="";
}
function showHideContent1()
{
	if(event.srcElement.parentElement.nextSibling.style.display!="none")
	{
		event.srcElement.parentElement.nextSibling.style.display="none";
		event.srcElement.parentElement.nextSibling.nextSibling.style.display="none";
		event.srcElement.parentElement.style.height="14px";
		//event.srcElement.innerText="Max"
	}
	else
	{
		event.srcElement.parentElement.nextSibling.style.display="block";
		event.srcElement.parentElement.nextSibling.nextSibling.style.display="block";
		event.srcElement.parentElement.style.height="37px";
		//event.srcElement.innerText="Min"
	}
}
function showHideContent()
{
	if(event.srcElement.nextSibling.style.display!="none")
	{
		event.srcElement.nextSibling.style.display="none";
		event.srcElement.nextSibling.nextSibling.style.display="none";
		event.srcElement.style.height="14px";
		//event.srcElement.innerText="Max"
	}
	else
	{
		event.srcElement.nextSibling.style.display="block";
		event.srcElement.nextSibling.nextSibling.style.display="block";
		event.srcElement.style.height="37px";
		//event.srcElement.innerText="Min"
	}
}
function contentDivTit(selTitle)
{
	document.write('<Div ondblclick="showHideContent()" title="Double Click to toggle Content" style="cursor:default;padding:8px;padding-right:30px;width:495;height:37px; background-image:url(images/contentDivTit.jpg);font-family:verdana;font-size:12px;font-weight:;color:black;text-align:left" >&nbsp;&nbsp;&nbsp;&nbsp;')
    document.write(selTitle + '<!--img src="images/minimize.gif" align="" onclick="showHideContent()"/--></Div>')
	document.write('<Div style="width:495;height:40;background-image:url(images/contentDivBg.jpg);padding-left:28px;padding-right:20px;font-family:verdana;font-size:11px;">')
}
function contentDivText()
{
	document.write('</Div>')
	document.write('<Div height="26" style="width:495;height:45;background-image:  url(images/contentDivbottom.jpg)" width="100%">&nbsp;</td></tr>')
	document.write('</Div>')
}

function hideContextMenu()
{
	return false;
}


document.oncontextmenu=hideContextMenu;

document.onmouseover = hideISPContent;
//window.onerror = function() { return true; }



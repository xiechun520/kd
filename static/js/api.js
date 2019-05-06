var key = "6c3cc98e70b23637a15ffc09d0ce11aa";
var num = 10;
function ls1(){
	$.ajax({
		url:"http://api.tianapi.com/meinv/",
		data:{
			key:key,
			num:num
		},
		success:function(data){
		data = data.newslist
		console.log(data);
		for (var i = 0;i < data.length;i++) {
			var d = "<li><a href='"
			+data[i].url+"' title='"+data[i].title+"'><p>"+data[i].title+"</p><span>"+"04-24"+"</span></a></li>";
			$("#ls1").append(d);
			}
		}
	});
}

function ls2(){
	$.ajax({
		url:"http://api.tianapi.com/guonei/",
		data:{
			key:key,
			num:num
		},
		success:function(data){
		data = data.newslist
		console.log(data);
		for (var i = 0;i < data.length;i++) {
			var d = "<li><a href='"
			+data[i].url+"' title='"+data[i].title+"'><p>"+data[i].title+"</p><span>"+"04-24"+"</span></a></li>";
			$("#ls2").append(d);
			}
		}
	});
}
ls1();
ls2();
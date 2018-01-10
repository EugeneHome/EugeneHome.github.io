var $window=$(window),gardenCtx4,gardenCanvas4,$garden4,garden4;
var clientWidth=$(window).width();
var clientHeight=$(window).height();
$(function(){
	$loveHeart4=$("#loveHeart4");
	var a=$loveHeart4.width()/2;
	var b=$loveHeart4.height()/2-55;
	$garden4=$("#garden4");
	gardenCanvas4=$garden4[0];
	gardenCanvas4.width=$("#loveHeart4").width();
	gardenCanvas4.height=$("#loveHeart4").height();
	gardenCtx4=gardenCanvas4.getContext("2d");
	gardenCtx4.globalCompositeOperation="lighter";
	garden4=new Garden(gardenCtx4,gardenCanvas4);
	
	setInterval(function(){
		garden4.render();
	},Garden.options.growSpeed);
});

$(window).resize(function(){
	var b=$(window).width();
	var a=$(window).height();
	if(b!=clientWidth&&a!=clientHeight){
		location.replace(location);
	}
});

function getHeartPoint(c){
	var b=c/Math.PI;
	var a=7*(16*Math.pow(Math.sin(b),3));
	var d=-7*(13*Math.cos(b)-5*Math.cos(2*b)-2*Math.cos(3*b)-Math.cos(4*b));
	return new Array(offsetX+a,offsetY+d);
}

function startHeart4Animation(){
	var c=25;
	var d=10;
	var b=new Array();
	var a=setInterval(function(){
		var h=getHeartPoint(d);
		var e=true;
		for(var f=0;f<b.length;f++){
			var g=b[f];
			var j=Math.sqrt(Math.pow(g[0]-h[0],2)+Math.pow(g[1]-h[1],2));
			if(j<Garden.options.bloomRadius.max*1.3){
				e=false;
				break;
			}
		}
		if(e){
			b.push(h);
			garden4.createRandomBloom(h[0],h[1]);
		}
		if(d>=30){
			clearInterval(a);
		}else{
			d+=0.2;
		}
	},c);
}

function clearHeart4Animation(){
	garden4.clear();
}

(function(a){
	a.fn.typewriter=function(){
		this.each(function(){
			var d=a(this),c=d.html(),b=0;
			d.html("");
			var e=setInterval(function(){
				var f=c.substr(b,1);
				if(f=="<"){
					b=c.indexOf(">",b)+1;
				}else{
					b++;
				}
				d.html(c.substring(0,b)+(b&1?"_":""));
				if(b>=c.length){
					clearInterval(e);
				}
			},75);
		});
		return this;
	};
})(jQuery);
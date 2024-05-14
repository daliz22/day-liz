$(document).ready(function()

{
	$(".playlist").audioControls(
	{
		autoPlay:false,
		timer:'increment',
		onAudioChange:function(datos)
		{
			$(".nombremp3").text(datos.title);
		}
	

	});

	$('a.play').click(function()
	{
		$(this).find('i').toggleClass('fa-play fa-pause');
		
	});

});
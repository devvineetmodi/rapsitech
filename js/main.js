var mymap = L.map('mapid').setView([30.191947, 74.500395], 10);
// 30.191947, lng: 74.500395 
// hJ9BbCMvcE1oEsIOkgvloU8aRAxfNOUQ
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGV2dmluZWV0bW9kaSIsImEiOiJja2RzOHpqdWwwY291MnlxczQwaW1pYng1In0.r0AidDg11iPnMLwTnyt1hA'
}).addTo(mymap);

var marker = L.marker([30.191947, 74.500395]).addTo(mymap);

$('#navbar a, .btn').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();
		const hash = this.hash;
		
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 100
			},
			800
		)
	}
});

window.addEventListener('scroll',function(){
	if(window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.7;
	} else {
		document.querySelector('#navbar').style.opacity = 1;
	}
})
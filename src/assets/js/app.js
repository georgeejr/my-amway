$(document).foundation();

//overrides the foundation accordion, making the accordion title redirect to a page
$('#sidebar-accordion .no-sub-item').on('click', function(e){
	e.preventDefault();

	var url = $(this).attr('href');
	window.location.href = url;
})

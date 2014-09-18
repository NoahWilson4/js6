$(document).on('ready', function() {
  
// form hidden, then appears hiding profile

	// $('.edit-view').hide();

	// $('.to-edit').on('click', function(){
	// 	$('.profile-view').hide();
	// 	$('.edit-view').show();
	// 	$('.user-name-edit').text($('.user-name').text());
	// 	$('.bio-edit').text($('.bio').text());
	// 	$('.fav-books-edit').text($('.fav-books').text());
	// 	$('.fav-jav-edit').text($('.fav-jav').text());

	// 	$('.submit').on('click', function(event){
	// 		$('.edit-form').submit();
	// 		$('.user-name').text($('.user-name-edit').val());
	// 		$('.bio').text($('.bio-edit').val());
	// 		$('.fav-books').text($('.fav-books-edit').val());
	// 		$('.fav-jav').text($('.fav-jav-edit').val());
	// 		$('.edit-view').hide();
	// 		$('.profile-view').show();
	// 		event.preventDefault();
	// 	})
	// })

	$('.edit-view').hide();
	$('.submit').remove();
	$('.to-edit').on('click', function(){
		$('.edit-view').show();
		$('.user-name-edit').text($('.user-name').text());
		$('.bio-edit').text($('.bio').text());
		$('.fav-books-edit').text($('.fav-books').text());
		$('.fav-jav-edit').text($('.fav-jav').text());

		$('.user-text-edit').on('keydown', function(e){
			if (e.keyCode === 13) {
				$('.user-name').text($('.user-name-edit').val());
				$('.bio').text($('.bio-edit').val());
				$('.fav-books').text($('.fav-books-edit').val());
				$('.fav-jav').text($('.fav-jav-edit').val());
			}
		});
		$('.user-text-edit').blur(function(){
			$('.user-name').text($('.user-name-edit').val());
			$('.bio').text($('.bio-edit').val());
			$('.fav-books').text($('.fav-books-edit').val());
			$('.fav-jav').text($('.fav-jav-edit').val());
		});

		



	});


});








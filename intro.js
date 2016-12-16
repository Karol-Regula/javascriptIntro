(function () {
	var heading = document.getElementById('h');

	var items = document.getElementById('thelist');
	var button = document.getElementById('add-btn');

	button.addEventListener('click', function () {
		var item = document.createElement('li');
		item.innerHTML = 'New Thing!';
		items.appendChild(item);
	});

	items.addEventListener('click', function (e) {
		e.target.remove();
	});
}());

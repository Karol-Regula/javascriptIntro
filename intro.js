(function () {
	var items = document.getElementById('thelist');
	var button = document.getElementById('add-btn');

	button.addEventListener('click', function () {
		var item = document.createElement('li');
		item.innerHTML = 'New Thing!';
		items.appendChild(item);
	});

	items.addEventListener('click', function (e) {
        if (e.target.tagName == 'LI') {
            e.target.remove();
        }
	});

    var greenDiv = document.getElementById('div1');
    var blackDiv = document.getElementById('div2');
    var blueDiv = document.querySelector('div.blue');

    var heading = document.getElementById('h');

    greenDiv.addEventListener('mouseenter', function () {
        heading.setAttribute('class', 'green');
    });

    blackDiv.addEventListener('mouseenter', function () {
        heading.setAttribute('class', '');
    });

    blueDiv.addEventListener('mouseenter', function () {
        heading.setAttribute('class', 'blue');
    });
}());

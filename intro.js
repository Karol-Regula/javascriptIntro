(function () {
	var items = document.getElementById('thelist');
	var button = document.getElementById('add-btn');

    var heading = document.getElementById('h');

    var attachTextChangeEvents = function (elem) {
        elem.addEventListener('mouseenter', function () {
            heading.innerHTML = elem.innerHTML;
        });
        elem.addEventListener('mouseleave', function () {
            heading.innerHTML = "Hello, world!";
        });
    };

    for (var li of items.children) {
        attachTextChangeEvents(li);
    }

	button.addEventListener('click', function () {
		var item = document.createElement('li');
		item.innerHTML = 'New Thing!';
        attachTextChangeEvents(item);
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

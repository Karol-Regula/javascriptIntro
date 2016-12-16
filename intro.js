(function () {
    /////////////////////////////////////////////////////////////////
    // INTERACTIVE ITEM LIST: ////////////////////////////////////////
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

    /////////////////////////////////////////////////////////////////
    // FIBONACCI LIST: //////////////////////////////////////////////

    // Cache fibonacci numbers as we calculate them:
    var fibNums = [0, 1, 1];
    var fibonacci = function (n) {
        if (n < fibNums.length) {
            return fibNums[n];
        }
        var result = fibonacci(n - 1) + fibonacci(n - 2);
        fibNums[n] = result;
        return result;
    };

    // Fibonacci items:
    var fibs = document.getElementById('secondlist');
    var fibBtn = document.getElementById('add-btn-2');

    fibBtn.addEventListener('click', function () {
        var item = document.createElement('li');
        item.innerHTML = "" + fibonacci(fibs.childElementCount + 1);
        fibs.appendChild(item);
    });
}());

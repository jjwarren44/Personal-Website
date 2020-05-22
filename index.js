// Function for fading in divs when in view
(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight < (windowHeight * 0.1) * -1) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

// Function to fade out header when scrolling down
(function() {
    var header;
    var headerText;
    var windowHeight;

    function init() {
        header = document.querySelector('#header');
        headerText = document.querySelector('#header-text');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        var positionFromBottom = header.getBoundingClientRect().bottom;

        // Change opacity of background
        var opacityVal = positionFromBottom / windowHeight;
        header.style.opacity = opacityVal;
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
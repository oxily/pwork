$(document).ready(function () {
    document.addEventListener('init', function (event) {
        var page = event.target;
        console.log(page.id)
        if (page.id === 'page1') {
            $("#sleepy").hide();
            page.querySelector('#move1').onclick = function () {
                document.querySelector('#myNavigator').pushPage('detail1.html');
            };
        } else if (page.id === 'detail1') {
            $("#sleepy").show();
            document.querySelector('ons-back-button').onclick = function (event) { 
                document.querySelector('#myNavigator').pushPage('Home.html'); }
        }
    });
})
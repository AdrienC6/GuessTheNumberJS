$(document).ready(() => {

    var form = $('#formUser');

    var randomNumber = Math.floor(Math.random() * 10)

    var input = $('input[type=text]');

    var body = $('body');

    var i = $('.fa-glass-cheers')

    var button = $('button');

    var title = $('h1');

    console.log(randomNumber);

    button.on('click', () => {
        window.location.reload();
    })

    form.on('submit', (e) => {
        e.preventDefault()

        var userValue = parseInt(input.val());

        if (userValue === randomNumber) {
            body.addClass('success');
            input.remove();
            i.show();
            i.addClass('animate__animated animate__heartBeat');
            title.text('VICTOIRE !');
            button.show();
        } else {
            body.addClass('error');
            title.text('Pas loin !');
            input.addClass('animate__animated animate__bounce');
            setTimeout(() => {
                input.removeClass('animate__animated animate__bounce');
            }, 500);
            input.val("");

        }
    })












})
$(() => {
    const $container = $('#container').attr('container');
console.log($container);
    const $h1 = $('<h1>');
    $('#container').append('<h1>').text('Harry');
    console.log($h1);
});

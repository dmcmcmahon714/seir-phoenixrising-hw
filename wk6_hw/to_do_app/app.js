$(() => {
    $listone = $('<ul>').attr('id', 'listone');
    $('#to-do-list').append($listone);
    $('#submit').on('click', () => {
        $listone.append($('#input-box').val() );
        event.preventDefault();
      });
})
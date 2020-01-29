$(() => {
    const $listone = $('<ul>').attr('id', 'listone');
    $('#to-do-list').append($listone);

    $submission = $('#submit').on('click', () => {
        $inputBoxValue = $('#input-box').val();
        console.log($inputBoxValue);
        const $firstList = $('<li>').addClass('tasks');
        $firstList.append($inputBoxValue);
        $listone.append($firstList);
      });
    
    const $listTwo = $('<ul>').attr('id', 'listtwo');
    $('#completed').append($listTwo);
    
    $completeTask = $('#to-do-list').on('click', (event) => {
        $movetoSecond = $(event.target);
        console.log($movetoSecond);
        $('#listtwo').append($movetoSecond)
        event.preventDefault();
    })
})
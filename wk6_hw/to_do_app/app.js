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
    $completeTask = $('.tasks').on('click', () => {
        console.log($completeTask);
    })

})
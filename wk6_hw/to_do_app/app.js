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
    
    $completeTask = $listone.on('click', () => {
        console.log($inputBoxValue);
        const $secondList = $('<li>');
        $secondList.append($inputBoxValue);
        $listTwo.append($secondList);
       
    })
})
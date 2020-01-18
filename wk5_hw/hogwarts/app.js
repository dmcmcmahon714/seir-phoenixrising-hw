$(() => {
    const $container = $('#container');
    $("body").append($container);
console.log($container);
    const $h1 = $('<h1>').text("Harry");
    $container.append($h1);
console.log($h1);
    const $h2 = $('<h2>').text("Dan");
    $container.append($h2);
console.log($h2);
const $h3 = $('<h3>').text("Hufflepuff");
    $container.append($h3);
console.log($h3);
const $h4 = $('<h4>').text("Billy").addClass("cat");
$container.append($h4);
console.log($h4);
const $Wand = $('<h4>').text("Super Special New Wand").css('color', 'orchid');
$container.append($Wand);
console.log($Wand);
const $items = $('<ul>');
const $InvisibilityCloak = $('<li>').text("Invisibility Cloak").addClass("secret").hide("slow").delay(2000).show("slow");
$items.append($InvisibilityCloak);
const $MagicMap = $('<li>').text("Magic Map").addClass("secret").hide("slow").delay(2000).show("slow");
$items.append($MagicMap);
const $TimeTurner = $('<li>').text("Time Turner").addClass("secret").hide("slow").delay(2000).show("slow");
$items.append($TimeTurner);
const $Leash = $('<li>').text("Leash").addClass("cat").addClass("cabbage").removeClass("cabbage");
$items.append($Leash);
const $BertiesBeans = $('<li>').text("Bertie\'s Every Flavor Beans");
$items.append($BertiesBeans);
$container.append($items);
console.log($items);
const $Season = $('<h5>').text("Spring 2017");
$container.append($Season);
console.log($Season);
const $table = $('<table>');
const $week = $('<thead>');
$table.append($week);
const $day = $('<th>').text("Day");
$week.append($day)
const $classes = $('<th>').text("Classes");
$classes.append($day);
const $MondaySched = $('<tr>');
$day.append($MondaySched);
const $Monday = $('<td>').text("Monday");
$MondaySched.append($Monday)
const $MonClasses = $('<td>').text("Charms, Transfiguration, Divination");
$MondaySched.append($MonClasses);
const $TuesSched = $('<tr>');
$day.append($TuesSched);
const $Tuesday= $('<td>').text("Tuesday");
$TuesSched.append($Tuesday)
const $TuesClasses = $('<td>').text("Herbology, Potions");
$TuesSched.append($TuesClasses);
const $WedSched = $('<tr>');
$day.append($WedSched);
const $Wednesday = $('<td>').text("Wednesday");
$WedSched.append($Wednesday)
const $WedClasses = $('<td>').text("History of Magic, Defense against the Dark Arts");
$WedSched.append($WedClasses);
const $ThursSched = $('<tr>');
$day.append($ThursSched);
const $Thursday = $('<td>').text("Thursday");
$ThursSched.append($Thursday)
const $ThursClasses = $('<td>').text("Quidditch, Math");
$ThursSched.append($ThursClasses);
const $FriSched = $('<tr>');
$day.append($FriSched);
const $Friday = $('<td>').text("Friday");
$FriSched.append($Friday)
const $FriClasses = $('<td>').text("Soccer, Basketball, Hockey");
$FriSched.append($FriClasses);
$week.append($classes);
$table.append($week);
$container.append($table);
console.log($table);
});

/*$(document).mouseup(function (e)
{
    var container = $("earth_text");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});*/


/* from:::: http://stackoverflow.com/questions/4261363/javascript-html-toggle-visibility-automatically-causing-one-div-element-to-h */

function toggle_visibility(newSection) {
        $(".section").not("#" + newSection).hide();
        $("#" + newSection).show();
    }
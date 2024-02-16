/*
FitView is a more robust way to show all the objects
defined in the scene for the case in which content is being
downloaded. The effect on screen may look like the camera is
moving to a final position and orientation in two discrete steps.
*/
function FitView()
{
    /*
    This code for setting a view to show everything
    after the model has downloaded was suggested
    by discussion in https://github.com/x3dom/x3dom/issues/632
    */
    console.log("call into FitView")
    x3d_element = document.getElementById("x3delem");
    x3d_element.runtime.showAll();
    x3d_element.addEventListener("downloadsfinished",
        function()
        {
            x3d_element.runtime.showAll();
        }
    );
}

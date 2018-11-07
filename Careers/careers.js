

jQuery(document).ready(function ($) {

    // Hide all panels in the start
    var panels = $('.body').hide();

    // Show first panel on load
    panels.first().show();

    // On clicking - icon
    $('.head label').click(function () {
        var $this = $(this);

        // Slide up all other panels
        panels.slideUp();

        // Slide down target panel
        $this.parent().next().slideDown();
        return false;
    })
})
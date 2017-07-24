$('#mySelect').on('change', function() {
    var placeholder = $(this).find(':selected').data('placeholder');
    $('#myInput').attr('placeholder', placeholder);
});

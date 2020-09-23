function SubmitIt() {
    const htmlElement = document.getElementById('Name')
    console.log(htmlElement.value);
   
    const emailElement = document.getElementById('Email')
    console.log(emailElement.value);
   
    const phoneElement = document.getElementById('Phone')
    console.log(phoneElement.value);
    

    const messageElement = document.getElementById('Message')
    console.log(messageElement.value);
    
    if (htmlElement.value == "" || emailElement.value == "" || phoneElement.value == "" || messageElement.value == "") {
       const ErrorMessage = document.getElementById('ErrorMessage')
       ErrorMessage.innerText = "Please fill all the blanks!"
    }
    else {
        const ErrorMessage = document.getElementById('ErrorMessage')
        ErrorMessage.innerText = ""
    }
}

$('#Fullscreen').css('height', $(document).outerWidth() + 'px');
    
$('.port').click(function () {
    var src = $(this).attr('src'); 
    $('#Fullscreen img').attr('src', src); 
    $('#Fullscreen').fadeIn();
});

$('#Fullscreen').click(function () {
    $(this).fadeOut();  
});

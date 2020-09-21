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
        alert("Please fill blanks!")
    }
}


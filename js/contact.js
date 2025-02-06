
document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const submittedInfo = `
        Thank you for your message, we will be back to you shortly.

        Registered information:
        - Name: ${name}
        - Email: ${email}
        - Comments: ${comments}
    `;

    alert(submittedInfo);
    
/*redirecting to home page when form is submitted */
    window.location.replace('index.html');
});


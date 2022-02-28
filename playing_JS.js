const notifyByEmail = (email_address) => {
    return 'Email sent to: ' + email_address;
}

const notifyByText = (phone_no) => {
    return 'Text sent to: ' + phone_no;
}

const notify = (contact, notifictaion_function) => {
    return notifictaion_function(contact);
}

console.log(notify('email@email.co.uk', notifyByEmail));
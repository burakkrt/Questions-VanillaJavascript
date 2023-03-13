const messageBox = document.getElementById('messageBox');
const messageContent = messageBox.children[0];
let timeoutId;

function focusInput(element) {
    if (element) {
        element.focus();
        element.select();
    }
}

export default function Message(value, element) {
    messageContent.textContent = value;
    focusInput(element);
    if (messageBox.className.includes('active')) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.remove('active');
        }, 2000);
    } else {
        messageBox.classList.add('active');
        timeoutId = setTimeout(() => {
            if (messageBox.className.includes('active')) messageBox.classList.remove('active');
        }, 2000);
    }
}

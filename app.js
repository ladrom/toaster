const successBtn = document.querySelector('.btn--success');
const errorBtn = document.querySelector('.btn--error');
const messages = document.querySelector('.messages');
const successMsg = 'Everything goes well';
const errorMsg = 'Oops, an error occurred';

function addMessage(type, text) {
  const msg = document.createElement('div');
  msg.classList.add('msg', `msg--${type === 'success' ? 'success' : 'error'}`);
  msg.innerText = text;
  const bar = document.createElement('div');
  bar.classList.add('bar', `bar--${type === 'success' ? 'success' : 'error'}`);
  msg.append(bar);
  messages.append(msg);
  setTimeout(() => {
    msg.classList.add('msg--delete');
  },2000)
  return msg;
}

function deleteMessage(elem, delay) {
  setTimeout(() => {
    elem.remove();
  }, delay)
}

successBtn.addEventListener('click', () => {
  const msg = addMessage('success', successMsg);
  deleteMessage(msg, 3500);
})

errorBtn.addEventListener('click', () => {
  const msg = addMessage('error', errorMsg);
  deleteMessage(msg, 3500);
})
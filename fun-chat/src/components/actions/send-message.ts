import { sendMessageToUser } from '../websocket/send-message-to-user';
import { getMessage } from '../websocket/getMessage';
import { wrapperDates, wrapperStatus } from '../elements/wrapper/wrapper';
import { userName, messageText, messageData, statusDelivery, statusEdit } from '../elements/text/text';

export const options: Intl.DateTimeFormatOptions = {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export const sendMessage = () => {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (button instanceof HTMLButtonElement && name instanceof HTMLElement && scroll instanceof HTMLElement) {
    button.addEventListener('click', async (e) => {
      console.log('hhh');
      e.preventDefault();
      if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
        if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
          field.children[0].remove();
        }
        const message = document.createElement('div');
        message.className = `message ${name.innerHTML}`;
        sendMessageToUser(name.innerHTML, input.value);
        message.style.alignItems = 'end';

        const wrapper = await createMessage(message);

        field.append(wrapper);
      }
      scroll.scrollTop = scroll.scrollHeight;
    });
  }
  blockButtonAndInput();
};

function blockButtonAndInput() {
  const name = document.querySelector('.main_destination-name');
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  if (name instanceof HTMLElement && input instanceof HTMLElement && button instanceof HTMLElement) {
    if (!name.innerHTML) {
      input.setAttribute('disabled', 'true');
      button.setAttribute('disabled', 'true');
    }
  }
}

export function unBlockButtonAndInput(name: string) {
  const input = document.getElementById('message');
  const button = document.querySelector('.send_button');
  if (input instanceof HTMLElement && button instanceof HTMLElement) {
    if (name) {
      input.removeAttribute('disabled');
      button.removeAttribute('disabled');
    }
  }
}

export function sendMessageClickButton() {
  const input = document.getElementById('message');
  const name = document.querySelector('.main_destination-name');
  const field = document.querySelector('.main_field-message');
  const scroll = document.querySelector('.main_scroll-field');
  if (name instanceof HTMLElement && scroll instanceof HTMLElement && input instanceof HTMLInputElement) {
    console.log(input, name, field);
    document.addEventListener('keydown', async (e) => {
      console.log(input.value);
      if (e.key === 'Enter') {
        e.preventDefault();
        if (field instanceof HTMLElement && input instanceof HTMLInputElement) {
          if (field.innerHTML.includes('<p class="first_message">You can write your first message...</p>')) {
            field.children[0].remove();
          }
          const message = document.createElement('p');
          message.className = `message ${name.innerHTML}`;
          sendMessageToUser(name.innerHTML, input.value);
          message.style.alignItems = 'end';
          const wrapper = await createMessage(message);
          console.log('kkkk');
          field.append(wrapper);
        }
        scroll.scrollTop = scroll.scrollHeight;
      }
    });
  }
  blockButtonAndInput();
}

export async function createMessage(wrapper: HTMLElement) {
  const data = await getMessage();
  const message = data.payload.message;
  const messageDates = wrapperDates.createElement();
  const nameSend = userName.createElement();
  nameSend.textContent = message.from;
  const dataSend = messageData.createElement();
  const dataMessage = new Intl.DateTimeFormat('en-US', options).format(message.datetime);
  dataSend.textContent = dataMessage;
  const textMessage = messageText.createElement();
  textMessage.textContent = message.text;
  const messageStatus = wrapperStatus.createElement();
  const editStatus = statusEdit.createElement();
  const deliveryStatus = statusDelivery.createElement();
  messageDates.append(nameSend, dataSend);
  messageStatus.append(editStatus, deliveryStatus);
  wrapper.append(messageDates, textMessage, messageStatus);
  return wrapper;
}

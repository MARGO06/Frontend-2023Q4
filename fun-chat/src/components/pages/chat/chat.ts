import { Page } from '../pages';
import { wrapperMain, wrapperHeader, wrapperUser } from '../../elements/wrapper/wrapper';
import { buttonInfo, buttonLogout } from '../../elements/button/button';
import { appName } from '../../elements/text/text';
import { AllPages } from '../all-pages';
import { userLogout } from '../../websocket/user-logout';
import { footerChat } from '../../elements/footer/footer';

import './chat.css';

export class Chat extends Page {
  constructor(id: string) {
    super(id);
  }

  createPage() {
    const page = document.createElement('div');
    page.id = this.id;
    const wrapper = wrapperMain.createElement();
    const header = wrapperHeader.createElement();
    const infoButton = buttonInfo.createElement();
    const logoutButton = buttonLogout.createElement();
    if (logoutButton instanceof HTMLButtonElement) this.backToPage(logoutButton);
    const nameApp = appName.createElement();
    const nameUser = document.createElement('p');
    nameUser.className = 'main_user';
    nameUser.textContent = `User: ${this.getName()}`;
    const userSection = wrapperUser.createElement();
    const footer = footerChat.createFooter();
    header.append(nameApp, nameUser, infoButton, logoutButton);
    document.body.append(page);
    page.append(wrapper);
    wrapper.append(header, userSection, footer);
  }

  getName() {
    const userName = sessionStorage.getItem('first name');
    return userName;
  }

  getPassword() {
    const userPassword = sessionStorage.getItem('password');
    return userPassword;
  }

  backToPage(button: HTMLButtonElement) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const page = new AllPages();
      page.backToLoginPage();
      userLogout(`${this.getName()}`, `${this.getPassword()}`);
    });
  }
}

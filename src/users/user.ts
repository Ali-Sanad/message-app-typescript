import {SYSTEM_AVATAR_URL} from '../utils/constants';
import {IUser} from './types';

export default class User implements IUser {
  constructor(
    public userID: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public profilePhoto?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.profilePhoto = profilePhoto ?? SYSTEM_AVATAR_URL;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getUserID(): string {
    return this.userID;
  }

  validateEmail(email: string): boolean {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  validatePhoto(photo: string): boolean {
    if (photo.includes('.jpg')) {
      return true;
    } else {
      return false;
    }
  }

  saveUser(): string {
    if (
      this.validateEmail(this.email) &&
      this.validatePhoto(this.profilePhoto ?? '')
    ) {
      return 'Success.';
    } else {
      return 'Fail !!!';
    }
  }
}

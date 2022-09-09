import User from './user';
import {ITeatcher} from './types';

export default class Teacher extends User implements ITeatcher {
  constructor(
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePhoto?: string,
    public salutation?: string
  ) {
    super(userID, firstName, lastName, email, profilePhoto);

    this.salutation = salutation;
  }
  getFullName(): string {
    if (this.salutation) {
      return this.salutation + ' ' + super.getFullName();
    } else {
      return super.getFullName();
    }
  }
}

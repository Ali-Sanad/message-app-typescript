import User from './user';
import {IParent} from '../types';
import Teacher from './teacher';

export default class Parent extends User implements IParent {
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

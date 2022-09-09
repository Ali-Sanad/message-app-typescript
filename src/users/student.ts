import User from './user';
import {IStudent} from './types';
import Teacher from './teacher';

export default class Student extends User implements IStudent {
  constructor(
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePhoto?: string
  ) {
    super(userID, firstName, lastName, email, profilePhoto);
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

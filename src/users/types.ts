import Teacher from './teacher';

export interface IUser {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto?: string;
  getFullName: () => string;
  getEmail: () => string;
  getUserID: () => string;
  validateEmail: (email: string) => boolean;
  validatePhoto: (photo: string) => boolean;
}

export interface IStudent extends IUser {}

export interface IParent extends IUser {
  salutation?: string;
}

export interface ITeatcher extends IUser {
  salutation?: string;
}

export enum MessageType {
  System = 'System',
  Manual = 'Manual',
}

export interface IMessage {
  sender: IUser | IParent | ITeatcher;
  receiver: IUser | IParent | ITeatcher;
  text: string;
  createdAt: number;
  type: MessageType;
  getSenderFullName: () => string;
  getReceiverFullName: () => string;
  getMessageText: () => string;
  getMessageType: () => MessageType;
  getMessageCreationTime: () => string;
  saveMessage: () => string;
}

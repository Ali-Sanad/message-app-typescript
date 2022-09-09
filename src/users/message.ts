import {SYSTEM_AVATAR_URL} from '../utils/constants';
import Parent from './parent';
import Student from './student';
import Teacher from './teacher';
import {IMessage, IParent, ITeatcher, IUser, MessageType} from './types';

export default class Message implements IMessage {
  constructor(
    public sender: IUser | IParent | ITeatcher,
    public receiver: IUser | IParent | ITeatcher,
    public text: string,
    public createdAt: number,
    public type: MessageType
  ) {
    this.sender = sender;
    this.receiver = receiver;
    this.text = text;
    this.createdAt = createdAt;
    this.type = type;
  }

  getSenderFullName(): string {
    return this.sender.getFullName();
  }
  getReceiverFullName(): string {
    return this.receiver.getFullName();
  }

  getMessageText(): string {
    return this.text;
  }

  getMessageType(): MessageType {
    return this.type;
  }

  getMessageCreationTime(): string {
    const formattedDate = new Date(this.createdAt).toDateString();
    return formattedDate;
  }

  saveMessage(): string {
    if (this.type === MessageType.System && this.sender instanceof Teacher) {
      return 'Success.';
    } else if (
      this.type === MessageType.Manual &&
      this.sender instanceof Teacher
    ) {
      return 'Success.';
    } else if (
      this.type === MessageType.Manual &&
      this.sender instanceof Student &&
      this.receiver instanceof Teacher
    ) {
      return 'Success.';
    } else if (
      this.type === MessageType.Manual &&
      this.sender instanceof Parent &&
      this.receiver instanceof Teacher
    ) {
      return 'Success.';
    } else {
      return 'Fail !!!';
    }
  }
}

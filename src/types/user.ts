export namespace UserApiModal {
  export interface ResponseProfile {
    user: IUser;
  }

  export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    role: string;
    gender: string;
    phone: string;
    status: string;
    dob: string;
    __t: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
}

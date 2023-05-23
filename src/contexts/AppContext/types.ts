export interface UserInterface {
  id: number;
  name: string;
}

export interface AppContextInterface {
  externalData: object;
  user?: UserInterface;
  setUser: (user: UserInterface) => void;
}
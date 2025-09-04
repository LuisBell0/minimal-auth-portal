export type User = {
  id: number;
  email: string;
} | null;

export type AuthState = {
  user: User;
  loading: boolean;
  initialized: boolean;
  setUser: (user: User) => void;
  fetchUser: () => Promise<void>;
  checkAuth: () => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  activateAccount: (uid: string, token: string) => Promise<void>;
  resetPassword: (
    uid: string,
    token: string,
    newPassword: string,
    reNewPassword: string
  ) => Promise<void>;
};

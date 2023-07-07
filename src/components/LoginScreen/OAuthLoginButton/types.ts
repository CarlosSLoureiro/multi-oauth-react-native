import { ReactElement } from "react";

export interface OAuthProviderProps {
  provider: string;
  icon: ReactElement;
}

export interface OAuthLoginButtonProps extends OAuthProviderProps {
  setClickedProvider?: (props: OAuthProviderProps) => void;
}
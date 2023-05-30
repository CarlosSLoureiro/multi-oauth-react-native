import { PresenceTransition } from "native-base";

import { CardProps } from "./types";

export default function Card ({ children, position = 1 }: CardProps) {
  return (
    <PresenceTransition
      visible={true}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: position * 500
        }
      }}
    >
      { children }
    </PresenceTransition>
  );
}

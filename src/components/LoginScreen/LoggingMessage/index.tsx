import { cloneElement, useEffect, useState } from "react";
import { Center, Heading, HStack, Text } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

import { LoggingMessageProps } from "./types";

export default function LoggingMessage ({ provider, icon }: LoggingMessageProps) {
  const [dots, setDots] = useState(`.`);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === ``) {
          return `.`;
        } else if (prevDots === `.`) {
          return `..`;
        } else if (prevDots === `..`) {
          return `...`;
        } else {
          return ``;
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Center>
      <HStack space="3" justifyContent="center">
        {cloneElement(icon, { size: `100px` })}
      </HStack>
      <Heading size="md" textAlign="center" mt={10} fontWeight="600">
        <HStack><Text ml="15px" _dark={{color: `white`}}>Logging in with {provider}</Text><Text width="30px" textAlign="left" _dark={{color: `white`}}>{dots}</Text></HStack>
      </Heading>
    </Center>
  );
}
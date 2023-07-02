import { Image,Text,View } from 'native-base';

import { ProfileCardProps } from './types';

export default function ProfileCard ({ user }: ProfileCardProps) {
  const defaultPicture = `https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360`;

  return (
    <View>
      <View style={{ alignItems: `center`, padding: 16 }}>
        <View width={150}
          height={150}
          borderRadius={75}
          overflow="hidden"
          marginBottom={5}>
          <Image
            testID='user-picture'
            alt='Profile Picture'
            source={{ uri: user.picture !== null ? user.picture : defaultPicture }}
            style={{ flex: 1, width: undefined, height: undefined }}
            resizeMode="cover"
          />
        </View>
        <Text fontSize="2xl" bold>{ user.name }</Text>
        <Text>{ user.email }</Text>
      </View>
    </View>
  );
}

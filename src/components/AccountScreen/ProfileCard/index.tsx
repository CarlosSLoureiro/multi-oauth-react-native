import { Image,Text,View } from 'native-base';

export default function ProfileCard () {
  return (
    <View>
      <View style={{ alignItems: `center`, padding: 16 }}>
        <View width={150}
          height={150}
          borderRadius={75}
          overflow="hidden"
          marginBottom={5}>
          <Image
            alt='Profile Picture'
            source={{ uri: `https://lh3.googleusercontent.com/a/AAcHTtcHcuERO_MND_7vQgxEw6Ed00I62hm7zZ-79fxpFg=s96-c` }}
            style={{ flex: 1, width: undefined, height: undefined }}
            resizeMode="cover"
          />
        </View>
        <Text fontSize="2xl" bold>Carlos Loureiro</Text>
        <Text>carlos.loureiro@email.com</Text>
      </View>
    </View>
  );
}

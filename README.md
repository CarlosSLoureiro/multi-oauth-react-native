# 👨🏻‍💻 [Multi OAuth Example App](https://multi-oauth-react-native.carlosloureiro.xyz/)

> Essa aplicação foi desenvolvida para fins educacionais e experiência.

**Multi OAuth Example App** é um aplicativo cross-platform desenvolvido com [React Native 0.71.8](https://reactnative.dev) onde o usuário pode se cadastrar ou realizar uma autenticação com diferentes provedores oauth para se cadastrar ou logar na mesma conta de usuário na aplicação baseado no email oauth do provedor (Google, Twitter e etc). Também é possível alterar a senha e listar atividades de autenticação de outros usuários.

`VIDEO`

Note que essa aplicação foi desenvolvida baseado em um contexto mais ou menos de como é praticado em um cenário real: com um fluxo de deploy automatizado para o servidor onde a aplicação está hospedada. Nesse caso, usando *GitHub Actions* a cada criação de tag no repositório.

Além disso, essa aplicação é gerenciada através de uma API externa cujo repositório encontra-se também no meu perfil [CarlosSLoureiro/multi-oauth-react-native-api
](https://github.com/CarlosSLoureiro/multi-oauth-react-native-api).


# ✅ Características

- [x] Feito em *TypeScript*
- [x] Ambiente de desenvolvimento com *Expo* 
- [x] Utilizando *NativeBase* para os componentes
- [x] Testes unitários com *Jest*
- [x] Suporte a modo escuro
- [x] Compratível com **Android**, **iOS** e [**WEB**](https://multi-oauth-react-native.carlosloureiro.xyz/)


# 💻 Pré-requisitos

Antes de começar, para executar a aplicação você precisará ter o [Node.js](https://nodejs.org/pt-br) (npm) instalado em sua máquina. Além disso, para testar a aplicação você também precisará ter um device iOS ou Android físico com o aplicativo [Expo Go](https://expo.dev/client) instalado (disponível na [AppStore](https://apps.apple.com/br/app/expo-go/id982107779) e [PlayStore](https://play.google.com/store/apps/details?id=host.exp.exponent)). Também é possível testar através de algum device/simulador iOS ou Android, basta instalar o [XCode](https://developer.apple.com/xcode) ou [Android Studio](https://developer.android.com/studio) e configurar os devices.

> Versões utilizadas para desenvolver a aplicação: NodeJS 19.9, XCode 14.3 e Android Studio 2021.3.1.


# 🚀 Instalando

Para instalar, executar e testar o **Multi OAuth Example App**, siga estas etapas:

1. Faça uma cópia do arquivo `.env.example` para `.env`.

2. Instale as dependências:
```
  npm install
```

3. Execute a aplicação e siga a orientação do que aparecerá no terminal:
```
  npm start
```


# 🚨 Atenção

Note que o URL da API no arquivo `.env` da aplicação estará apontado para **minha própria API** para ser usada como exemplo (`https://api-multi-oauth-react-native.carlosloureiro.xyz`). Também está configurada para decodificar os dados passado da API para a aplicação via deep link com o Salt `md9yImbtHcWC8Q0M`.
Acesse e confira a documentação da API no Swagger: https://api-multi-oauth-react-native.carlosloureiro.xyz/swagger/
Caso vc queira executar API localmente com sua própria base de dados e salt personalizado, confira também o repositórío da API: [CarlosSLoureiro/multi-oauth-react-native-api
](https://github.com/CarlosSLoureiro/multi-oauth-react-native-api). 



# 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#)
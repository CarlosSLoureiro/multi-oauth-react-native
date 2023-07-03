import { UserInterface } from "@contexts/AppContext/types";
import TestContext from "@contexts/TestContext";

import ProfileCard from './index';

import { ProfileCardProps } from "./types";

import { render } from '@testing-library/react-native';

const component = (props: ProfileCardProps) => {
  return render(
    <TestContext>
      <ProfileCard {...props}/>
    </TestContext>
  );
};

describe(`ProfileCard`, () => {
  const user: UserInterface = {
    id: 1,
    name: `Carlos Loureiro`,
    email: `loureiro.s.carlos@gmail.com`,
    picture: `https://avatars.githubusercontent.com/u/19580424?v=4`,
    token: `user_token`
  };

  it(`must render user name and email`, () => {
    const { getByText } = component({user});

    expect(getByText(user.name)).toBeTruthy();
    expect(getByText(user.email)).toBeTruthy();
  });

  it(`must render user picture if it is not null`, () => {
    const { getByTestId } = component({user});

    const pictureElement = getByTestId(`user-picture`);
    expect(pictureElement.props.source).toEqual({
      uri: user.picture,
    });
  });

  it(`must render default picture if user picture is null`, () => {
    const defaultPicture = `https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360`;

    const { getByTestId } = component({user: {...user, picture: null}});

    const pictureElement = getByTestId(`user-picture`);
    expect(pictureElement.props.source).toEqual({
      uri: defaultPicture
    });
  });
});

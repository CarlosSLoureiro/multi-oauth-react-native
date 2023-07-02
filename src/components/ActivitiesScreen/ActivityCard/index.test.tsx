import TestContext from "@contexts/TestContext";

import { ResponseActivityModel } from "@remote/ListActivities/types";

import ActivityCard from './index';

import { ActivityCardProps } from "./types";

import { render } from '@testing-library/react-native';
import { format } from 'date-fns';

const component = (props: ActivityCardProps) => {
  return render(
    <TestContext>
      <ActivityCard {...props}/>
    </TestContext>
  );
};

describe(`ActivityCard`, () => {
  const activityProp: ResponseActivityModel = {
    id: 1,
    message: `This is a activity message`,
    date: new Date().toISOString(),
    user: {
      name: `Carlos Loureiro`,
      picture: `https://avatars.githubusercontent.com/u/19580424?v=4`,
    }
  };

  it(`must render user name and activity message`, () => {
    const { getByText } = component({activity: activityProp});

    expect(getByText(activityProp.user.name)).toBeTruthy();
    expect(getByText(activityProp.message)).toBeTruthy();
  });

  it(`must render activity date in specific format`, () => {
    const { getByText } = component({activity: activityProp});

    const formattedDate = format(new Date(activityProp.date), `EEE MMM dd yyyy HH:mm:ss`);
    expect(getByText(formattedDate)).toBeTruthy();
  });

  it(`must render user picture if it is not null`, () => {
    const { getByTestId } = component({activity: activityProp});

    const pictureElement = getByTestId(`user-picture`);
    expect(pictureElement.props.source).toEqual({
      uri: activityProp.user.picture,
    });
  });

  it(`must render default picture if user picture is null`, () => {
    const defaultPicture = `https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360`;
    activityProp.user.picture = null;

    const { getByTestId } = component({activity: activityProp});

    const pictureElement = getByTestId(`user-picture`);
    expect(pictureElement.props.source).toEqual({
      uri: defaultPicture
    });
  });
});

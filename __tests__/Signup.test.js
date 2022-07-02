import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import SignUp, { SIGNUP_MUTATION } from '../components/SignUp';
import { CURRENT_USER_QUERY } from '../components/User';
import fakeUser from '../lib/testUtils';

const me = fakeUser();
const password = 'wes';
const mocks = [
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: { name: me.name, email: me.email, password },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
];

describe('<SignUp/>', () => {
  it('render and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <SignUp />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it('calls the mutation properly', async () => {
    <MockedProvider>
      <SignUp />
    </MockedProvider>;
    await userEvent.type(screen.getByPlaceholderText(/name/), me.name);
    await userEvent.type(screen.getByPlaceholderText(/email/), me.email);
    await userEvent.type(screen.getByPlaceholderText(/password/), password);

    await userEvent.click(screen.getByText('Sign Up!'));
    await screen.findByText(
      `Signed up with ${me.email} - Please Go Head and Sign In!`
    );
  });
});

import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('testing the userlist input', () => {
  const users = [
    { name: 'john', email: 'john@john.com' },
    { name: 'jane', email: 'jane@jane.com' },
  ];

  //render

  render(<UserList users={users} />);

  const userList = screen.getAllByRole('row');

  expect(userList).toHaveLength(2);
});

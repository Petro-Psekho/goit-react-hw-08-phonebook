import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Stack spacing={2} direction="row">
        <Username>
          Welcome, <b>{user.name}</b>
        </Username>
        <Button
          style={{ height: '30px' }}
          variant="outlined"
          onClick={() => dispatch(logOut())}
        >
          LogOut
        </Button>
      </Stack>
    </Wrapper>
  );
};

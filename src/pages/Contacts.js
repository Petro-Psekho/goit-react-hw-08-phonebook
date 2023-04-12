import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';

import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { useContacts, useLoading, useError } from 'hooks';

import { FaAddressCard } from 'react-icons/fa';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Spinner } from 'components/Spinner/Spinner';

import {
  Container,
  Title,
  ContactsTitle,
  TitleWrap,
} from 'components/App.styled';

import { AnimationTada } from 'components/Animation/Animation.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contactsItems = useContacts();
  // const isLoading = useSelector(selectLoading);
  const isLoading = useLoading();
  const error = useError();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('Something went wrong, try again later');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      {isLoading && <Spinner />}

      <div>
        <TitleWrap>
          <FaAddressCard size={32} color={'#396fa5'} />
          <Title>Phonebook</Title>
        </TitleWrap>

        <AnimationTada>
          <ContactForm />
        </AnimationTada>

        <ContactsTitle>Contacts</ContactsTitle>

        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
      <Toaster />
    </Container>
  );
}

// <>
//   <Helmet>
//     <title>Your tasks</title>
//   </Helmet>
//   <ContactForm />
//   <div>{isLoading && 'Request in progress...'}</div>
//   <TaskList />
// </>

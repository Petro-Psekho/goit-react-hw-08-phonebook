import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { Toaster, toast } from 'react-hot-toast';

// import { fetchContacts } from 'redux/contacts/operations';
// import { useContacts, useLoading, useError } from 'hooks';

// import { FaAddressCard } from 'react-icons/fa';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { Spinner } from 'components/Spinner/Spinner';

// import {
//   Container,
//   Title,
//   ContactsTitle,
//   TitleWrap,
// } from 'components/App.styled';

// import { AnimationTada } from 'components/Animation/Animation.styled';

// export default function App() {
//   const contactsItems = useContacts();
//   const isLoading = useLoading();
//   const error = useError();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error === 'ERR_BAD_REQUEST') {
//       toast.error('Something went wrong, try again later');
//       return;
//     }
//     if (error) {
//       toast.error(error);
//     }
//   }, [error]);

//   return (
//     <Container>
//       {isLoading && <Spinner />}

//       <div>
//         <TitleWrap>
//           <FaAddressCard size={32} color={'#396fa5'} />
//           <Title>Phonebook</Title>
//         </TitleWrap>

//         <AnimationTada>
//           <ContactForm />
//         </AnimationTada>

//         <ContactsTitle>Contacts</ContactsTitle>

//         <Filter />
//         {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
//       </div>
//       <Toaster />
//     </Container>
//   );
// }

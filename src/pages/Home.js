import { FaAddressCard } from 'react-icons/fa';
import { Container, Title, TitleWrap } from 'components/App.styled';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <Container>
      <TitleWrap>
        <FaAddressCard size={52} color={'#396fa5'} />
        <Title>Phonebook</Title>
      </TitleWrap>
    </Container>
  );
}

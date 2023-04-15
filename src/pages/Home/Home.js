import { FaAddressCard } from 'react-icons/fa';
import { Container, Title, TitleWrap } from 'pages/Home/Home.styled';

export default function Home() {
  return (
    <Container>
      <TitleWrap>
        <FaAddressCard size={252} color={'#396fa5'} />
        <Title>PHONEBOOK</Title>
      </TitleWrap>
    </Container>
  );
}

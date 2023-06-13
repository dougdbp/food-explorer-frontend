import { FiChevronLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { PaymentItem } from '../../components/PaymentItem';

import { Container, Content } from './styles';

export function PaymentOnly() {
  return (
    <Container>
      <Header />

      <div className="wrapper">
        <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content>
          <section id="payment">
            <h1>Pagamento</h1>
            <PaymentItem/>
          </section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}

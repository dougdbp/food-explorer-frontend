import { Container } from "./styles";


export function Footer() {
  return (
    <Container>
      <div className="logo">
        <div>
          <svg
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0.744263L25.9904 8.24426V23.2443L13 30.7443L0.00961876 23.2443V8.24426L13 0.744263Z"
              fill="#4D585E"
            />
          </svg>
          food explorer
        </div>
      <p><span>© 2023 -</span> Todos os direitos reservados.</p>
      </div>

    </Container>
  );
}
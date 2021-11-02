import { ErrorMessage, Wrapper } from './Error.style';

const Error = ({ error }) => {
  return (
    <Wrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </Wrapper>
  );
};

export default Error;

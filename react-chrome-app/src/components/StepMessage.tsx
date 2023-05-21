import styled from "styled-components";

type StepMessageProps = {
  step: number;
};

const Container = styled.div`
  padding: 20px 0;
`;

export const StepMessage = ({ step }: StepMessageProps): JSX.Element => (
  <Container>message</Container>
);

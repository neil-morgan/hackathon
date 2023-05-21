import styled from "styled-components";

type StepActionsProps = {
  step: number;
};

const Container = styled.div`
  padding: 20px 0;
`;

export const StepActions = ({ step }: StepActionsProps): JSX.Element => {
  return <Container>actions</Container>;
};

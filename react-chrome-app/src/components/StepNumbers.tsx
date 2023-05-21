import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;

  &:after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    content: "";
    height: 6px;
    width: calc(100% - 40px);
    background: #fff;
  }
`;

const NumberDisc = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
  cursor: pointer;
`;

type StepNumbersProps = {
  steps: string[];
  onChange: (step: number) => void;
};

type StepNumberProps = {
  index: number;
  onClick: () => void;
};

export const StepNumbers = ({
  steps,
  onChange,
}: StepNumbersProps): JSX.Element => (
  <Container>
    {steps.map((_, i) => (
      <StepNumber key={i} index={i + 1} onClick={() => onChange(i)} />
    ))}
  </Container>
);

const StepNumber = ({ index, onClick }: StepNumberProps): JSX.Element => (
  <NumberDisc onClick={onClick}>{index}</NumberDisc>
);

import { Dna } from 'react-loader-spinner';
import { StyledWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledWrapper>
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </StyledWrapper>
  );
};

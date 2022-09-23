import styled from 'styled-components';
import '../App.css';

const BREAK_POINT_TABLET = 768;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  .title {
    font-weight: bold;
    font-size: 50px;
    padding-top: 10px;
    padding-left: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif
  }

  .button {
    background-color: #e7746f;
    border-radius: 15px;
    color: white;
    border: none;
    width: 150px;
    font-size: 40px;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 50px;
    display: flex;
    justify-content: center;
    .button {
      display: none;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <div className='header'>
        <Wrapper>
          <div className='title'>Blog</div>
          <button className='button'>Create</button>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
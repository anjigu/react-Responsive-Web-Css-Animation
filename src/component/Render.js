import styled from 'styled-components';
import '../App.css';
import LogoSrc from '../icon/profile.png';
import Chart from './Chart';


const BREAK_POINT_TABLET = 768;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
  border-radius: 100%;
  border: 10px solid white;
  background-color: transparent;

  @keyframes color-change-logo {
  0% {
    border: 10px solid rgba(196,22,190);
  }
  50% {
    border: 10px solid rgba(229,106,53);
  }
  100% {
    border: 10px solid #b22cff;
  }
  }
`;


const MainArea = styled.div`
.main-background{
  width: 100%;
  height: 100%;
  background-image: url('https://post-phinf.pstatic.net/MjAxOTA0MDFfMjcy/MDAxNTU0MDgzMTE1MDE5.iAjEePf1XBvuQjY0xXvuFnpGzpNoRwi00PpvRc84-jQg.ITnpdK1zXeIPOoZYZ3Hlss1ODzUGFNKM9lufRVUQ4L8g.JPEG/lukasz-szmigiel-11413-unsplash.jpg?type=w1200');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.move {
	animation: bg-pan-bl 8s both;
}
@keyframes bg-pan-bl {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

  height: 500px;
  color: white;
  
  
  .container {
    padding: 60px;
  }

  .color-change-logo {
    animation: color-change-logo 2s linear infinite alternate both;
}



  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    .blur {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  }
`;

const SubArea = styled.div`
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  height: 380px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.05);

  button {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    .container {
      width: 100%;
    }
  }
`;

const Render = () => {
  return (
    <>
      <MainArea>
        <div className='main-background move'>
        <div className='blur'>
        <div className='container'>
          <Logo src={LogoSrc} className="color-change-logo"/>
          <div className='text'>
            <h1>I am a super simple</h1>
            <h1>responsive site</h1>
            <h1>made by fejigu</h1>            
            </div>
            </div>
            </div>
        </div>
      </MainArea>
      <SubArea>
        <div className='container'>
          <h1>
            Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu
            neque.
          </h1>
          <br />
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
          <br />
          <button>Learn More</button>
        </div>
      </SubArea>
      <Chart></Chart>
    </>
  );
};



export default Render;
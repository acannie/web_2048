import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="introduce">
        <div className="welcome">
          WELCOME to 2048!
        </div>
        <div className="discreption">
          Click here for rules and details.
          <img src="/mark_arrow_right.png" />
          <a href="https://ja.wikipedia.org/wiki/2048_(%E3%82%B2%E3%83%BC%E3%83%A0)" className="about-btn">
            about 2048 (Wikipedia)
          </a>
        </div>
      </div>

      <a href="/game">
        <div className="start-btn">
          Start!
        </div>
      </a>


      <style jsx>
        {`
            .introduce {
              margin: 100px 25%;
              width: 50%;
              background-color: #999;
              text-align: center;
              border: 1px;
              top: 10px;
              border: solid 3px #6091d3;
              border-radius: 10px;
            }

            .welcome {
              text-align: center;
              font-size: 100px;
              font-weight: bold;
            }

            .discreption {
              text-align: center;
              margin: 20px;
            }

            .discreption img {
              height: 15px;
              width: auto;
            }

            .about-btn {
              padding: 10px;
              background-color: #EEE;
              border-radius: 45%;
            }

            .start-btn {
              font-weight: bold;
              margin: 100px 40%;
              text-align: center;
              color: #FFF;
              width: 20%;
              padding: 15px 40px;
              background-color: #5dca88;
              cursor: pointer;
              box-shadow: 0 7px #1a7940;
              border-radius: 45%;
            }
            
            .start-btn:active {
              position: relative;
              top: 7px;
              box-shadow: none;
            }
      `}
      </style>
    </div>


  );
}

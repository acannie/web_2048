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
          aaa
        </div>
      </div>
      <div className="start-btn">
        Start!
      </div>
      <style jsx>
        {`
            .introduce {
              margin: 100px 25%;
              width: 50%;
              background-color: #777;
              text-align: center;
              border: 1px;
              top: 10px;
              border: solid 3px #6091d3;/*線*/
              border-radius: 10px;/*角の丸み*/
            }

            .welcome {
              text-align: center;
              font-size: 100px;
              font-weight: bold;
            }

            .discreption {
              text-align: left;
              margin: 20px;
            }

            .start-btn {
              text-align: center;
              color: #FFF;
              width: 10px;
              padding: 15px 40px;
              background-color: #5dca88;
              cursor: pointer;
              box-shadow: 0 7px #1a7940;
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

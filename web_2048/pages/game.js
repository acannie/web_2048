import HeadSetting from "../components/HeadSetting"

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [
                [2,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            N: 4
        };
        this.handleClickArrowUp = this.handleClickArrowUp.bind(this);
        this.handleClickArrowLeft = this.handleClickArrowLeft.bind(this);
        this.handleClickArrowRight = this.handleClickArrowRight.bind(this);
        this.handleClickArrowDown = this.handleClickArrowDown.bind(this);
        this.generateNewNum = this.generateNewNum.bind(this);
    }

    render() {
        return (
            <div><React.Fragment>
                <HeadSetting />
                <div className="main-wrapper board">

                    <table border="2">
                        {this.state.nums.map((row) => {
                            return (
                                <tr>{
                                    row.map((num) => {
                                        return (
                                            <td>{
                                                num ? num : ''
                                            }</td>
                                        );
                                    })
                                }</tr>
                            );
                        })}
                    </table>
                </div>
                <div className="command-btn up">
                    <a href="#" onClick={this.handleClickArrowUp}>
                        <img src="mark_arrow_up.png" className="img_up" />
                    </a>
                </div>
                <br />
                <div className="command-btn left">
                    <a href="#" onClick={this.handleClickArrowLeft}>
                        <img src="mark_arrow_left.png" className="img_up" />
                    </a>
                </div>
                <div className="command-btn right">
                    <a href="#" onClick={this.handleClickArrowRight}>
                        <img src="mark_arrow_right.png" className="img_up" />
                    </a>
                </div>
                <div className="command-btn down">
                    <a href="#" onClick={this.handleClickArrowDown}>
                        <img src="mark_arrow_down.png" className="img_up" />
                    </a>
                </div>
            </React.Fragment>

                <style jsx>{`
                .main-wrapper {
                    background-color: #FFF;
                }
    
                .board {
                    margin-top: 30px;
                    margin-left: 200px;
                }
                
                table {
                    border-collapse: collapse;
                    border: solid 2px orange;/*表全体を線で囲う*/
                }
    
                table td {
                    height: 100px;
                    width: 100px;
                    text-align: center;
                    font-size: 50px;
                }
    
                table th, table td {
                }

                .command-btn {
                    text-align: center;
                    color: #FFF;
                    background-color: #5dca88;
                    cursor: pointer;
                    box-shadow: 0 7px #1a7940;
                }
                  
                .command-btn:active {
                    position: relative;
                    top: 7px;
                    box-shadow: none;
                }

                .up {
                    width: 100px;
                    height: 120px;
                    margin-top: 50px;
                    margin-left: 350px;
                }
                
                .left {
                    width: 120px;
                    height: 100px;
                    margin-left: 100px;
                    display: inline-box;
                }

                .right {
                    width: 120px;
                    height: 100px;
                    margin-left: 350px;
                    display: inline-box;
                }

                .down {
                    width: 100px;
                    height: 120px;
                    margin-left: 350px;
                    margin-bottom: 50px;
                }

                .img_up {
                    width: 100px;
                    height: 120px;
                }
            `}</style>
            </div>
        );
    }

    generateNewNum(newNums) {
        // let numsCpy = this.state.nums.slice(0, this.state.nums.length);
        let numsCpy = newNums.slice(0, this.state.nums.length);

        const newNum = (Math.floor(Math.random() * 2) + 1) * 2; // 2 or 4
        let generateFlg = false;

        while (!generateFlg) {
            let i = Math.floor(Math.random() * 4); // 0 to 3
            let j = Math.floor(Math.random() * 4); // 0 to 3

            if (numsCpy[i][j] === 0) {
                numsCpy[i][j] = newNum;
                generateFlg = true;
            }
        }

        this.setState({ nums: numsCpy });
    }

    handleClickArrowUp() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        for (let j = 0; j < this.state.N; j++) {
            let tmp1 = new Array();
            for (let i = 0; i < this.state.N; i++) {
                let n = this.state.nums[i][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp3 = new Array();
            while (tmp1.length !== 0) {
                let tmp2 = tmp1[0];
                tmp1.shift();

                if (tmp1.length !== 0 && tmp2 === tmp1[0]) {
                    tmp2 *= 2;
                    tmp1.shift();
                }

                tmp3.push(tmp2);
            }

            let tmp3_size = tmp3.length;
            newNums.push(new Array());
            for (let i = 0; i < tmp3_size; i++) {
                newNums[i][j] = tmp3[0];
                tmp3.shift();
            }
        }
        this.setState({ nums: newNums });
        this.generateNewNum(newNums);
    }

    handleClickArrowLeft() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        for (let i = 0; i < this.state.N; i++) {
            let tmp1 = new Array();
            for (let j = 0; j < this.state.N; j++) {
                let n = this.state.nums[i][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp3 = new Array();
            while (tmp1.length !== 0) {
                let tmp2 = tmp1[0];
                tmp1.shift();

                if (tmp1.length !== 0 && tmp2 === tmp1[0]) {
                    tmp2 *= 2;
                    tmp1.shift();
                }

                tmp3.push(tmp2);
            }

            let tmp3_size = tmp3.length;
            newNums.push(new Array());
            for (let j = 0; j < tmp3_size; j++) {
                newNums[i][j] = tmp3[0];
                tmp3.shift();
            }
        }
        this.setState({ nums: newNums });
        this.generateNewNum(newNums);

    }

    handleClickArrowRight() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        for (let i = 0; i < this.state.N; i++) {
            let tmp1 = new Array();
            for (let j = 0; j < this.state.N; j++) {
                let n = this.state.nums[i][this.state.N - j - 1];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp3 = new Array();
            while (tmp1.length !== 0) {
                let tmp2 = tmp1[0];
                tmp1.shift();

                if (tmp1.length !== 0 && tmp2 === tmp1[0]) {
                    tmp2 *= 2;
                    tmp1.shift();
                }

                tmp3.push(tmp2);
            }

            let tmp3_size = tmp3.length;
            newNums.push(new Array());
            for (let j = 0; j < tmp3_size; j++) {
                newNums[i][this.state.N - j - 1] = tmp3[0];
                tmp3.shift();
            }
        }
        this.setState({ nums: newNums });
        this.generateNewNum(newNums);
    }

    handleClickArrowDown() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        for (let j = 0; j < this.state.N; j++) {
            let tmp1 = new Array();
            for (let i = 0; i < this.state.N; i++) {
                let n = this.state.nums[this.state.N - i - 1][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp3 = new Array();
            while (tmp1.length !== 0) {
                let tmp2 = tmp1[0];
                tmp1.shift();

                if (tmp1.length !== 0 && tmp2 === tmp1[0]) {
                    tmp2 *= 2;
                    tmp1.shift();
                }

                tmp3.push(tmp2);
            }

            let tmp3_size = tmp3.length;
            newNums.push(new Array());
            for (let i = 0; i < tmp3_size; i++) {
                newNums[this.state.N - i - 1][j] = tmp3[0];
                tmp3.shift();
            }
        }
        this.setState({ nums: newNums });
        this.generateNewNum(newNums);
    }
}

export default Game
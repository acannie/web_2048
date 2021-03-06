import HeadSetting from "../components/HeadSetting"

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [
                [2, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
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
                <div className="board">

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
                        <img src="mark_arrow_up.png" className="cursor-btn" />
                    </a>
                </div>
                <br />
                <div className="command-btn left">
                    <a href="#" onClick={this.handleClickArrowLeft}>
                        <img src="mark_arrow_left.png" className="cursor-btn" />
                    </a>
                </div>
                <div className="command-btn right">
                    <a href="#" onClick={this.handleClickArrowRight}>
                        <img src="mark_arrow_right.png" className="cursor-btn" />
                    </a>
                </div>
                <div className="command-btn down">
                    <a href="#" onClick={this.handleClickArrowDown}>
                        <img src="mark_arrow_down.png" className="cursor-btn" />
                    </a>
                </div>
            </React.Fragment>

                <style jsx>{`
    
                .board {
                    margin-top: 30px;
                    margin-left: 200px;
                }
                
                table {
                    border-collapse: collapse;
                    border: solid 2px orange; /*表全体を線で囲う*/
                }
    
                table td {
                    height: 100px;
                    width: 100px;
                    text-align: center;
                    font-size: 50px;
                }
    
                // table th {
                // }

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

                .cursor-btn {
                    width: 100px;
                    height: 120px;
                }
            `}</style>
            </div>
        );
    }

    generateNewNum(newNums) {
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
        let newMovedFlg = false;

        for (let j = 0; j < this.state.N; j++) {
            let tmp1 = new Array();
            for (let i = 0; i < this.state.N; i++) {
                let n = this.state.nums[i][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp2 = new Array();
            while (tmp1.length !== 0) {
                if (tmp1.length > 0 && tmp1[0] === tmp1[1]) {
                    tmp2.push(tmp1[0] * 2);
                    tmp1.shift();
                } else {
                    tmp2.push(tmp1[0]);
                }
                tmp1.shift();
            }

            let sizeOfTmp2 = tmp2.length;
            newNums.push(new Array());
            for (let i = 0; i < sizeOfTmp2; i++) {
                newNums[i][j] = tmp2[0];
                tmp2.shift();
            }

            // diff check
            for (let i = 0; i < this.state.N; i++) {
                if (this.state.nums[i][j] !== newNums[i][j]) {
                    newMovedFlg = true;
                }
            }

        }
        this.setState({ nums: newNums });
        if (newMovedFlg) {
            this.generateNewNum(newNums);
        }
    }

    handleClickArrowLeft() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let newMovedFlg = false;

        for (let i = 0; i < this.state.N; i++) {
            let tmp1 = new Array();
            for (let j = 0; j < this.state.N; j++) {
                let n = this.state.nums[i][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp2 = new Array();
            while (tmp1.length !== 0) {
                if (tmp1.length > 0 && tmp1[0] === tmp1[1]) {
                    tmp2.push(tmp1[0] * 2);
                    tmp1.shift();
                } else {
                    tmp2.push(tmp1[0]);
                }
                tmp1.shift();
            }

            let sizeOfTmp2 = tmp2.length;
            newNums.push(new Array());
            for (let j = 0; j < sizeOfTmp2; j++) {
                newNums[i][j] = tmp2[0];
                tmp2.shift();
            }

            // diff check
            for (let j = 0; j < this.state.N; j++) {
                if (this.state.nums[i][j] !== newNums[i][j]) {
                    newMovedFlg = true;
                }
            }

        }
        this.setState({ nums: newNums });
        if (newMovedFlg) {
            this.generateNewNum(newNums);
        }
    }

    handleClickArrowRight() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let newMovedFlg = false;

        for (let i = 0; i < this.state.N; i++) {
            let tmp1 = new Array();
            for (let j = 0; j < this.state.N; j++) {
                let n = this.state.nums[i][this.state.N - j - 1];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp2 = new Array();
            while (tmp1.length !== 0) {
                if (tmp1.length > 0 && tmp1[0] === tmp1[1]) {
                    tmp2.push(tmp1[0] * 2);
                    tmp1.shift();
                } else {
                    tmp2.push(tmp1[0]);
                }
                tmp1.shift();
            }

            let sizeOfTmp2 = tmp2.length;
            newNums.push(new Array());
            for (let j = 0; j < sizeOfTmp2; j++) {
                newNums[i][this.state.N - j - 1] = tmp2[0];
                tmp2.shift();
            }

            // diff check
            for (let j = 0; j < this.state.N; j++) {
                if (this.state.nums[i][this.state.N - j - 1] !== newNums[i][this.state.N - j - 1]) {
                    newMovedFlg = true;
                }
            }

        }
        this.setState({ nums: newNums });
        if (newMovedFlg) {
            this.generateNewNum(newNums);
        }
    }

    handleClickArrowDown() {
        let newNums = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        let newMovedFlg = false;

        for (let j = 0; j < this.state.N; j++) {
            let tmp1 = new Array();
            for (let i = 0; i < this.state.N; i++) {
                let n = this.state.nums[this.state.N - i - 1][j];
                if (n !== 0) {
                    tmp1.push(n);
                }
            }

            let tmp2 = new Array();
            while (tmp1.length !== 0) {
                if (tmp1.length > 0 && tmp1[0] === tmp1[1]) {
                    tmp2.push(tmp1[0] * 2);
                    tmp1.shift();
                } else {
                    tmp2.push(tmp1[0]);
                }
                tmp1.shift();
            }

            let sizeOfTmp2 = tmp2.length;
            newNums.push(new Array());
            for (let i = 0; i < sizeOfTmp2; i++) {
                newNums[this.state.N - i - 1][j] = tmp2[0];
                tmp2.shift();
            }

            // diff check
            for (let i = 0; i < this.state.N; i++) {
                if (this.state.nums[this.state.N - i - 1][j] !== newNums[this.state.N - i - 1][j]) {
                    newMovedFlg = true;
                }
            }

        }
        this.setState({ nums: newNums });
        if (newMovedFlg) {
            this.generateNewNum(newNums);
        }
    }
}

export default Game
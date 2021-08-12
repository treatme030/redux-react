import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux' //store와 연결
import { addview } from '../redux/index';

const Views = ({ count, addview}) => {
    const [number, setNumber] = useState(1)
    return (
        <div className="items">
            <h2>조회수: {count}</h2>
            <input type="text" value={number}
            onChange={(e) => setNumber(e.target.value)}/>
            {/* 입력된 수 action으로 전달 */}
            <button onClick={() => addview(number)}>조회하기!</button>
        </div>
    );
};

const mapStateToProps = ({views}) => {
    return {
        count: views.count
    }
}

const mapDispatchToProps = {
    addview: (number) => addview(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);
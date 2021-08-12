import React from 'react';
import { connect } from 'react-redux' //store와 연결
import { addSubscriber } from '../redux/index';

const Subscribers = ({ count, addSubscriber}) => {
    return (
        <div className="items">
            <h2>구독자 수: {count}</h2>
            <button onClick={() => addSubscriber()}>구독하기!</button>
        </div>
    );
};

//mapStateToProps: store의 상태 수신, store 상태가 변경될 때마다 호출됨
//구조분해할당으로 state 생략 
const mapStateToProps = ({subscribers}) => {
    return {
        count: subscribers.count
    }
}
//인수로 함수 또는 객체를 넘길 수 있음 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber : () => dispatch(addSubscriber())
//     }
// }
const mapDispatchToProps = {
    addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
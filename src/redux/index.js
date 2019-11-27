/**
 * @description redux&&redux-saga
 * @author dadawanan
 * @since 2019-11-25
 */

/**
 * 1.Provider(react-redux)
 * 2.createStore(reducer)
 * 3.combineReducers合并reducer
 * 4.配置reducer
 * 5.配置action
 * 6.connect连接action和reducer的state
 * 7.组件使用reducer的state和action
 */
import React from "react";
import * as Action from "./action/action";
import { connect } from "react-redux";

const App = (props) => {
    const { increment, decrement,asyncincrement,asyncdecrement } = props;
    return (
        <div className="container">
            <h1 className="text-center mt-5">redux+redux-saga</h1>
            <h1 className="text-center mt-5">{props.text}{props.count}</h1>
            <p className="text-center">
                <button onClick={()=>asyncincrement()}>延迟1秒增加</button>
                <button className="btn btn-primary mr-2" onClick={() => increment()}> 增加</button>
                <button className="btn btn-danger my-2" onClick={() => decrement()}> 减少</button>
                <button onClick={()=>{asyncdecrement()}}>延迟1秒减少</button>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count,
    text: state.hello
});

export default connect(mapStateToProps, Action)(App);
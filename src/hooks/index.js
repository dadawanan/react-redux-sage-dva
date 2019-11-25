/**
 * @description hooks 实现redux
 * @author dadawanan
 * @since 2019-11-23
 */

/**
 * 1.建立一个包裹组件，通过children的方式去渲染
 * 2.在父组件中用useReducer初始化state,dispatch
 * 3.给createContext的provider赋值value
 * 3.5.把子组件赋值给children(包裹一层，防止重复渲染)
 * 4.配置reducer,处理不同逻辑
 * 5.在子组件中接收useContext的值(state,dispatch),传入子组件
 * 6.子子组件中使用state中的值，并dispatch事件
 */
import React, { useContext, createContext, useReducer } from 'react';
const NumContext = createContext();
async function asyncreducer(state, action) {
    const value = await new Promise((resolve, resject) => {
        resolve({ ...state, num: action.value + 1 })
    })
    console.log(value)
    return value
}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NUM":
            return { ...state, num: action.value + 1 };
        case "REDUCE_NUM":
            return { ...state, num: action.value - 1 };
        case "ASYNC_ADD":
            return { ...state, num: action.payload.value + 1 };
        // return asyncreducer(state, action.payload)
        default:
            return state;
    }
};
function HookRedux({ state, dispatch }) {
    async function asyncaddnum() {
        await new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    dispatch({ type: "ASYNC_ADD", payload: { value: state.num } })
                }, 1000)
        })
    }
    const addnum = () => {
        dispatch({ type: "ADD_NUM", value: state.num })
    }
    const reduceNum = () => {
        dispatch({ type: "REDUCE_NUM", value: state.num })
    }
    return (<div>
        <div>context+hooks</div>
        <button onClick={asyncaddnum}>异步+(暂未解决)</button>
        <button onClick={addnum}>+</button>
        {state.num}
        <button onClick={reduceNum}>-</button>
    </div>
    )
}

function Package() {
    const { state, dispatch } = useContext(NumContext)
    console.log(state)
    return (<HookRedux state={state} dispatch={dispatch}></HookRedux>)
}

function GetNum({ children }) {
    const [state, dispatch] = useReducer(reducer, { num: 0 });
    console.log(state)
    return (
        <NumContext.Provider
            value={{
                state: state,
                dispatch: dispatch
            }}>
            {children}
        </NumContext.Provider>
    );
}
//控制重复渲染
const App = () => {
    return (<GetNum>
        <Package></Package>
    </GetNum>)
}

export default App
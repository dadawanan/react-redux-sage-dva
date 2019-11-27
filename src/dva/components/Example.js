import React from 'react';
import { connect } from 'dva';

const Example = (props) => {
  console.log(props)
  return (
    <div>
     <h2>{ props.example.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'example/watcherworker',payload:{count:props.example.count}})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'example/save',payload:{count:props.example.count-1}})}}>-</button>
    </div>
  );
};

Example.propTypes = {
};

export default connect(a=>a)(Example);
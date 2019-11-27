
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default {

  namespace: 'example',

  state: {
    count:0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log(dispatch,history)
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      //yield put({ type: 'save' ,payload});
      yield call(delay, 1000);
      yield put({ type: 'save',payload });
    },
    watcherworker:[
      function *(action,{put,call}){
        yield call(delay, 1000);
        console.log(action.payload.count) //0
        action.payload.count=action.payload.count+1
        yield put({type: 'save',payload:action.payload });
      },
      {
        type:'takeEvery'
      }
    ]
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

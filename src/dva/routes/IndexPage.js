import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from '../components/Example'

function IndexPage(props) {
  console.log(props)
  return (
    <div className={styles.normal}>
      <Example></Example>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(a=>a)(IndexPage);

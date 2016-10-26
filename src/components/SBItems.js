import React, { PropTypes, Component } from 'react';
import {formatBytes} from '../actions'
import SBItemFiles from './SBItemFiles'
require('../styles/index.css')

export default class SBItems extends Component {
  render () {
    return (
      <div>
        {this.props.sbitems.map((item, i) =>
          <section key={i} className='scienceBaseItem'>
            <a href={item.link.url} className='title'>{item.title}</a>
            <SBItemFiles sbfiles={item.files}></SBItemFiles>
          </section>
        )}
      </div>
    );
  }
}

SBItems.propTypes = {
  sbitems: PropTypes.array.isRequired
};

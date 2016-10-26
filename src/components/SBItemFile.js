import React, { Component } from 'react';
import {formatBytes} from '../numberFormatting'

export default class SBItemFile extends Component {
  render () {
    const sbfile = this.props.sbfile
    const fs = formatBytes(sbfile.size)
    return (<section className='files' key='{this.props.index}'>
        <span>Files:</span>
          <a href={sbfile.url} className='filelink'>{sbfile.name}</a>
        <span className='filesize'>{fs}</span>
      </section>)
  }
}

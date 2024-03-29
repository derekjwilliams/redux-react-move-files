import React, { Component } from 'react';
import SBItemFile from './SBItemFile'

export default class SBItemFiles extends Component {
  render () {
    const files = this.props.sbfiles
    if (typeof files !== 'undefined') {
      return (<div>{files.map((file, i) =>
        <SBItemFile sbfile={file} index={i} />
      )}</div>)
    } else return (<div>No Files</div>)
  }
}

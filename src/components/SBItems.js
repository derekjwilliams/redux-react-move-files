import React, { PropTypes, Component } from 'react';
require('../styles/index.css')


function Files(props) {
  const sbitem = props.sbitem;
  if (sbitem.files != undefined) {
    return (
      <div>{sbitem.files.map((file,j) =>
        {
          const fs = formatBytes(file.size)
          return <section className='files' key='file{j}'>
              <span>Files:</span>
                <a href={file.url} className='filelink'>{file.name}</a>
              <span className='filesize'>{fs}</span>
            </section>
        })}
      </div>
    )
  } else {
    return <div>no associated files</div>
  }
}
export default class SBItems extends Component {
  render () {
    return (
      <div>
        {this.props.sbitems.map((item, i) =>
          <section key={i} className='scienceBaseItem'>
            <a href={item.link.url} className='title'>{item.title}</a>
            <Files sbitem={item} />
          </section>
        )}
      </div>
    );
  }
}
function formatBytes(count) {
    if (count >= 1024) {
      const i = Math.floor(Math.log2(count)/10);
      const units = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
      return ((count / Math.pow(1024, i)).toFixed(1) + " " + units[i-1] + 'iB');
    }
    return count +  "bytes";
}

SBItems.propTypes = {
  sbitems: PropTypes.array.isRequired
};

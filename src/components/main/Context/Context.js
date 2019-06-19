import React, { Component } from 'react';
import styles from './Context.scss';
import classNames from 'classnames/bind';
import EnhancedTable from './EnhancedTable';
 import AlignItemsList from './AlignItemsList';
const cx = classNames.bind(styles);

class Context extends Component {
  render() {
    return (
      <div className={cx('context')}>
          <div className={cx('system')}>
            전체 공지 사항
          </div>
          <div className={cx('notice')} >
              <div className={cx('directory')} >
                  <div className={cx('folder')}>
                    <EnhancedTable category='폴더' rows={this.props.folderNotice} />
                  </div>
                  <div className={cx('comment')}>
                    <AlignItemsList rows={this.props.chatNotice}/>
                  </div>
              </div>
              <div className={cx('note')}>
                    <EnhancedTable category='노트' rows={this.props.noteNotice}/>
              </div>
              
          </div>
      </div>
    );
  }
}

export default Context;
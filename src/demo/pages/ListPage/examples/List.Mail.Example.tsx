import * as React from 'react';
import {
  List
} from '../../../../index';
import './List.Mail.Example.scss';
import { createListItems } from '../../../utilities/data';

export class MailTile extends React.Component<any, any> {
  public render() {
    let { item } = this.props;
    return (
      <div className='ms-ListItem is-unread is-selectable'>
        <span className='ms-ListItem-primaryText'>{ item.name }</span>
        <span className='ms-ListItem-secondaryText'>{ item.title }</span>
        <span className='ms-ListItem-tertiaryText'>{ item.description }</span>
        <span className='ms-ListItem-metaText'>2:42p</span>
        <div className='ms-ListItem-selectionTarget js-toggleSelection'></div>
        <div className='ms-ListItem-actions'>
          <div className='ms-ListItem-action'></div>
          <div className='ms-ListItem-action'></div>
          <div className='ms-ListItem-action'></div>
          <div className='ms-ListItem-action'></div>
        </div>
    </div>
    );
  }
}

export default class MailListExample extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className='ms-font-xxl'>Inbox</h1>
        <div className='MailList'>
          <List
            items={ createListItems(10000) }
            onRenderCell={ (item, index) => (
              <MailTile item={ item } />
            )}
          />
        </div>
      </div>
    );
  }
}

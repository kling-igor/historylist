import React, { PureComponent } from 'react'
import { Colors, Button, MenuItem, Position } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
import moment from 'moment'

import styled, { createGlobalStyle } from 'styled-components'

import { GlobalStyle } from './style'

const items = [
  { title: 'add View', time: '19.07.02-22:41' },
  { title: 'remove Button (#mybutton)', time: '19.07.02-22:21' },
  { title: 'change properties (#mybutton)', time: '19.07.02-20:41' },
  { title: 'move List', time: '19.07.02-19:41' },
  { title: 'move View', time: '19.07.02-18:54' },
  { title: 'add Mapbox', time: '19.07.02-17:01' },
  { title: 'add View1', time: '19.07.01-22:41' },
  { title: 'remove Button (#mybutton)1', time: '19.07.01-22:21' },
  { title: 'change properties (#mybutton)1', time: '19.07.01-20:41' },
  { title: 'move List1', time: '19.07.01-19:41' },
  { title: 'move View1', time: '19.07.01-18:54' },
  { title: 'add Mapbox1', time: '19.07.01-17:01' },
  { title: 'add View2', time: '19.06.30-22:41' },
  { title: 'remove Button (#mybutton)2', time: '19.06.30-22:21' },
  { title: 'change properties (#mybutton)2', time: '19.06.30-20:41' },
  { title: 'move List2', time: '19.06.30-19:41' },
  { title: 'move View2', time: '19.06.30-18:54' },
  { title: 'add Mapbox2', time: '19.06.30-17:01' },
  { title: 'add View3', time: '19.07.02-22:41' },
  { title: 'remove Button (#mybutton)3', time: '19.06.02-22:21' },
  { title: 'change properties (#mybutton)3', time: '19.06.02-20:41' },
  { title: 'move List3', time: '19.06.02-19:41' },
  { title: 'move View3', time: '19.06.02-18:54' },
  { title: 'add Mapbox3', time: '19.06.02-17:01' }
]

const renderItem = (item, { handleClick, modifiers, query }) => {
  return (
    <MenuItem
      active={modifiers.active}
      disabled={false}
      label={<span className="bp3-text-small">{moment(item.time, 'YY.MM.DD-HH:mm').fromNow()}</span>}
      key={`${item.title}${item.time}`}
      onClick={handleClick}
      text={item.title}
    />
  )
}

export default class App extends PureComponent {
  state = { activeItem: items[0] }

  handleValueChange = value => {
    this.setState({ activeItem: value })
  }

  onActiveItemChange = value => {
    this.setState({ activeItem: value })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <div
          className="bp3-dark"
          style={{
            height: '100%',
            backgroundColor: Colors.DARK_GRAY3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Select
            activeItem={this.state.activeItem}
            items={items}
            allowCreate={false}
            filterable={false}
            hasInitialContent={false}
            resetOnClose={false}
            resetOnSelect={false}
            itemRenderer={renderItem}
            onItemSelect={this.handleValueChange}
            onActiveItemChange={this.onActiveItemChange}
            scrollToActiveItem={true}
            popoverProps={{ minimal: true, hasBackdrop: false, position: Position.BOTTOM }}
            // https://blueprintjs.com/docs/#core/components/popover
          >
            <Button icon="history" active minimal small />
          </Select>
        </div>
      </>
    )
  }
}

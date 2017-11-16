import React from 'react'
import {List, WhiteSpace, Modal, Toast} from 'antd-mobile'

const prompt = Modal.prompt;
const Item = List.Item

export default class Browse extends  React.Component {
    constructor (props) {
        super(props)
        this.addFriend = this.addFriend.bind(this)
    }

    addFriend () {
        prompt('添加尬友', '请输入对方手机号',
            [
                { text: '取消' },
                {text: '确定', onPress: val => {
                    if (val) {
                        this.props.history.push(`/detinfo/${val}`)
                    }  else {
                        Toast.info('手机号码不能为空', 1);
                    }
                }}
            ])
    }
    render () {
        return (
            <div>
                <WhiteSpace/>
                <List>
                    <Item arrow="horizontal" onClick={() => {}}>尬聊圈</Item>
                </List>
                <WhiteSpace/>
                <List>
                <Item arrow="horizontal" onClick={this.addFriend}>添加尬友</Item>
                </List>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleSearchFocus = this.handleSearchFocus.bind(this);
        this.handleSearchBlur = this.handleSearchBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe609;</i>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleSearchFocus}
                                onBlur={this.handleSearchBlur} />
                        </CSSTransition>
                        <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe60d;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe616;</i>写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    handleSearchFocus() {
        this.setState({
            focused: true
        })
    }
    handleSearchBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as userActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const { focused, isLogin, itemList, handleSearchFocus, handleSearchBlur, logout } = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe609;</i>
                    </NavItem>
                    <div>
                        {
                            isLogin ? <NavItem className='right' onClick={logout}>注销</NavItem> : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
                        }
                    </div>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => { handleSearchFocus(itemList) }}
                                onBlur={handleSearchBlur} />
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe60d;</i>
                        {this.getSearchInfo()}
                    </SearchWrapper>
                    <Addition>
                        <Link to="write">
                            <Button className="writting">
                                <i className="iconfont">&#xe616;</i>写文章
                        </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }

    getSearchInfo() {
        const { focused, mouseIn, itemList, page, totalPage, handleMouseIn, handleMouseOut, handleChangePage } = this.props;
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
                            <i className='iconfont spin' ref={(icon) => { this.spinIcon = icon }}>&#xe600;</i>
                        换一批
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            itemList.slice((page - 1) * 10, page * 10).map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        }
        return null;
    }
}


const mapStateToProps = (state) => {
    return {
        // state.getIn(['header','headerSearchFocus'])
        focused: state.get('header').get('headerSearchFocus'),
        itemList: state.get('header').get('searchInfoList'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleSearchFocus(itemList) {
            if (itemList.size === 0) {
                dispatch(actionCreators.getSearchInfoList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleSearchBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseIn() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseOut() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                page++;
            } else {
                page = 1;
            }
            dispatch(actionCreators.changePage(page));
        },
        logout() {
            dispatch(userActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Header);

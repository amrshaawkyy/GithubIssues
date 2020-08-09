import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable'
class PageNavigation extends Component {
    render() {
        return (
            <Swipeable
                onSwipedLeft={this.props.onSwipingLeft}
                onSwipedRight={this.props.onSwipingRight}
            >
                {this.props.children}
            </Swipeable>
        )
    }
}
export default PageNavigation;
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }
    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    }
    render() {
        
        return (<React.Fragment>
            {/* <img src={this.state.imageUrl} alt=""/> */}
            {/* <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button> */}
            {this.state.tags.length === 0 && 'please create a tag'}
            {
               this.renderTags()
            }
        </React.Fragment>)
    }

}

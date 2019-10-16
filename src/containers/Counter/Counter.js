import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import *  as actionTypes from "../../store/actions";

class Counter extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter} />
                <br />
                <button onClick={() => this.props.StoreResult(this.props.ctr)}>SHOW RESULTS</button>
                <ul>
                    {this.props.storedResults.map(item => (
                        <li key={item.id} onClick={() => this.props.DeleteResult(item.id)}>{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 10 }),
        StoreResult: (result) => dispatch({ type: actionTypes.STORERESULT, result: result }),
        DeleteResult: (id) => dispatch({ type: actionTypes.DELRESULT, value: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
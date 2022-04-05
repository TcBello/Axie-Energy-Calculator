import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RoundEnums from './roundEnums';
 

// DEFAULT STATE
const defaultState = {
    roundCount: 1,
    energyCount: 3,
    prevRoundCount: 0,
    prevEnergyCount: 0,
    isBloodMoon: false
};

// REDUCER
const roundReducer = (state = defaultState, action) => {
    console.log(action.type);
    switch(action.type){
        case RoundEnums.AddEnergy:
            return {
                energyCount: state.energyCount + 1,
                roundCount: state.roundCount,
                isBloodMoon: state.isBloodMoon,
            };
        case RoundEnums.RemoveEnergy:
            if(state.energyCount === 0){
                return state;
            }
            else{
                return {
                    energyCount: state.energyCount - 1,
                    roundCount: state.roundCount,
                    isBloodMoon: state.isBloodMoon
                };
            }
        case RoundEnums.EndTurn:
            if(state.roundCount >= 9){
                return {
                    energyCount: state.energyCount + 2,
                    roundCount: state.roundCount + 1,
                    prevEnergyCount: state.energyCount,
                    prevRoundCount: state.roundCount,
                    isBloodMoon: true
                };
            }
            else{
                return {
                    energyCount: state.energyCount + 2,
                    roundCount: state.roundCount + 1,
                    prevEnergyCount: state.energyCount,
                    prevRoundCount: state.roundCount,
                    isBloodMoon: false
                };
            }
        case RoundEnums.UndoRound:
            if(state.prevRoundCount != null && state.prevEnergyCount != null){
                return {
                    energyCount: state.prevEnergyCount,
                    roundCount: state.prevRoundCount,
                    isBloodMoon: state.prevRoundCount > 9
                        ? true
                        : false
                };
            }
            else{
                return state;
            }
        case RoundEnums.ResetRound:
            return defaultState;
        default:
            return state;
    }
};

// STORE
const store = createStore(roundReducer, applyMiddleware(thunk));

// MAP STATE TO PROPS
export function mapStateToProps(state){
    return {
        energyCount: state.energyCount,
        roundCount: state.roundCount,
        isBloodMoon: state.isBloodMoon
    }
}

// MAP DISPATCH TO PROPS
export function mapDispatchToProps(dispatch){
    return {
        addEnergy: () => dispatch({type: RoundEnums.AddEnergy}),
        removeEnergy: () => dispatch({type: RoundEnums.RemoveEnergy}),
        endTurn: () => dispatch({type: RoundEnums.EndTurn}),
        undoRound: () => dispatch({type: RoundEnums.UndoRound}),
        resetRound: () => dispatch({type: RoundEnums.ResetRound})
    }
}

export default store;
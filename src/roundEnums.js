class RoundEnums{
    static AddEnergy = new RoundEnums("ADD_ENERGY");
    static RemoveEnergy = new RoundEnums("REMOVE_ENERGY");
    static UndoRound = new RoundEnums("UNDO_ROUND");
    static ResetRound = new RoundEnums("RESET_ROUND");
    static EndTurn = new RoundEnums("END_TURN");

    constructor(state){
        this.state = state
    }
}

export default RoundEnums;
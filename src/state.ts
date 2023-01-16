const state = {

    data: {
        machine: 0,
        user: 0
    },

    currentPlay: {
        machine: 0,
        user: 0, 
        match: ""
    },

    listeners: [],

    getState() {
        return this.data;
    },

    setState(newState: Object) {
        console.log("STATE RECIEVED ==>| ", newState);
        this.data = newState;

        for(const cb of this.listeners) {
            cb();                           
        }
    },

    subscribe(callback: (any: any) => any) {
        console.log(`CALLBACK SUBSCRIBED ==>| ${callback}`);
        this.listeners.push(callback);
    },

    updateScore(match: string, machine: number, user: number) {
        const currentState = this.getState();

        if(match == "draw") {
            currentState.machine++;
            currentState.user++;
        } else if(match == "user-wins") {
            currentState.user++;
        } else if(match == "machine-wins") {
            currentState.machine++;
        }

        this.currentPlay.machine = machine;
        this.currentPlay.user = user;
        this.currentPlay.match = match;
        this.setState(currentState);
    }
};

export { state };
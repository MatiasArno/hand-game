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

    // listeners: [],

    init(){
        const storedState = localStorage.getItem('state') as string;
        storedState == null ? console.log("No stored data to render...") : this.setState(JSON.parse(storedState));
    },

    getState() {
        return this.data;
    },

    setState(newState: Object) {
        console.log("STATE RECIEVED ==>| ", newState);
        this.data = newState;
        localStorage.setItem('state', JSON.stringify(newState));

        // for(const cb of this.listeners) {
        //     cb();                           
        // }
    },

    // subscribe(callback: (any: any) => any) {
    //     console.log(`CALLBACK SUBSCRIBED ==>| ${callback}`);
    //     console.log(this.listeners, "TOTAL LISTENERS");
    //     this.listeners.push(callback);
    // },

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

        this.currentPlay = {
            machine: machine,
            user: user,
            match: match
        }

        this.setState(currentState);
    }
};

export { state };
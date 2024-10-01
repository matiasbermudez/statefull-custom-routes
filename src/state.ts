

const state = {
    data: {
        nombre: "",

    },
    listeners: [],
    getState() {
        return this.data
    },
    setState(newState) {
        this.data = newState;
        for(const cb of this.listeners){
            cb();
        }
        console.log("soy el nuevo state: ", this.data)
    },
    subscribe(callback: () => any) {
        this.listeners.push(callback)
    }
}

export { state  }
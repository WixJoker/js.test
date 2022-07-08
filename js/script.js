class Hamburger {
    static const DB = {
        stuffing: {
            STUFFING_SALAD: {
                type: "STUFFING_SALAD",
                price: 300,
                ccal: 200,
            },
            STUFFING_POTATO: {
                type: "STUFFING_POTATO",
                price: 400,
                ccal: 100,
            },
            TOPPING_MAYO: {
                type: "TOPPING_MAYO",
                price: 300,
                ccal: 400,
            },
            TOPPING_SPICE: {
                type: "TOPPING_SPICE",
                price: 500,
                ccal: 700,
            },
        },
    }
    sizes: {
        S: 200,
        L: 300,
        M: 400,
    },
    addSize() {
        console.log(Object.entries(this.sizes));
    };
    addTopping() {

    };
    removeTopping() {

    };
    getStuffing() {
        return this.toppings = []
    };
    calculatePrice() {

    };
    calculateCalories() {

    };
    showError() {
        if () {

        };
    }
}

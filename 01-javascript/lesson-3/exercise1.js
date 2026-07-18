function createVisitorCounter(roomName = "Visitor Counter") {
    let visitors = 0; // Private variable (Closure)

    return {
        enter() {
            visitors++;
            console.log(`[${roomName}] Visitor #${visitors} entered`);
        },

        exit() {
            if (visitors === 0) {
                console.log(`[${roomName}] No visitors to exit`);
                return;
            }

            visitors--;
            console.log(`[${roomName}] One visitor exited`);
        },

        totalVisitors() {
            console.log(`[${roomName}] Current Visitors: ${visitors}`);
        },

        reset() {
            visitors = 0;
            console.log(`[${roomName}] Counter Reset`);
        }
    };
}
const visitor = createVisitorCounter();

visitor.enter();
visitor.enter();
visitor.enter();

visitor.totalVisitors();

visitor.exit();

visitor.totalVisitors();

visitor.reset();

visitor.totalVisitors();
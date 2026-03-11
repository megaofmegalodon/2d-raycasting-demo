import Point from "./Point";

export default class Vector extends Point {
    // This is unused, overplanning in a nutshell.
    normalize() {
        const len = Math.hypot(this.x, this.y);

        if (len === 0) {
            return new Vector(0, 0);
        }

        return new Vector(this.x / len, this.y / len);
    }
}
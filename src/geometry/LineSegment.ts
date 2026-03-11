import Point from "./Point";

export const segments: LineSegment[] = [];

export default class LineSegment {
    points: Point[] = Array.from({ length: 2 }, () => new Point(0, 0));

    constructor(pointOne: Point, pointTwo: Point) {
        this.points[0].x = pointOne.x;
        this.points[0].y = pointOne.y;

        this.points[1].x = pointTwo.x;
        this.points[1].y = pointTwo.y;
    }
}
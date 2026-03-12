import Vector2 from './Vector2';


class Ray {
    origin: Vector2;
    direction: Vector2;

  
    constructor(origin: Vector2, direction: Vector2) {
        this.origin = origin;
        this.direction = direction.normalize();
    }

   
    intersect(lineStart: Vector2, lineEnd: Vector2): { point: Vector2; t: number; u: number } | null {
        const h = lineEnd.subtract(lineStart);
        const denominator = this.direction.x * h.y - this.direction.y * h.x;


        if (Math.abs(denominator) < 1e-10) {
            return null;
        }

        const diff = lineStart.subtract(this.origin);
        const t = (diff.x * h.y - diff.y * h.x) / denominator;
        const u = (diff.x * this.direction.y - diff.y * this.direction.x) / denominator;

        
        if (t >= 0 && u >= 0 && u <= 1) {
            const point = this.origin.add(this.direction.multiply(t));
            return { point, t, u };
        }

        return null;
    }

    
    getPointAtDistance(distance: number): Vector2 {
        return this.origin.add(this.direction.multiply(distance));
    }
}

export default Ray;

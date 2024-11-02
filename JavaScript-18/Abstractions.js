function solveQuadratic(a, b, c) {
    // Calculate the discriminant
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant > 0) {
        // Two real solutions
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("The equation has two real roots:", root1, "and", root2);

    } else if (discriminant === 0) {
        // One real solution
        let root = -b / (2 * a);
        console.log("The equation has one real root:", root);
        
    } else {
        // No real solutions
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The equation has two complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
    }
}

// Example usage:
solveQuadratic(1, -3, 2); // Example with real roots
solveQuadratic(1, -2, 1); // Example with one real root
solveQuadratic(1, 1, 1);  // Example with complex roots

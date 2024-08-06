function run(a) {
    if (a.length === 0) return 0;

    let current_max = a[0];
    let global_max = a[0];
    let max_element = a[0];

    for (let i = 1; i < a.length; i++) {
        current_max = Math.max(a[i], current_max + a[i]);
        global_max = Math.max(global_max, current_max);
        max_element = Math.max(max_element, a[i]);
    }

    return global_max > max_element ? global_max : max_element;
}

// Example usage
console.log(run([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6

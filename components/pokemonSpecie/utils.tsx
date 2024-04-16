export function formatWeight(weight: number) {
    const weightString = weight.toString()
    const int = weightString.substring(0, weightString.length-1);
    const dec = weightString.substring(weightString.length-1, weightString.length);
    return parseFloat(int + "." + dec); 
}

export function weightToPounds(weight: number) {
    return (weight*2.205).toFixed(2)
}
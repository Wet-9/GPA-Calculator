function calculatorGPA(arr) {
    var sum = 0;
    var courses = arr.length;



    for (var i = 0; i < courses; i++) {
        if (arr[i] === "A") {
            sum += 4;
        } else if (arr[i] === "B") {
            sum += 3;
        } else if (arr[i] === "C") {
            sum += 2;
        } else if (arr[i] === "D") {
            sum += 1;
        } else {
            sum += 0;
        }
    }

    var average = sum / arr.length;
    var gpa;
    if (average >= 3.5) {
        gpa = "A";
    } else if (average >= 2.5) {
        gpa = "B";
    } else if (average >= 1.5) {
        gpa = "C";
    } else if (average >= 0.5) {
        gpa = "D";
    } else {
        gpa = "F";
    }

    console.log("Your GPA is: " + gpa);
    return gpa;
}


function calculateGPA() {
    var gradesInput = document.getElementById("grades").value;
    // grabs the value input Ex: [A,B,A]
    var grades = gradesInput.split(",");
    // Splits the input into its group in the array. Ex: ["A" , "B" , "A"]
    var gpa = calculatorGPA(grades);
    // Calls the function to calculate the GPA and assigns the value to GPA
    document.getElementById("result").innerHTML = "Your GPA is: " + gpa;
}

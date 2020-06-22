function percToGPA(percentage) {
    var GPA;
    GPA = (percentage / 20) - 1;
    console.log("Your GPA for "+percentage+"% is " + GPA);
}

percToGPA(79);
percToGPA(50);
percToGPA(95);
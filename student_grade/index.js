function studentMarks(marks) {
    if (marks<40) {
        return 'E'
    }
    else if (marks >= 40 && marks < 49) {
        return 'D'
    }
    else if (marks >=49 && marks <=59) {
        return 'C'
    }
    else if (marks >=60 && marks <=79) {
        return 'B'
    }
    else if (marks >79 && marks <=100) {
        return 'A'
    }
}
console.log(studentMarks(80));
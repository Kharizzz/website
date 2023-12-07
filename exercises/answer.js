
function submit() {
    let finalGrade = 0;

    if (document.getElementById("1b").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("2a").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("3b").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("4a").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("5b").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("6b").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("7b").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("8a").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("9a").checked) {
        finalGrade = finalGrade + 1
    }
    if (document.getElementById("10b").checked) {
        finalGrade = finalGrade + 1
    }

    let ucapan

    if (finalGrade === 10) {
        ucapan = "sepuh🙌"
    } else if (finalGrade === 9){
        ucapan = "pinter banget😱"
    } else if (finalGrade === 8){
        ucapan = "jago😎"
    } else if (finalGrade === 7){
        ucapan = "lumayan✌️"
    } else if (finalGrade === 6){
        ucapan = "gapapa👍"
    } else if (finalGrade === 5){
        ucapan = "jangan menyerah💪"
    } else if (finalGrade === 4){
        ucapan = "belajar lagi ya💪"
    } else if (finalGrade === 3){
        ucapan = "yuk bisa yuk belajar lagi💪"
    } else if (finalGrade === 2){
        ucapan = "gapapa, besok tingkatkan lagi💪"
    } else if (finalGrade === 1){
        ucapan = "tetap semangat😭"
    } else if (finalGrade === 0){
        ucapan = "maaf...🙏"
    } 

    document.getElementById("result").innerHTML = `Your Score Is: ${finalGrade}/10 (${ucapan})`
}
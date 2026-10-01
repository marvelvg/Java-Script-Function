const score =  [80, 75, 90, 60, 95, 85, 70, 88, 92, 78];

// FUNGSI SOME

const Lowscore = score.some((value) => {
    return (value < 70);
})

console.log(Lowscore  ? "Ada" : "Tidak Ada");

// EVERY

const scoreAverage = score.every((value) =>{
    return (value >= 60);
})

console.log(scoreAverage ? "Semua Lulus" : "Ada yang Tidak Lulus");
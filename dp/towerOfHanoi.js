export default {
    start: 0,
    during: 0,
    end: 0,

    setDefault: function () {
        this.start = 3;
        this.during = 0;
        this.end = 0;
    },

    moveTower: function (start, during, end, towerLang) {
        if (towerLang <= 0) {
            return false;
        }
        this.moveTower(start, end, during, towerLang - 1);
        process.stdout.write(`${towerLang}번 원반을 ${start}에서 ${during}로 옮깁니다.\n`);
        this.moveTower(end, during, start, towerLang - 1);
    },

    // TODO 완성 해야 함.
    // moveSet: function(s, d, e) {
    //     process.stdout.write(`${this.start}번 원반을 ${s}에서 ${d}로 옮깁니다.`);
    //     this.start--;
    //     this.during++;
    //     this.getStatus();
    //     process.stdout.write(`${this.start}번 원반을 ${s}에서 ${e}로 옮깁니다.`);
    //     this.start--;
    //     this.end++;
    //     this.getStatus();
    //     process.stdout.write(`${this.during}번 원반을 ${d}에서 ${e}로 옮깁니다.`);
    //     this.during--;
    //     this.end++;
    //     this.getStatus();
    // },

    getStatus: function() {
        console.log('s:%d d:%d e:%d', this.start, this.during, this.end);
    }
}
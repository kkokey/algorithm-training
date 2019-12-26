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
        console.log('%d번 원반을 %s에서 %s로 옮깁니다.', towerLang, start, during);
        this.moveTower(end, during, start, towerLang - 1);
    },

    moveSet: function(s, d, e) {
        console.log('%d번 원반을 %s에서 %s로 옮깁니다.', this.start, s, d);
        this.start--;
        this.during++;
        this.getStatus();
        console.log('%d번 원반을 %s에서 %s로 옮깁니다.', this.start, s, e);
        this.start--;
        this.end++;
        this.getStatus();
        console.log('%d번 원반을 %s에서 %s로 옮깁니다.', this.during, d, e);
        this.during--;
        this.end++;
        this.getStatus();
    },

    getStatus: function() {
        console.log('s:%d d:%d e:%d', this.start, this.during, this.end);
    }
}
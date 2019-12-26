import towerOfHanoi from "../towerOfHanoi";

describe('', () => {
    it('should two plus two is four', () => {
        towerOfHanoi.moveTower('start', 'during', 'end' , 3);
        towerOfHanoi.setDefault();
        // towerOfHanoi.moveSet('start', 'during', 'end');
    });
});

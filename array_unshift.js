Array.prototype.insertFirstPosition = function(value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = value;
};

Array.prototype.removeFirstPosition = function() {
    const auxArray = [];
    
    for(let i = 0; i < this.length - 1; i++) { 
        auxArray[i] = this[i + 1];
    }

    return auxArray;
}

const a = [0, 1, 2];

a.insertFirstPosition(-1);
console.log('a[] insert -1:', a);

const newA = a.removeFirstPosition()
console.log('a[] remove a[0]:', newA);
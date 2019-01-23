class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRED_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRED_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (!this.keyMap[index]) return undefined;
        return this.keyMap[index].find(e => e[0] === key)
    }

    values() {
        let values = [];
        this.keyMap.map(e => e.map(i => values.push(i[1])))
        return values;
    }

    keys() {
        let values = [];
        this.keyMap.map(e => e.map(i => values.push(i[0])))
        return values;
    }
}

let ht = new HashTable();
ht.set('hello world', 'goodbye!!');
ht.set('dogs', 'are cool!!')
ht.set('cats', 'are fine!!')
ht.set('i love', 'pizza!!')
console.log(ht);
console.log(ht.get('cats'));
console.log(ht.values());
console.log(ht.keys());
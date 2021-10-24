console.log('this is js tutorial 51');
// Iterators

function blockchainIterators(values) {  
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {  
            if (nextIndex < values.length) {
                // we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // we will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const blockchainTypes = ['bitcoin', 'ethereum', 'solana', 'binance', 'matic', 'cardano', 'ripple'];
console.log('Type of blockchain are', blockchainTypes);

// using the iterator protocol 
const blockchain = blockchainIterators(blockchainTypes);
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());
// console.log(blockchain.next());

console.log(blockchain.next().value);
console.log(blockchain.next().value);
console.log(blockchain.next().value);
console.log(blockchain.next().value);
console.log(blockchain.next().value);
console.log(blockchain.next().value);
console.log(blockchain.next().value);
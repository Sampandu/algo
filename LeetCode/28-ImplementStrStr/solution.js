/* eslint-disable complexity */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
//solution1, time complexity O(n^2)
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }

    if (haystack === '') {
        return -1
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j
        for (j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                break
            }
        }
        if (j === needle.length) {
            return i
        }
    }
    return -1
};

//solution2, using Rabin Karp algo, time complexity O(n+m)
var strStr = function(haystack, needle) {
    const BASE = 1000000   //module base

    const m = needle.length
    if (m === 0) {
        return 0
    }

    if (haystack ==='') {
        return -1
    }

    //calculate 31^m, 31 is a experienced coefficient in constructing a hash function
    let power = 1
    for (let i = 0; i < m; i++) {
        power = power * 31 % BASE
    }

    //calculate hashing value of needle
    let needleCode = 0
    for (let i = 0; i < m; i++) {
        //hash function calculating the integer of a substring
        //use charCodeAt(i) to get the ASCII value
        needleCode = (needleCode * 31 + needle.charCodeAt(i)) % BASE
    }

    //calculate the hashing value of substring of haystack
    let haystackCode = 0
    for (let i = 0;  i < haystack.length; i++) {
        haystackCode = (haystackCode * 31 + haystack.charCodeAt(i)) % BASE

        //abc + d
        if (i < m - 1) {
            continue
        }

        //abc + d - a
        if (i >= m) {
            haystackCode = haystackCode - (haystack.charCodeAt(i - m) * power) % BASE
            if (haystackCode < 0) {
                haystackCode += BASE
            }
        }

        if (needleCode === haystackCode) {
            //slice(start, end) rather than slice(start, length)
            if (haystack.slice(i - m + 1, i + 1) === needle) {
                return i - m + 1
            }
        }
    }
    return -1
}

const primeFactorization = num => {
    if (num <= 1) return num

    const result = []
    const up = Math.floor(Math.sqrt(num))

    for (let i = 2; i <= up; i++) {
        while (num % i === 0) {
            num /= i
            result.push(i)
        }
    }

    if (num > 1) result.push(num)

    return result
}

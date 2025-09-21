# Prime Number Check with `isPrime(n)`

This function checks whether a given number `n` is a **prime number** using an optimized approach.

---

## Explanation

### 1. Handle Small Numbers
- `n <= 1` → not prime (covers negatives, 0, and 1).
- `n <= 3` → prime (2 and 3 are prime numbers).

### 2. Eliminate Multiples of 2 and 3
- If `n` is divisible by `2` or `3`, it is **not prime**.
- This filters out a large group of numbers quickly.

### 3. Check Factors of Form `(6k ± 1)`
- All prime numbers greater than 3 are of the form `6k ± 1` (e.g., 5, 7, 11, 13, 17...).
- The loop:
  - Starts at `5`.
  - Increments by `6` (`i += 6`), checking `i` and `i + 2`.
  - Runs until `i * i <= n`.
  - If any divisor is found, `n` is **not prime**.

### 4. Return True
- If no divisors are found up to `√n`, then `n` is prime.

---

## 📊 Complexity Analysis

### Time Complexity
- Base checks → **O(1)**
- Factor loop up to `√n` → **O(√n)**
- **Total = O(√n)**

### Space Complexity
- No extra data structures used.
- **Total = O(1)**

function isPrime(n) {
  if (n <= 1) return false;       // negatives, 0, 1 → not prime
  if (n <= 3) return true;        // 2 and 3 → prime

  // eliminate multiples of 2 and 3 early
  if (n % 2 === 0 || n % 3 === 0) return false;

  // check possible factors of form (6k ± 1) up to sqrt(n)
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

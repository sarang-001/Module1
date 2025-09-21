# 📱 Generating Random Mobile Numbers and Removing Duplicates with Set

This script demonstrates how to:

1. Generate **random 10-digit mobile numbers** starting with 7, 8, or 9.  
2. **Add duplicate numbers** manually.  
3. Use a **Set** to remove duplicates and keep only unique numbers.  

---

## ⚙️ Complexity Analysis

### 🔹 1. Generating 10 Random Numbers
- Loop runs `n` times.  
- Each operation is constant time.  
- **Time Complexity**: O(n)  
- **Space Complexity**: O(n)  

---

### 🔹 2. Adding Duplicates
- Only a few fixed push operations.  
- **Time Complexity**: O(1)  
- **Space Complexity**: O(n)  

---

### 🔹 3. Converting Array to Set
- Insertion into a Set is **O(1)** on average.  
- For `n` elements, total complexity is linear.  
- **Time Complexity**: O(n)  
- **Space Complexity**: O(n)  

---

### 🔹 4. Printing Values
- Printing or traversal depends on the number of elements.  
- **Time Complexity**: O(n)  

---

## 📊 Overall Complexity

### Time Complexity
- Generating numbers → **O(n)**  
- Adding duplicates → **O(1)**  
- Creating Set → **O(n)**  
- Printing → **O(n)**  
- **➡️ Total: O(n)**  

### Space Complexity
- Array storage → **O(n)**  
- Set storage → **O(n)**  
- **➡️ Total: O(n)**  

---

## ✅ Conclusion
The script executes in **linear time** with respect to the number of generated mobile numbers and requires **linear space** for storing them.  

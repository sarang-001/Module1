# Playwright Page Object Model (POM) with TypeScript

This structure demonstrates a **best-practice implementation** of the **Page Object Model (POM)** pattern using **Playwright with TypeScript**.  
It provides a scalable foundation for writing clean, maintainable, and reusable end-to-end tests.

## 📂 Project Structure
project/
├─ pages/
│ ├─ BasePage.ts # Common utilities shared across pages
│ ├─ LoginPage.ts # Example login page object
├─ tests/
│ ├─ login.spec.ts # Example tests using the POM
├─ playwright.config.ts # Playwright configuration


## 🔑 Why this is Best Practice

### 1. BasePage avoids duplication
- Common methods like `navigateTo()`, `isVisible()`, and assertions live in **BasePage**.  
- All other pages extend this class, keeping tests **DRY** and maintainable.  

### 2. Encapsulation
- Locators are **private**, so they can’t be accessed directly from tests.  
- Page actions (e.g., `login()`) are **public methods**, ensuring tests only interact with business-level operations.  

### 3. TypeScript strictness
- Strong typing for parameters (`string`) and return values (`Promise<void>`).  
- Provides **autocompletion** in IDEs and catches mistakes at compile time.  

### 4. Scalability
- Easy to add more pages: just create a new class extending `BasePage`.  
- Clear separation of concerns: each page object only manages its own UI interactions.  

### 5. Readability
- Tests remain **clean and business-focused**.  
- Example:  
  ```typescript
  await loginPage.login('validUser', 'validPass');
  await expect(page).toHaveURL(/dashboard/);

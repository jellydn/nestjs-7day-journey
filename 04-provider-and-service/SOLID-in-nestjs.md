## 🏛 [SOLID Principles](https://en.wikipedia.org/wiki/SOLID) in Nest.js

Since Nest enables the possibility to design and organize dependencies in a more object-oriented way, we strongly recommend following the SOLID principles. These principles provide a robust foundation for writing clean and maintainable code.

### 1. **Single Responsibility Principle (SRP)**

- **What:** A class should have only one reason to change.
- **How in Nest.js:** Use services to encapsulate specific functionality and keep controllers lean.

Example:

```typescript
// Good: Service has a single responsibility
@Injectable()
export class UserService {
  createUser() { /* ... */ }
}

// Bad: Controller has more than one responsibility
@Controller('users')
export class UserController {
  createUser() { /* ... */ }
  calculateUserAge() { /* ... */ } // Not a responsibility of the UserController
}
```

### 2. **Open/Closed Principle (OCP)**

- **What:** Software entities should be open for extension but closed for modification.
- **How in Nest.js:** Use modules and extendable providers to create flexible and extendable code structures.

Example:

```typescript
// Good: Easily extendable without modifying existing code
export class OrderProcessor {
  process(order: Order, strategy: PaymentStrategy) {
    strategy.pay(order);
  }
}

// New payment strategies can be added without modifying existing code
export class PaypalStrategy implements PaymentStrategy {
  /* ... */
}
export class CreditCardStrategy implements PaymentStrategy {
  /* ... */
}
```

### 3. **Liskov Substitution Principle (LSP)**

- **What:** Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- **How in Nest.js:** Utilize inheritance and ensure that derived classes maintain the contract established by the base class.

Example

```typescript
// Good: Derived class maintains the contract established by the base class
class Bird {
  fly() {
    /* ... */
  }
}

class Sparrow extends Bird {
  /* Inherits fly method */
}
class Penguin extends Bird {
  /* Overrides fly method appropriately */
}
```

### 4. **Interface Segregation Principle (ISP)**

- **What:** Clients should not be forced to depend on interfaces they do not use.
- **How in Nest.js:** Define clear and specific interfaces for services and providers, ensuring they expose only the necessary methods and properties.

Example:

```typescript
// Good: Specific interfaces for specific clients
interface OrderService {
  createOrder(): void;
}

interface InventoryService {
  checkStock(): void;
}

class OnlineStore implements OrderService, InventoryService {
  /* ... */
}
```

### 5. **Dependency Inversion Principle (DIP)**

- **What:** High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **How in Nest.js:** Use dependency injection and abstract classes or interfaces to invert dependencies, making the system more decoupled and extensible.

Example:

```typescript
// Good: High-level module depends on abstraction, not a concrete implementation
@Injectable()
export class OrderService {
  constructor(private paymentService: PaymentService) {}

  processOrder(order: Order) {
    this.paymentService.process(order);
  }
}

// PaymentService is an abstraction that can have multiple implementations
export interface PaymentService {
  process(order: Order): void;
}
```

Understanding and applying the SOLID principles in your Nest.js projects will lead to more organized, reusable, and maintainable code. They align with the core philosophies of Nest.js and enable developers to build scalable and robust applications.

## Resources

- [Angular - Understanding dependency injection](https://angular.io/guide/dependency-injection)
- [GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz](https://www.youtube.com/watch?v=v-2yFMzxqwU)

I do enjoy this old good presentation about SOLID. Below is my takeaway for TDD + SOLID

[![TDD](https://i.gyazo.com/568c40fbbb46478ba4fa08e9b2daa463.png)](https://gyazo.com/568c40fbbb46478ba4fa08e9b2daa463)

- Is is DRY?
- Does it has one responsibility? ([S] in SOLID)
- Does everything in it change same rate?
- Does it depends on thing change less often than it does? (less is good)

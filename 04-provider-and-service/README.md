<h1 align="center">Welcome to Nest.js 101: Providers and Services 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: UNLICENSED" src="https://img.shields.io/badge/License-UNLICENSED-yellow.svg" />
  </a>
</p>

> Explore Providers and Services in Nest.js! Learn how to manage dependencies, create reusable logic, and write maintainable code.

## 💡 Learning Objectives

By the end of this lesson, you'll be able to:

- Understand what providers are and how they work in Nest.js.
- Create and inject services into controllers.
- Use custom providers for more advanced use cases.
- Apply best practices for service-oriented architecture.

### 🧩 Injection Scopes

In Nest.js, understanding injection scopes is vital for managing the lifecycle of providers. Unlike the request/response Multi-Threaded Stateless Model found in some languages, Nest.js utilizes singleton instances shared across requests, making it fully safe for your applications.

However, Nest.js also offers flexibility with different provider scopes:

#### **1. DEFAULT (Singleton Scope)**

A single instance of the provider is shared across the entire application. The instance's lifetime is directly tied to the application lifecycle.

```typescript
// Singleton by default
@Injectable()
export class MyService { /* ... */ }
```

#### **2. REQUEST**

A new instance of the provider is created exclusively for each incoming request and is garbage-collected after the request has completed processing.

```typescript
// Per-request scope
@Injectable({ scope: Scope.REQUEST })
export class MyRequestScopedService { /* ... */ }
```

#### **3. TRANSIENT**

Transient providers are not shared across consumers. Each consumer that injects a transient provider will receive a new, dedicated instance.

```typescript
// Transient scope
@Injectable({ scope: Scope.TRANSIENT })
export class MyTransientService { /* ... */ }
```

Understanding these scopes is essential for scenarios like per-request caching in GraphQL applications, request tracking, and multi-tenancy.

For more details, visit the [Nest.js documentation on Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes).

## 🚀 Getting Started

Remember, the best way to learn is by doing. Follow along and get coding!

### Installation

```bash
$ pnpm install
```

### Running the App

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Resources

- [Providers | NestJS - A progressive Node.js framework](https://docs.nestjs.com/providers)
- [Custom Providers | NestJS - A progressive Node.js framework](https://docs.nestjs.com/fundamentals/custom-providers)
- [SOLID Principles in Nest.js](./SOLID-in-nestjs.md)

## 🌟 Show Your Support

If you find this project useful, please give a ⭐️ to show your support. Happy coding, and enjoy your journey with Nest.js! 🦌💻

import { Course } from "@/types";

export const typescriptMastery: Course = {
  id: "typescript-mastery",
  slug: "typescript",
  title: "TypeScript Mastery",
  description: "Lập trình type-safe với TypeScript nâng cao",
  image: "/images/typescript-course.jpg",
  duration: "10 tuần",
  level: "intermediate",
  lessons: [
    {
      id: "1",
      title: "Type System Nâng cao",
      slug: "type-system-nang-cao",
      duration: "60 phút",
      content: `# Type System Nâng cao trong TypeScript

## Union và Intersection Types

### Union Types
\`\`\`typescript
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

let userId: ID = 123;  // OK
userId = 'abc123';     // OK
// userId = true;      // Error

function getStatusColor(status: Status): string {
  switch(status) {
    case 'pending': return 'yellow';
    case 'success': return 'green';
    case 'error': return 'red';
  }
}
\`\`\`

### Intersection Types
\`\`\`typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  role: string;
  permissions: string[];
}

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'superadmin',
  permissions: ['read', 'write', 'delete']
};
\`\`\`

## Generics

### Generic Functions
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity(42); // Type inference

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // number

const strings = ['a', 'b', 'c'];
const firstString = getFirstElement(strings); // string
\`\`\`

### Generic Interfaces
\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'John' },
  status: 200,
  message: 'Success'
};

const productResponse: ApiResponse<Product> = {
  // ...
};
\`\`\`

## Utility Types

### Partial<T>
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>) {
  // Chỉ cập nhật các trường được cung cấp
}

updateUser(1, { name: 'Jane' }); // OK
updateUser(1, { phone: '123' }); // Error
\`\`\`

### Required<T> và Readonly<T>
\`\`\`typescript
interface Props {
  name?: string;
  age?: number;
}

const props1: Props = { name: 'John' }; // OK
const props2: Required<Props> = { name: 'John', age: 25 }; // Bắt buộc

const user: Readonly<User> = { id: 1, name: 'John' };
// user.name = 'Jane'; // Error - readonly
\`\`\`

### Pick<T, K> và Omit<T, K>
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
type UserWithoutPassword = Omit<User, 'password'>;

const preview: UserPreview = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
};
\`\`\`

## Conditional Types
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

type ExtractType<T> = T extends { type: infer U } ? U : never;

type Event = { type: 'click'; x: number; y: number };
type EventType = ExtractType<Event>; // 'click'
\`\`\`

## Bài tập thực hành
Hãy áp dụng advanced types trong các tình huống thực tế!`,
      exercises: [
        {
          id: "1-1",
          title: "Xây dựng Generic API Client",
          description: "Tạo generic client cho REST API",
          instructions: `Tạo generic API client với các type safety features:
1. Generic function cho GET requests
2. Generic function cho POST requests  
3. Error handling với discriminated unions`,
          type: "code",
          starterCode: `// Viết code TypeScript của bạn ở đây
interface ApiError {
  code: number;
  message: string;
}

// Định nghĩa types và functions`,
          solution: `// Generic API Client
interface ApiError {
  code: number;
  message: string;
}

type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: ApiError };

async function apiGet<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data: T = await response.json();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: { 
        code: 500, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      } 
    };
  }
}

async function apiPost<T, U>(url: string, body: T): Promise<ApiResponse<U>> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data: U = await response.json();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: { 
        code: 500, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      } 
    };
  }
}

// Usage example
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
}

async function createUser(userData: CreateUserRequest) {
  const result = await apiPost<CreateUserRequest, User>('/api/users', userData);
  
  if (result.success) {
    console.log('User created:', result.data);
    return result.data;
  } else {
    console.error('Error:', result.error);
    throw new Error(result.error.message);
  }
}

async function getUser(id: number) {
  const result = await apiGet<User>(\`/api/users/\${id}\`);
  
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error.message);
  }
}`,
        },
        {
          id: "1-2",
          title: "Advanced Utility Types",
          description: "Tạo custom utility types cho các tình huống phức tạp",
          instructions: `Tạo các custom utility types:
1. DeepPartial - recursive partial
2. Nullable - cho phép null và undefined
3. Branded types cho type safety
4. Function overloads với conditional types`,
          type: "code",
          starterCode: `// Tạo custom utility types
type DeepPartial<T> = // Implement recursive partial

type Nullable<T> = // Cho phép T | null | undefined

// Branded types để phân biệt các primitive types
type UserId = string & { readonly brand: unique symbol };`,
          solution: `// Custom Utility Types

// 1. DeepPartial - recursive partial
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

interface UserProfile {
  id: number;
  address: {
    street: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const partialProfile: DeepPartial<UserProfile> = {
  address: {
    city: "Hanoi",
    coordinates: {} // Có thể bỏ qua lat và lng
  }
};

// 2. Nullable types
type Nullable<T> = T | null | undefined;

type MaybeString = Nullable<string>;
const str1: MaybeString = "hello";
const str2: MaybeString = null;
const str3: MaybeString = undefined;

// 3. Branded types cho type safety
declare const brand: unique symbol;

type Brand<T, B> = T & { [brand]: B };

type UserId = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;

function createUserId(id: string): UserId {
  return id as UserId;
}

function createProductId(id: string): ProductId {
  return id as ProductId;
}

const userId = createUserId('user-123');
const productId = createProductId('product-456');

// Không thể nhầm lẫn giữa UserId và ProductId
// function getUser(id: UserId) { ... }
// getUser(productId); // Type error!

// 4. Function overloads với conditional types
type AsyncResult<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

function handleResult<T, E = Error>(
  result: AsyncResult<T, E>
): T {
  if (result.success) {
    return result.data;
  } else {
    throw result.error;
  }
}

// 5. Conditional type helpers
type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
type ArrayElement = ExtractArrayType<string[]>; // string
type NotArray = ExtractArrayType<string>; // never

type Flatten<T> = T extends (infer U)[] ? U : T;
type Flat1 = Flatten<string[]>; // string
type Flat2 = Flatten<number>; // number

// 6. Mapped types với template literal types
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 7. Strict Omit - chỉ cho phép keys tồn tại
type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview = StrictOmit<Todo, 'completed'>;
// { id: number; title: string; }

// 8. RequireAtLeastOne - yêu cầu ít nhất một property
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> 
  & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys];

interface Config {
  host?: string;
  port?: number;
  timeout?: number;
}

type RequiredConfig = RequireAtLeastOne<Config, 'host' | 'port'>;

const validConfig: RequiredConfig = { host: 'localhost' }; // OK
const validConfig2: RequiredConfig = { port: 3000 }; // OK
// const invalidConfig: RequiredConfig = {}; // Error`,
        },
      ],
    },
    {
      id: "2",
      title: "Advanced Generics và Type Constraints",
      slug: "advanced-generics",
      duration: "70 phút",
      prerequisites: ["1"],
      content: `# Advanced Generics và Type Constraints

## Generic Constraints

### Basic Constraints
\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength([1, 2, 3]); // OK
logLength('hello');    // OK
// logLength(42);      // Error - number không có length
\`\`\`

### Multiple Constraints
\`\`\`typescript
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = mergeObjects(
  { name: 'John', age: 30 },
  { city: 'Hanoi', country: 'Vietnam' }
);
// { name: 'John', age: 30, city: 'Hanoi', country: 'Vietnam' }
\`\`\`

## Keyof và Lookup Types

### Keyof Operator
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: 'John', email: 'john@example.com' };
const name = getProperty(user, 'name'); // string
// getProperty(user, 'age'); // Error - 'age' không tồn tại trong User
\`\`\`

### Mapped Types
\`\`\`typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type PartialUser = Optional<User>;
// { id?: number; name?: string; email?: string; }
\`\`\`

## Conditional Types với Generics

### Type Inference trong Conditional Types
\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser(): { id: number; name: string } {
  return { id: 1, name: 'John' };
}

type UserReturn = ReturnType<typeof getUser>; // { id: number; name: string }
\`\`\`

### Distributive Conditional Types
\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;

type StringArray = ToArray<string>; // string[]
type NumberArray = ToArray<number>; // number[]
type UnionArray = ToArray<string | number>; // string[] | number[]
\`\`\`

## Generic Classes

### Generic Class Definition
\`\`\`typescript
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items[id];
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(item => !predicate(item));
  }
}

// Usage
interface Product {
  id: number;
  name: string;
  price: number;
}

const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: 'Laptop', price: 1000 });
\`\`\`

### Generic Constraints với Classes
\`\`\`typescript
interface Identifiable {
  id: number | string;
}

class IdentifiableRepository<T extends Identifiable> {
  private items: Map<T['id'], T> = new Map();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: T['id']): T | undefined {
    return this.items.get(id);
  }

  update(id: T['id'], updates: Partial<T>): void {
    const existing = this.items.get(id);
    if (existing) {
      this.items.set(id, { ...existing, ...updates });
    }
  }
}
\`\`\`

## Advanced Generic Patterns

### Factory Pattern với Generics
\`\`\`typescript
interface Factory<T> {
  create(): T;
}

class NumberFactory implements Factory<number> {
  create(): number {
    return Math.random();
  }
}

class StringFactory implements Factory<string> {
  create(): string {
    return Math.random().toString(36).substring(2);
  }
}

function createMultiple<T>(factory: Factory<T>, count: number): T[] {
  return Array.from({ length: count }, () => factory.create());
}

const numbers = createMultiple(new NumberFactory(), 5);
const strings = createMultiple(new StringFactory(), 5);
\`\`\`

### Builder Pattern với Generics
\`\`\`typescript
class QueryBuilder<T> {
  private filters: ((item: T) => boolean)[] = [];

  where<P extends keyof T>(
    property: P, 
    predicate: (value: T[P]) => boolean
  ): QueryBuilder<T> {
    this.filters.push(item => predicate(item[property]));
    return this;
  }

  execute(items: T[]): T[] {
    return items.filter(item => this.filters.every(filter => filter(item)));
  }
}

// Usage
interface User {
  id: number;
  name: string;
  age: number;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: 'John', age: 25, active: true },
  { id: 2, name: 'Jane', age: 30, active: false },
];

const result = new QueryBuilder<User>()
  .where('age', age => age > 25)
  .where('active', active => active === true)
  .execute(users);
\`\`\``,
      exercises: [
        {
          id: "2-1",
          title: "Generic Data Validator",
          description: "Tạo generic validation system với type-safe rules",
          instructions: `Xây dựng generic validator với:
1. Type-safe validation rules
2. Generic constraint cho validation schema
3. Composite validators
4. Async validation support`,
          type: "code",
          starterCode: `// Implement generic validator
type ValidationRule<T> = // Define validation rule type

class Validator<T> {
  // Implement validation methods
}`,
          solution: `// Generic Data Validator

type ValidationResult = 
  | { isValid: true }
  | { isValid: false; errors: string[] };

type ValidationRule<T> = {
  [K in keyof T]?: (value: T[K], obj: T) => string | null;
};

type AsyncValidationRule<T> = {
  [K in keyof T]?: (value: T[K], obj: T) => Promise<string | null>;
};

class Validator<T extends object> {
  private rules: ValidationRule<T> = {};
  private asyncRules: AsyncValidationRule<T> = {};

  rule<K extends keyof T>(
    field: K,
    validator: (value: T[K], obj: T) => string | null
  ): this {
    this.rules[field] = validator;
    return this;
  }

  asyncRule<K extends keyof T>(
    field: K,
    validator: (value: T[K], obj: T) => Promise<string | null>
  ): this {
    this.asyncRules[field] = validator;
    return this;
  }

  validate(obj: T): ValidationResult {
    const errors: string[] = [];

    for (const [field, validator] of Object.entries(this.rules)) {
      if (validator) {
        const value = obj[field as keyof T];
        const error = validator(value, obj);
        if (error) {
          errors.push(\`\${String(field)}: \${error}\`);
        }
      }
    }

    return errors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors };
  }

  async validateAsync(obj: T): Promise<ValidationResult> {
    const errors: string[] = [];

    // Sync validation first
    const syncResult = this.validate(obj);
    if (!syncResult.isValid) {
      errors.push(...syncResult.errors);
    }

    // Async validation
    for (const [field, validator] of Object.entries(this.asyncRules)) {
      if (validator) {
        const value = obj[field as keyof T];
        const error = await validator(value, obj);
        if (error) {
          errors.push(\`\${String(field)}: \${error}\`);
        }
      }
    }

    return errors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors };
  }
}

// Usage examples
interface UserRegistration {
  username: string;
  email: string;
  password: string;
  age: number;
  terms: boolean;
}

const userValidator = new Validator<UserRegistration>()
  .rule('username', (username) => {
    if (username.length < 3) return 'Username must be at least 3 characters';
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username can only contain letters, numbers, and underscores';
    return null;
  })
  .rule('email', (email) => {
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return 'Invalid email format';
    return null;
  })
  .rule('password', (password) => {
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(password)) return 'Password must contain uppercase, lowercase, and numbers';
    return null;
  })
  .rule('age', (age) => {
    if (age < 18) return 'Must be at least 18 years old';
    if (age > 120) return 'Age must be reasonable';
    return null;
  })
  .rule('terms', (terms) => {
    if (!terms) return 'Must accept terms and conditions';
    return null;
  })
  .asyncRule('email', async (email) => {
    // Simulate async email availability check
    await new Promise(resolve => setTimeout(resolve, 100));
    const takenEmails = ['existing@example.com'];
    if (takenEmails.includes(email)) {
      return 'Email is already taken';
    }
    return null;
  });

// Test validation
const testUser: UserRegistration = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'Password123',
  age: 25,
  terms: true
};

const result = userValidator.validate(testUser);
console.log(result);

// Async validation
userValidator.validateAsync(testUser).then(console.log);

// Advanced: Composite Validator
class CompositeValidator<T extends object> {
  private validators: Validator<T>[] = [];

  addValidator(validator: Validator<T>): this {
    this.validators.push(validator);
    return this;
  }

  async validate(obj: T): Promise<ValidationResult> {
    const allErrors: string[] = [];

    for (const validator of this.validators) {
      const result = await validator.validateAsync(obj);
      if (!result.isValid) {
        allErrors.push(...result.errors);
      }
    }

    return allErrors.length === 0 
      ? { isValid: true }
      : { isValid: false, errors: allErrors };
  }
}

// Create specialized validators
const basicInfoValidator = new Validator<UserRegistration>()
  .rule('username', (username) => {
    if (username.length < 3) return 'Username too short';
    return null;
  })
  .rule('email', (email) => {
    if (!email.includes('@')) return 'Invalid email';
    return null;
  });

const securityValidator = new Validator<UserRegistration>()
  .rule('password', (password) => {
    if (password.length < 8) return 'Weak password';
    return null;
  })
  .rule('terms', (terms) => {
    if (!terms) return 'Terms not accepted';
    return null;
  });

const composite = new CompositeValidator<UserRegistration>()
  .addValidator(basicInfoValidator)
  .addValidator(securityValidator);`,
        },
      ],
    },
    {
      id: "3",
      title: "TypeScript với Functional Programming",
      slug: "typescript-functional",
      duration: "65 phút",
      prerequisites: ["2"],
      content: `# TypeScript với Functional Programming

## Higher-Order Functions

### Function Types
\`\`\`typescript
type Mapper<T, U> = (value: T, index: number, array: T[]) => U;
type Predicate<T> = (value: T, index: number, array: T[]) => boolean;
type Reducer<T, U> = (accumulator: U, current: T, index: number, array: T[]) => U;

function map<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
  return array.map(mapper);
}

function filter<T>(array: T[], predicate: Predicate<T>): T[] {
  return array.filter(predicate);
}

function reduce<T, U>(array: T[], reducer: Reducer<T, U>, initial: U): U {
  return array.reduce(reducer, initial);
}
\`\`\`

### Currying và Partial Application
\`\`\`typescript
// Curried function
type Curried<T, U, R> = T extends []
  ? R
  : (arg: T) => U extends [] ? R : Curried<U, R>;

function curry<T extends any[], U, R>(
  fn: (...args: [...T, ...U]) => R
): Curried<T, U, R> {
  return fn as any; // Simplified implementation
}

// Practical example
const add = (a: number, b: number, c: number): number => a + b + c;
const curriedAdd = curry(add);

const add5 = curriedAdd(5);
const add5And10 = add5(10);
const result = add5And10(3); // 18
\`\`\`

## Immutable Data Structures

### Readonly Arrays và Objects
\`\`\`typescript
const immutableArray: readonly number[] = [1, 2, 3];
// immutableArray.push(4); // Error!

interface ImmutablePoint {
  readonly x: number;
  readonly y: number;
}

const point: ImmutablePoint = { x: 10, y: 20 };
// point.x = 15; // Error!
\`\`\`

### Immutable Updates
\`\`\`typescript
function updateObject<T extends object, K extends keyof T>(
  obj: T,
  updates: { [P in K]?: T[P] }
): T {
  return { ...obj, ...updates };
}

const user = { name: 'John', age: 30, active: true };
const updatedUser = updateObject(user, { age: 31 });

// With arrays
function addItem<T>(array: readonly T[], item: T): T[] {
  return [...array, item];
}

function removeItem<T>(array: readonly T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
\`\`\`

## Monads và Functional Patterns

### Option Type (Maybe)
\`\`\`typescript
type Option<T> = Some<T> | None;

interface Some<T> {
  readonly _tag: 'Some';
  readonly value: T;
}

interface None {
  readonly _tag: 'None';
}

const some = <T>(value: T): Some<T> => ({ _tag: 'Some', value });
const none: None = { _tag: 'None' };

function mapOption<T, U>(option: Option<T>, fn: (value: T) => U): Option<U> {
  return option._tag === 'Some' ? some(fn(option.value)) : none;
}

function flatMapOption<T, U>(option: Option<T>, fn: (value: T) => Option<U>): Option<U> {
  return option._tag === 'Some' ? fn(option.value) : none;
}

// Usage
function findUser(id: number): Option<{ name: string; email: string }> {
  return id > 0 ? some({ name: 'John', email: 'john@example.com' }) : none;
}

const userEmail = flatMapOption(
  findUser(1),
  user => some(user.email.toUpperCase())
);
\`\`\`

### Result Type (Either)
\`\`\`typescript
type Result<T, E = Error> = Success<T> | Failure<E>;

interface Success<T> {
  readonly _tag: 'Success';
  readonly value: T;
}

interface Failure<E> {
  readonly _tag: 'Failure';
  readonly error: E;
}

const success = <T>(value: T): Success<T> => ({ _tag: 'Success', value });
const failure = <E>(error: E): Failure<E> => ({ _tag: 'Failure', error });

function mapResult<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> {
  return result._tag === 'Success' ? success(fn(result.value)) : result;
}

function flatMapResult<T, U, E>(
  result: Result<T, E>, 
  fn: (value: T) => Result<U, E>
): Result<U, E> {
  return result._tag === 'Success' ? fn(result.value) : result;
}
\`\`\`

## Function Composition

### Pipe Function
\`\`\`typescript
function pipe<T>(value: T): T;
function pipe<T, A>(value: T, fn1: (value: T) => A): A;
function pipe<T, A, B>(value: T, fn1: (value: T) => A, fn2: (value: A) => B): B;
function pipe<T, A, B, C>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B,
  fn3: (value: B) => C
): C;
function pipe(value: any, ...fns: Function[]): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}

// Usage
const result = pipe(
  5,
  (x: number) => x * 2,
  (x: number) => x + 1,
  (x: number) => \`Result: \${x}\`
); // "Result: 11"
\`\`\`

### Compose Function
\`\`\`typescript
function compose<T, U, V>(f: (x: U) => V, g: (x: T) => U): (x: T) => V {
  return (x: T) => f(g(x));
}

function composeMany<T>(...fns: Function[]): (x: T) => any {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// Usage
const add1 = (x: number) => x + 1;
const multiply2 = (x: number) => x * 2;
const toString = (x: number) => x.toString();

const transform = composeMany(toString, multiply2, add1);
const output = transform(5); // "12"
\`\`\`

## Lenses và Immutable Updates

### Simple Lens Implementation
\`\`\`typescript
interface Lens<T, U> {
  get: (obj: T) => U;
  set: (obj: T, value: U) => T;
}

function lens<T, U>(getter: (obj: T) => U, setter: (obj: T, value: U) => T): Lens<T, U> {
  return { get: getter, set: setter };
}

function view<T, U>(lens: Lens<T, U>, obj: T): U {
  return lens.get(obj);
}

function set<T, U>(lens: Lens<T, U>, obj: T, value: U): T {
  return lens.set(obj, value);
}

function over<T, U>(lens: Lens<T, U>, obj: T, fn: (value: U) => U): T {
  return lens.set(obj, fn(lens.get(obj)));
}

// Usage
interface User {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const addressLens = lens(
  (user: User) => user.address,
  (user: User, address) => ({ ...user, address })
);

const cityLens = lens(
  (address: User['address']) => address.city,
  (address: User['address'], city) => ({ ...address, city })
);

const userCityLens: Lens<User, string> = {
  get: (user) => cityLens.get(addressLens.get(user)),
  set: (user, city) => addressLens.set(user, cityLens.set(addressLens.get(user), city))
};

const user: User = {
  name: 'John',
  address: { street: '123 Main St', city: 'Hanoi' }
};

const updatedUser = over(userCityLens, user, city => city.toUpperCase());
\`\`\``,
      exercises: [
        {
          id: "3-1",
          title: "Functional Programming Library",
          description: "Xây dựng thư viện FP với TypeScript types",
          instructions: `Tạo thư viện functional programming với:
1. Option và Result monads
2. Function composition utilities
3. Immutable data helpers
4. Currying và partial application`,
          type: "code",
          starterCode: `// Implement FP library
class Option<T> {
  // Implement Option monad
}

class Result<T, E> {
  // Implement Result monad
}`,
          solution: `// Functional Programming Library

// Option Monad
type Option<T> = Some<T> | None;

interface Some<T> {
  readonly _tag: 'Some';
  readonly value: T;
}

interface None {
  readonly _tag: 'None';
}

const Some = <T>(value: T): Some<T> => ({ _tag: 'Some', value });
const None: None = { _tag: 'None' };

const isSome = <T>(option: Option<T>): option is Some<T> => option._tag === 'Some';
const isNone = <T>(option: Option<T>): option is None => option._tag === 'None';

class OptionImpl<T> {
  constructor(private readonly option: Option<T>) {}

  map<U>(fn: (value: T) => U): OptionImpl<U> {
    return new OptionImpl(
      isSome(this.option) ? Some(fn(this.option.value)) : None
    );
  }

  flatMap<U>(fn: (value: T) => Option<U>): OptionImpl<U> {
    return new OptionImpl(
      isSome(this.option) ? fn(this.option.value) : None
    );
  }

  getOrElse(defaultValue: T): T {
    return isSome(this.option) ? this.option.value : defaultValue;
  }

  match<U>(patterns: { Some: (value: T) => U; None: () => U }): U {
    return isSome(this.option) 
      ? patterns.Some(this.option.value)
      : patterns.None();
  }

  toResult<E>(error: E): Result<T, E> {
    return this.match({
      Some: value => Success(value),
      None: () => Failure(error)
    });
  }
}

// Result Monad
type Result<T, E = Error> = Success<T> | Failure<E>;

interface Success<T> {
  readonly _tag: 'Success';
  readonly value: T;
}

interface Failure<E> {
  readonly _tag: 'Failure';
  readonly error: E;
}

const Success = <T>(value: T): Success<T> => ({ _tag: 'Success', value });
const Failure = <E>(error: E): Failure<E> => ({ _tag: 'Failure', error });

const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => 
  result._tag === 'Success';
const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => 
  result._tag === 'Failure';

class ResultImpl<T, E = Error> {
  constructor(private readonly result: Result<T, E>) {}

  map<U>(fn: (value: T) => U): ResultImpl<U, E> {
    return new ResultImpl(
      isSuccess(this.result) ? Success(fn(this.result.value)) : this.result
    );
  }

  flatMap<U>(fn: (value: T) => Result<U, E>): ResultImpl<U, E> {
    return new ResultImpl(
      isSuccess(this.result) ? fn(this.result.value) : this.result
    );
  }

  mapError<F>(fn: (error: E) => F): ResultImpl<T, F> {
    return new ResultImpl(
      isFailure(this.result) ? Failure(fn(this.result.error)) : this.result
    );
  }

  getOrElse(defaultValue: T): T {
    return isSuccess(this.result) ? this.result.value : defaultValue;
  }

  match<U>(patterns: { Success: (value: T) => U; Failure: (error: E) => U }): U {
    return isSuccess(this.result)
      ? patterns.Success(this.result.value)
      : patterns.Failure(this.result.error);
  }

  toOption(): Option<T> {
    return this.match({
      Success: value => Some(value),
      Failure: () => None
    });
  }
}

// Function Composition Utilities
const pipe = <T>(value: T): T => value;

const pipe2 = <T, A>(value: T, fn1: (value: T) => A): A => fn1(value);

const pipe3 = <T, A, B>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B
): B => fn2(fn1(value));

const pipe4 = <T, A, B, C>(
  value: T, 
  fn1: (value: T) => A, 
  fn2: (value: A) => B,
  fn3: (value: B) => C
): C => fn3(fn2(fn1(value)));

// Overload for more functions as needed...

const compose = <A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C => {
  return (a: A) => f(g(a));
};

const composeMany = <T>(...fns: Function[]): (x: T) => any => {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
};

// Currying
type Curried<Args extends any[], R> = 
  Args extends [infer First, ...infer Rest]
    ? (arg: First) => Curried<Rest, R>
    : R;

function curry<Args extends any[], R>(
  fn: (...args: Args) => R
): Curried<Args, R> {
  return function curried(...args: any[]): any {
    return args.length >= fn.length
      ? fn(...args as Args)
      : (...moreArgs: any[]) => curried(...args, ...moreArgs);
  } as any;
}

// Immutable Data Helpers
const update = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
  updater: (value: T[K]) => T[K]
): T => ({
  ...obj,
  [key]: updater(obj[key])
});

const updateIn = <T extends object>(
  obj: T,
  path: string[],
  updater: (value: any) => any
): T => {
  if (path.length === 0) return obj;
  
  const [first, ...rest] = path;
  
  if (rest.length === 0) {
    return update(obj, first as keyof T, updater);
  }
  
  return update(obj, first as keyof T, (nested: any) => 
    updateIn(nested, rest, updater)
  );
};

const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2
});

// Usage Examples
const add = (a: number, b: number): number => a + b;
const curriedAdd = curry(add);
const add5 = curriedAdd(5);
const result = add5(10); // 15

// Working with Option
const divide = (a: number, b: number): Option<number> => 
  b === 0 ? None : Some(a / b);

const calculation = new OptionImpl(Some(10))
  .flatMap(x => divide(x, 2))
  .map(x => x * 3)
  .getOrElse(0);

// Working with Result
const safeDivide = (a: number, b: number): Result<number, string> =>
  b === 0 ? Failure('Division by zero') : Success(a / b);

const calculationResult = new ResultImpl(Success(10))
  .flatMap(x => safeDivide(x, 2))
  .map(x => x * 3)
  .match({
    Success: value => \`Result: \${value}\`,
    Failure: error => \`Error: \${error}\`
  });

// Complex pipeline
const processUser = (user: { name: string; age: number }) =>
  pipe4(
    user,
    (u) => ({ ...u, age: u.age + 1 }),
    (u) => ({ ...u, name: u.name.toUpperCase() }),
    (u) => \`\${u.name} is \${u.age} years old\`
  );`,
        },
      ],
    },
    {
      id: "4",
      title: "TypeScript trong Frontend Development",
      slug: "typescript-frontend",
      duration: "75 phút",
      prerequisites: ["3"],
      content: `# TypeScript trong Frontend Development

## React với TypeScript

### Functional Components
\`\`\`typescript
import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="user-card">
      <img 
        src={user.avatar || '/default-avatar.png'} 
        alt={user.name}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="actions">
        {onEdit && (
          <button onClick={() => onEdit(user)}>Edit</button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(user.id)}>Delete</button>
        )}
      </div>
    </div>
  );
};
\`\`\`

### Hooks với TypeScript
\`\`\`typescript
import { useState, useEffect, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (userId: number) => void;
}

function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = useCallback((userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Math.max(0, ...users.map(u => u.id)) + 1
    };
    setUsers(prev => [...prev, newUser]);
  }, [users]);

  const removeUser = useCallback((userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  }, []);

  return { users, loading, error, addUser, removeUser };
}
\`\`\`

## Vue với TypeScript

### Composition API
\`\`\`typescript
<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button @click="addUser">Add User</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
}

// Reactive state
const users = ref<User[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

// Computed properties
const userCount = computed(() => users.value.length);
const title = computed(() => \`Users (\${userCount.value})\`);

// Methods
const fetchUsers = async () => {
  try {
    loading.value = true;
    const response = await fetch('/api/users');
    users.value = await response.json();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
  } finally {
    loading.value = false;
  }
};

const addUser = () => {
  const newUser: User = {
    id: Math.max(0, ...users.value.map(u => u.id)) + 1,
    name: 'New User',
    email: 'new@example.com'
  };
  users.value.push(newUser);
};

// Lifecycle
onMounted(() => {
  fetchUsers();
});
</script>
\`\`\`

### Props với TypeScript
\`\`\`typescript
<template>
  <div class="user-list">
    <user-card
      v-for="user in filteredUsers"
      :key="user.id"
      :user="user"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  users: User[];
  searchQuery?: string;
  showInactive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  searchQuery: '',
  showInactive: false
});

const emit = defineEmits<{
  edit: [user: User];
  delete: [userId: number];
}>();

const filteredUsers = computed(() => {
  return props.users.filter(user => {
    const matchesSearch = user.name.toLowerCase()
      .includes(props.searchQuery.toLowerCase());
    const isActive = props.showInactive || user.active;
    return matchesSearch && isActive;
  });
});

const handleEdit = (user: User) => {
  emit('edit', user);
};

const handleDelete = (userId: number) => {
  emit('delete', userId);
};
</script>
\`\`\`

## State Management

### Redux với TypeScript
\`\`\`typescript
// types.ts
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

interface UsersState {
  items: User[];
  loading: boolean;
  error: string | null;
}

// actions.ts
const FETCH_USERS_REQUEST = 'users/FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'users/FETCH_USERS_FAILURE';

interface FetchUsersRequest {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccess {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailure {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

type UsersAction = 
  | FetchUsersRequest 
  | FetchUsersSuccess 
  | FetchUsersFailure;

// reducer.ts
const initialState: UsersState = {
  items: [],
  loading: false,
  error: null
};

export function usersReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
\`\`\`

### Pinia với TypeScript
\`\`\`typescript
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    users: [],
    loading: false,
    error: null
  }),

  getters: {
    activeUsers: (state) => state.users.filter(user => user.active),
    userCount: (state) => state.users.length
  },

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('/api/users');
        this.users = await response.json();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },

    addUser(userData: Omit<User, 'id'>) {
      const newUser: User = {
        ...userData,
        id: Math.max(0, ...this.users.map(u => u.id)) + 1
      };
      this.users.push(newUser);
    },

    removeUser(userId: number) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
});
\`\`\`

## Form Handling

### Type-Safe Forms
\`\`\`typescript
interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function validateLoginForm(form: LoginForm): FormErrors {
  const errors: FormErrors = {};

  if (!form.email) {
    errors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(form.email)) {
    errors.email = 'Email is invalid';
  }

  if (!form.password) {
    errors.password = 'Password is required';
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
}

// React Hook Form với TypeScript
import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /\\S+@\\S+\\.\\S+/,
            message: 'Invalid email address'
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input 
        type="password"
        {...register('password', { 
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <input type="checkbox" {...register('rememberMe')} />
      
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\``,
      exercises: [
        {
          id: "4-1",
          title: "Type-Safe React Component Library",
          description:
            "Xây dựng component library với TypeScript strict types",
          instructions: `Tạo component library với:
1. Strictly typed components
2. Generic components với constraints
3. Compound components pattern
4. Forward refs với proper typing`,
          type: "code",
          starterCode: `// Implement typed components
interface ButtonProps {
  // Define button props
}

const Button: React.FC<ButtonProps> = () => {
  // Implement button
}`,
          solution: `// Type-Safe React Component Library

import React, { 
  forwardRef, 
  createContext, 
  useContext, 
  useState 
} from 'react';

// Button Component
interface BaseButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded focus:outline-none transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300'
  };
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    props.className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

// Form Components
interface FormFieldContextValue {
  id: string;
  name: string;
  error?: string;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

interface FormFieldProps {
  children: React.ReactNode;
  name: string;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ children, name, error }) => {
  const id = React.useId();

  return (
    <FormFieldContext.Provider value={{ id, name, error }}>
      <div className="form-field">
        {children}
        {error && <div className="form-error">{error}</div>}
      </div>
    </FormFieldContext.Provider>
  );
};

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('Label must be used within FormField');
  }

  return (
    <label htmlFor={context.id} className="form-label">
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number';
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('Input must be used within FormField');
  }

  return (
    <input
      ref={ref}
      id={context.id}
      name={context.name}
      className={\`form-input \${context.error ? 'error' : ''}\`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

// Modal Component với Compound Pattern
interface ModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Modal: React.FC<ModalProps> & {
  Trigger: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
} = ({ children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalTrigger must be used within Modal');
  }

  return React.cloneElement(children as React.ReactElement, {
    onClick: context.open
  });
};

const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContent must be used within Modal');
  }

  if (!context.isOpen) return null;

  return (
    <div className="modal-overlay" onClick={context.close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

// Data Table với Generics
interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (row: T) => void;
}

function DataTable<T>({ data, columns, keyField, onRowClick }: DataTableProps<T>) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr 
            key={String(row[keyField])}
            onClick={() => onRowClick?.(row)}
            className={onRowClick ? 'clickable' : ''}
          >
            {columns.map(column => (
              <td key={String(column.key)}>
                {column.render 
                  ? column.render(row[column.key], row)
                  : String(row[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage Examples
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const columns: Column<User>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { 
      key: 'role', 
      header: 'Role',
      render: (value) => <span className={\`role-badge role-\${value}\`}>{value}</span>
    }
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      keyField="id"
      onRowClick={(user) => console.log('Selected user:', user)}
    />
  );
};

// Form Usage Example
const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  return (
    <form>
      <FormField name="name">
        <Label>Name</Label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </FormField>

      <FormField name="email">
        <Label>Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </FormField>

      <Button type="submit">Create User</Button>
    </form>
  );
};

// Modal Usage Example
const UserModal: React.FC = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      
      <Modal.Content>
        <h2>Create User</h2>
        <UserForm />
      </Modal.Content>
    </Modal>
  );
};

// Spinner Component (helper)
const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <div className={\`spinner \${className || ''}\`} />
);`,
        },
      ],
    },
    {
      id: "5",
      title: "Advanced TypeScript Patterns và Performance",
      slug: "advanced-patterns-performance",
      duration: "80 phút",
      prerequisites: ["4"],
      content: `# Advanced TypeScript Patterns và Performance

## Decorators và Metadata

### Class Decorators
\`\`\`typescript
function LogClass(target: Function) {
  console.log(\`Class \${target.name} was defined\`);
}

function Entity(tableName: string) {
  return function<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      public readonly tableName = tableName;
    };
  };
}

@LogClass
@Entity('users')
class User {
  constructor(public name: string, public email: string) {}
}

const user = new User('John', 'john@example.com');
console.log((user as any).tableName); // 'users'
\`\`\`

### Method Decorators
\`\`\`typescript
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyName} with args:\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`\${propertyName} returned:\`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`

### Property Decorators
\`\`\`typescript
function MinLength(length: number) {
  return function(target: any, propertyName: string) {
    let value: string;
    
    const getter = () => value;
    const setter = (newValue: string) => {
      if (newValue.length < length) {
        throw new Error(
          \`\${propertyName} must be at least \${length} characters long\`
        );
      }
      value = newValue;
    };
    
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter
    });
  };
}

class User {
  @MinLength(3)
  username: string;
  
  constructor(username: string) {
    this.username = username;
  }
}
\`\`\`

## Mixins

### Mixin Pattern
\`\`\`typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false;
    
    activate() {
      this.isActive = true;
    }
    
    deactivate() {
      this.isActive = false;
    }
  };
}

class User {
  constructor(public name: string) {}
}

const TimestampedActivatableUser = Timestamped(Activatable(User));
const user = new TimestampedActivatableUser('John');
user.activate();
console.log(user.timestamp, user.isActive);
\`\`\`

## Performance Optimization

### const assertions
\`\`\`typescript
// Thay vì
const colors = ['red', 'green', 'blue']; // string[]

// Sử dụng const assertions
const colors = ['red', 'green', 'blue'] as const; // readonly ["red", "green", "blue"]

// Objects với const assertions
const user = {
  name: 'John',
  age: 30,
  permissions: ['read', 'write']
} as const;

// user.name = 'Jane'; // Error!
\`\`\`

### Satisfies Operator
\`\`\`typescript
interface Config {
  color: 'red' | 'green' | 'blue';
  size: 'small' | 'medium' | 'large';
}

const config = {
  color: 'red',
  size: 'medium'
} satisfies Config;

// TypeScript biết config.color là 'red' | 'green' | 'blue'
// nhưng vẫn giữ literal type 'red'
\`\`\`

### Template Literal Types Performance
\`\`\`typescript
// Có thể gây performance issues với types phức tạp
type Color = 'red' | 'green' | 'blue';
type Size = 'small' | 'medium' | 'large';

// Tốt
type ButtonVariant = \`\${Color}-\${Size}\`;

// Có thể gây issues
// type AllCombinations = \`\${Color}-\${Size}-\${Variant}...\`;
\`\`\`

## Advanced Conditional Types

### Recursive Types
\`\`\`typescript
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]>
    : T[P];
};

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object 
    ? DeepRequired<T[P]>
    : T[P];
};
\`\`\`

### Template Literal Types Manipulation
\`\`\`typescript
type EventName = 'click' | 'scroll' | 'keypress';
type HandlerName<T extends string> = \`on\${Capitalize<T>}\`;

type EventHandlers = {
  [K in EventName as HandlerName<K>]: (event: Event) => void;
};
// {
//   onClick: (event: Event) => void;
//   onScroll: (event: Event) => void;
//   onKeypress: (event: Event) => void;
// }

// Advanced manipulation
type GetterName<T extends string> = \`get\${Capitalize<T>}\`;
type SetterName<T extends string> = \`set\${Capitalize<T>}\`;

type Accessors<T extends string> = 
  | GetterName<T> 
  | SetterName<T>;
\`\`\`

## Type-Level Programming

### Type-Level Arithmetic
\`\`\`typescript
type Length<T extends any[]> = T['length'];

type BuildArray<
  N extends number, 
  T extends any[] = []
> = T['length'] extends N 
  ? T 
  : BuildArray<N, [...T, any]>;

type Add<A extends number, B extends number> = 
  Length<[...BuildArray<A>, ...BuildArray<B>]>;

type Subtract<A extends number, B extends number> = 
  BuildArray<A> extends [...BuildArray<B>, ...infer R] 
    ? Length<R> 
    : never;

type Result1 = Add<5, 3>; // 8
type Result2 = Subtract<8, 3>; // 5
\`\`\`

### String Manipulation ở Type Level
\`\`\`typescript
type Split<
  S extends string, 
  D extends string
> = S extends \`\${infer T}\${D}\${infer U}\`
  ? [T, ...Split<U, D>]
  : [S];

type Join<
  T extends string[], 
  D extends string
> = T extends [infer F, ...infer R]
  ? R extends string[]
    ? F extends string
      ? \`\${F}\${D}\${Join<R, D>}\`
      : never
    : F
  : '';

type Path = 'users/123/profile';
type Parts = Split<Path, '/'>; // ['users', '123', 'profile']
type Reconstructed = Join<Parts, '-'>; // 'users-123-profile'
\`\`\`

## Compiler Performance

### Project References
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  },
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/utils" }
  ]
}
\`\`\`

### Incremental Builds
\`\`\`json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo"
  }
}
\`\`\`

### Skip Lib Check khi có thể
\`\`\`json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
\`\`\``,
      exercises: [
        {
          id: "5-1",
          title: "Advanced Type-Safe ORM",
          description:
            "Xây dựng type-safe ORM với advanced TypeScript features",
          instructions: `Tạo type-safe ORM với:
1. Decorators cho entity definitions
2. Type-safe query builder
3. Advanced conditional types cho relations
4. Performance optimizations`,
          type: "code",
          starterCode: `// Implement type-safe ORM
function Entity(tableName: string) {
  // Entity decorator
}

class QueryBuilder<T> {
  // Type-safe query builder
}`,
          solution: `// Advanced Type-Safe ORM

// Decorators
function Entity(tableName: string) {
  return function<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      static readonly tableName = tableName;
    };
  };
}

function Column(options: { type: string; primaryKey?: boolean; nullable?: boolean }) {
  return function(target: any, propertyName: string) {
    const metadata = Reflect.getMetadata('columns', target.constructor) || {};
    metadata[propertyName] = options;
    Reflect.defineMetadata('columns', metadata, target.constructor);
  };
}

function Relation(type: () => any, foreignKey?: string) {
  return function(target: any, propertyName: string) {
    const metadata = Reflect.getMetadata('relations', target.constructor) || {};
    metadata[propertyName] = { type, foreignKey };
    Reflect.defineMetadata('relations', metadata, target.constructor);
  };
}

// Base Entity
abstract class BaseEntity {
  id?: number;
  
  static getTableName(): string {
    return (this as any).tableName;
  }
  
  static getColumns(): Record<string, any> {
    return Reflect.getMetadata('columns', this) || {};
  }
  
  static getRelations(): Record<string, any> {
    return Reflect.getMetadata('relations', this) || {};
  }
}

// Entities
@Entity('users')
class User extends BaseEntity {
  @Column({ type: 'integer', primaryKey: true })
  id?: number;
  
  @Column({ type: 'varchar', nullable: false })
  name!: string;
  
  @Column({ type: 'varchar', nullable: false })
  email!: string;
  
  @Relation(() => Post)
  posts?: Post[];
}

@Entity('posts')
class Post extends BaseEntity {
  @Column({ type: 'integer', primaryKey: true })
  id?: number;
  
  @Column({ type: 'varchar', nullable: false })
  title!: string;
  
  @Column({ type: 'text', nullable: true })
  content?: string;
  
  @Column({ type: 'integer', nullable: false })
  userId!: number;
  
  @Relation(() => User)
  user?: User;
}

// Type-safe Query Builder
type EntityClass<T> = { new(): T } & typeof BaseEntity;
type EntityInstance<T> = T & BaseEntity;

type WhereCondition<T> = {
  [K in keyof T]?: T[K] | { $eq?: T[K]; $ne?: T[K]; $in?: T[K][]; $like?: string };
};

type SelectFields<T, K extends keyof T = keyof T> = {
  [P in K]?: boolean;
};

class QueryBuilder<T extends BaseEntity> {
  private whereConditions: WhereCondition<T>[] = [];
  private selectedFields?: (keyof T)[];
  private limitValue?: number;
  private offsetValue?: number;
  private orderByField?: keyof T;
  private orderDirection: 'ASC' | 'DESC' = 'ASC';
  private includes: string[] = [];

  constructor(private entityClass: EntityClass<T>) {}

  where(condition: WhereCondition<T>): this {
    this.whereConditions.push(condition);
    return this;
  }

  select<K extends keyof T>(fields: K[]): QueryBuilder<Pick<T, K>> {
    this.selectedFields = fields;
    return this as any;
  }

  limit(limit: number): this {
    this.limitValue = limit;
    return this;
  }

  offset(offset: number): this {
    this.offsetValue = offset;
    return this;
  }

  orderBy(field: keyof T, direction: 'ASC' | 'DESC' = 'ASC'): this {
    this.orderByField = field;
    this.orderDirection = direction;
    return this;
  }

  include(relation: string): this {
    this.includes.push(relation);
    return this;
  }

  async execute(): Promise<T[]> {
    // Trong thực tế, đây sẽ là database query
    console.log('Executing query:', {
      table: this.entityClass.getTableName(),
      where: this.whereConditions,
      select: this.selectedFields,
      limit: this.limitValue,
      offset: this.offsetValue,
      orderBy: this.orderByField ? 
        \`\${String(this.orderByField)} \${this.orderDirection}\` : undefined,
      includes: this.includes
    });
    
    // Simulate database result
    return [] as T[];
  }

  async first(): Promise<T | null> {
    this.limit(1);
    const results = await this.execute();
    return results[0] || null;
  }
}

// Repository Pattern
class Repository<T extends BaseEntity> {
  constructor(private entityClass: EntityClass<T>) {}

  find(): QueryBuilder<T> {
    return new QueryBuilder(this.entityClass);
  }

  findById(id: number): QueryBuilder<T> {
    return this.find().where({ id: { $eq: id } as any });
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    const instance = new this.entityClass();
    Object.assign(instance, data);
    
    // Trong thực tế, save to database
    console.log('Creating:', data);
    
    return instance as T;
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    const entity = await this.findById(id).first();
    if (!entity) return null;
    
    Object.assign(entity, data);
    
    // Trong thực tế, update database
    console.log('Updating:', id, data);
    
    return entity;
  }

  async delete(id: number): Promise<boolean> {
    const entity = await this.findById(id).first();
    if (!entity) return false;
    
    // Trong thực tế, delete from database
    console.log('Deleting:', id);
    
    return true;
  }
}

// Advanced Type Helpers
type EntityProperties<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type EntityFields<T> = Pick<T, EntityProperties<T>>;

type CreateEntityDto<T> = Omit<EntityFields<T>, 'id'>;
type UpdateEntityDto<T> = Partial<CreateEntityDto<T>>;

// Usage Examples
async function demo() {
  const userRepo = new Repository(User);
  const postRepo = new Repository(Post);

  // Type-safe queries
  const activeUsers = await userRepo.find()
    .where({ 
      name: { $like: 'John%' },
      email: { $ne: 'test@example.com' }
    } as any)
    .orderBy('name')
    .limit(10)
    .execute();

  // Create with type safety
  const newUser = await userRepo.create({
    name: 'John Doe',
    email: 'john@example.com'
  });

  // Update with type safety
  await userRepo.update(newUser.id!, {
    name: 'John Updated'
  });

  // Complex query với relations
  const userWithPosts = await userRepo.find()
    .include('posts')
    .where({ id: { $eq: 1 } } as any)
    .first();
}

// Advanced: Conditional Relation Types
type RelationType<T> = T extends () => infer R ? R : never;
type EntityRelations<T> = {
  [K in keyof T]: T[K] extends () => any ? RelationType<T[K]> : never;
}[keyof T];

type UserRelations = EntityRelations<User>; // Post

// Performance Optimizations
const entityCache = new Map<string, any>();

function getEntityMetadata<T extends BaseEntity>(entity: EntityClass<T>) {
  const key = entity.name;
  
  if (entityCache.has(key)) {
    return entityCache.get(key);
  }
  
  const metadata = {
    tableName: entity.getTableName(),
    columns: entity.getColumns(),
    relations: entity.getRelations()
  };
  
  entityCache.set(key, metadata);
  return metadata;
}

// Generic CRUD Service
class CrudService<T extends BaseEntity> {
  constructor(
    private repository: Repository<T>,
    private validators?: {
      create?: (data: CreateEntityDto<T>) => void;
      update?: (data: UpdateEntityDto<T>) => void;
    }
  ) {}

  async findAll(options?: {
    where?: WhereCondition<T>;
    limit?: number;
    offset?: number;
    orderBy?: keyof T;
  }): Promise<T[]> {
    let query = this.repository.find();
    
    if (options?.where) {
      query = query.where(options.where);
    }
    if (options?.limit) {
      query = query.limit(options.limit);
    }
    if (options?.offset) {
      query = query.offset(options.offset);
    }
    if (options?.orderBy) {
      query = query.orderBy(options.orderBy);
    }
    
    return query.execute();
  }

  async findById(id: number): Promise<T | null> {
    return this.repository.findById(id).first();
  }

  async create(data: CreateEntityDto<T>): Promise<T> {
    this.validators?.create?.(data);
    return this.repository.create(data);
  }

  async update(id: number, data: UpdateEntityDto<T>): Promise<T | null> {
    this.validators?.update?.(data);
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}

// Usage với service
const userService = new CrudService(new Repository(User), {
  create: (data) => {
    if (!data.name) {
      throw new Error('Name is required');
    }
    if (!data.email) {
      throw new Error('Email is required');
    }
  }
});`,
        },
      ],
    },
  ],
};

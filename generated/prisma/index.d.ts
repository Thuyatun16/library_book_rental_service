
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>
/**
 * Model RentalSnapshot
 * 
 */
export type RentalSnapshot = $Result.DefaultSelection<Prisma.$RentalSnapshotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RentalStatus: {
  RENTED: 'RENTED',
  RETURNED: 'RETURNED'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalSnapshot`: Exposes CRUD operations for the **RentalSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalSnapshots
    * const rentalSnapshots = await prisma.rentalSnapshot.findMany()
    * ```
    */
  get rentalSnapshot(): Prisma.RentalSnapshotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Book: 'Book',
    Rental: 'Rental',
    RentalSnapshot: 'RentalSnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "rental" | "rentalSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
      RentalSnapshot: {
        payload: Prisma.$RentalSnapshotPayload<ExtArgs>
        fields: Prisma.RentalSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          findFirst: {
            args: Prisma.RentalSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          findMany: {
            args: Prisma.RentalSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>[]
          }
          create: {
            args: Prisma.RentalSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          createMany: {
            args: Prisma.RentalSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>[]
          }
          delete: {
            args: Prisma.RentalSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          update: {
            args: Prisma.RentalSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.RentalSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.RentalSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSnapshotPayload>
          }
          aggregate: {
            args: Prisma.RentalSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalSnapshot>
          }
          groupBy: {
            args: Prisma.RentalSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<RentalSnapshotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    book?: BookOmit
    rental?: RentalOmit
    rentalSnapshot?: RentalSnapshotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rentals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | UserCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    rentals: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | BookCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rentals: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends User$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rentals
   */
  export type User$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    quantity: number | null
  }

  export type BookSumAggregateOutputType = {
    quantity: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    quantity?: true
  }

  export type BookSumAggregateInputType = {
    quantity?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentals?: boolean | Book$rentalsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | Book$rentalsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      rentals: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends Book$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, Book$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly quantity: FieldRef<"Book", 'Int'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.rentals
   */
  export type Book$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    status: $Enums.RentalStatus | null
    rentedAt: Date | null
    returnedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookId: string | null
    status: $Enums.RentalStatus | null
    rentedAt: Date | null
    returnedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    status: number
    rentedAt: number
    returnedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    status?: true
    rentedAt?: true
    returnedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    status?: true
    rentedAt?: true
    returnedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    status?: true
    rentedAt?: true
    returnedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    id: string
    userId: string
    bookId: string
    status: $Enums.RentalStatus
    rentedAt: Date
    returnedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RentalCountAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    status?: boolean
    rentedAt?: boolean
    returnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    status?: boolean
    rentedAt?: boolean
    returnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    status?: boolean
    rentedAt?: boolean
    returnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    status?: boolean
    rentedAt?: boolean
    returnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "status" | "rentedAt" | "returnedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rental"]>
  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type RentalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type RentalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookId: string
      status: $Enums.RentalStatus
      rentedAt: Date
      returnedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalFindUniqueArgs>(args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalFindFirstArgs>(args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalFindManyArgs>(args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends RentalCreateArgs>(args: SelectSubset<T, RentalCreateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalCreateManyArgs>(args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rentals and returns the data saved in the database.
     * @param {RentalCreateManyAndReturnArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rentals and only return the `id`
     * const rentalWithIdOnly = await prisma.rental.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends RentalDeleteArgs>(args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUpdateArgs>(args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalDeleteManyArgs>(args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUpdateManyArgs>(args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals and returns the data updated in the database.
     * @param {RentalUpdateManyAndReturnArgs} args - Arguments to update many Rentals.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rentals and only return the `id`
     * const rentalWithIdOnly = await prisma.rental.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends RentalUpsertArgs>(args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rental model
   */
  interface RentalFieldRefs {
    readonly id: FieldRef<"Rental", 'String'>
    readonly userId: FieldRef<"Rental", 'String'>
    readonly bookId: FieldRef<"Rental", 'String'>
    readonly status: FieldRef<"Rental", 'RentalStatus'>
    readonly rentedAt: FieldRef<"Rental", 'DateTime'>
    readonly returnedAt: FieldRef<"Rental", 'DateTime'>
    readonly createdAt: FieldRef<"Rental", 'DateTime'>
    readonly updatedAt: FieldRef<"Rental", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
  }

  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rental createManyAndReturn
   */
  export type RentalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
  }

  /**
   * Rental updateManyAndReturn
   */
  export type RentalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
  }

  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to delete.
     */
    limit?: number
  }

  /**
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
  }


  /**
   * Model RentalSnapshot
   */

  export type AggregateRentalSnapshot = {
    _count: RentalSnapshotCountAggregateOutputType | null
    _avg: RentalSnapshotAvgAggregateOutputType | null
    _sum: RentalSnapshotSumAggregateOutputType | null
    _min: RentalSnapshotMinAggregateOutputType | null
    _max: RentalSnapshotMaxAggregateOutputType | null
  }

  export type RentalSnapshotAvgAggregateOutputType = {
    availability: number | null
  }

  export type RentalSnapshotSumAggregateOutputType = {
    availability: number | null
  }

  export type RentalSnapshotMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    userId: string | null
    rentedAt: Date | null
    availability: number | null
    createdAt: Date | null
  }

  export type RentalSnapshotMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    userId: string | null
    rentedAt: Date | null
    availability: number | null
    createdAt: Date | null
  }

  export type RentalSnapshotCountAggregateOutputType = {
    id: number
    bookId: number
    userId: number
    rentedAt: number
    availability: number
    createdAt: number
    _all: number
  }


  export type RentalSnapshotAvgAggregateInputType = {
    availability?: true
  }

  export type RentalSnapshotSumAggregateInputType = {
    availability?: true
  }

  export type RentalSnapshotMinAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    rentedAt?: true
    availability?: true
    createdAt?: true
  }

  export type RentalSnapshotMaxAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    rentedAt?: true
    availability?: true
    createdAt?: true
  }

  export type RentalSnapshotCountAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    rentedAt?: true
    availability?: true
    createdAt?: true
    _all?: true
  }

  export type RentalSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSnapshot to aggregate.
     */
    where?: RentalSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSnapshots to fetch.
     */
    orderBy?: RentalSnapshotOrderByWithRelationInput | RentalSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalSnapshots
    **/
    _count?: true | RentalSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalSnapshotMaxAggregateInputType
  }

  export type GetRentalSnapshotAggregateType<T extends RentalSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalSnapshot[P]>
      : GetScalarType<T[P], AggregateRentalSnapshot[P]>
  }




  export type RentalSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSnapshotWhereInput
    orderBy?: RentalSnapshotOrderByWithAggregationInput | RentalSnapshotOrderByWithAggregationInput[]
    by: RentalSnapshotScalarFieldEnum[] | RentalSnapshotScalarFieldEnum
    having?: RentalSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalSnapshotCountAggregateInputType | true
    _avg?: RentalSnapshotAvgAggregateInputType
    _sum?: RentalSnapshotSumAggregateInputType
    _min?: RentalSnapshotMinAggregateInputType
    _max?: RentalSnapshotMaxAggregateInputType
  }

  export type RentalSnapshotGroupByOutputType = {
    id: string
    bookId: string
    userId: string
    rentedAt: Date
    availability: number
    createdAt: Date
    _count: RentalSnapshotCountAggregateOutputType | null
    _avg: RentalSnapshotAvgAggregateOutputType | null
    _sum: RentalSnapshotSumAggregateOutputType | null
    _min: RentalSnapshotMinAggregateOutputType | null
    _max: RentalSnapshotMaxAggregateOutputType | null
  }

  type GetRentalSnapshotGroupByPayload<T extends RentalSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], RentalSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type RentalSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    rentedAt?: boolean
    availability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rentalSnapshot"]>

  export type RentalSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    rentedAt?: boolean
    availability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rentalSnapshot"]>

  export type RentalSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    rentedAt?: boolean
    availability?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rentalSnapshot"]>

  export type RentalSnapshotSelectScalar = {
    id?: boolean
    bookId?: boolean
    userId?: boolean
    rentedAt?: boolean
    availability?: boolean
    createdAt?: boolean
  }

  export type RentalSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "userId" | "rentedAt" | "availability" | "createdAt", ExtArgs["result"]["rentalSnapshot"]>

  export type $RentalSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      userId: string
      rentedAt: Date
      availability: number
      createdAt: Date
    }, ExtArgs["result"]["rentalSnapshot"]>
    composites: {}
  }

  type RentalSnapshotGetPayload<S extends boolean | null | undefined | RentalSnapshotDefaultArgs> = $Result.GetResult<Prisma.$RentalSnapshotPayload, S>

  type RentalSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalSnapshotCountAggregateInputType | true
    }

  export interface RentalSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalSnapshot'], meta: { name: 'RentalSnapshot' } }
    /**
     * Find zero or one RentalSnapshot that matches the filter.
     * @param {RentalSnapshotFindUniqueArgs} args - Arguments to find a RentalSnapshot
     * @example
     * // Get one RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalSnapshotFindUniqueArgs>(args: SelectSubset<T, RentalSnapshotFindUniqueArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalSnapshotFindUniqueOrThrowArgs} args - Arguments to find a RentalSnapshot
     * @example
     * // Get one RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotFindFirstArgs} args - Arguments to find a RentalSnapshot
     * @example
     * // Get one RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalSnapshotFindFirstArgs>(args?: SelectSubset<T, RentalSnapshotFindFirstArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotFindFirstOrThrowArgs} args - Arguments to find a RentalSnapshot
     * @example
     * // Get one RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalSnapshots
     * const rentalSnapshots = await prisma.rentalSnapshot.findMany()
     * 
     * // Get first 10 RentalSnapshots
     * const rentalSnapshots = await prisma.rentalSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalSnapshotWithIdOnly = await prisma.rentalSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalSnapshotFindManyArgs>(args?: SelectSubset<T, RentalSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalSnapshot.
     * @param {RentalSnapshotCreateArgs} args - Arguments to create a RentalSnapshot.
     * @example
     * // Create one RentalSnapshot
     * const RentalSnapshot = await prisma.rentalSnapshot.create({
     *   data: {
     *     // ... data to create a RentalSnapshot
     *   }
     * })
     * 
     */
    create<T extends RentalSnapshotCreateArgs>(args: SelectSubset<T, RentalSnapshotCreateArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalSnapshots.
     * @param {RentalSnapshotCreateManyArgs} args - Arguments to create many RentalSnapshots.
     * @example
     * // Create many RentalSnapshots
     * const rentalSnapshot = await prisma.rentalSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalSnapshotCreateManyArgs>(args?: SelectSubset<T, RentalSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalSnapshots and returns the data saved in the database.
     * @param {RentalSnapshotCreateManyAndReturnArgs} args - Arguments to create many RentalSnapshots.
     * @example
     * // Create many RentalSnapshots
     * const rentalSnapshot = await prisma.rentalSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalSnapshots and only return the `id`
     * const rentalSnapshotWithIdOnly = await prisma.rentalSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalSnapshot.
     * @param {RentalSnapshotDeleteArgs} args - Arguments to delete one RentalSnapshot.
     * @example
     * // Delete one RentalSnapshot
     * const RentalSnapshot = await prisma.rentalSnapshot.delete({
     *   where: {
     *     // ... filter to delete one RentalSnapshot
     *   }
     * })
     * 
     */
    delete<T extends RentalSnapshotDeleteArgs>(args: SelectSubset<T, RentalSnapshotDeleteArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalSnapshot.
     * @param {RentalSnapshotUpdateArgs} args - Arguments to update one RentalSnapshot.
     * @example
     * // Update one RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalSnapshotUpdateArgs>(args: SelectSubset<T, RentalSnapshotUpdateArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalSnapshots.
     * @param {RentalSnapshotDeleteManyArgs} args - Arguments to filter RentalSnapshots to delete.
     * @example
     * // Delete a few RentalSnapshots
     * const { count } = await prisma.rentalSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalSnapshotDeleteManyArgs>(args?: SelectSubset<T, RentalSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalSnapshots
     * const rentalSnapshot = await prisma.rentalSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalSnapshotUpdateManyArgs>(args: SelectSubset<T, RentalSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSnapshots and returns the data updated in the database.
     * @param {RentalSnapshotUpdateManyAndReturnArgs} args - Arguments to update many RentalSnapshots.
     * @example
     * // Update many RentalSnapshots
     * const rentalSnapshot = await prisma.rentalSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalSnapshots and only return the `id`
     * const rentalSnapshotWithIdOnly = await prisma.rentalSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalSnapshot.
     * @param {RentalSnapshotUpsertArgs} args - Arguments to update or create a RentalSnapshot.
     * @example
     * // Update or create a RentalSnapshot
     * const rentalSnapshot = await prisma.rentalSnapshot.upsert({
     *   create: {
     *     // ... data to create a RentalSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends RentalSnapshotUpsertArgs>(args: SelectSubset<T, RentalSnapshotUpsertArgs<ExtArgs>>): Prisma__RentalSnapshotClient<$Result.GetResult<Prisma.$RentalSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotCountArgs} args - Arguments to filter RentalSnapshots to count.
     * @example
     * // Count the number of RentalSnapshots
     * const count = await prisma.rentalSnapshot.count({
     *   where: {
     *     // ... the filter for the RentalSnapshots we want to count
     *   }
     * })
    **/
    count<T extends RentalSnapshotCountArgs>(
      args?: Subset<T, RentalSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalSnapshotAggregateArgs>(args: Subset<T, RentalSnapshotAggregateArgs>): Prisma.PrismaPromise<GetRentalSnapshotAggregateType<T>>

    /**
     * Group by RentalSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: RentalSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalSnapshot model
   */
  readonly fields: RentalSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalSnapshot model
   */
  interface RentalSnapshotFieldRefs {
    readonly id: FieldRef<"RentalSnapshot", 'String'>
    readonly bookId: FieldRef<"RentalSnapshot", 'String'>
    readonly userId: FieldRef<"RentalSnapshot", 'String'>
    readonly rentedAt: FieldRef<"RentalSnapshot", 'DateTime'>
    readonly availability: FieldRef<"RentalSnapshot", 'Int'>
    readonly createdAt: FieldRef<"RentalSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalSnapshot findUnique
   */
  export type RentalSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which RentalSnapshot to fetch.
     */
    where: RentalSnapshotWhereUniqueInput
  }

  /**
   * RentalSnapshot findUniqueOrThrow
   */
  export type RentalSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which RentalSnapshot to fetch.
     */
    where: RentalSnapshotWhereUniqueInput
  }

  /**
   * RentalSnapshot findFirst
   */
  export type RentalSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which RentalSnapshot to fetch.
     */
    where?: RentalSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSnapshots to fetch.
     */
    orderBy?: RentalSnapshotOrderByWithRelationInput | RentalSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSnapshots.
     */
    cursor?: RentalSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSnapshots.
     */
    distinct?: RentalSnapshotScalarFieldEnum | RentalSnapshotScalarFieldEnum[]
  }

  /**
   * RentalSnapshot findFirstOrThrow
   */
  export type RentalSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which RentalSnapshot to fetch.
     */
    where?: RentalSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSnapshots to fetch.
     */
    orderBy?: RentalSnapshotOrderByWithRelationInput | RentalSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSnapshots.
     */
    cursor?: RentalSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSnapshots.
     */
    distinct?: RentalSnapshotScalarFieldEnum | RentalSnapshotScalarFieldEnum[]
  }

  /**
   * RentalSnapshot findMany
   */
  export type RentalSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which RentalSnapshots to fetch.
     */
    where?: RentalSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSnapshots to fetch.
     */
    orderBy?: RentalSnapshotOrderByWithRelationInput | RentalSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalSnapshots.
     */
    cursor?: RentalSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSnapshots.
     */
    skip?: number
    distinct?: RentalSnapshotScalarFieldEnum | RentalSnapshotScalarFieldEnum[]
  }

  /**
   * RentalSnapshot create
   */
  export type RentalSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a RentalSnapshot.
     */
    data: XOR<RentalSnapshotCreateInput, RentalSnapshotUncheckedCreateInput>
  }

  /**
   * RentalSnapshot createMany
   */
  export type RentalSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalSnapshots.
     */
    data: RentalSnapshotCreateManyInput | RentalSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalSnapshot createManyAndReturn
   */
  export type RentalSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many RentalSnapshots.
     */
    data: RentalSnapshotCreateManyInput | RentalSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalSnapshot update
   */
  export type RentalSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a RentalSnapshot.
     */
    data: XOR<RentalSnapshotUpdateInput, RentalSnapshotUncheckedUpdateInput>
    /**
     * Choose, which RentalSnapshot to update.
     */
    where: RentalSnapshotWhereUniqueInput
  }

  /**
   * RentalSnapshot updateMany
   */
  export type RentalSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalSnapshots.
     */
    data: XOR<RentalSnapshotUpdateManyMutationInput, RentalSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which RentalSnapshots to update
     */
    where?: RentalSnapshotWhereInput
    /**
     * Limit how many RentalSnapshots to update.
     */
    limit?: number
  }

  /**
   * RentalSnapshot updateManyAndReturn
   */
  export type RentalSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update RentalSnapshots.
     */
    data: XOR<RentalSnapshotUpdateManyMutationInput, RentalSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which RentalSnapshots to update
     */
    where?: RentalSnapshotWhereInput
    /**
     * Limit how many RentalSnapshots to update.
     */
    limit?: number
  }

  /**
   * RentalSnapshot upsert
   */
  export type RentalSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the RentalSnapshot to update in case it exists.
     */
    where: RentalSnapshotWhereUniqueInput
    /**
     * In case the RentalSnapshot found by the `where` argument doesn't exist, create a new RentalSnapshot with this data.
     */
    create: XOR<RentalSnapshotCreateInput, RentalSnapshotUncheckedCreateInput>
    /**
     * In case the RentalSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalSnapshotUpdateInput, RentalSnapshotUncheckedUpdateInput>
  }

  /**
   * RentalSnapshot delete
   */
  export type RentalSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
    /**
     * Filter which RentalSnapshot to delete.
     */
    where: RentalSnapshotWhereUniqueInput
  }

  /**
   * RentalSnapshot deleteMany
   */
  export type RentalSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSnapshots to delete
     */
    where?: RentalSnapshotWhereInput
    /**
     * Limit how many RentalSnapshots to delete.
     */
    limit?: number
  }

  /**
   * RentalSnapshot without action
   */
  export type RentalSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSnapshot
     */
    select?: RentalSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSnapshot
     */
    omit?: RentalSnapshotOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    status: 'status',
    rentedAt: 'rentedAt',
    returnedAt: 'returnedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const RentalSnapshotScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    userId: 'userId',
    rentedAt: 'rentedAt',
    availability: 'availability',
    createdAt: 'createdAt'
  };

  export type RentalSnapshotScalarFieldEnum = (typeof RentalSnapshotScalarFieldEnum)[keyof typeof RentalSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'RentalStatus[]'
   */
  export type ListEnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rentals?: RentalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentals?: RentalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rentals?: RentalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    quantity?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    rentals?: RentalListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentals?: RentalOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    quantity?: IntFilter<"Book"> | number
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    rentals?: RentalListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    quantity?: IntWithAggregatesFilter<"Book"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    id?: StringFilter<"Rental"> | string
    userId?: StringFilter<"Rental"> | string
    bookId?: StringFilter<"Rental"> | string
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    rentedAt?: DateTimeFilter<"Rental"> | Date | string
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type RentalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    rentedAt?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    userId?: StringFilter<"Rental"> | string
    bookId?: StringFilter<"Rental"> | string
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    rentedAt?: DateTimeFilter<"Rental"> | Date | string
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type RentalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    rentedAt?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rental"> | string
    userId?: StringWithAggregatesFilter<"Rental"> | string
    bookId?: StringWithAggregatesFilter<"Rental"> | string
    status?: EnumRentalStatusWithAggregatesFilter<"Rental"> | $Enums.RentalStatus
    rentedAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    returnedAt?: DateTimeNullableWithAggregatesFilter<"Rental"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
  }

  export type RentalSnapshotWhereInput = {
    AND?: RentalSnapshotWhereInput | RentalSnapshotWhereInput[]
    OR?: RentalSnapshotWhereInput[]
    NOT?: RentalSnapshotWhereInput | RentalSnapshotWhereInput[]
    id?: StringFilter<"RentalSnapshot"> | string
    bookId?: StringFilter<"RentalSnapshot"> | string
    userId?: StringFilter<"RentalSnapshot"> | string
    rentedAt?: DateTimeFilter<"RentalSnapshot"> | Date | string
    availability?: IntFilter<"RentalSnapshot"> | number
    createdAt?: DateTimeFilter<"RentalSnapshot"> | Date | string
  }

  export type RentalSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    rentedAt?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
  }

  export type RentalSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalSnapshotWhereInput | RentalSnapshotWhereInput[]
    OR?: RentalSnapshotWhereInput[]
    NOT?: RentalSnapshotWhereInput | RentalSnapshotWhereInput[]
    bookId?: StringFilter<"RentalSnapshot"> | string
    userId?: StringFilter<"RentalSnapshot"> | string
    rentedAt?: DateTimeFilter<"RentalSnapshot"> | Date | string
    availability?: IntFilter<"RentalSnapshot"> | number
    createdAt?: DateTimeFilter<"RentalSnapshot"> | Date | string
  }, "id">

  export type RentalSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    rentedAt?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    _count?: RentalSnapshotCountOrderByAggregateInput
    _avg?: RentalSnapshotAvgOrderByAggregateInput
    _max?: RentalSnapshotMaxOrderByAggregateInput
    _min?: RentalSnapshotMinOrderByAggregateInput
    _sum?: RentalSnapshotSumOrderByAggregateInput
  }

  export type RentalSnapshotScalarWhereWithAggregatesInput = {
    AND?: RentalSnapshotScalarWhereWithAggregatesInput | RentalSnapshotScalarWhereWithAggregatesInput[]
    OR?: RentalSnapshotScalarWhereWithAggregatesInput[]
    NOT?: RentalSnapshotScalarWhereWithAggregatesInput | RentalSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalSnapshot"> | string
    bookId?: StringWithAggregatesFilter<"RentalSnapshot"> | string
    userId?: StringWithAggregatesFilter<"RentalSnapshot"> | string
    rentedAt?: DateTimeWithAggregatesFilter<"RentalSnapshot"> | Date | string
    availability?: IntWithAggregatesFilter<"RentalSnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RentalSnapshot"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    author: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateInput = {
    id?: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalsInput
    book: BookCreateNestedOneWithoutRentalsInput
  }

  export type RentalUncheckedCreateInput = {
    id?: string
    userId: string
    bookId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalsNestedInput
    book?: BookUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyInput = {
    id?: string
    userId: string
    bookId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSnapshotCreateInput = {
    id?: string
    bookId: string
    userId: string
    rentedAt: Date | string
    availability: number
    createdAt?: Date | string
  }

  export type RentalSnapshotUncheckedCreateInput = {
    id?: string
    bookId: string
    userId: string
    rentedAt: Date | string
    availability: number
    createdAt?: Date | string
  }

  export type RentalSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSnapshotCreateManyInput = {
    id?: string
    bookId: string
    userId: string
    rentedAt: Date | string
    availability: number
    createdAt?: Date | string
  }

  export type RentalSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RentalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    rentedAt?: SortOrder
    returnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    rentedAt?: SortOrder
    returnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    rentedAt?: SortOrder
    returnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RentalSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    rentedAt?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
  }

  export type RentalSnapshotAvgOrderByAggregateInput = {
    availability?: SortOrder
  }

  export type RentalSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    rentedAt?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
  }

  export type RentalSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    rentedAt?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
  }

  export type RentalSnapshotSumOrderByAggregateInput = {
    availability?: SortOrder
  }

  export type RentalCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalCreateNestedManyWithoutBookInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentalUpdateManyWithoutBookNestedInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBookInput | RentalUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBookInput | RentalUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBookInput | RentalUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBookInput | RentalUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBookInput | RentalUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBookInput | RentalUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRentalsInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutRentalsInput = {
    create?: XOR<BookCreateWithoutRentalsInput, BookUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRentalsInput
    connect?: BookWhereUniqueInput
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput
    upsert?: UserUpsertWithoutRentalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalsInput, UserUpdateWithoutRentalsInput>, UserUncheckedUpdateWithoutRentalsInput>
  }

  export type BookUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<BookCreateWithoutRentalsInput, BookUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRentalsInput
    upsert?: BookUpsertWithoutRentalsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutRentalsInput, BookUpdateWithoutRentalsInput>, BookUncheckedUpdateWithoutRentalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RentalCreateWithoutUserInput = {
    id?: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutUserInput = {
    id?: string
    bookId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalCreateOrConnectWithoutUserInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalCreateManyUserInputEnvelope = {
    data: RentalCreateManyUserInput | RentalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
  }

  export type RentalUpdateManyWithWhereWithoutUserInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutUserInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    id?: StringFilter<"Rental"> | string
    userId?: StringFilter<"Rental"> | string
    bookId?: StringFilter<"Rental"> | string
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    rentedAt?: DateTimeFilter<"Rental"> | Date | string
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
  }

  export type RentalCreateWithoutBookInput = {
    id?: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutBookInput = {
    id?: string
    userId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalCreateOrConnectWithoutBookInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput>
  }

  export type RentalCreateManyBookInputEnvelope = {
    data: RentalCreateManyBookInput | RentalCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutBookInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutBookInput, RentalUncheckedUpdateWithoutBookInput>
    create: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutBookInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutBookInput, RentalUncheckedUpdateWithoutBookInput>
  }

  export type RentalUpdateManyWithWhereWithoutBookInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutBookInput>
  }

  export type UserCreateWithoutRentalsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRentalsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRentalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
  }

  export type BookCreateWithoutRentalsInput = {
    id?: string
    title: string
    author: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUncheckedCreateWithoutRentalsInput = {
    id?: string
    title: string
    author: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateOrConnectWithoutRentalsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutRentalsInput, BookUncheckedCreateWithoutRentalsInput>
  }

  export type UserUpsertWithoutRentalsInput = {
    update: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
  }

  export type UserUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpsertWithoutRentalsInput = {
    update: XOR<BookUpdateWithoutRentalsInput, BookUncheckedUpdateWithoutRentalsInput>
    create: XOR<BookCreateWithoutRentalsInput, BookUncheckedCreateWithoutRentalsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutRentalsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutRentalsInput, BookUncheckedUpdateWithoutRentalsInput>
  }

  export type BookUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyUserInput = {
    id?: string
    bookId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyBookInput = {
    id?: string
    userId: string
    status: $Enums.RentalStatus
    rentedAt?: Date | string
    returnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    rentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
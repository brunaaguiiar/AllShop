
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model avaliacao
 * 
 */
export type avaliacao = $Result.DefaultSelection<Prisma.$avaliacaoPayload>
/**
 * Model carrinho
 * 
 */
export type carrinho = $Result.DefaultSelection<Prisma.$carrinhoPayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model comentario
 * 
 */
export type comentario = $Result.DefaultSelection<Prisma.$comentarioPayload>
/**
 * Model configuracao_usuario
 * 
 */
export type configuracao_usuario = $Result.DefaultSelection<Prisma.$configuracao_usuarioPayload>
/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>
/**
 * Model favorito
 * 
 */
export type favorito = $Result.DefaultSelection<Prisma.$favoritoPayload>
/**
 * Model fornecedor
 * 
 */
export type fornecedor = $Result.DefaultSelection<Prisma.$fornecedorPayload>
/**
 * Model item_carrinho
 * 
 */
export type item_carrinho = $Result.DefaultSelection<Prisma.$item_carrinhoPayload>
/**
 * Model item_pedido
 * 
 */
export type item_pedido = $Result.DefaultSelection<Prisma.$item_pedidoPayload>
/**
 * Model oferta
 * 
 */
export type oferta = $Result.DefaultSelection<Prisma.$ofertaPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model produto
 * 
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Avaliacaos
 * const avaliacaos = await prisma.avaliacao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Avaliacaos
   * const avaliacaos = await prisma.avaliacao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.avaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrinho`: Exposes CRUD operations for the **carrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinhos
    * const carrinhos = await prisma.carrinho.findMany()
    * ```
    */
  get carrinho(): Prisma.carrinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.comentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracao_usuario`: Exposes CRUD operations for the **configuracao_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracao_usuarios
    * const configuracao_usuarios = await prisma.configuracao_usuario.findMany()
    * ```
    */
  get configuracao_usuario(): Prisma.configuracao_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.favoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.fornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_carrinho`: Exposes CRUD operations for the **item_carrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_carrinhos
    * const item_carrinhos = await prisma.item_carrinho.findMany()
    * ```
    */
  get item_carrinho(): Prisma.item_carrinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_pedido`: Exposes CRUD operations for the **item_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_pedidos
    * const item_pedidos = await prisma.item_pedido.findMany()
    * ```
    */
  get item_pedido(): Prisma.item_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oferta`: Exposes CRUD operations for the **oferta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ofertas
    * const ofertas = await prisma.oferta.findMany()
    * ```
    */
  get oferta(): Prisma.ofertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    avaliacao: 'avaliacao',
    carrinho: 'carrinho',
    categoria: 'categoria',
    comentario: 'comentario',
    configuracao_usuario: 'configuracao_usuario',
    endereco: 'endereco',
    favorito: 'favorito',
    fornecedor: 'fornecedor',
    item_carrinho: 'item_carrinho',
    item_pedido: 'item_pedido',
    oferta: 'oferta',
    pedido: 'pedido',
    produto: 'produto',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "avaliacao" | "carrinho" | "categoria" | "comentario" | "configuracao_usuario" | "endereco" | "favorito" | "fornecedor" | "item_carrinho" | "item_pedido" | "oferta" | "pedido" | "produto" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      avaliacao: {
        payload: Prisma.$avaliacaoPayload<ExtArgs>
        fields: Prisma.avaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          findFirst: {
            args: Prisma.avaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          findMany: {
            args: Prisma.avaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>[]
          }
          create: {
            args: Prisma.avaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          createMany: {
            args: Prisma.avaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.avaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          update: {
            args: Prisma.avaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.avaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.avaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.avaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      carrinho: {
        payload: Prisma.$carrinhoPayload<ExtArgs>
        fields: Prisma.carrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          findFirst: {
            args: Prisma.carrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          findMany: {
            args: Prisma.carrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>[]
          }
          create: {
            args: Prisma.carrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          createMany: {
            args: Prisma.carrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.carrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          update: {
            args: Prisma.carrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          deleteMany: {
            args: Prisma.carrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.carrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          aggregate: {
            args: Prisma.CarrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrinho>
          }
          groupBy: {
            args: Prisma.carrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      comentario: {
        payload: Prisma.$comentarioPayload<ExtArgs>
        fields: Prisma.comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findFirst: {
            args: Prisma.comentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findMany: {
            args: Prisma.comentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>[]
          }
          create: {
            args: Prisma.comentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          createMany: {
            args: Prisma.comentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          update: {
            args: Prisma.comentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          deleteMany: {
            args: Prisma.comentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.comentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.comentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      configuracao_usuario: {
        payload: Prisma.$configuracao_usuarioPayload<ExtArgs>
        fields: Prisma.configuracao_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracao_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracao_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          findFirst: {
            args: Prisma.configuracao_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracao_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          findMany: {
            args: Prisma.configuracao_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>[]
          }
          create: {
            args: Prisma.configuracao_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          createMany: {
            args: Prisma.configuracao_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.configuracao_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          update: {
            args: Prisma.configuracao_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.configuracao_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracao_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.configuracao_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracao_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Configuracao_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracao_usuario>
          }
          groupBy: {
            args: Prisma.configuracao_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Configuracao_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracao_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Configuracao_usuarioCountAggregateOutputType> | number
          }
        }
      }
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      favorito: {
        payload: Prisma.$favoritoPayload<ExtArgs>
        fields: Prisma.favoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          findFirst: {
            args: Prisma.favoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          findMany: {
            args: Prisma.favoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>[]
          }
          create: {
            args: Prisma.favoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          createMany: {
            args: Prisma.favoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.favoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          update: {
            args: Prisma.favoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          deleteMany: {
            args: Prisma.favoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.favoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.favoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      fornecedor: {
        payload: Prisma.$fornecedorPayload<ExtArgs>
        fields: Prisma.fornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          findFirst: {
            args: Prisma.fornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          findMany: {
            args: Prisma.fornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>[]
          }
          create: {
            args: Prisma.fornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          createMany: {
            args: Prisma.fornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          update: {
            args: Prisma.fornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          deleteMany: {
            args: Prisma.fornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.fornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.fornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      item_carrinho: {
        payload: Prisma.$item_carrinhoPayload<ExtArgs>
        fields: Prisma.item_carrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_carrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_carrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          findFirst: {
            args: Prisma.item_carrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_carrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          findMany: {
            args: Prisma.item_carrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>[]
          }
          create: {
            args: Prisma.item_carrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          createMany: {
            args: Prisma.item_carrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.item_carrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          update: {
            args: Prisma.item_carrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          deleteMany: {
            args: Prisma.item_carrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.item_carrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.item_carrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_carrinhoPayload>
          }
          aggregate: {
            args: Prisma.Item_carrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_carrinho>
          }
          groupBy: {
            args: Prisma.item_carrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_carrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_carrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<Item_carrinhoCountAggregateOutputType> | number
          }
        }
      }
      item_pedido: {
        payload: Prisma.$item_pedidoPayload<ExtArgs>
        fields: Prisma.item_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          findFirst: {
            args: Prisma.item_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          findMany: {
            args: Prisma.item_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>[]
          }
          create: {
            args: Prisma.item_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          createMany: {
            args: Prisma.item_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.item_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          update: {
            args: Prisma.item_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.item_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.item_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.item_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Item_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_pedido>
          }
          groupBy: {
            args: Prisma.item_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Item_pedidoCountAggregateOutputType> | number
          }
        }
      }
      oferta: {
        payload: Prisma.$ofertaPayload<ExtArgs>
        fields: Prisma.ofertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ofertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ofertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          findFirst: {
            args: Prisma.ofertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ofertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          findMany: {
            args: Prisma.ofertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>[]
          }
          create: {
            args: Prisma.ofertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          createMany: {
            args: Prisma.ofertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ofertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          update: {
            args: Prisma.ofertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          deleteMany: {
            args: Prisma.ofertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ofertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ofertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ofertaPayload>
          }
          aggregate: {
            args: Prisma.OfertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOferta>
          }
          groupBy: {
            args: Prisma.ofertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ofertaCountArgs<ExtArgs>
            result: $Utils.Optional<OfertaCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    avaliacao?: avaliacaoOmit
    carrinho?: carrinhoOmit
    categoria?: categoriaOmit
    comentario?: comentarioOmit
    configuracao_usuario?: configuracao_usuarioOmit
    endereco?: enderecoOmit
    favorito?: favoritoOmit
    fornecedor?: fornecedorOmit
    item_carrinho?: item_carrinhoOmit
    item_pedido?: item_pedidoOmit
    oferta?: ofertaOmit
    pedido?: pedidoOmit
    produto?: produtoOmit
    usuario?: usuarioOmit
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
   * Count Type CarrinhoCountOutputType
   */

  export type CarrinhoCountOutputType = {
    item_carrinho: number
  }

  export type CarrinhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_carrinho?: boolean | CarrinhoCountOutputTypeCountItem_carrinhoArgs
  }

  // Custom InputTypes
  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrinhoCountOutputType
     */
    select?: CarrinhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeCountItem_carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_carrinhoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    produto: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | CategoriaCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    pedido: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | EnderecoCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    produto: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | FornecedorCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    item_pedido: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_pedido?: boolean | PedidoCountOutputTypeCountItem_pedidoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItem_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_pedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    avaliacao: number
    comentario: number
    favorito: number
    item_carrinho: number
    item_pedido: number
    oferta: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | ProdutoCountOutputTypeCountAvaliacaoArgs
    comentario?: boolean | ProdutoCountOutputTypeCountComentarioArgs
    favorito?: boolean | ProdutoCountOutputTypeCountFavoritoArgs
    item_carrinho?: boolean | ProdutoCountOutputTypeCountItem_carrinhoArgs
    item_pedido?: boolean | ProdutoCountOutputTypeCountItem_pedidoArgs
    oferta?: boolean | ProdutoCountOutputTypeCountOfertaArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacaoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountFavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItem_carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_carrinhoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItem_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_pedidoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountOfertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ofertaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    avaliacao: number
    carrinho: number
    comentario: number
    endereco: number
    favorito: number
    pedido: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | UsuarioCountOutputTypeCountAvaliacaoArgs
    carrinho?: boolean | UsuarioCountOutputTypeCountCarrinhoArgs
    comentario?: boolean | UsuarioCountOutputTypeCountComentarioArgs
    endereco?: boolean | UsuarioCountOutputTypeCountEnderecoArgs
    favorito?: boolean | UsuarioCountOutputTypeCountFavoritoArgs
    pedido?: boolean | UsuarioCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCarrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinhoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEnderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    data_avaliacao: Date | null
    nota: number | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    data_avaliacao: Date | null
    nota: number | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    usuario_id: number
    produto_id: number
    data_avaliacao: number
    nota: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_avaliacao?: true
    nota?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_avaliacao?: true
    nota?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_avaliacao?: true
    nota?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacao to aggregate.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type avaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacaoWhereInput
    orderBy?: avaliacaoOrderByWithAggregationInput | avaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: avaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    usuario_id: number
    produto_id: number
    data_avaliacao: Date | null
    nota: number
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends avaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type avaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    produto_id?: boolean
    data_avaliacao?: boolean
    nota?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type avaliacaoSelectScalar = {
    usuario_id?: boolean
    produto_id?: boolean
    data_avaliacao?: boolean
    nota?: boolean
  }

  export type avaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "produto_id" | "data_avaliacao" | "nota", ExtArgs["result"]["avaliacao"]>
  export type avaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $avaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacao"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      produto_id: number
      data_avaliacao: Date | null
      nota: number
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type avaliacaoGetPayload<S extends boolean | null | undefined | avaliacaoDefaultArgs> = $Result.GetResult<Prisma.$avaliacaoPayload, S>

  type avaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface avaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacao'], meta: { name: 'avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {avaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacaoFindUniqueArgs>(args: SelectSubset<T, avaliacaoFindUniqueArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacaoFindFirstArgs>(args?: SelectSubset<T, avaliacaoFindFirstArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const avaliacaoWithUsuario_idOnly = await prisma.avaliacao.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends avaliacaoFindManyArgs>(args?: SelectSubset<T, avaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {avaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends avaliacaoCreateArgs>(args: SelectSubset<T, avaliacaoCreateArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {avaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacaoCreateManyArgs>(args?: SelectSubset<T, avaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {avaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends avaliacaoDeleteArgs>(args: SelectSubset<T, avaliacaoDeleteArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {avaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacaoUpdateArgs>(args: SelectSubset<T, avaliacaoUpdateArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {avaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacaoDeleteManyArgs>(args?: SelectSubset<T, avaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacaoUpdateManyArgs>(args: SelectSubset<T, avaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {avaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends avaliacaoUpsertArgs>(args: SelectSubset<T, avaliacaoUpsertArgs<ExtArgs>>): Prisma__avaliacaoClient<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends avaliacaoCountArgs>(
      args?: Subset<T, avaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacaoGroupByArgs} args - Group by arguments.
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
      T extends avaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: avaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, avaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacao model
   */
  readonly fields: avaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the avaliacao model
   */
  interface avaliacaoFieldRefs {
    readonly usuario_id: FieldRef<"avaliacao", 'Int'>
    readonly produto_id: FieldRef<"avaliacao", 'Int'>
    readonly data_avaliacao: FieldRef<"avaliacao", 'DateTime'>
    readonly nota: FieldRef<"avaliacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * avaliacao findUnique
   */
  export type avaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao findUniqueOrThrow
   */
  export type avaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao findFirst
   */
  export type avaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao findFirstOrThrow
   */
  export type avaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao findMany
   */
  export type avaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which avaliacaos to fetch.
     */
    where?: avaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacaos to fetch.
     */
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacaos.
     */
    cursor?: avaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * avaliacao create
   */
  export type avaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a avaliacao.
     */
    data: XOR<avaliacaoCreateInput, avaliacaoUncheckedCreateInput>
  }

  /**
   * avaliacao createMany
   */
  export type avaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacaos.
     */
    data: avaliacaoCreateManyInput | avaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacao update
   */
  export type avaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a avaliacao.
     */
    data: XOR<avaliacaoUpdateInput, avaliacaoUncheckedUpdateInput>
    /**
     * Choose, which avaliacao to update.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao updateMany
   */
  export type avaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacaos.
     */
    data: XOR<avaliacaoUpdateManyMutationInput, avaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which avaliacaos to update
     */
    where?: avaliacaoWhereInput
    /**
     * Limit how many avaliacaos to update.
     */
    limit?: number
  }

  /**
   * avaliacao upsert
   */
  export type avaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the avaliacao to update in case it exists.
     */
    where: avaliacaoWhereUniqueInput
    /**
     * In case the avaliacao found by the `where` argument doesn't exist, create a new avaliacao with this data.
     */
    create: XOR<avaliacaoCreateInput, avaliacaoUncheckedCreateInput>
    /**
     * In case the avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacaoUpdateInput, avaliacaoUncheckedUpdateInput>
  }

  /**
   * avaliacao delete
   */
  export type avaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    /**
     * Filter which avaliacao to delete.
     */
    where: avaliacaoWhereUniqueInput
  }

  /**
   * avaliacao deleteMany
   */
  export type avaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacaos to delete
     */
    where?: avaliacaoWhereInput
    /**
     * Limit how many avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * avaliacao without action
   */
  export type avaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model carrinho
   */

  export type AggregateCarrinho = {
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  export type CarrinhoAvgAggregateOutputType = {
    id_carrinho: number | null
    id_usuario: number | null
  }

  export type CarrinhoSumAggregateOutputType = {
    id_carrinho: number | null
    id_usuario: number | null
  }

  export type CarrinhoMinAggregateOutputType = {
    id_carrinho: number | null
    id_usuario: number | null
    data_criacao: Date | null
    status: string | null
  }

  export type CarrinhoMaxAggregateOutputType = {
    id_carrinho: number | null
    id_usuario: number | null
    data_criacao: Date | null
    status: string | null
  }

  export type CarrinhoCountAggregateOutputType = {
    id_carrinho: number
    id_usuario: number
    data_criacao: number
    status: number
    _all: number
  }


  export type CarrinhoAvgAggregateInputType = {
    id_carrinho?: true
    id_usuario?: true
  }

  export type CarrinhoSumAggregateInputType = {
    id_carrinho?: true
    id_usuario?: true
  }

  export type CarrinhoMinAggregateInputType = {
    id_carrinho?: true
    id_usuario?: true
    data_criacao?: true
    status?: true
  }

  export type CarrinhoMaxAggregateInputType = {
    id_carrinho?: true
    id_usuario?: true
    data_criacao?: true
    status?: true
  }

  export type CarrinhoCountAggregateInputType = {
    id_carrinho?: true
    id_usuario?: true
    data_criacao?: true
    status?: true
    _all?: true
  }

  export type CarrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinho to aggregate.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carrinhos
    **/
    _count?: true | CarrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrinhoMaxAggregateInputType
  }

  export type GetCarrinhoAggregateType<T extends CarrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinho[P]>
      : GetScalarType<T[P], AggregateCarrinho[P]>
  }




  export type carrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinhoWhereInput
    orderBy?: carrinhoOrderByWithAggregationInput | carrinhoOrderByWithAggregationInput[]
    by: CarrinhoScalarFieldEnum[] | CarrinhoScalarFieldEnum
    having?: carrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrinhoCountAggregateInputType | true
    _avg?: CarrinhoAvgAggregateInputType
    _sum?: CarrinhoSumAggregateInputType
    _min?: CarrinhoMinAggregateInputType
    _max?: CarrinhoMaxAggregateInputType
  }

  export type CarrinhoGroupByOutputType = {
    id_carrinho: number
    id_usuario: number
    data_criacao: Date | null
    status: string | null
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  type GetCarrinhoGroupByPayload<T extends carrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
        }
      >
    >


  export type carrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrinho?: boolean
    id_usuario?: boolean
    data_criacao?: boolean
    status?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    item_carrinho?: boolean | carrinho$item_carrinhoArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>



  export type carrinhoSelectScalar = {
    id_carrinho?: boolean
    id_usuario?: boolean
    data_criacao?: boolean
    status?: boolean
  }

  export type carrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carrinho" | "id_usuario" | "data_criacao" | "status", ExtArgs["result"]["carrinho"]>
  export type carrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    item_carrinho?: boolean | carrinho$item_carrinhoArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $carrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carrinho"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      item_carrinho: Prisma.$item_carrinhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carrinho: number
      id_usuario: number
      data_criacao: Date | null
      status: string | null
    }, ExtArgs["result"]["carrinho"]>
    composites: {}
  }

  type carrinhoGetPayload<S extends boolean | null | undefined | carrinhoDefaultArgs> = $Result.GetResult<Prisma.$carrinhoPayload, S>

  type carrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrinhoCountAggregateInputType | true
    }

  export interface carrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrinho'], meta: { name: 'carrinho' } }
    /**
     * Find zero or one Carrinho that matches the filter.
     * @param {carrinhoFindUniqueArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carrinhoFindUniqueArgs>(args: SelectSubset<T, carrinhoFindUniqueArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carrinhoFindUniqueOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, carrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindFirstArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carrinhoFindFirstArgs>(args?: SelectSubset<T, carrinhoFindFirstArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindFirstOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, carrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinhos
     * const carrinhos = await prisma.carrinho.findMany()
     * 
     * // Get first 10 Carrinhos
     * const carrinhos = await prisma.carrinho.findMany({ take: 10 })
     * 
     * // Only select the `id_carrinho`
     * const carrinhoWithId_carrinhoOnly = await prisma.carrinho.findMany({ select: { id_carrinho: true } })
     * 
     */
    findMany<T extends carrinhoFindManyArgs>(args?: SelectSubset<T, carrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrinho.
     * @param {carrinhoCreateArgs} args - Arguments to create a Carrinho.
     * @example
     * // Create one Carrinho
     * const Carrinho = await prisma.carrinho.create({
     *   data: {
     *     // ... data to create a Carrinho
     *   }
     * })
     * 
     */
    create<T extends carrinhoCreateArgs>(args: SelectSubset<T, carrinhoCreateArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carrinhos.
     * @param {carrinhoCreateManyArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carrinhoCreateManyArgs>(args?: SelectSubset<T, carrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrinho.
     * @param {carrinhoDeleteArgs} args - Arguments to delete one Carrinho.
     * @example
     * // Delete one Carrinho
     * const Carrinho = await prisma.carrinho.delete({
     *   where: {
     *     // ... filter to delete one Carrinho
     *   }
     * })
     * 
     */
    delete<T extends carrinhoDeleteArgs>(args: SelectSubset<T, carrinhoDeleteArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrinho.
     * @param {carrinhoUpdateArgs} args - Arguments to update one Carrinho.
     * @example
     * // Update one Carrinho
     * const carrinho = await prisma.carrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carrinhoUpdateArgs>(args: SelectSubset<T, carrinhoUpdateArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carrinhos.
     * @param {carrinhoDeleteManyArgs} args - Arguments to filter Carrinhos to delete.
     * @example
     * // Delete a few Carrinhos
     * const { count } = await prisma.carrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carrinhoDeleteManyArgs>(args?: SelectSubset<T, carrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carrinhoUpdateManyArgs>(args: SelectSubset<T, carrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrinho.
     * @param {carrinhoUpsertArgs} args - Arguments to update or create a Carrinho.
     * @example
     * // Update or create a Carrinho
     * const carrinho = await prisma.carrinho.upsert({
     *   create: {
     *     // ... data to create a Carrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinho we want to update
     *   }
     * })
     */
    upsert<T extends carrinhoUpsertArgs>(args: SelectSubset<T, carrinhoUpsertArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoCountArgs} args - Arguments to filter Carrinhos to count.
     * @example
     * // Count the number of Carrinhos
     * const count = await prisma.carrinho.count({
     *   where: {
     *     // ... the filter for the Carrinhos we want to count
     *   }
     * })
    **/
    count<T extends carrinhoCountArgs>(
      args?: Subset<T, carrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrinhoAggregateArgs>(args: Subset<T, CarrinhoAggregateArgs>): Prisma.PrismaPromise<GetCarrinhoAggregateType<T>>

    /**
     * Group by Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoGroupByArgs} args - Group by arguments.
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
      T extends carrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrinhoGroupByArgs['orderBy'] }
        : { orderBy?: carrinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carrinho model
   */
  readonly fields: carrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item_carrinho<T extends carrinho$item_carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, carrinho$item_carrinhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the carrinho model
   */
  interface carrinhoFieldRefs {
    readonly id_carrinho: FieldRef<"carrinho", 'Int'>
    readonly id_usuario: FieldRef<"carrinho", 'Int'>
    readonly data_criacao: FieldRef<"carrinho", 'DateTime'>
    readonly status: FieldRef<"carrinho", 'String'>
  }
    

  // Custom InputTypes
  /**
   * carrinho findUnique
   */
  export type carrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho findUniqueOrThrow
   */
  export type carrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho findFirst
   */
  export type carrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho findFirstOrThrow
   */
  export type carrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho findMany
   */
  export type carrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho create
   */
  export type carrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a carrinho.
     */
    data: XOR<carrinhoCreateInput, carrinhoUncheckedCreateInput>
  }

  /**
   * carrinho createMany
   */
  export type carrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carrinhos.
     */
    data: carrinhoCreateManyInput | carrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carrinho update
   */
  export type carrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a carrinho.
     */
    data: XOR<carrinhoUpdateInput, carrinhoUncheckedUpdateInput>
    /**
     * Choose, which carrinho to update.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho updateMany
   */
  export type carrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carrinhos.
     */
    data: XOR<carrinhoUpdateManyMutationInput, carrinhoUncheckedUpdateManyInput>
    /**
     * Filter which carrinhos to update
     */
    where?: carrinhoWhereInput
    /**
     * Limit how many carrinhos to update.
     */
    limit?: number
  }

  /**
   * carrinho upsert
   */
  export type carrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the carrinho to update in case it exists.
     */
    where: carrinhoWhereUniqueInput
    /**
     * In case the carrinho found by the `where` argument doesn't exist, create a new carrinho with this data.
     */
    create: XOR<carrinhoCreateInput, carrinhoUncheckedCreateInput>
    /**
     * In case the carrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrinhoUpdateInput, carrinhoUncheckedUpdateInput>
  }

  /**
   * carrinho delete
   */
  export type carrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter which carrinho to delete.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho deleteMany
   */
  export type carrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinhos to delete
     */
    where?: carrinhoWhereInput
    /**
     * Limit how many carrinhos to delete.
     */
    limit?: number
  }

  /**
   * carrinho.item_carrinho
   */
  export type carrinho$item_carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    where?: item_carrinhoWhereInput
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    cursor?: item_carrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_carrinhoScalarFieldEnum | Item_carrinhoScalarFieldEnum[]
  }

  /**
   * carrinho without action
   */
  export type carrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    produto?: boolean | categoria$produtoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type categoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | categoria$produtoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends categoria$produtoArgs<ExtArgs> = {}>(args?: Subset<T, categoria$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'Int'>
    readonly nome: FieldRef<"categoria", 'String'>
    readonly descricao: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.produto
   */
  export type categoria$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    produto_id: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    produto_id: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    produto_id: number | null
    data_comentario: Date | null
    texto: string | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    produto_id: number | null
    data_comentario: Date | null
    texto: string | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    usuario_id: number
    produto_id: number
    data_comentario: number
    texto: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    produto_id?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    usuario_id?: true
    produto_id?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    usuario_id?: true
    produto_id?: true
    data_comentario?: true
    texto?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    produto_id?: true
    data_comentario?: true
    texto?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    usuario_id?: true
    produto_id?: true
    data_comentario?: true
    texto?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentario to aggregate.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithAggregationInput | comentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    usuario_id: number
    produto_id: number
    data_comentario: Date | null
    texto: string
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    produto_id?: boolean
    data_comentario?: boolean
    texto?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type comentarioSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    produto_id?: boolean
    data_comentario?: boolean
    texto?: boolean
  }

  export type comentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "produto_id" | "data_comentario" | "texto", ExtArgs["result"]["comentario"]>
  export type comentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comentario"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      produto_id: number
      data_comentario: Date | null
      texto: string
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type comentarioGetPayload<S extends boolean | null | undefined | comentarioDefaultArgs> = $Result.GetResult<Prisma.$comentarioPayload, S>

  type comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comentario'], meta: { name: 'comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {comentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comentarioFindUniqueArgs>(args: SelectSubset<T, comentarioFindUniqueArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, comentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comentarioFindFirstArgs>(args?: SelectSubset<T, comentarioFindFirstArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, comentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comentarioFindManyArgs>(args?: SelectSubset<T, comentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {comentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends comentarioCreateArgs>(args: SelectSubset<T, comentarioCreateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {comentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comentarioCreateManyArgs>(args?: SelectSubset<T, comentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {comentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends comentarioDeleteArgs>(args: SelectSubset<T, comentarioDeleteArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {comentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comentarioUpdateArgs>(args: SelectSubset<T, comentarioUpdateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {comentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comentarioDeleteManyArgs>(args?: SelectSubset<T, comentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comentarioUpdateManyArgs>(args: SelectSubset<T, comentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {comentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends comentarioUpsertArgs>(args: SelectSubset<T, comentarioUpsertArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends comentarioCountArgs>(
      args?: Subset<T, comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioGroupByArgs} args - Group by arguments.
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
      T extends comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comentarioGroupByArgs['orderBy'] }
        : { orderBy?: comentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comentario model
   */
  readonly fields: comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comentario model
   */
  interface comentarioFieldRefs {
    readonly id: FieldRef<"comentario", 'Int'>
    readonly usuario_id: FieldRef<"comentario", 'Int'>
    readonly produto_id: FieldRef<"comentario", 'Int'>
    readonly data_comentario: FieldRef<"comentario", 'DateTime'>
    readonly texto: FieldRef<"comentario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comentario findUnique
   */
  export type comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findUniqueOrThrow
   */
  export type comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findFirst
   */
  export type comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findFirstOrThrow
   */
  export type comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findMany
   */
  export type comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentarios to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario create
   */
  export type comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a comentario.
     */
    data: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
  }

  /**
   * comentario createMany
   */
  export type comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comentarios.
     */
    data: comentarioCreateManyInput | comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comentario update
   */
  export type comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a comentario.
     */
    data: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
    /**
     * Choose, which comentario to update.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario updateMany
   */
  export type comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comentarios.
     */
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyInput>
    /**
     * Filter which comentarios to update
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to update.
     */
    limit?: number
  }

  /**
   * comentario upsert
   */
  export type comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the comentario to update in case it exists.
     */
    where: comentarioWhereUniqueInput
    /**
     * In case the comentario found by the `where` argument doesn't exist, create a new comentario with this data.
     */
    create: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
    /**
     * In case the comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
  }

  /**
   * comentario delete
   */
  export type comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter which comentario to delete.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario deleteMany
   */
  export type comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentarios to delete
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to delete.
     */
    limit?: number
  }

  /**
   * comentario without action
   */
  export type comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
  }


  /**
   * Model configuracao_usuario
   */

  export type AggregateConfiguracao_usuario = {
    _count: Configuracao_usuarioCountAggregateOutputType | null
    _avg: Configuracao_usuarioAvgAggregateOutputType | null
    _sum: Configuracao_usuarioSumAggregateOutputType | null
    _min: Configuracao_usuarioMinAggregateOutputType | null
    _max: Configuracao_usuarioMaxAggregateOutputType | null
  }

  export type Configuracao_usuarioAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type Configuracao_usuarioSumAggregateOutputType = {
    usuario_id: number | null
  }

  export type Configuracao_usuarioMinAggregateOutputType = {
    usuario_id: number | null
    tamanho_fonte: string | null
    alto_contraste: boolean | null
    audio: boolean | null
    libras: boolean | null
  }

  export type Configuracao_usuarioMaxAggregateOutputType = {
    usuario_id: number | null
    tamanho_fonte: string | null
    alto_contraste: boolean | null
    audio: boolean | null
    libras: boolean | null
  }

  export type Configuracao_usuarioCountAggregateOutputType = {
    usuario_id: number
    tamanho_fonte: number
    alto_contraste: number
    audio: number
    libras: number
    _all: number
  }


  export type Configuracao_usuarioAvgAggregateInputType = {
    usuario_id?: true
  }

  export type Configuracao_usuarioSumAggregateInputType = {
    usuario_id?: true
  }

  export type Configuracao_usuarioMinAggregateInputType = {
    usuario_id?: true
    tamanho_fonte?: true
    alto_contraste?: true
    audio?: true
    libras?: true
  }

  export type Configuracao_usuarioMaxAggregateInputType = {
    usuario_id?: true
    tamanho_fonte?: true
    alto_contraste?: true
    audio?: true
    libras?: true
  }

  export type Configuracao_usuarioCountAggregateInputType = {
    usuario_id?: true
    tamanho_fonte?: true
    alto_contraste?: true
    audio?: true
    libras?: true
    _all?: true
  }

  export type Configuracao_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracao_usuario to aggregate.
     */
    where?: configuracao_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracao_usuarios to fetch.
     */
    orderBy?: configuracao_usuarioOrderByWithRelationInput | configuracao_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracao_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracao_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracao_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracao_usuarios
    **/
    _count?: true | Configuracao_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Configuracao_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Configuracao_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Configuracao_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Configuracao_usuarioMaxAggregateInputType
  }

  export type GetConfiguracao_usuarioAggregateType<T extends Configuracao_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracao_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracao_usuario[P]>
      : GetScalarType<T[P], AggregateConfiguracao_usuario[P]>
  }




  export type configuracao_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracao_usuarioWhereInput
    orderBy?: configuracao_usuarioOrderByWithAggregationInput | configuracao_usuarioOrderByWithAggregationInput[]
    by: Configuracao_usuarioScalarFieldEnum[] | Configuracao_usuarioScalarFieldEnum
    having?: configuracao_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Configuracao_usuarioCountAggregateInputType | true
    _avg?: Configuracao_usuarioAvgAggregateInputType
    _sum?: Configuracao_usuarioSumAggregateInputType
    _min?: Configuracao_usuarioMinAggregateInputType
    _max?: Configuracao_usuarioMaxAggregateInputType
  }

  export type Configuracao_usuarioGroupByOutputType = {
    usuario_id: number
    tamanho_fonte: string | null
    alto_contraste: boolean | null
    audio: boolean | null
    libras: boolean | null
    _count: Configuracao_usuarioCountAggregateOutputType | null
    _avg: Configuracao_usuarioAvgAggregateOutputType | null
    _sum: Configuracao_usuarioSumAggregateOutputType | null
    _min: Configuracao_usuarioMinAggregateOutputType | null
    _max: Configuracao_usuarioMaxAggregateOutputType | null
  }

  type GetConfiguracao_usuarioGroupByPayload<T extends configuracao_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Configuracao_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Configuracao_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Configuracao_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Configuracao_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type configuracao_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    tamanho_fonte?: boolean
    alto_contraste?: boolean
    audio?: boolean
    libras?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao_usuario"]>



  export type configuracao_usuarioSelectScalar = {
    usuario_id?: boolean
    tamanho_fonte?: boolean
    alto_contraste?: boolean
    audio?: boolean
    libras?: boolean
  }

  export type configuracao_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "tamanho_fonte" | "alto_contraste" | "audio" | "libras", ExtArgs["result"]["configuracao_usuario"]>
  export type configuracao_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $configuracao_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuracao_usuario"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      tamanho_fonte: string | null
      alto_contraste: boolean | null
      audio: boolean | null
      libras: boolean | null
    }, ExtArgs["result"]["configuracao_usuario"]>
    composites: {}
  }

  type configuracao_usuarioGetPayload<S extends boolean | null | undefined | configuracao_usuarioDefaultArgs> = $Result.GetResult<Prisma.$configuracao_usuarioPayload, S>

  type configuracao_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracao_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Configuracao_usuarioCountAggregateInputType | true
    }

  export interface configuracao_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuracao_usuario'], meta: { name: 'configuracao_usuario' } }
    /**
     * Find zero or one Configuracao_usuario that matches the filter.
     * @param {configuracao_usuarioFindUniqueArgs} args - Arguments to find a Configuracao_usuario
     * @example
     * // Get one Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracao_usuarioFindUniqueArgs>(args: SelectSubset<T, configuracao_usuarioFindUniqueArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracao_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracao_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Configuracao_usuario
     * @example
     * // Get one Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracao_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracao_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioFindFirstArgs} args - Arguments to find a Configuracao_usuario
     * @example
     * // Get one Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracao_usuarioFindFirstArgs>(args?: SelectSubset<T, configuracao_usuarioFindFirstArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioFindFirstOrThrowArgs} args - Arguments to find a Configuracao_usuario
     * @example
     * // Get one Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracao_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracao_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracao_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracao_usuarios
     * const configuracao_usuarios = await prisma.configuracao_usuario.findMany()
     * 
     * // Get first 10 Configuracao_usuarios
     * const configuracao_usuarios = await prisma.configuracao_usuario.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const configuracao_usuarioWithUsuario_idOnly = await prisma.configuracao_usuario.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends configuracao_usuarioFindManyArgs>(args?: SelectSubset<T, configuracao_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracao_usuario.
     * @param {configuracao_usuarioCreateArgs} args - Arguments to create a Configuracao_usuario.
     * @example
     * // Create one Configuracao_usuario
     * const Configuracao_usuario = await prisma.configuracao_usuario.create({
     *   data: {
     *     // ... data to create a Configuracao_usuario
     *   }
     * })
     * 
     */
    create<T extends configuracao_usuarioCreateArgs>(args: SelectSubset<T, configuracao_usuarioCreateArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracao_usuarios.
     * @param {configuracao_usuarioCreateManyArgs} args - Arguments to create many Configuracao_usuarios.
     * @example
     * // Create many Configuracao_usuarios
     * const configuracao_usuario = await prisma.configuracao_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracao_usuarioCreateManyArgs>(args?: SelectSubset<T, configuracao_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuracao_usuario.
     * @param {configuracao_usuarioDeleteArgs} args - Arguments to delete one Configuracao_usuario.
     * @example
     * // Delete one Configuracao_usuario
     * const Configuracao_usuario = await prisma.configuracao_usuario.delete({
     *   where: {
     *     // ... filter to delete one Configuracao_usuario
     *   }
     * })
     * 
     */
    delete<T extends configuracao_usuarioDeleteArgs>(args: SelectSubset<T, configuracao_usuarioDeleteArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracao_usuario.
     * @param {configuracao_usuarioUpdateArgs} args - Arguments to update one Configuracao_usuario.
     * @example
     * // Update one Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracao_usuarioUpdateArgs>(args: SelectSubset<T, configuracao_usuarioUpdateArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracao_usuarios.
     * @param {configuracao_usuarioDeleteManyArgs} args - Arguments to filter Configuracao_usuarios to delete.
     * @example
     * // Delete a few Configuracao_usuarios
     * const { count } = await prisma.configuracao_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracao_usuarioDeleteManyArgs>(args?: SelectSubset<T, configuracao_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracao_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracao_usuarios
     * const configuracao_usuario = await prisma.configuracao_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracao_usuarioUpdateManyArgs>(args: SelectSubset<T, configuracao_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuracao_usuario.
     * @param {configuracao_usuarioUpsertArgs} args - Arguments to update or create a Configuracao_usuario.
     * @example
     * // Update or create a Configuracao_usuario
     * const configuracao_usuario = await prisma.configuracao_usuario.upsert({
     *   create: {
     *     // ... data to create a Configuracao_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracao_usuario we want to update
     *   }
     * })
     */
    upsert<T extends configuracao_usuarioUpsertArgs>(args: SelectSubset<T, configuracao_usuarioUpsertArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracao_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioCountArgs} args - Arguments to filter Configuracao_usuarios to count.
     * @example
     * // Count the number of Configuracao_usuarios
     * const count = await prisma.configuracao_usuario.count({
     *   where: {
     *     // ... the filter for the Configuracao_usuarios we want to count
     *   }
     * })
    **/
    count<T extends configuracao_usuarioCountArgs>(
      args?: Subset<T, configuracao_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Configuracao_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracao_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracao_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Configuracao_usuarioAggregateArgs>(args: Subset<T, Configuracao_usuarioAggregateArgs>): Prisma.PrismaPromise<GetConfiguracao_usuarioAggregateType<T>>

    /**
     * Group by Configuracao_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracao_usuarioGroupByArgs} args - Group by arguments.
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
      T extends configuracao_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracao_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: configuracao_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configuracao_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracao_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuracao_usuario model
   */
  readonly fields: configuracao_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracao_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracao_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the configuracao_usuario model
   */
  interface configuracao_usuarioFieldRefs {
    readonly usuario_id: FieldRef<"configuracao_usuario", 'Int'>
    readonly tamanho_fonte: FieldRef<"configuracao_usuario", 'String'>
    readonly alto_contraste: FieldRef<"configuracao_usuario", 'Boolean'>
    readonly audio: FieldRef<"configuracao_usuario", 'Boolean'>
    readonly libras: FieldRef<"configuracao_usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * configuracao_usuario findUnique
   */
  export type configuracao_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which configuracao_usuario to fetch.
     */
    where: configuracao_usuarioWhereUniqueInput
  }

  /**
   * configuracao_usuario findUniqueOrThrow
   */
  export type configuracao_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which configuracao_usuario to fetch.
     */
    where: configuracao_usuarioWhereUniqueInput
  }

  /**
   * configuracao_usuario findFirst
   */
  export type configuracao_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which configuracao_usuario to fetch.
     */
    where?: configuracao_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracao_usuarios to fetch.
     */
    orderBy?: configuracao_usuarioOrderByWithRelationInput | configuracao_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracao_usuarios.
     */
    cursor?: configuracao_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracao_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracao_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracao_usuarios.
     */
    distinct?: Configuracao_usuarioScalarFieldEnum | Configuracao_usuarioScalarFieldEnum[]
  }

  /**
   * configuracao_usuario findFirstOrThrow
   */
  export type configuracao_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which configuracao_usuario to fetch.
     */
    where?: configuracao_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracao_usuarios to fetch.
     */
    orderBy?: configuracao_usuarioOrderByWithRelationInput | configuracao_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracao_usuarios.
     */
    cursor?: configuracao_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracao_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracao_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracao_usuarios.
     */
    distinct?: Configuracao_usuarioScalarFieldEnum | Configuracao_usuarioScalarFieldEnum[]
  }

  /**
   * configuracao_usuario findMany
   */
  export type configuracao_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which configuracao_usuarios to fetch.
     */
    where?: configuracao_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracao_usuarios to fetch.
     */
    orderBy?: configuracao_usuarioOrderByWithRelationInput | configuracao_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracao_usuarios.
     */
    cursor?: configuracao_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracao_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracao_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracao_usuarios.
     */
    distinct?: Configuracao_usuarioScalarFieldEnum | Configuracao_usuarioScalarFieldEnum[]
  }

  /**
   * configuracao_usuario create
   */
  export type configuracao_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a configuracao_usuario.
     */
    data: XOR<configuracao_usuarioCreateInput, configuracao_usuarioUncheckedCreateInput>
  }

  /**
   * configuracao_usuario createMany
   */
  export type configuracao_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuracao_usuarios.
     */
    data: configuracao_usuarioCreateManyInput | configuracao_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracao_usuario update
   */
  export type configuracao_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a configuracao_usuario.
     */
    data: XOR<configuracao_usuarioUpdateInput, configuracao_usuarioUncheckedUpdateInput>
    /**
     * Choose, which configuracao_usuario to update.
     */
    where: configuracao_usuarioWhereUniqueInput
  }

  /**
   * configuracao_usuario updateMany
   */
  export type configuracao_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuracao_usuarios.
     */
    data: XOR<configuracao_usuarioUpdateManyMutationInput, configuracao_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which configuracao_usuarios to update
     */
    where?: configuracao_usuarioWhereInput
    /**
     * Limit how many configuracao_usuarios to update.
     */
    limit?: number
  }

  /**
   * configuracao_usuario upsert
   */
  export type configuracao_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the configuracao_usuario to update in case it exists.
     */
    where: configuracao_usuarioWhereUniqueInput
    /**
     * In case the configuracao_usuario found by the `where` argument doesn't exist, create a new configuracao_usuario with this data.
     */
    create: XOR<configuracao_usuarioCreateInput, configuracao_usuarioUncheckedCreateInput>
    /**
     * In case the configuracao_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracao_usuarioUpdateInput, configuracao_usuarioUncheckedUpdateInput>
  }

  /**
   * configuracao_usuario delete
   */
  export type configuracao_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    /**
     * Filter which configuracao_usuario to delete.
     */
    where: configuracao_usuarioWhereUniqueInput
  }

  /**
   * configuracao_usuario deleteMany
   */
  export type configuracao_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracao_usuarios to delete
     */
    where?: configuracao_usuarioWhereInput
    /**
     * Limit how many configuracao_usuarios to delete.
     */
    limit?: number
  }

  /**
   * configuracao_usuario without action
   */
  export type configuracao_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    endereco_id: number | null
    usuario_id: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    endereco_id: number | null
    usuario_id: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    endereco_id: number | null
    usuario_id: number | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    endereco_id: number | null
    usuario_id: number | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    endereco_id: number
    usuario_id: number
    cep: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    endereco_id?: true
    usuario_id?: true
  }

  export type EnderecoSumAggregateInputType = {
    endereco_id?: true
    usuario_id?: true
  }

  export type EnderecoMinAggregateInputType = {
    endereco_id?: true
    usuario_id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type EnderecoMaxAggregateInputType = {
    endereco_id?: true
    usuario_id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type EnderecoCountAggregateInputType = {
    endereco_id?: true
    usuario_id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    endereco_id: number
    usuario_id: number
    cep: string
    logradouro: string
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    endereco_id?: boolean
    usuario_id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    pedido?: boolean | endereco$pedidoArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>



  export type enderecoSelectScalar = {
    endereco_id?: boolean
    usuario_id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type enderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"endereco_id" | "usuario_id" | "cep" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado", ExtArgs["result"]["endereco"]>
  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    pedido?: boolean | endereco$pedidoArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      endereco_id: number
      usuario_id: number
      cep: string
      logradouro: string
      numero: string | null
      complemento: string | null
      bairro: string | null
      cidade: string | null
      estado: string | null
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecoFindUniqueArgs>(args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecoFindFirstArgs>(args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `endereco_id`
     * const enderecoWithEndereco_idOnly = await prisma.endereco.findMany({ select: { endereco_id: true } })
     * 
     */
    findMany<T extends enderecoFindManyArgs>(args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends enderecoCreateArgs>(args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecoCreateManyArgs>(args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends enderecoDeleteArgs>(args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecoUpdateArgs>(args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecoDeleteManyArgs>(args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecoUpdateManyArgs>(args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends enderecoUpsertArgs>(args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
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
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends endereco$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, endereco$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the endereco model
   */
  interface enderecoFieldRefs {
    readonly endereco_id: FieldRef<"endereco", 'Int'>
    readonly usuario_id: FieldRef<"endereco", 'Int'>
    readonly cep: FieldRef<"endereco", 'String'>
    readonly logradouro: FieldRef<"endereco", 'String'>
    readonly numero: FieldRef<"endereco", 'String'>
    readonly complemento: FieldRef<"endereco", 'String'>
    readonly bairro: FieldRef<"endereco", 'String'>
    readonly cidade: FieldRef<"endereco", 'String'>
    readonly estado: FieldRef<"endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }

  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }

  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * endereco.pedido
   */
  export type endereco$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
  }


  /**
   * Model favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoAvgAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
  }

  export type FavoritoSumAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
  }

  export type FavoritoMinAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    data_favorito: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    usuario_id: number | null
    produto_id: number | null
    data_favorito: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    usuario_id: number
    produto_id: number
    data_favorito: number
    _all: number
  }


  export type FavoritoAvgAggregateInputType = {
    usuario_id?: true
    produto_id?: true
  }

  export type FavoritoSumAggregateInputType = {
    usuario_id?: true
    produto_id?: true
  }

  export type FavoritoMinAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_favorito?: true
  }

  export type FavoritoMaxAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_favorito?: true
  }

  export type FavoritoCountAggregateInputType = {
    usuario_id?: true
    produto_id?: true
    data_favorito?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorito to aggregate.
     */
    where?: favoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type favoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritoWhereInput
    orderBy?: favoritoOrderByWithAggregationInput | favoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: favoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _avg?: FavoritoAvgAggregateInputType
    _sum?: FavoritoSumAggregateInputType
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    usuario_id: number
    produto_id: number
    data_favorito: Date | null
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends favoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type favoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    produto_id?: boolean
    data_favorito?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>



  export type favoritoSelectScalar = {
    usuario_id?: boolean
    produto_id?: boolean
    data_favorito?: boolean
  }

  export type favoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "produto_id" | "data_favorito", ExtArgs["result"]["favorito"]>
  export type favoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $favoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorito"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      produto_id: number
      data_favorito: Date | null
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type favoritoGetPayload<S extends boolean | null | undefined | favoritoDefaultArgs> = $Result.GetResult<Prisma.$favoritoPayload, S>

  type favoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface favoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorito'], meta: { name: 'favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {favoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favoritoFindUniqueArgs>(args: SelectSubset<T, favoritoFindUniqueArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, favoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favoritoFindFirstArgs>(args?: SelectSubset<T, favoritoFindFirstArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, favoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const favoritoWithUsuario_idOnly = await prisma.favorito.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends favoritoFindManyArgs>(args?: SelectSubset<T, favoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {favoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends favoritoCreateArgs>(args: SelectSubset<T, favoritoCreateArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {favoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favoritoCreateManyArgs>(args?: SelectSubset<T, favoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorito.
     * @param {favoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends favoritoDeleteArgs>(args: SelectSubset<T, favoritoDeleteArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {favoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favoritoUpdateArgs>(args: SelectSubset<T, favoritoUpdateArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {favoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favoritoDeleteManyArgs>(args?: SelectSubset<T, favoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favoritoUpdateManyArgs>(args: SelectSubset<T, favoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorito.
     * @param {favoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends favoritoUpsertArgs>(args: SelectSubset<T, favoritoUpsertArgs<ExtArgs>>): Prisma__favoritoClient<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends favoritoCountArgs>(
      args?: Subset<T, favoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritoGroupByArgs} args - Group by arguments.
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
      T extends favoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoritoGroupByArgs['orderBy'] }
        : { orderBy?: favoritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorito model
   */
  readonly fields: favoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favorito model
   */
  interface favoritoFieldRefs {
    readonly usuario_id: FieldRef<"favorito", 'Int'>
    readonly produto_id: FieldRef<"favorito", 'Int'>
    readonly data_favorito: FieldRef<"favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * favorito findUnique
   */
  export type favoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter, which favorito to fetch.
     */
    where: favoritoWhereUniqueInput
  }

  /**
   * favorito findUniqueOrThrow
   */
  export type favoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter, which favorito to fetch.
     */
    where: favoritoWhereUniqueInput
  }

  /**
   * favorito findFirst
   */
  export type favoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter, which favorito to fetch.
     */
    where?: favoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favoritos.
     */
    cursor?: favoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * favorito findFirstOrThrow
   */
  export type favoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter, which favorito to fetch.
     */
    where?: favoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favoritos.
     */
    cursor?: favoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * favorito findMany
   */
  export type favoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where?: favoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favoritos.
     */
    cursor?: favoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * favorito create
   */
  export type favoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a favorito.
     */
    data: XOR<favoritoCreateInput, favoritoUncheckedCreateInput>
  }

  /**
   * favorito createMany
   */
  export type favoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favoritos.
     */
    data: favoritoCreateManyInput | favoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorito update
   */
  export type favoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a favorito.
     */
    data: XOR<favoritoUpdateInput, favoritoUncheckedUpdateInput>
    /**
     * Choose, which favorito to update.
     */
    where: favoritoWhereUniqueInput
  }

  /**
   * favorito updateMany
   */
  export type favoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favoritos.
     */
    data: XOR<favoritoUpdateManyMutationInput, favoritoUncheckedUpdateManyInput>
    /**
     * Filter which favoritos to update
     */
    where?: favoritoWhereInput
    /**
     * Limit how many favoritos to update.
     */
    limit?: number
  }

  /**
   * favorito upsert
   */
  export type favoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the favorito to update in case it exists.
     */
    where: favoritoWhereUniqueInput
    /**
     * In case the favorito found by the `where` argument doesn't exist, create a new favorito with this data.
     */
    create: XOR<favoritoCreateInput, favoritoUncheckedCreateInput>
    /**
     * In case the favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoritoUpdateInput, favoritoUncheckedUpdateInput>
  }

  /**
   * favorito delete
   */
  export type favoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    /**
     * Filter which favorito to delete.
     */
    where: favoritoWhereUniqueInput
  }

  /**
   * favorito deleteMany
   */
  export type favoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favoritos to delete
     */
    where?: favoritoWhereInput
    /**
     * Limit how many favoritos to delete.
     */
    limit?: number
  }

  /**
   * favorito without action
   */
  export type favoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
  }


  /**
   * Model fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorAvgAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type FornecedorSumAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type FornecedorMinAggregateOutputType = {
    fornecedor_id: number | null
    razao_social: string | null
    cnpj: string | null
    email: string | null
    telefone: string | null
    data_cadastro: Date | null
  }

  export type FornecedorMaxAggregateOutputType = {
    fornecedor_id: number | null
    razao_social: string | null
    cnpj: string | null
    email: string | null
    telefone: string | null
    data_cadastro: Date | null
  }

  export type FornecedorCountAggregateOutputType = {
    fornecedor_id: number
    razao_social: number
    cnpj: number
    email: number
    telefone: number
    data_cadastro: number
    _all: number
  }


  export type FornecedorAvgAggregateInputType = {
    fornecedor_id?: true
  }

  export type FornecedorSumAggregateInputType = {
    fornecedor_id?: true
  }

  export type FornecedorMinAggregateInputType = {
    fornecedor_id?: true
    razao_social?: true
    cnpj?: true
    email?: true
    telefone?: true
    data_cadastro?: true
  }

  export type FornecedorMaxAggregateInputType = {
    fornecedor_id?: true
    razao_social?: true
    cnpj?: true
    email?: true
    telefone?: true
    data_cadastro?: true
  }

  export type FornecedorCountAggregateInputType = {
    fornecedor_id?: true
    razao_social?: true
    cnpj?: true
    email?: true
    telefone?: true
    data_cadastro?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fornecedor to aggregate.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type fornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fornecedorWhereInput
    orderBy?: fornecedorOrderByWithAggregationInput | fornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: fornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _avg?: FornecedorAvgAggregateInputType
    _sum?: FornecedorSumAggregateInputType
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    fornecedor_id: number
    razao_social: string
    cnpj: string
    email: string | null
    telefone: string | null
    data_cadastro: Date | null
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends fornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type fornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fornecedor_id?: boolean
    razao_social?: boolean
    cnpj?: boolean
    email?: boolean
    telefone?: boolean
    data_cadastro?: boolean
    produto?: boolean | fornecedor$produtoArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>



  export type fornecedorSelectScalar = {
    fornecedor_id?: boolean
    razao_social?: boolean
    cnpj?: boolean
    email?: boolean
    telefone?: boolean
    data_cadastro?: boolean
  }

  export type fornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fornecedor_id" | "razao_social" | "cnpj" | "email" | "telefone" | "data_cadastro", ExtArgs["result"]["fornecedor"]>
  export type fornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | fornecedor$produtoArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $fornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fornecedor"
    objects: {
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fornecedor_id: number
      razao_social: string
      cnpj: string
      email: string | null
      telefone: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type fornecedorGetPayload<S extends boolean | null | undefined | fornecedorDefaultArgs> = $Result.GetResult<Prisma.$fornecedorPayload, S>

  type fornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface fornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fornecedor'], meta: { name: 'fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {fornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fornecedorFindUniqueArgs>(args: SelectSubset<T, fornecedorFindUniqueArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, fornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fornecedorFindFirstArgs>(args?: SelectSubset<T, fornecedorFindFirstArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, fornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `fornecedor_id`
     * const fornecedorWithFornecedor_idOnly = await prisma.fornecedor.findMany({ select: { fornecedor_id: true } })
     * 
     */
    findMany<T extends fornecedorFindManyArgs>(args?: SelectSubset<T, fornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {fornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends fornecedorCreateArgs>(args: SelectSubset<T, fornecedorCreateArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {fornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fornecedorCreateManyArgs>(args?: SelectSubset<T, fornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fornecedor.
     * @param {fornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends fornecedorDeleteArgs>(args: SelectSubset<T, fornecedorDeleteArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {fornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fornecedorUpdateArgs>(args: SelectSubset<T, fornecedorUpdateArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {fornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fornecedorDeleteManyArgs>(args?: SelectSubset<T, fornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fornecedorUpdateManyArgs>(args: SelectSubset<T, fornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fornecedor.
     * @param {fornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends fornecedorUpsertArgs>(args: SelectSubset<T, fornecedorUpsertArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends fornecedorCountArgs>(
      args?: Subset<T, fornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorGroupByArgs} args - Group by arguments.
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
      T extends fornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fornecedorGroupByArgs['orderBy'] }
        : { orderBy?: fornecedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fornecedor model
   */
  readonly fields: fornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends fornecedor$produtoArgs<ExtArgs> = {}>(args?: Subset<T, fornecedor$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the fornecedor model
   */
  interface fornecedorFieldRefs {
    readonly fornecedor_id: FieldRef<"fornecedor", 'Int'>
    readonly razao_social: FieldRef<"fornecedor", 'String'>
    readonly cnpj: FieldRef<"fornecedor", 'String'>
    readonly email: FieldRef<"fornecedor", 'String'>
    readonly telefone: FieldRef<"fornecedor", 'String'>
    readonly data_cadastro: FieldRef<"fornecedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fornecedor findUnique
   */
  export type fornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor findUniqueOrThrow
   */
  export type fornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor findFirst
   */
  export type fornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor findFirstOrThrow
   */
  export type fornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor findMany
   */
  export type fornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedors to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor create
   */
  export type fornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a fornecedor.
     */
    data: XOR<fornecedorCreateInput, fornecedorUncheckedCreateInput>
  }

  /**
   * fornecedor createMany
   */
  export type fornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fornecedors.
     */
    data: fornecedorCreateManyInput | fornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fornecedor update
   */
  export type fornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a fornecedor.
     */
    data: XOR<fornecedorUpdateInput, fornecedorUncheckedUpdateInput>
    /**
     * Choose, which fornecedor to update.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor updateMany
   */
  export type fornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fornecedors.
     */
    data: XOR<fornecedorUpdateManyMutationInput, fornecedorUncheckedUpdateManyInput>
    /**
     * Filter which fornecedors to update
     */
    where?: fornecedorWhereInput
    /**
     * Limit how many fornecedors to update.
     */
    limit?: number
  }

  /**
   * fornecedor upsert
   */
  export type fornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the fornecedor to update in case it exists.
     */
    where: fornecedorWhereUniqueInput
    /**
     * In case the fornecedor found by the `where` argument doesn't exist, create a new fornecedor with this data.
     */
    create: XOR<fornecedorCreateInput, fornecedorUncheckedCreateInput>
    /**
     * In case the fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fornecedorUpdateInput, fornecedorUncheckedUpdateInput>
  }

  /**
   * fornecedor delete
   */
  export type fornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter which fornecedor to delete.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor deleteMany
   */
  export type fornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fornecedors to delete
     */
    where?: fornecedorWhereInput
    /**
     * Limit how many fornecedors to delete.
     */
    limit?: number
  }

  /**
   * fornecedor.produto
   */
  export type fornecedor$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * fornecedor without action
   */
  export type fornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
  }


  /**
   * Model item_carrinho
   */

  export type AggregateItem_carrinho = {
    _count: Item_carrinhoCountAggregateOutputType | null
    _avg: Item_carrinhoAvgAggregateOutputType | null
    _sum: Item_carrinhoSumAggregateOutputType | null
    _min: Item_carrinhoMinAggregateOutputType | null
    _max: Item_carrinhoMaxAggregateOutputType | null
  }

  export type Item_carrinhoAvgAggregateOutputType = {
    id_carrinho: number | null
    id_produto: number | null
    quantidade: number | null
  }

  export type Item_carrinhoSumAggregateOutputType = {
    id_carrinho: number | null
    id_produto: number | null
    quantidade: number | null
  }

  export type Item_carrinhoMinAggregateOutputType = {
    id_carrinho: number | null
    id_produto: number | null
    quantidade: number | null
  }

  export type Item_carrinhoMaxAggregateOutputType = {
    id_carrinho: number | null
    id_produto: number | null
    quantidade: number | null
  }

  export type Item_carrinhoCountAggregateOutputType = {
    id_carrinho: number
    id_produto: number
    quantidade: number
    _all: number
  }


  export type Item_carrinhoAvgAggregateInputType = {
    id_carrinho?: true
    id_produto?: true
    quantidade?: true
  }

  export type Item_carrinhoSumAggregateInputType = {
    id_carrinho?: true
    id_produto?: true
    quantidade?: true
  }

  export type Item_carrinhoMinAggregateInputType = {
    id_carrinho?: true
    id_produto?: true
    quantidade?: true
  }

  export type Item_carrinhoMaxAggregateInputType = {
    id_carrinho?: true
    id_produto?: true
    quantidade?: true
  }

  export type Item_carrinhoCountAggregateInputType = {
    id_carrinho?: true
    id_produto?: true
    quantidade?: true
    _all?: true
  }

  export type Item_carrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_carrinho to aggregate.
     */
    where?: item_carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_carrinhos to fetch.
     */
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_carrinhos
    **/
    _count?: true | Item_carrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_carrinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_carrinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_carrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_carrinhoMaxAggregateInputType
  }

  export type GetItem_carrinhoAggregateType<T extends Item_carrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_carrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_carrinho[P]>
      : GetScalarType<T[P], AggregateItem_carrinho[P]>
  }




  export type item_carrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_carrinhoWhereInput
    orderBy?: item_carrinhoOrderByWithAggregationInput | item_carrinhoOrderByWithAggregationInput[]
    by: Item_carrinhoScalarFieldEnum[] | Item_carrinhoScalarFieldEnum
    having?: item_carrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_carrinhoCountAggregateInputType | true
    _avg?: Item_carrinhoAvgAggregateInputType
    _sum?: Item_carrinhoSumAggregateInputType
    _min?: Item_carrinhoMinAggregateInputType
    _max?: Item_carrinhoMaxAggregateInputType
  }

  export type Item_carrinhoGroupByOutputType = {
    id_carrinho: number
    id_produto: number
    quantidade: number
    _count: Item_carrinhoCountAggregateOutputType | null
    _avg: Item_carrinhoAvgAggregateOutputType | null
    _sum: Item_carrinhoSumAggregateOutputType | null
    _min: Item_carrinhoMinAggregateOutputType | null
    _max: Item_carrinhoMaxAggregateOutputType | null
  }

  type GetItem_carrinhoGroupByPayload<T extends item_carrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_carrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_carrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_carrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], Item_carrinhoGroupByOutputType[P]>
        }
      >
    >


  export type item_carrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrinho?: boolean
    id_produto?: boolean
    quantidade?: boolean
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_carrinho"]>



  export type item_carrinhoSelectScalar = {
    id_carrinho?: boolean
    id_produto?: boolean
    quantidade?: boolean
  }

  export type item_carrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carrinho" | "id_produto" | "quantidade", ExtArgs["result"]["item_carrinho"]>
  export type item_carrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $item_carrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_carrinho"
    objects: {
      carrinho: Prisma.$carrinhoPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carrinho: number
      id_produto: number
      quantidade: number
    }, ExtArgs["result"]["item_carrinho"]>
    composites: {}
  }

  type item_carrinhoGetPayload<S extends boolean | null | undefined | item_carrinhoDefaultArgs> = $Result.GetResult<Prisma.$item_carrinhoPayload, S>

  type item_carrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<item_carrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_carrinhoCountAggregateInputType | true
    }

  export interface item_carrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_carrinho'], meta: { name: 'item_carrinho' } }
    /**
     * Find zero or one Item_carrinho that matches the filter.
     * @param {item_carrinhoFindUniqueArgs} args - Arguments to find a Item_carrinho
     * @example
     * // Get one Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends item_carrinhoFindUniqueArgs>(args: SelectSubset<T, item_carrinhoFindUniqueArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_carrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {item_carrinhoFindUniqueOrThrowArgs} args - Arguments to find a Item_carrinho
     * @example
     * // Get one Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends item_carrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, item_carrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_carrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoFindFirstArgs} args - Arguments to find a Item_carrinho
     * @example
     * // Get one Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends item_carrinhoFindFirstArgs>(args?: SelectSubset<T, item_carrinhoFindFirstArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_carrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoFindFirstOrThrowArgs} args - Arguments to find a Item_carrinho
     * @example
     * // Get one Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends item_carrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, item_carrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_carrinhos
     * const item_carrinhos = await prisma.item_carrinho.findMany()
     * 
     * // Get first 10 Item_carrinhos
     * const item_carrinhos = await prisma.item_carrinho.findMany({ take: 10 })
     * 
     * // Only select the `id_carrinho`
     * const item_carrinhoWithId_carrinhoOnly = await prisma.item_carrinho.findMany({ select: { id_carrinho: true } })
     * 
     */
    findMany<T extends item_carrinhoFindManyArgs>(args?: SelectSubset<T, item_carrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_carrinho.
     * @param {item_carrinhoCreateArgs} args - Arguments to create a Item_carrinho.
     * @example
     * // Create one Item_carrinho
     * const Item_carrinho = await prisma.item_carrinho.create({
     *   data: {
     *     // ... data to create a Item_carrinho
     *   }
     * })
     * 
     */
    create<T extends item_carrinhoCreateArgs>(args: SelectSubset<T, item_carrinhoCreateArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_carrinhos.
     * @param {item_carrinhoCreateManyArgs} args - Arguments to create many Item_carrinhos.
     * @example
     * // Create many Item_carrinhos
     * const item_carrinho = await prisma.item_carrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends item_carrinhoCreateManyArgs>(args?: SelectSubset<T, item_carrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_carrinho.
     * @param {item_carrinhoDeleteArgs} args - Arguments to delete one Item_carrinho.
     * @example
     * // Delete one Item_carrinho
     * const Item_carrinho = await prisma.item_carrinho.delete({
     *   where: {
     *     // ... filter to delete one Item_carrinho
     *   }
     * })
     * 
     */
    delete<T extends item_carrinhoDeleteArgs>(args: SelectSubset<T, item_carrinhoDeleteArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_carrinho.
     * @param {item_carrinhoUpdateArgs} args - Arguments to update one Item_carrinho.
     * @example
     * // Update one Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends item_carrinhoUpdateArgs>(args: SelectSubset<T, item_carrinhoUpdateArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_carrinhos.
     * @param {item_carrinhoDeleteManyArgs} args - Arguments to filter Item_carrinhos to delete.
     * @example
     * // Delete a few Item_carrinhos
     * const { count } = await prisma.item_carrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends item_carrinhoDeleteManyArgs>(args?: SelectSubset<T, item_carrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_carrinhos
     * const item_carrinho = await prisma.item_carrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends item_carrinhoUpdateManyArgs>(args: SelectSubset<T, item_carrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_carrinho.
     * @param {item_carrinhoUpsertArgs} args - Arguments to update or create a Item_carrinho.
     * @example
     * // Update or create a Item_carrinho
     * const item_carrinho = await prisma.item_carrinho.upsert({
     *   create: {
     *     // ... data to create a Item_carrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_carrinho we want to update
     *   }
     * })
     */
    upsert<T extends item_carrinhoUpsertArgs>(args: SelectSubset<T, item_carrinhoUpsertArgs<ExtArgs>>): Prisma__item_carrinhoClient<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoCountArgs} args - Arguments to filter Item_carrinhos to count.
     * @example
     * // Count the number of Item_carrinhos
     * const count = await prisma.item_carrinho.count({
     *   where: {
     *     // ... the filter for the Item_carrinhos we want to count
     *   }
     * })
    **/
    count<T extends item_carrinhoCountArgs>(
      args?: Subset<T, item_carrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_carrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_carrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Item_carrinhoAggregateArgs>(args: Subset<T, Item_carrinhoAggregateArgs>): Prisma.PrismaPromise<GetItem_carrinhoAggregateType<T>>

    /**
     * Group by Item_carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_carrinhoGroupByArgs} args - Group by arguments.
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
      T extends item_carrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_carrinhoGroupByArgs['orderBy'] }
        : { orderBy?: item_carrinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, item_carrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_carrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_carrinho model
   */
  readonly fields: item_carrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_carrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_carrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends carrinhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carrinhoDefaultArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the item_carrinho model
   */
  interface item_carrinhoFieldRefs {
    readonly id_carrinho: FieldRef<"item_carrinho", 'Int'>
    readonly id_produto: FieldRef<"item_carrinho", 'Int'>
    readonly quantidade: FieldRef<"item_carrinho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * item_carrinho findUnique
   */
  export type item_carrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which item_carrinho to fetch.
     */
    where: item_carrinhoWhereUniqueInput
  }

  /**
   * item_carrinho findUniqueOrThrow
   */
  export type item_carrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which item_carrinho to fetch.
     */
    where: item_carrinhoWhereUniqueInput
  }

  /**
   * item_carrinho findFirst
   */
  export type item_carrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which item_carrinho to fetch.
     */
    where?: item_carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_carrinhos to fetch.
     */
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_carrinhos.
     */
    cursor?: item_carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_carrinhos.
     */
    distinct?: Item_carrinhoScalarFieldEnum | Item_carrinhoScalarFieldEnum[]
  }

  /**
   * item_carrinho findFirstOrThrow
   */
  export type item_carrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which item_carrinho to fetch.
     */
    where?: item_carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_carrinhos to fetch.
     */
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_carrinhos.
     */
    cursor?: item_carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_carrinhos.
     */
    distinct?: Item_carrinhoScalarFieldEnum | Item_carrinhoScalarFieldEnum[]
  }

  /**
   * item_carrinho findMany
   */
  export type item_carrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which item_carrinhos to fetch.
     */
    where?: item_carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_carrinhos to fetch.
     */
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_carrinhos.
     */
    cursor?: item_carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_carrinhos.
     */
    distinct?: Item_carrinhoScalarFieldEnum | Item_carrinhoScalarFieldEnum[]
  }

  /**
   * item_carrinho create
   */
  export type item_carrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a item_carrinho.
     */
    data: XOR<item_carrinhoCreateInput, item_carrinhoUncheckedCreateInput>
  }

  /**
   * item_carrinho createMany
   */
  export type item_carrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_carrinhos.
     */
    data: item_carrinhoCreateManyInput | item_carrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_carrinho update
   */
  export type item_carrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a item_carrinho.
     */
    data: XOR<item_carrinhoUpdateInput, item_carrinhoUncheckedUpdateInput>
    /**
     * Choose, which item_carrinho to update.
     */
    where: item_carrinhoWhereUniqueInput
  }

  /**
   * item_carrinho updateMany
   */
  export type item_carrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_carrinhos.
     */
    data: XOR<item_carrinhoUpdateManyMutationInput, item_carrinhoUncheckedUpdateManyInput>
    /**
     * Filter which item_carrinhos to update
     */
    where?: item_carrinhoWhereInput
    /**
     * Limit how many item_carrinhos to update.
     */
    limit?: number
  }

  /**
   * item_carrinho upsert
   */
  export type item_carrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the item_carrinho to update in case it exists.
     */
    where: item_carrinhoWhereUniqueInput
    /**
     * In case the item_carrinho found by the `where` argument doesn't exist, create a new item_carrinho with this data.
     */
    create: XOR<item_carrinhoCreateInput, item_carrinhoUncheckedCreateInput>
    /**
     * In case the item_carrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_carrinhoUpdateInput, item_carrinhoUncheckedUpdateInput>
  }

  /**
   * item_carrinho delete
   */
  export type item_carrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    /**
     * Filter which item_carrinho to delete.
     */
    where: item_carrinhoWhereUniqueInput
  }

  /**
   * item_carrinho deleteMany
   */
  export type item_carrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_carrinhos to delete
     */
    where?: item_carrinhoWhereInput
    /**
     * Limit how many item_carrinhos to delete.
     */
    limit?: number
  }

  /**
   * item_carrinho without action
   */
  export type item_carrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
  }


  /**
   * Model item_pedido
   */

  export type AggregateItem_pedido = {
    _count: Item_pedidoCountAggregateOutputType | null
    _avg: Item_pedidoAvgAggregateOutputType | null
    _sum: Item_pedidoSumAggregateOutputType | null
    _min: Item_pedidoMinAggregateOutputType | null
    _max: Item_pedidoMaxAggregateOutputType | null
  }

  export type Item_pedidoAvgAggregateOutputType = {
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Item_pedidoSumAggregateOutputType = {
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Item_pedidoMinAggregateOutputType = {
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Item_pedidoMaxAggregateOutputType = {
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Item_pedidoCountAggregateOutputType = {
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: number
    subtotal: number
    _all: number
  }


  export type Item_pedidoAvgAggregateInputType = {
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    subtotal?: true
  }

  export type Item_pedidoSumAggregateInputType = {
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    subtotal?: true
  }

  export type Item_pedidoMinAggregateInputType = {
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    subtotal?: true
  }

  export type Item_pedidoMaxAggregateInputType = {
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    subtotal?: true
  }

  export type Item_pedidoCountAggregateInputType = {
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    subtotal?: true
    _all?: true
  }

  export type Item_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_pedido to aggregate.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_pedidos
    **/
    _count?: true | Item_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_pedidoMaxAggregateInputType
  }

  export type GetItem_pedidoAggregateType<T extends Item_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_pedido[P]>
      : GetScalarType<T[P], AggregateItem_pedido[P]>
  }




  export type item_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_pedidoWhereInput
    orderBy?: item_pedidoOrderByWithAggregationInput | item_pedidoOrderByWithAggregationInput[]
    by: Item_pedidoScalarFieldEnum[] | Item_pedidoScalarFieldEnum
    having?: item_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_pedidoCountAggregateInputType | true
    _avg?: Item_pedidoAvgAggregateInputType
    _sum?: Item_pedidoSumAggregateInputType
    _min?: Item_pedidoMinAggregateInputType
    _max?: Item_pedidoMaxAggregateInputType
  }

  export type Item_pedidoGroupByOutputType = {
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal | null
    subtotal: Decimal | null
    _count: Item_pedidoCountAggregateOutputType | null
    _avg: Item_pedidoAvgAggregateOutputType | null
    _sum: Item_pedidoSumAggregateOutputType | null
    _min: Item_pedidoMinAggregateOutputType | null
    _max: Item_pedidoMaxAggregateOutputType | null
  }

  type GetItem_pedidoGroupByPayload<T extends item_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Item_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type item_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    subtotal?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_pedido"]>



  export type item_pedidoSelectScalar = {
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    subtotal?: boolean
  }

  export type item_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "produto_id" | "quantidade" | "preco_unitario" | "subtotal", ExtArgs["result"]["item_pedido"]>
  export type item_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $item_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_pedido"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      produto_id: number
      quantidade: number
      preco_unitario: Prisma.Decimal | null
      subtotal: Prisma.Decimal | null
    }, ExtArgs["result"]["item_pedido"]>
    composites: {}
  }

  type item_pedidoGetPayload<S extends boolean | null | undefined | item_pedidoDefaultArgs> = $Result.GetResult<Prisma.$item_pedidoPayload, S>

  type item_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<item_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_pedidoCountAggregateInputType | true
    }

  export interface item_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_pedido'], meta: { name: 'item_pedido' } }
    /**
     * Find zero or one Item_pedido that matches the filter.
     * @param {item_pedidoFindUniqueArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends item_pedidoFindUniqueArgs>(args: SelectSubset<T, item_pedidoFindUniqueArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {item_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends item_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, item_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindFirstArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends item_pedidoFindFirstArgs>(args?: SelectSubset<T, item_pedidoFindFirstArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindFirstOrThrowArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends item_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, item_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_pedidos
     * const item_pedidos = await prisma.item_pedido.findMany()
     * 
     * // Get first 10 Item_pedidos
     * const item_pedidos = await prisma.item_pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const item_pedidoWithPedido_idOnly = await prisma.item_pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends item_pedidoFindManyArgs>(args?: SelectSubset<T, item_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_pedido.
     * @param {item_pedidoCreateArgs} args - Arguments to create a Item_pedido.
     * @example
     * // Create one Item_pedido
     * const Item_pedido = await prisma.item_pedido.create({
     *   data: {
     *     // ... data to create a Item_pedido
     *   }
     * })
     * 
     */
    create<T extends item_pedidoCreateArgs>(args: SelectSubset<T, item_pedidoCreateArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_pedidos.
     * @param {item_pedidoCreateManyArgs} args - Arguments to create many Item_pedidos.
     * @example
     * // Create many Item_pedidos
     * const item_pedido = await prisma.item_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends item_pedidoCreateManyArgs>(args?: SelectSubset<T, item_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_pedido.
     * @param {item_pedidoDeleteArgs} args - Arguments to delete one Item_pedido.
     * @example
     * // Delete one Item_pedido
     * const Item_pedido = await prisma.item_pedido.delete({
     *   where: {
     *     // ... filter to delete one Item_pedido
     *   }
     * })
     * 
     */
    delete<T extends item_pedidoDeleteArgs>(args: SelectSubset<T, item_pedidoDeleteArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_pedido.
     * @param {item_pedidoUpdateArgs} args - Arguments to update one Item_pedido.
     * @example
     * // Update one Item_pedido
     * const item_pedido = await prisma.item_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends item_pedidoUpdateArgs>(args: SelectSubset<T, item_pedidoUpdateArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_pedidos.
     * @param {item_pedidoDeleteManyArgs} args - Arguments to filter Item_pedidos to delete.
     * @example
     * // Delete a few Item_pedidos
     * const { count } = await prisma.item_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends item_pedidoDeleteManyArgs>(args?: SelectSubset<T, item_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_pedidos
     * const item_pedido = await prisma.item_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends item_pedidoUpdateManyArgs>(args: SelectSubset<T, item_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_pedido.
     * @param {item_pedidoUpsertArgs} args - Arguments to update or create a Item_pedido.
     * @example
     * // Update or create a Item_pedido
     * const item_pedido = await prisma.item_pedido.upsert({
     *   create: {
     *     // ... data to create a Item_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_pedido we want to update
     *   }
     * })
     */
    upsert<T extends item_pedidoUpsertArgs>(args: SelectSubset<T, item_pedidoUpsertArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoCountArgs} args - Arguments to filter Item_pedidos to count.
     * @example
     * // Count the number of Item_pedidos
     * const count = await prisma.item_pedido.count({
     *   where: {
     *     // ... the filter for the Item_pedidos we want to count
     *   }
     * })
    **/
    count<T extends item_pedidoCountArgs>(
      args?: Subset<T, item_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Item_pedidoAggregateArgs>(args: Subset<T, Item_pedidoAggregateArgs>): Prisma.PrismaPromise<GetItem_pedidoAggregateType<T>>

    /**
     * Group by Item_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoGroupByArgs} args - Group by arguments.
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
      T extends item_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: item_pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, item_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_pedido model
   */
  readonly fields: item_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the item_pedido model
   */
  interface item_pedidoFieldRefs {
    readonly pedido_id: FieldRef<"item_pedido", 'Int'>
    readonly produto_id: FieldRef<"item_pedido", 'Int'>
    readonly quantidade: FieldRef<"item_pedido", 'Int'>
    readonly preco_unitario: FieldRef<"item_pedido", 'Decimal'>
    readonly subtotal: FieldRef<"item_pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * item_pedido findUnique
   */
  export type item_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido findUniqueOrThrow
   */
  export type item_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido findFirst
   */
  export type item_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_pedidos.
     */
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido findFirstOrThrow
   */
  export type item_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_pedidos.
     */
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido findMany
   */
  export type item_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedidos to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_pedidos.
     */
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido create
   */
  export type item_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a item_pedido.
     */
    data: XOR<item_pedidoCreateInput, item_pedidoUncheckedCreateInput>
  }

  /**
   * item_pedido createMany
   */
  export type item_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_pedidos.
     */
    data: item_pedidoCreateManyInput | item_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_pedido update
   */
  export type item_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a item_pedido.
     */
    data: XOR<item_pedidoUpdateInput, item_pedidoUncheckedUpdateInput>
    /**
     * Choose, which item_pedido to update.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido updateMany
   */
  export type item_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_pedidos.
     */
    data: XOR<item_pedidoUpdateManyMutationInput, item_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which item_pedidos to update
     */
    where?: item_pedidoWhereInput
    /**
     * Limit how many item_pedidos to update.
     */
    limit?: number
  }

  /**
   * item_pedido upsert
   */
  export type item_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the item_pedido to update in case it exists.
     */
    where: item_pedidoWhereUniqueInput
    /**
     * In case the item_pedido found by the `where` argument doesn't exist, create a new item_pedido with this data.
     */
    create: XOR<item_pedidoCreateInput, item_pedidoUncheckedCreateInput>
    /**
     * In case the item_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_pedidoUpdateInput, item_pedidoUncheckedUpdateInput>
  }

  /**
   * item_pedido delete
   */
  export type item_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter which item_pedido to delete.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido deleteMany
   */
  export type item_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_pedidos to delete
     */
    where?: item_pedidoWhereInput
    /**
     * Limit how many item_pedidos to delete.
     */
    limit?: number
  }

  /**
   * item_pedido without action
   */
  export type item_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model oferta
   */

  export type AggregateOferta = {
    _count: OfertaCountAggregateOutputType | null
    _avg: OfertaAvgAggregateOutputType | null
    _sum: OfertaSumAggregateOutputType | null
    _min: OfertaMinAggregateOutputType | null
    _max: OfertaMaxAggregateOutputType | null
  }

  export type OfertaAvgAggregateOutputType = {
    id: number | null
    desconto: Decimal | null
    produto_id: number | null
  }

  export type OfertaSumAggregateOutputType = {
    id: number | null
    desconto: Decimal | null
    produto_id: number | null
  }

  export type OfertaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    desconto: Decimal | null
    produto_id: number | null
    data_inicio: Date | null
    data_fim: Date | null
  }

  export type OfertaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    desconto: Decimal | null
    produto_id: number | null
    data_inicio: Date | null
    data_fim: Date | null
  }

  export type OfertaCountAggregateOutputType = {
    id: number
    descricao: number
    desconto: number
    produto_id: number
    data_inicio: number
    data_fim: number
    _all: number
  }


  export type OfertaAvgAggregateInputType = {
    id?: true
    desconto?: true
    produto_id?: true
  }

  export type OfertaSumAggregateInputType = {
    id?: true
    desconto?: true
    produto_id?: true
  }

  export type OfertaMinAggregateInputType = {
    id?: true
    descricao?: true
    desconto?: true
    produto_id?: true
    data_inicio?: true
    data_fim?: true
  }

  export type OfertaMaxAggregateInputType = {
    id?: true
    descricao?: true
    desconto?: true
    produto_id?: true
    data_inicio?: true
    data_fim?: true
  }

  export type OfertaCountAggregateInputType = {
    id?: true
    descricao?: true
    desconto?: true
    produto_id?: true
    data_inicio?: true
    data_fim?: true
    _all?: true
  }

  export type OfertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oferta to aggregate.
     */
    where?: ofertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ofertas to fetch.
     */
    orderBy?: ofertaOrderByWithRelationInput | ofertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ofertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ofertas
    **/
    _count?: true | OfertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfertaMaxAggregateInputType
  }

  export type GetOfertaAggregateType<T extends OfertaAggregateArgs> = {
        [P in keyof T & keyof AggregateOferta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOferta[P]>
      : GetScalarType<T[P], AggregateOferta[P]>
  }




  export type ofertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ofertaWhereInput
    orderBy?: ofertaOrderByWithAggregationInput | ofertaOrderByWithAggregationInput[]
    by: OfertaScalarFieldEnum[] | OfertaScalarFieldEnum
    having?: ofertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfertaCountAggregateInputType | true
    _avg?: OfertaAvgAggregateInputType
    _sum?: OfertaSumAggregateInputType
    _min?: OfertaMinAggregateInputType
    _max?: OfertaMaxAggregateInputType
  }

  export type OfertaGroupByOutputType = {
    id: number
    descricao: string | null
    desconto: Decimal | null
    produto_id: number
    data_inicio: Date | null
    data_fim: Date | null
    _count: OfertaCountAggregateOutputType | null
    _avg: OfertaAvgAggregateOutputType | null
    _sum: OfertaSumAggregateOutputType | null
    _min: OfertaMinAggregateOutputType | null
    _max: OfertaMaxAggregateOutputType | null
  }

  type GetOfertaGroupByPayload<T extends ofertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfertaGroupByOutputType[P]>
            : GetScalarType<T[P], OfertaGroupByOutputType[P]>
        }
      >
    >


  export type ofertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    desconto?: boolean
    produto_id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oferta"]>



  export type ofertaSelectScalar = {
    id?: boolean
    descricao?: boolean
    desconto?: boolean
    produto_id?: boolean
    data_inicio?: boolean
    data_fim?: boolean
  }

  export type ofertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "desconto" | "produto_id" | "data_inicio" | "data_fim", ExtArgs["result"]["oferta"]>
  export type ofertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $ofertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "oferta"
    objects: {
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string | null
      desconto: Prisma.Decimal | null
      produto_id: number
      data_inicio: Date | null
      data_fim: Date | null
    }, ExtArgs["result"]["oferta"]>
    composites: {}
  }

  type ofertaGetPayload<S extends boolean | null | undefined | ofertaDefaultArgs> = $Result.GetResult<Prisma.$ofertaPayload, S>

  type ofertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ofertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfertaCountAggregateInputType | true
    }

  export interface ofertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['oferta'], meta: { name: 'oferta' } }
    /**
     * Find zero or one Oferta that matches the filter.
     * @param {ofertaFindUniqueArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ofertaFindUniqueArgs>(args: SelectSubset<T, ofertaFindUniqueArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Oferta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ofertaFindUniqueOrThrowArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ofertaFindUniqueOrThrowArgs>(args: SelectSubset<T, ofertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oferta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaFindFirstArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ofertaFindFirstArgs>(args?: SelectSubset<T, ofertaFindFirstArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oferta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaFindFirstOrThrowArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ofertaFindFirstOrThrowArgs>(args?: SelectSubset<T, ofertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ofertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ofertas
     * const ofertas = await prisma.oferta.findMany()
     * 
     * // Get first 10 Ofertas
     * const ofertas = await prisma.oferta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ofertaWithIdOnly = await prisma.oferta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ofertaFindManyArgs>(args?: SelectSubset<T, ofertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Oferta.
     * @param {ofertaCreateArgs} args - Arguments to create a Oferta.
     * @example
     * // Create one Oferta
     * const Oferta = await prisma.oferta.create({
     *   data: {
     *     // ... data to create a Oferta
     *   }
     * })
     * 
     */
    create<T extends ofertaCreateArgs>(args: SelectSubset<T, ofertaCreateArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ofertas.
     * @param {ofertaCreateManyArgs} args - Arguments to create many Ofertas.
     * @example
     * // Create many Ofertas
     * const oferta = await prisma.oferta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ofertaCreateManyArgs>(args?: SelectSubset<T, ofertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Oferta.
     * @param {ofertaDeleteArgs} args - Arguments to delete one Oferta.
     * @example
     * // Delete one Oferta
     * const Oferta = await prisma.oferta.delete({
     *   where: {
     *     // ... filter to delete one Oferta
     *   }
     * })
     * 
     */
    delete<T extends ofertaDeleteArgs>(args: SelectSubset<T, ofertaDeleteArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Oferta.
     * @param {ofertaUpdateArgs} args - Arguments to update one Oferta.
     * @example
     * // Update one Oferta
     * const oferta = await prisma.oferta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ofertaUpdateArgs>(args: SelectSubset<T, ofertaUpdateArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ofertas.
     * @param {ofertaDeleteManyArgs} args - Arguments to filter Ofertas to delete.
     * @example
     * // Delete a few Ofertas
     * const { count } = await prisma.oferta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ofertaDeleteManyArgs>(args?: SelectSubset<T, ofertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ofertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ofertas
     * const oferta = await prisma.oferta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ofertaUpdateManyArgs>(args: SelectSubset<T, ofertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oferta.
     * @param {ofertaUpsertArgs} args - Arguments to update or create a Oferta.
     * @example
     * // Update or create a Oferta
     * const oferta = await prisma.oferta.upsert({
     *   create: {
     *     // ... data to create a Oferta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oferta we want to update
     *   }
     * })
     */
    upsert<T extends ofertaUpsertArgs>(args: SelectSubset<T, ofertaUpsertArgs<ExtArgs>>): Prisma__ofertaClient<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ofertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaCountArgs} args - Arguments to filter Ofertas to count.
     * @example
     * // Count the number of Ofertas
     * const count = await prisma.oferta.count({
     *   where: {
     *     // ... the filter for the Ofertas we want to count
     *   }
     * })
    **/
    count<T extends ofertaCountArgs>(
      args?: Subset<T, ofertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfertaAggregateArgs>(args: Subset<T, OfertaAggregateArgs>): Prisma.PrismaPromise<GetOfertaAggregateType<T>>

    /**
     * Group by Oferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ofertaGroupByArgs} args - Group by arguments.
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
      T extends ofertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ofertaGroupByArgs['orderBy'] }
        : { orderBy?: ofertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ofertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the oferta model
   */
  readonly fields: ofertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for oferta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ofertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the oferta model
   */
  interface ofertaFieldRefs {
    readonly id: FieldRef<"oferta", 'Int'>
    readonly descricao: FieldRef<"oferta", 'String'>
    readonly desconto: FieldRef<"oferta", 'Decimal'>
    readonly produto_id: FieldRef<"oferta", 'Int'>
    readonly data_inicio: FieldRef<"oferta", 'DateTime'>
    readonly data_fim: FieldRef<"oferta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * oferta findUnique
   */
  export type ofertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter, which oferta to fetch.
     */
    where: ofertaWhereUniqueInput
  }

  /**
   * oferta findUniqueOrThrow
   */
  export type ofertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter, which oferta to fetch.
     */
    where: ofertaWhereUniqueInput
  }

  /**
   * oferta findFirst
   */
  export type ofertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter, which oferta to fetch.
     */
    where?: ofertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ofertas to fetch.
     */
    orderBy?: ofertaOrderByWithRelationInput | ofertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ofertas.
     */
    cursor?: ofertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ofertas.
     */
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * oferta findFirstOrThrow
   */
  export type ofertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter, which oferta to fetch.
     */
    where?: ofertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ofertas to fetch.
     */
    orderBy?: ofertaOrderByWithRelationInput | ofertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ofertas.
     */
    cursor?: ofertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ofertas.
     */
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * oferta findMany
   */
  export type ofertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter, which ofertas to fetch.
     */
    where?: ofertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ofertas to fetch.
     */
    orderBy?: ofertaOrderByWithRelationInput | ofertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ofertas.
     */
    cursor?: ofertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ofertas.
     */
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * oferta create
   */
  export type ofertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * The data needed to create a oferta.
     */
    data: XOR<ofertaCreateInput, ofertaUncheckedCreateInput>
  }

  /**
   * oferta createMany
   */
  export type ofertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ofertas.
     */
    data: ofertaCreateManyInput | ofertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * oferta update
   */
  export type ofertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * The data needed to update a oferta.
     */
    data: XOR<ofertaUpdateInput, ofertaUncheckedUpdateInput>
    /**
     * Choose, which oferta to update.
     */
    where: ofertaWhereUniqueInput
  }

  /**
   * oferta updateMany
   */
  export type ofertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ofertas.
     */
    data: XOR<ofertaUpdateManyMutationInput, ofertaUncheckedUpdateManyInput>
    /**
     * Filter which ofertas to update
     */
    where?: ofertaWhereInput
    /**
     * Limit how many ofertas to update.
     */
    limit?: number
  }

  /**
   * oferta upsert
   */
  export type ofertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * The filter to search for the oferta to update in case it exists.
     */
    where: ofertaWhereUniqueInput
    /**
     * In case the oferta found by the `where` argument doesn't exist, create a new oferta with this data.
     */
    create: XOR<ofertaCreateInput, ofertaUncheckedCreateInput>
    /**
     * In case the oferta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ofertaUpdateInput, ofertaUncheckedUpdateInput>
  }

  /**
   * oferta delete
   */
  export type ofertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    /**
     * Filter which oferta to delete.
     */
    where: ofertaWhereUniqueInput
  }

  /**
   * oferta deleteMany
   */
  export type ofertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ofertas to delete
     */
    where?: ofertaWhereInput
    /**
     * Limit how many ofertas to delete.
     */
    limit?: number
  }

  /**
   * oferta without action
   */
  export type ofertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    endereco_id: number | null
    valor_total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    endereco_id: number | null
    valor_total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    endereco_id: number | null
    data_pedido: Date | null
    forma_pagamento: string | null
    valor_total: Decimal | null
    status: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    endereco_id: number | null
    data_pedido: Date | null
    forma_pagamento: string | null
    valor_total: Decimal | null
    status: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    usuario_id: number
    endereco_id: number
    data_pedido: number
    forma_pagamento: number
    valor_total: number
    status: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    endereco_id?: true
    valor_total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    endereco_id?: true
    valor_total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    endereco_id?: true
    data_pedido?: true
    forma_pagamento?: true
    valor_total?: true
    status?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    endereco_id?: true
    data_pedido?: true
    forma_pagamento?: true
    valor_total?: true
    status?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    endereco_id?: true
    data_pedido?: true
    forma_pagamento?: true
    valor_total?: true
    status?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    usuario_id: number
    endereco_id: number
    data_pedido: Date | null
    forma_pagamento: string | null
    valor_total: Decimal | null
    status: string | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    endereco_id?: boolean
    data_pedido?: boolean
    forma_pagamento?: boolean
    valor_total?: boolean
    status?: boolean
    item_pedido?: boolean | pedido$item_pedidoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type pedidoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    endereco_id?: boolean
    data_pedido?: boolean
    forma_pagamento?: boolean
    valor_total?: boolean
    status?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "endereco_id" | "data_pedido" | "forma_pagamento" | "valor_total" | "status", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_pedido?: boolean | pedido$item_pedidoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | enderecoDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      item_pedido: Prisma.$item_pedidoPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>
      endereco: Prisma.$enderecoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      endereco_id: number
      data_pedido: Date | null
      forma_pagamento: string | null
      valor_total: Prisma.Decimal | null
      status: string | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item_pedido<T extends pedido$item_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$item_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endereco<T extends enderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, enderecoDefaultArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly usuario_id: FieldRef<"pedido", 'Int'>
    readonly endereco_id: FieldRef<"pedido", 'Int'>
    readonly data_pedido: FieldRef<"pedido", 'DateTime'>
    readonly forma_pagamento: FieldRef<"pedido", 'String'>
    readonly valor_total: FieldRef<"pedido", 'Decimal'>
    readonly status: FieldRef<"pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.item_pedido
   */
  export type pedido$item_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    where?: item_pedidoWhereInput
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    cursor?: item_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    produto_id: number | null
    preco: Decimal | null
    estoque: number | null
    categoria_id: number | null
    fornecedor_id: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    produto_id: number | null
    preco: Decimal | null
    estoque: number | null
    categoria_id: number | null
    fornecedor_id: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    descricao: string | null
    marca: string | null
    preco: Decimal | null
    imagem: string | null
    estoque: number | null
    especificacoes: string | null
    categoria_id: number | null
    fornecedor_id: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    descricao: string | null
    marca: string | null
    preco: Decimal | null
    imagem: string | null
    estoque: number | null
    especificacoes: string | null
    categoria_id: number | null
    fornecedor_id: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    produto_id: number
    nome: number
    descricao: number
    marca: number
    preco: number
    imagem: number
    estoque: number
    especificacoes: number
    categoria_id: number
    fornecedor_id: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    produto_id?: true
    preco?: true
    estoque?: true
    categoria_id?: true
    fornecedor_id?: true
  }

  export type ProdutoSumAggregateInputType = {
    produto_id?: true
    preco?: true
    estoque?: true
    categoria_id?: true
    fornecedor_id?: true
  }

  export type ProdutoMinAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    marca?: true
    preco?: true
    imagem?: true
    estoque?: true
    especificacoes?: true
    categoria_id?: true
    fornecedor_id?: true
  }

  export type ProdutoMaxAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    marca?: true
    preco?: true
    imagem?: true
    estoque?: true
    especificacoes?: true
    categoria_id?: true
    fornecedor_id?: true
  }

  export type ProdutoCountAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    marca?: true
    preco?: true
    imagem?: true
    estoque?: true
    especificacoes?: true
    categoria_id?: true
    fornecedor_id?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    produto_id: number
    nome: string
    descricao: string | null
    marca: string | null
    preco: Decimal
    imagem: string | null
    estoque: number | null
    especificacoes: string | null
    categoria_id: number
    fornecedor_id: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    marca?: boolean
    preco?: boolean
    imagem?: boolean
    estoque?: boolean
    especificacoes?: boolean
    categoria_id?: boolean
    fornecedor_id?: boolean
    avaliacao?: boolean | produto$avaliacaoArgs<ExtArgs>
    comentario?: boolean | produto$comentarioArgs<ExtArgs>
    favorito?: boolean | produto$favoritoArgs<ExtArgs>
    item_carrinho?: boolean | produto$item_carrinhoArgs<ExtArgs>
    item_pedido?: boolean | produto$item_pedidoArgs<ExtArgs>
    oferta?: boolean | produto$ofertaArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    fornecedor?: boolean | fornecedorDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type produtoSelectScalar = {
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    marca?: boolean
    preco?: boolean
    imagem?: boolean
    estoque?: boolean
    especificacoes?: boolean
    categoria_id?: boolean
    fornecedor_id?: boolean
  }

  export type produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"produto_id" | "nome" | "descricao" | "marca" | "preco" | "imagem" | "estoque" | "especificacoes" | "categoria_id" | "fornecedor_id", ExtArgs["result"]["produto"]>
  export type produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | produto$avaliacaoArgs<ExtArgs>
    comentario?: boolean | produto$comentarioArgs<ExtArgs>
    favorito?: boolean | produto$favoritoArgs<ExtArgs>
    item_carrinho?: boolean | produto$item_carrinhoArgs<ExtArgs>
    item_pedido?: boolean | produto$item_pedidoArgs<ExtArgs>
    oferta?: boolean | produto$ofertaArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    fornecedor?: boolean | fornecedorDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {
      avaliacao: Prisma.$avaliacaoPayload<ExtArgs>[]
      comentario: Prisma.$comentarioPayload<ExtArgs>[]
      favorito: Prisma.$favoritoPayload<ExtArgs>[]
      item_carrinho: Prisma.$item_carrinhoPayload<ExtArgs>[]
      item_pedido: Prisma.$item_pedidoPayload<ExtArgs>[]
      oferta: Prisma.$ofertaPayload<ExtArgs>[]
      categoria: Prisma.$categoriaPayload<ExtArgs>
      fornecedor: Prisma.$fornecedorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      produto_id: number
      nome: string
      descricao: string | null
      marca: string | null
      preco: Prisma.Decimal
      imagem: string | null
      estoque: number | null
      especificacoes: string | null
      categoria_id: number
      fornecedor_id: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `produto_id`
     * const produtoWithProduto_idOnly = await prisma.produto.findMany({ select: { produto_id: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
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
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends produto$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, produto$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentario<T extends produto$comentarioArgs<ExtArgs> = {}>(args?: Subset<T, produto$comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorito<T extends produto$favoritoArgs<ExtArgs> = {}>(args?: Subset<T, produto$favoritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    item_carrinho<T extends produto$item_carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, produto$item_carrinhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    item_pedido<T extends produto$item_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, produto$item_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oferta<T extends produto$ofertaArgs<ExtArgs> = {}>(args?: Subset<T, produto$ofertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ofertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fornecedor<T extends fornecedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, fornecedorDefaultArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the produto model
   */
  interface produtoFieldRefs {
    readonly produto_id: FieldRef<"produto", 'Int'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly descricao: FieldRef<"produto", 'String'>
    readonly marca: FieldRef<"produto", 'String'>
    readonly preco: FieldRef<"produto", 'Decimal'>
    readonly imagem: FieldRef<"produto", 'String'>
    readonly estoque: FieldRef<"produto", 'Int'>
    readonly especificacoes: FieldRef<"produto", 'String'>
    readonly categoria_id: FieldRef<"produto", 'Int'>
    readonly fornecedor_id: FieldRef<"produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produto.avaliacao
   */
  export type produto$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    where?: avaliacaoWhereInput
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    cursor?: avaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * produto.comentario
   */
  export type produto$comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * produto.favorito
   */
  export type produto$favoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    where?: favoritoWhereInput
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    cursor?: favoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * produto.item_carrinho
   */
  export type produto$item_carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_carrinho
     */
    select?: item_carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_carrinho
     */
    omit?: item_carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_carrinhoInclude<ExtArgs> | null
    where?: item_carrinhoWhereInput
    orderBy?: item_carrinhoOrderByWithRelationInput | item_carrinhoOrderByWithRelationInput[]
    cursor?: item_carrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_carrinhoScalarFieldEnum | Item_carrinhoScalarFieldEnum[]
  }

  /**
   * produto.item_pedido
   */
  export type produto$item_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    where?: item_pedidoWhereInput
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    cursor?: item_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * produto.oferta
   */
  export type produto$ofertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oferta
     */
    select?: ofertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the oferta
     */
    omit?: ofertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ofertaInclude<ExtArgs> | null
    where?: ofertaWhereInput
    orderBy?: ofertaOrderByWithRelationInput | ofertaOrderByWithRelationInput[]
    cursor?: ofertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    data_cadastro: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    data_cadastro: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    email: number
    senha: number
    cpf: number
    telefone: number
    data_nascimento: number
    data_cadastro: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    data_cadastro?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    data_cadastro?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    data_cadastro?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone: string | null
    data_nascimento: Date | null
    data_cadastro: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    data_cadastro?: boolean
    avaliacao?: boolean | usuario$avaliacaoArgs<ExtArgs>
    carrinho?: boolean | usuario$carrinhoArgs<ExtArgs>
    comentario?: boolean | usuario$comentarioArgs<ExtArgs>
    configuracao_usuario?: boolean | usuario$configuracao_usuarioArgs<ExtArgs>
    endereco?: boolean | usuario$enderecoArgs<ExtArgs>
    favorito?: boolean | usuario$favoritoArgs<ExtArgs>
    pedido?: boolean | usuario$pedidoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    data_cadastro?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "email" | "senha" | "cpf" | "telefone" | "data_nascimento" | "data_cadastro", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | usuario$avaliacaoArgs<ExtArgs>
    carrinho?: boolean | usuario$carrinhoArgs<ExtArgs>
    comentario?: boolean | usuario$comentarioArgs<ExtArgs>
    configuracao_usuario?: boolean | usuario$configuracao_usuarioArgs<ExtArgs>
    endereco?: boolean | usuario$enderecoArgs<ExtArgs>
    favorito?: boolean | usuario$favoritoArgs<ExtArgs>
    pedido?: boolean | usuario$pedidoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      avaliacao: Prisma.$avaliacaoPayload<ExtArgs>[]
      carrinho: Prisma.$carrinhoPayload<ExtArgs>[]
      comentario: Prisma.$comentarioPayload<ExtArgs>[]
      configuracao_usuario: Prisma.$configuracao_usuarioPayload<ExtArgs> | null
      endereco: Prisma.$enderecoPayload<ExtArgs>[]
      favorito: Prisma.$favoritoPayload<ExtArgs>[]
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sobrenome: string
      email: string
      senha: string
      cpf: string
      telefone: string | null
      data_nascimento: Date | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends usuario$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrinho<T extends usuario$carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$carrinhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentario<T extends usuario$comentarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario$comentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuracao_usuario<T extends usuario$configuracao_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario$configuracao_usuarioArgs<ExtArgs>>): Prisma__configuracao_usuarioClient<$Result.GetResult<Prisma.$configuracao_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endereco<T extends usuario$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$enderecoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorito<T extends usuario$favoritoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$favoritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedido<T extends usuario$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly sobrenome: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly cpf: FieldRef<"usuario", 'String'>
    readonly telefone: FieldRef<"usuario", 'String'>
    readonly data_nascimento: FieldRef<"usuario", 'DateTime'>
    readonly data_cadastro: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.avaliacao
   */
  export type usuario$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao
     */
    select?: avaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao
     */
    omit?: avaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacaoInclude<ExtArgs> | null
    where?: avaliacaoWhereInput
    orderBy?: avaliacaoOrderByWithRelationInput | avaliacaoOrderByWithRelationInput[]
    cursor?: avaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * usuario.carrinho
   */
  export type usuario$carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    where?: carrinhoWhereInput
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    cursor?: carrinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * usuario.comentario
   */
  export type usuario$comentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * usuario.configuracao_usuario
   */
  export type usuario$configuracao_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao_usuario
     */
    select?: configuracao_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao_usuario
     */
    omit?: configuracao_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracao_usuarioInclude<ExtArgs> | null
    where?: configuracao_usuarioWhereInput
  }

  /**
   * usuario.endereco
   */
  export type usuario$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    cursor?: enderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * usuario.favorito
   */
  export type usuario$favoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorito
     */
    select?: favoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorito
     */
    omit?: favoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritoInclude<ExtArgs> | null
    where?: favoritoWhereInput
    orderBy?: favoritoOrderByWithRelationInput | favoritoOrderByWithRelationInput[]
    cursor?: favoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * usuario.pedido
   */
  export type usuario$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
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


  export const AvaliacaoScalarFieldEnum: {
    usuario_id: 'usuario_id',
    produto_id: 'produto_id',
    data_avaliacao: 'data_avaliacao',
    nota: 'nota'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const CarrinhoScalarFieldEnum: {
    id_carrinho: 'id_carrinho',
    id_usuario: 'id_usuario',
    data_criacao: 'data_criacao',
    status: 'status'
  };

  export type CarrinhoScalarFieldEnum = (typeof CarrinhoScalarFieldEnum)[keyof typeof CarrinhoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    produto_id: 'produto_id',
    data_comentario: 'data_comentario',
    texto: 'texto'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const Configuracao_usuarioScalarFieldEnum: {
    usuario_id: 'usuario_id',
    tamanho_fonte: 'tamanho_fonte',
    alto_contraste: 'alto_contraste',
    audio: 'audio',
    libras: 'libras'
  };

  export type Configuracao_usuarioScalarFieldEnum = (typeof Configuracao_usuarioScalarFieldEnum)[keyof typeof Configuracao_usuarioScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    endereco_id: 'endereco_id',
    usuario_id: 'usuario_id',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    usuario_id: 'usuario_id',
    produto_id: 'produto_id',
    data_favorito: 'data_favorito'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    fornecedor_id: 'fornecedor_id',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    email: 'email',
    telefone: 'telefone',
    data_cadastro: 'data_cadastro'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const Item_carrinhoScalarFieldEnum: {
    id_carrinho: 'id_carrinho',
    id_produto: 'id_produto',
    quantidade: 'quantidade'
  };

  export type Item_carrinhoScalarFieldEnum = (typeof Item_carrinhoScalarFieldEnum)[keyof typeof Item_carrinhoScalarFieldEnum]


  export const Item_pedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    produto_id: 'produto_id',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario',
    subtotal: 'subtotal'
  };

  export type Item_pedidoScalarFieldEnum = (typeof Item_pedidoScalarFieldEnum)[keyof typeof Item_pedidoScalarFieldEnum]


  export const OfertaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    desconto: 'desconto',
    produto_id: 'produto_id',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim'
  };

  export type OfertaScalarFieldEnum = (typeof OfertaScalarFieldEnum)[keyof typeof OfertaScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    endereco_id: 'endereco_id',
    data_pedido: 'data_pedido',
    forma_pagamento: 'forma_pagamento',
    valor_total: 'valor_total',
    status: 'status'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    produto_id: 'produto_id',
    nome: 'nome',
    descricao: 'descricao',
    marca: 'marca',
    preco: 'preco',
    imagem: 'imagem',
    estoque: 'estoque',
    especificacoes: 'especificacoes',
    categoria_id: 'categoria_id',
    fornecedor_id: 'fornecedor_id'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    telefone: 'telefone',
    data_nascimento: 'data_nascimento',
    data_cadastro: 'data_cadastro'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const carrinhoOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type carrinhoOrderByRelevanceFieldEnum = (typeof carrinhoOrderByRelevanceFieldEnum)[keyof typeof carrinhoOrderByRelevanceFieldEnum]


  export const categoriaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type categoriaOrderByRelevanceFieldEnum = (typeof categoriaOrderByRelevanceFieldEnum)[keyof typeof categoriaOrderByRelevanceFieldEnum]


  export const comentarioOrderByRelevanceFieldEnum: {
    texto: 'texto'
  };

  export type comentarioOrderByRelevanceFieldEnum = (typeof comentarioOrderByRelevanceFieldEnum)[keyof typeof comentarioOrderByRelevanceFieldEnum]


  export const configuracao_usuarioOrderByRelevanceFieldEnum: {
    tamanho_fonte: 'tamanho_fonte'
  };

  export type configuracao_usuarioOrderByRelevanceFieldEnum = (typeof configuracao_usuarioOrderByRelevanceFieldEnum)[keyof typeof configuracao_usuarioOrderByRelevanceFieldEnum]


  export const enderecoOrderByRelevanceFieldEnum: {
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type enderecoOrderByRelevanceFieldEnum = (typeof enderecoOrderByRelevanceFieldEnum)[keyof typeof enderecoOrderByRelevanceFieldEnum]


  export const fornecedorOrderByRelevanceFieldEnum: {
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    email: 'email',
    telefone: 'telefone'
  };

  export type fornecedorOrderByRelevanceFieldEnum = (typeof fornecedorOrderByRelevanceFieldEnum)[keyof typeof fornecedorOrderByRelevanceFieldEnum]


  export const ofertaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type ofertaOrderByRelevanceFieldEnum = (typeof ofertaOrderByRelevanceFieldEnum)[keyof typeof ofertaOrderByRelevanceFieldEnum]


  export const pedidoOrderByRelevanceFieldEnum: {
    forma_pagamento: 'forma_pagamento',
    status: 'status'
  };

  export type pedidoOrderByRelevanceFieldEnum = (typeof pedidoOrderByRelevanceFieldEnum)[keyof typeof pedidoOrderByRelevanceFieldEnum]


  export const produtoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao',
    marca: 'marca',
    imagem: 'imagem',
    especificacoes: 'especificacoes'
  };

  export type produtoOrderByRelevanceFieldEnum = (typeof produtoOrderByRelevanceFieldEnum)[keyof typeof produtoOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    telefone: 'telefone'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type avaliacaoWhereInput = {
    AND?: avaliacaoWhereInput | avaliacaoWhereInput[]
    OR?: avaliacaoWhereInput[]
    NOT?: avaliacaoWhereInput | avaliacaoWhereInput[]
    usuario_id?: IntFilter<"avaliacao"> | number
    produto_id?: IntFilter<"avaliacao"> | number
    data_avaliacao?: DateTimeNullableFilter<"avaliacao"> | Date | string | null
    nota?: IntFilter<"avaliacao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type avaliacaoOrderByWithRelationInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_avaliacao?: SortOrderInput | SortOrder
    nota?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type avaliacaoWhereUniqueInput = Prisma.AtLeast<{
    usuario_id_produto_id?: avaliacaoUsuario_idProduto_idCompoundUniqueInput
    AND?: avaliacaoWhereInput | avaliacaoWhereInput[]
    OR?: avaliacaoWhereInput[]
    NOT?: avaliacaoWhereInput | avaliacaoWhereInput[]
    usuario_id?: IntFilter<"avaliacao"> | number
    produto_id?: IntFilter<"avaliacao"> | number
    data_avaliacao?: DateTimeNullableFilter<"avaliacao"> | Date | string | null
    nota?: IntFilter<"avaliacao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "usuario_id_produto_id">

  export type avaliacaoOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_avaliacao?: SortOrderInput | SortOrder
    nota?: SortOrder
    _count?: avaliacaoCountOrderByAggregateInput
    _avg?: avaliacaoAvgOrderByAggregateInput
    _max?: avaliacaoMaxOrderByAggregateInput
    _min?: avaliacaoMinOrderByAggregateInput
    _sum?: avaliacaoSumOrderByAggregateInput
  }

  export type avaliacaoScalarWhereWithAggregatesInput = {
    AND?: avaliacaoScalarWhereWithAggregatesInput | avaliacaoScalarWhereWithAggregatesInput[]
    OR?: avaliacaoScalarWhereWithAggregatesInput[]
    NOT?: avaliacaoScalarWhereWithAggregatesInput | avaliacaoScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"avaliacao"> | number
    produto_id?: IntWithAggregatesFilter<"avaliacao"> | number
    data_avaliacao?: DateTimeNullableWithAggregatesFilter<"avaliacao"> | Date | string | null
    nota?: IntWithAggregatesFilter<"avaliacao"> | number
  }

  export type carrinhoWhereInput = {
    AND?: carrinhoWhereInput | carrinhoWhereInput[]
    OR?: carrinhoWhereInput[]
    NOT?: carrinhoWhereInput | carrinhoWhereInput[]
    id_carrinho?: IntFilter<"carrinho"> | number
    id_usuario?: IntFilter<"carrinho"> | number
    data_criacao?: DateTimeNullableFilter<"carrinho"> | Date | string | null
    status?: StringNullableFilter<"carrinho"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    item_carrinho?: Item_carrinhoListRelationFilter
  }

  export type carrinhoOrderByWithRelationInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
    data_criacao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    item_carrinho?: item_carrinhoOrderByRelationAggregateInput
    _relevance?: carrinhoOrderByRelevanceInput
  }

  export type carrinhoWhereUniqueInput = Prisma.AtLeast<{
    id_carrinho?: number
    AND?: carrinhoWhereInput | carrinhoWhereInput[]
    OR?: carrinhoWhereInput[]
    NOT?: carrinhoWhereInput | carrinhoWhereInput[]
    id_usuario?: IntFilter<"carrinho"> | number
    data_criacao?: DateTimeNullableFilter<"carrinho"> | Date | string | null
    status?: StringNullableFilter<"carrinho"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    item_carrinho?: Item_carrinhoListRelationFilter
  }, "id_carrinho">

  export type carrinhoOrderByWithAggregationInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
    data_criacao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: carrinhoCountOrderByAggregateInput
    _avg?: carrinhoAvgOrderByAggregateInput
    _max?: carrinhoMaxOrderByAggregateInput
    _min?: carrinhoMinOrderByAggregateInput
    _sum?: carrinhoSumOrderByAggregateInput
  }

  export type carrinhoScalarWhereWithAggregatesInput = {
    AND?: carrinhoScalarWhereWithAggregatesInput | carrinhoScalarWhereWithAggregatesInput[]
    OR?: carrinhoScalarWhereWithAggregatesInput[]
    NOT?: carrinhoScalarWhereWithAggregatesInput | carrinhoScalarWhereWithAggregatesInput[]
    id_carrinho?: IntWithAggregatesFilter<"carrinho"> | number
    id_usuario?: IntWithAggregatesFilter<"carrinho"> | number
    data_criacao?: DateTimeNullableWithAggregatesFilter<"carrinho"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"carrinho"> | string | null
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: IntFilter<"categoria"> | number
    nome?: StringFilter<"categoria"> | string
    descricao?: StringNullableFilter<"categoria"> | string | null
    produto?: ProdutoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    produto?: produtoOrderByRelationAggregateInput
    _relevance?: categoriaOrderByRelevanceInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    nome?: StringFilter<"categoria"> | string
    descricao?: StringNullableFilter<"categoria"> | string | null
    produto?: ProdutoListRelationFilter
  }, "id">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoria"> | number
    nome?: StringWithAggregatesFilter<"categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type comentarioWhereInput = {
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    id?: IntFilter<"comentario"> | number
    usuario_id?: IntFilter<"comentario"> | number
    produto_id?: IntFilter<"comentario"> | number
    data_comentario?: DateTimeNullableFilter<"comentario"> | Date | string | null
    texto?: StringFilter<"comentario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type comentarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_comentario?: SortOrderInput | SortOrder
    texto?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
    _relevance?: comentarioOrderByRelevanceInput
  }

  export type comentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    usuario_id?: IntFilter<"comentario"> | number
    produto_id?: IntFilter<"comentario"> | number
    data_comentario?: DateTimeNullableFilter<"comentario"> | Date | string | null
    texto?: StringFilter<"comentario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "id">

  export type comentarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_comentario?: SortOrderInput | SortOrder
    texto?: SortOrder
    _count?: comentarioCountOrderByAggregateInput
    _avg?: comentarioAvgOrderByAggregateInput
    _max?: comentarioMaxOrderByAggregateInput
    _min?: comentarioMinOrderByAggregateInput
    _sum?: comentarioSumOrderByAggregateInput
  }

  export type comentarioScalarWhereWithAggregatesInput = {
    AND?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    OR?: comentarioScalarWhereWithAggregatesInput[]
    NOT?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comentario"> | number
    usuario_id?: IntWithAggregatesFilter<"comentario"> | number
    produto_id?: IntWithAggregatesFilter<"comentario"> | number
    data_comentario?: DateTimeNullableWithAggregatesFilter<"comentario"> | Date | string | null
    texto?: StringWithAggregatesFilter<"comentario"> | string
  }

  export type configuracao_usuarioWhereInput = {
    AND?: configuracao_usuarioWhereInput | configuracao_usuarioWhereInput[]
    OR?: configuracao_usuarioWhereInput[]
    NOT?: configuracao_usuarioWhereInput | configuracao_usuarioWhereInput[]
    usuario_id?: IntFilter<"configuracao_usuario"> | number
    tamanho_fonte?: StringNullableFilter<"configuracao_usuario"> | string | null
    alto_contraste?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    audio?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    libras?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type configuracao_usuarioOrderByWithRelationInput = {
    usuario_id?: SortOrder
    tamanho_fonte?: SortOrderInput | SortOrder
    alto_contraste?: SortOrderInput | SortOrder
    audio?: SortOrderInput | SortOrder
    libras?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: configuracao_usuarioOrderByRelevanceInput
  }

  export type configuracao_usuarioWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: number
    AND?: configuracao_usuarioWhereInput | configuracao_usuarioWhereInput[]
    OR?: configuracao_usuarioWhereInput[]
    NOT?: configuracao_usuarioWhereInput | configuracao_usuarioWhereInput[]
    tamanho_fonte?: StringNullableFilter<"configuracao_usuario"> | string | null
    alto_contraste?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    audio?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    libras?: BoolNullableFilter<"configuracao_usuario"> | boolean | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "usuario_id">

  export type configuracao_usuarioOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    tamanho_fonte?: SortOrderInput | SortOrder
    alto_contraste?: SortOrderInput | SortOrder
    audio?: SortOrderInput | SortOrder
    libras?: SortOrderInput | SortOrder
    _count?: configuracao_usuarioCountOrderByAggregateInput
    _avg?: configuracao_usuarioAvgOrderByAggregateInput
    _max?: configuracao_usuarioMaxOrderByAggregateInput
    _min?: configuracao_usuarioMinOrderByAggregateInput
    _sum?: configuracao_usuarioSumOrderByAggregateInput
  }

  export type configuracao_usuarioScalarWhereWithAggregatesInput = {
    AND?: configuracao_usuarioScalarWhereWithAggregatesInput | configuracao_usuarioScalarWhereWithAggregatesInput[]
    OR?: configuracao_usuarioScalarWhereWithAggregatesInput[]
    NOT?: configuracao_usuarioScalarWhereWithAggregatesInput | configuracao_usuarioScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"configuracao_usuario"> | number
    tamanho_fonte?: StringNullableWithAggregatesFilter<"configuracao_usuario"> | string | null
    alto_contraste?: BoolNullableWithAggregatesFilter<"configuracao_usuario"> | boolean | null
    audio?: BoolNullableWithAggregatesFilter<"configuracao_usuario"> | boolean | null
    libras?: BoolNullableWithAggregatesFilter<"configuracao_usuario"> | boolean | null
  }

  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    endereco_id?: IntFilter<"endereco"> | number
    usuario_id?: IntFilter<"endereco"> | number
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringNullableFilter<"endereco"> | string | null
    complemento?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringNullableFilter<"endereco"> | string | null
    cidade?: StringNullableFilter<"endereco"> | string | null
    estado?: StringNullableFilter<"endereco"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    pedido?: PedidoListRelationFilter
  }

  export type enderecoOrderByWithRelationInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    pedido?: pedidoOrderByRelationAggregateInput
    _relevance?: enderecoOrderByRelevanceInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    endereco_id?: number
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    usuario_id?: IntFilter<"endereco"> | number
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringNullableFilter<"endereco"> | string | null
    complemento?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringNullableFilter<"endereco"> | string | null
    cidade?: StringNullableFilter<"endereco"> | string | null
    estado?: StringNullableFilter<"endereco"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    pedido?: PedidoListRelationFilter
  }, "endereco_id">

  export type enderecoOrderByWithAggregationInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _avg?: enderecoAvgOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
    _sum?: enderecoSumOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    endereco_id?: IntWithAggregatesFilter<"endereco"> | number
    usuario_id?: IntWithAggregatesFilter<"endereco"> | number
    cep?: StringWithAggregatesFilter<"endereco"> | string
    logradouro?: StringWithAggregatesFilter<"endereco"> | string
    numero?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    estado?: StringNullableWithAggregatesFilter<"endereco"> | string | null
  }

  export type favoritoWhereInput = {
    AND?: favoritoWhereInput | favoritoWhereInput[]
    OR?: favoritoWhereInput[]
    NOT?: favoritoWhereInput | favoritoWhereInput[]
    usuario_id?: IntFilter<"favorito"> | number
    produto_id?: IntFilter<"favorito"> | number
    data_favorito?: DateTimeNullableFilter<"favorito"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type favoritoOrderByWithRelationInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_favorito?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type favoritoWhereUniqueInput = Prisma.AtLeast<{
    usuario_id_produto_id?: favoritoUsuario_idProduto_idCompoundUniqueInput
    AND?: favoritoWhereInput | favoritoWhereInput[]
    OR?: favoritoWhereInput[]
    NOT?: favoritoWhereInput | favoritoWhereInput[]
    usuario_id?: IntFilter<"favorito"> | number
    produto_id?: IntFilter<"favorito"> | number
    data_favorito?: DateTimeNullableFilter<"favorito"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "usuario_id_produto_id">

  export type favoritoOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_favorito?: SortOrderInput | SortOrder
    _count?: favoritoCountOrderByAggregateInput
    _avg?: favoritoAvgOrderByAggregateInput
    _max?: favoritoMaxOrderByAggregateInput
    _min?: favoritoMinOrderByAggregateInput
    _sum?: favoritoSumOrderByAggregateInput
  }

  export type favoritoScalarWhereWithAggregatesInput = {
    AND?: favoritoScalarWhereWithAggregatesInput | favoritoScalarWhereWithAggregatesInput[]
    OR?: favoritoScalarWhereWithAggregatesInput[]
    NOT?: favoritoScalarWhereWithAggregatesInput | favoritoScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"favorito"> | number
    produto_id?: IntWithAggregatesFilter<"favorito"> | number
    data_favorito?: DateTimeNullableWithAggregatesFilter<"favorito"> | Date | string | null
  }

  export type fornecedorWhereInput = {
    AND?: fornecedorWhereInput | fornecedorWhereInput[]
    OR?: fornecedorWhereInput[]
    NOT?: fornecedorWhereInput | fornecedorWhereInput[]
    fornecedor_id?: IntFilter<"fornecedor"> | number
    razao_social?: StringFilter<"fornecedor"> | string
    cnpj?: StringFilter<"fornecedor"> | string
    email?: StringNullableFilter<"fornecedor"> | string | null
    telefone?: StringNullableFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"fornecedor"> | Date | string | null
    produto?: ProdutoListRelationFilter
  }

  export type fornecedorOrderByWithRelationInput = {
    fornecedor_id?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    produto?: produtoOrderByRelationAggregateInput
    _relevance?: fornecedorOrderByRelevanceInput
  }

  export type fornecedorWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id?: number
    cnpj?: string
    AND?: fornecedorWhereInput | fornecedorWhereInput[]
    OR?: fornecedorWhereInput[]
    NOT?: fornecedorWhereInput | fornecedorWhereInput[]
    razao_social?: StringFilter<"fornecedor"> | string
    email?: StringNullableFilter<"fornecedor"> | string | null
    telefone?: StringNullableFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"fornecedor"> | Date | string | null
    produto?: ProdutoListRelationFilter
  }, "fornecedor_id" | "cnpj">

  export type fornecedorOrderByWithAggregationInput = {
    fornecedor_id?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: fornecedorCountOrderByAggregateInput
    _avg?: fornecedorAvgOrderByAggregateInput
    _max?: fornecedorMaxOrderByAggregateInput
    _min?: fornecedorMinOrderByAggregateInput
    _sum?: fornecedorSumOrderByAggregateInput
  }

  export type fornecedorScalarWhereWithAggregatesInput = {
    AND?: fornecedorScalarWhereWithAggregatesInput | fornecedorScalarWhereWithAggregatesInput[]
    OR?: fornecedorScalarWhereWithAggregatesInput[]
    NOT?: fornecedorScalarWhereWithAggregatesInput | fornecedorScalarWhereWithAggregatesInput[]
    fornecedor_id?: IntWithAggregatesFilter<"fornecedor"> | number
    razao_social?: StringWithAggregatesFilter<"fornecedor"> | string
    cnpj?: StringWithAggregatesFilter<"fornecedor"> | string
    email?: StringNullableWithAggregatesFilter<"fornecedor"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"fornecedor"> | Date | string | null
  }

  export type item_carrinhoWhereInput = {
    AND?: item_carrinhoWhereInput | item_carrinhoWhereInput[]
    OR?: item_carrinhoWhereInput[]
    NOT?: item_carrinhoWhereInput | item_carrinhoWhereInput[]
    id_carrinho?: IntFilter<"item_carrinho"> | number
    id_produto?: IntFilter<"item_carrinho"> | number
    quantidade?: IntFilter<"item_carrinho"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, carrinhoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type item_carrinhoOrderByWithRelationInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    carrinho?: carrinhoOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type item_carrinhoWhereUniqueInput = Prisma.AtLeast<{
    id_carrinho_id_produto?: item_carrinhoId_carrinhoId_produtoCompoundUniqueInput
    AND?: item_carrinhoWhereInput | item_carrinhoWhereInput[]
    OR?: item_carrinhoWhereInput[]
    NOT?: item_carrinhoWhereInput | item_carrinhoWhereInput[]
    id_carrinho?: IntFilter<"item_carrinho"> | number
    id_produto?: IntFilter<"item_carrinho"> | number
    quantidade?: IntFilter<"item_carrinho"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, carrinhoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "id_carrinho_id_produto">

  export type item_carrinhoOrderByWithAggregationInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    _count?: item_carrinhoCountOrderByAggregateInput
    _avg?: item_carrinhoAvgOrderByAggregateInput
    _max?: item_carrinhoMaxOrderByAggregateInput
    _min?: item_carrinhoMinOrderByAggregateInput
    _sum?: item_carrinhoSumOrderByAggregateInput
  }

  export type item_carrinhoScalarWhereWithAggregatesInput = {
    AND?: item_carrinhoScalarWhereWithAggregatesInput | item_carrinhoScalarWhereWithAggregatesInput[]
    OR?: item_carrinhoScalarWhereWithAggregatesInput[]
    NOT?: item_carrinhoScalarWhereWithAggregatesInput | item_carrinhoScalarWhereWithAggregatesInput[]
    id_carrinho?: IntWithAggregatesFilter<"item_carrinho"> | number
    id_produto?: IntWithAggregatesFilter<"item_carrinho"> | number
    quantidade?: IntWithAggregatesFilter<"item_carrinho"> | number
  }

  export type item_pedidoWhereInput = {
    AND?: item_pedidoWhereInput | item_pedidoWhereInput[]
    OR?: item_pedidoWhereInput[]
    NOT?: item_pedidoWhereInput | item_pedidoWhereInput[]
    pedido_id?: IntFilter<"item_pedido"> | number
    produto_id?: IntFilter<"item_pedido"> | number
    quantidade?: IntFilter<"item_pedido"> | number
    preco_unitario?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type item_pedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type item_pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id_produto_id?: item_pedidoPedido_idProduto_idCompoundUniqueInput
    AND?: item_pedidoWhereInput | item_pedidoWhereInput[]
    OR?: item_pedidoWhereInput[]
    NOT?: item_pedidoWhereInput | item_pedidoWhereInput[]
    pedido_id?: IntFilter<"item_pedido"> | number
    produto_id?: IntFilter<"item_pedido"> | number
    quantidade?: IntFilter<"item_pedido"> | number
    preco_unitario?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "pedido_id_produto_id">

  export type item_pedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    _count?: item_pedidoCountOrderByAggregateInput
    _avg?: item_pedidoAvgOrderByAggregateInput
    _max?: item_pedidoMaxOrderByAggregateInput
    _min?: item_pedidoMinOrderByAggregateInput
    _sum?: item_pedidoSumOrderByAggregateInput
  }

  export type item_pedidoScalarWhereWithAggregatesInput = {
    AND?: item_pedidoScalarWhereWithAggregatesInput | item_pedidoScalarWhereWithAggregatesInput[]
    OR?: item_pedidoScalarWhereWithAggregatesInput[]
    NOT?: item_pedidoScalarWhereWithAggregatesInput | item_pedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"item_pedido"> | number
    produto_id?: IntWithAggregatesFilter<"item_pedido"> | number
    quantidade?: IntWithAggregatesFilter<"item_pedido"> | number
    preco_unitario?: DecimalNullableWithAggregatesFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableWithAggregatesFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ofertaWhereInput = {
    AND?: ofertaWhereInput | ofertaWhereInput[]
    OR?: ofertaWhereInput[]
    NOT?: ofertaWhereInput | ofertaWhereInput[]
    id?: IntFilter<"oferta"> | number
    descricao?: StringNullableFilter<"oferta"> | string | null
    desconto?: DecimalNullableFilter<"oferta"> | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntFilter<"oferta"> | number
    data_inicio?: DateTimeNullableFilter<"oferta"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"oferta"> | Date | string | null
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type ofertaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    desconto?: SortOrderInput | SortOrder
    produto_id?: SortOrder
    data_inicio?: SortOrderInput | SortOrder
    data_fim?: SortOrderInput | SortOrder
    produto?: produtoOrderByWithRelationInput
    _relevance?: ofertaOrderByRelevanceInput
  }

  export type ofertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ofertaWhereInput | ofertaWhereInput[]
    OR?: ofertaWhereInput[]
    NOT?: ofertaWhereInput | ofertaWhereInput[]
    descricao?: StringNullableFilter<"oferta"> | string | null
    desconto?: DecimalNullableFilter<"oferta"> | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntFilter<"oferta"> | number
    data_inicio?: DateTimeNullableFilter<"oferta"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"oferta"> | Date | string | null
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "id">

  export type ofertaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrderInput | SortOrder
    desconto?: SortOrderInput | SortOrder
    produto_id?: SortOrder
    data_inicio?: SortOrderInput | SortOrder
    data_fim?: SortOrderInput | SortOrder
    _count?: ofertaCountOrderByAggregateInput
    _avg?: ofertaAvgOrderByAggregateInput
    _max?: ofertaMaxOrderByAggregateInput
    _min?: ofertaMinOrderByAggregateInput
    _sum?: ofertaSumOrderByAggregateInput
  }

  export type ofertaScalarWhereWithAggregatesInput = {
    AND?: ofertaScalarWhereWithAggregatesInput | ofertaScalarWhereWithAggregatesInput[]
    OR?: ofertaScalarWhereWithAggregatesInput[]
    NOT?: ofertaScalarWhereWithAggregatesInput | ofertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"oferta"> | number
    descricao?: StringNullableWithAggregatesFilter<"oferta"> | string | null
    desconto?: DecimalNullableWithAggregatesFilter<"oferta"> | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntWithAggregatesFilter<"oferta"> | number
    data_inicio?: DateTimeNullableWithAggregatesFilter<"oferta"> | Date | string | null
    data_fim?: DateTimeNullableWithAggregatesFilter<"oferta"> | Date | string | null
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    usuario_id?: IntFilter<"pedido"> | number
    endereco_id?: IntFilter<"pedido"> | number
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"pedido"> | string | null
    item_pedido?: Item_pedidoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, enderecoWhereInput>
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    data_pedido?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    item_pedido?: item_pedidoOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    endereco?: enderecoOrderByWithRelationInput
    _relevance?: pedidoOrderByRelevanceInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    usuario_id?: IntFilter<"pedido"> | number
    endereco_id?: IntFilter<"pedido"> | number
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"pedido"> | string | null
    item_pedido?: Item_pedidoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, enderecoWhereInput>
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    data_pedido?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    usuario_id?: IntWithAggregatesFilter<"pedido"> | number
    endereco_id?: IntWithAggregatesFilter<"pedido"> | number
    data_pedido?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    forma_pagamento?: StringNullableWithAggregatesFilter<"pedido"> | string | null
    valor_total?: DecimalNullableWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"pedido"> | string | null
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    produto_id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    marca?: StringNullableFilter<"produto"> | string | null
    preco?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    imagem?: StringNullableFilter<"produto"> | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    especificacoes?: StringNullableFilter<"produto"> | string | null
    categoria_id?: IntFilter<"produto"> | number
    fornecedor_id?: IntFilter<"produto"> | number
    avaliacao?: AvaliacaoListRelationFilter
    comentario?: ComentarioListRelationFilter
    favorito?: FavoritoListRelationFilter
    item_carrinho?: Item_carrinhoListRelationFilter
    item_pedido?: Item_pedidoListRelationFilter
    oferta?: OfertaListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    fornecedor?: XOR<FornecedorScalarRelationFilter, fornecedorWhereInput>
  }

  export type produtoOrderByWithRelationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    preco?: SortOrder
    imagem?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    especificacoes?: SortOrderInput | SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
    avaliacao?: avaliacaoOrderByRelationAggregateInput
    comentario?: comentarioOrderByRelationAggregateInput
    favorito?: favoritoOrderByRelationAggregateInput
    item_carrinho?: item_carrinhoOrderByRelationAggregateInput
    item_pedido?: item_pedidoOrderByRelationAggregateInput
    oferta?: ofertaOrderByRelationAggregateInput
    categoria?: categoriaOrderByWithRelationInput
    fornecedor?: fornecedorOrderByWithRelationInput
    _relevance?: produtoOrderByRelevanceInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    produto_id?: number
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    marca?: StringNullableFilter<"produto"> | string | null
    preco?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    imagem?: StringNullableFilter<"produto"> | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    especificacoes?: StringNullableFilter<"produto"> | string | null
    categoria_id?: IntFilter<"produto"> | number
    fornecedor_id?: IntFilter<"produto"> | number
    avaliacao?: AvaliacaoListRelationFilter
    comentario?: ComentarioListRelationFilter
    favorito?: FavoritoListRelationFilter
    item_carrinho?: Item_carrinhoListRelationFilter
    item_pedido?: Item_pedidoListRelationFilter
    oferta?: OfertaListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    fornecedor?: XOR<FornecedorScalarRelationFilter, fornecedorWhereInput>
  }, "produto_id">

  export type produtoOrderByWithAggregationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    preco?: SortOrder
    imagem?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    especificacoes?: SortOrderInput | SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    produto_id?: IntWithAggregatesFilter<"produto"> | number
    nome?: StringWithAggregatesFilter<"produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"produto"> | string | null
    marca?: StringNullableWithAggregatesFilter<"produto"> | string | null
    preco?: DecimalWithAggregatesFilter<"produto"> | Decimal | DecimalJsLike | number | string
    imagem?: StringNullableWithAggregatesFilter<"produto"> | string | null
    estoque?: IntNullableWithAggregatesFilter<"produto"> | number | null
    especificacoes?: StringNullableWithAggregatesFilter<"produto"> | string | null
    categoria_id?: IntWithAggregatesFilter<"produto"> | number
    fornecedor_id?: IntWithAggregatesFilter<"produto"> | number
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    nome?: StringFilter<"usuario"> | string
    sobrenome?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    cpf?: StringFilter<"usuario"> | string
    telefone?: StringNullableFilter<"usuario"> | string | null
    data_nascimento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    data_cadastro?: DateTimeNullableFilter<"usuario"> | Date | string | null
    avaliacao?: AvaliacaoListRelationFilter
    carrinho?: CarrinhoListRelationFilter
    comentario?: ComentarioListRelationFilter
    configuracao_usuario?: XOR<Configuracao_usuarioNullableScalarRelationFilter, configuracao_usuarioWhereInput> | null
    endereco?: EnderecoListRelationFilter
    favorito?: FavoritoListRelationFilter
    pedido?: PedidoListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    avaliacao?: avaliacaoOrderByRelationAggregateInput
    carrinho?: carrinhoOrderByRelationAggregateInput
    comentario?: comentarioOrderByRelationAggregateInput
    configuracao_usuario?: configuracao_usuarioOrderByWithRelationInput
    endereco?: enderecoOrderByRelationAggregateInput
    favorito?: favoritoOrderByRelationAggregateInput
    pedido?: pedidoOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringFilter<"usuario"> | string
    sobrenome?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    telefone?: StringNullableFilter<"usuario"> | string | null
    data_nascimento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    data_cadastro?: DateTimeNullableFilter<"usuario"> | Date | string | null
    avaliacao?: AvaliacaoListRelationFilter
    carrinho?: CarrinhoListRelationFilter
    comentario?: ComentarioListRelationFilter
    configuracao_usuario?: XOR<Configuracao_usuarioNullableScalarRelationFilter, configuracao_usuarioWhereInput> | null
    endereco?: EnderecoListRelationFilter
    favorito?: FavoritoListRelationFilter
    pedido?: PedidoListRelationFilter
  }, "id" | "email" | "cpf">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    nome?: StringWithAggregatesFilter<"usuario"> | string
    sobrenome?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    cpf?: StringWithAggregatesFilter<"usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
  }

  export type avaliacaoCreateInput = {
    data_avaliacao?: Date | string | null
    nota: number
    usuario: usuarioCreateNestedOneWithoutAvaliacaoInput
    produto: produtoCreateNestedOneWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateInput = {
    usuario_id: number
    produto_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type avaliacaoUpdateInput = {
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneRequiredWithoutAvaliacaoNestedInput
    produto?: produtoUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacaoCreateManyInput = {
    usuario_id: number
    produto_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type avaliacaoUpdateManyMutationInput = {
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacaoUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type carrinhoCreateInput = {
    data_criacao?: Date | string | null
    status?: string | null
    usuario: usuarioCreateNestedOneWithoutCarrinhoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateInput = {
    id_carrinho?: number
    id_usuario: number
    data_criacao?: Date | string | null
    status?: string | null
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUpdateInput = {
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutCarrinhoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoCreateManyInput = {
    id_carrinho?: number
    id_usuario: number
    data_criacao?: Date | string | null
    status?: string | null
  }

  export type carrinhoUpdateManyMutationInput = {
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carrinhoUncheckedUpdateManyInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaCreateInput = {
    nome: string
    descricao?: string | null
    produto?: produtoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    produto?: produtoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: produtoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comentarioCreateInput = {
    data_comentario?: Date | string | null
    texto: string
    usuario: usuarioCreateNestedOneWithoutComentarioInput
    produto: produtoCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateInput = {
    id?: number
    usuario_id: number
    produto_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type comentarioUpdateInput = {
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutComentarioNestedInput
    produto?: produtoUpdateOneRequiredWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioCreateManyInput = {
    id?: number
    usuario_id: number
    produto_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type comentarioUpdateManyMutationInput = {
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type configuracao_usuarioCreateInput = {
    tamanho_fonte?: string | null
    alto_contraste?: boolean | null
    audio?: boolean | null
    libras?: boolean | null
    usuario: usuarioCreateNestedOneWithoutConfiguracao_usuarioInput
  }

  export type configuracao_usuarioUncheckedCreateInput = {
    usuario_id: number
    tamanho_fonte?: string | null
    alto_contraste?: boolean | null
    audio?: boolean | null
    libras?: boolean | null
  }

  export type configuracao_usuarioUpdateInput = {
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: usuarioUpdateOneRequiredWithoutConfiguracao_usuarioNestedInput
  }

  export type configuracao_usuarioUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type configuracao_usuarioCreateManyInput = {
    usuario_id: number
    tamanho_fonte?: string | null
    alto_contraste?: boolean | null
    audio?: boolean | null
    libras?: boolean | null
  }

  export type configuracao_usuarioUpdateManyMutationInput = {
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type configuracao_usuarioUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enderecoCreateInput = {
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    usuario: usuarioCreateNestedOneWithoutEnderecoInput
    pedido?: pedidoCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    endereco_id?: number
    usuario_id: number
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutEnderecoNestedInput
    pedido?: pedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    endereco_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: pedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoCreateManyInput = {
    endereco_id?: number
    usuario_id: number
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type enderecoUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enderecoUncheckedUpdateManyInput = {
    endereco_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritoCreateInput = {
    data_favorito?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutFavoritoInput
    produto: produtoCreateNestedOneWithoutFavoritoInput
  }

  export type favoritoUncheckedCreateInput = {
    usuario_id: number
    produto_id: number
    data_favorito?: Date | string | null
  }

  export type favoritoUpdateInput = {
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutFavoritoNestedInput
    produto?: produtoUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type favoritoUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type favoritoCreateManyInput = {
    usuario_id: number
    produto_id: number
    data_favorito?: Date | string | null
  }

  export type favoritoUpdateManyMutationInput = {
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type favoritoUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fornecedorCreateInput = {
    razao_social: string
    cnpj: string
    email?: string | null
    telefone?: string | null
    data_cadastro?: Date | string | null
    produto?: produtoCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUncheckedCreateInput = {
    fornecedor_id?: number
    razao_social: string
    cnpj: string
    email?: string | null
    telefone?: string | null
    data_cadastro?: Date | string | null
    produto?: produtoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUpdateInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorUncheckedUpdateInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorCreateManyInput = {
    fornecedor_id?: number
    razao_social: string
    cnpj: string
    email?: string | null
    telefone?: string | null
    data_cadastro?: Date | string | null
  }

  export type fornecedorUpdateManyMutationInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fornecedorUncheckedUpdateManyInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type item_carrinhoCreateInput = {
    quantidade: number
    carrinho: carrinhoCreateNestedOneWithoutItem_carrinhoInput
    produto: produtoCreateNestedOneWithoutItem_carrinhoInput
  }

  export type item_carrinhoUncheckedCreateInput = {
    id_carrinho: number
    id_produto: number
    quantidade: number
  }

  export type item_carrinhoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: carrinhoUpdateOneRequiredWithoutItem_carrinhoNestedInput
    produto?: produtoUpdateOneRequiredWithoutItem_carrinhoNestedInput
  }

  export type item_carrinhoUncheckedUpdateInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_carrinhoCreateManyInput = {
    id_carrinho: number
    id_produto: number
    quantidade: number
  }

  export type item_carrinhoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_carrinhoUncheckedUpdateManyInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoCreateInput = {
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    pedido: pedidoCreateNestedOneWithoutItem_pedidoInput
    produto: produtoCreateNestedOneWithoutItem_pedidoInput
  }

  export type item_pedidoUncheckedCreateInput = {
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido?: pedidoUpdateOneRequiredWithoutItem_pedidoNestedInput
    produto?: produtoUpdateOneRequiredWithoutItem_pedidoNestedInput
  }

  export type item_pedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoCreateManyInput = {
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ofertaCreateInput = {
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    produto: produtoCreateNestedOneWithoutOfertaInput
  }

  export type ofertaUncheckedCreateInput = {
    id?: number
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    produto_id: number
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
  }

  export type ofertaUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUpdateOneRequiredWithoutOfertaNestedInput
  }

  export type ofertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntFieldUpdateOperationsInput | number
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ofertaCreateManyInput = {
    id?: number
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    produto_id: number
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
  }

  export type ofertaUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ofertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntFieldUpdateOperationsInput | number
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidoCreateInput = {
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
    endereco: enderecoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    endereco_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
    endereco?: enderecoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    endereco_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    usuario_id: number
    endereco_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
  }

  export type pedidoUpdateManyMutationInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    endereco_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoCreateInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateManyInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
  }

  export type produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoUncheckedUpdateManyInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
  }

  export type usuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: produtoWhereInput
    isNot?: produtoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type avaliacaoUsuario_idProduto_idCompoundUniqueInput = {
    usuario_id: number
    produto_id: number
  }

  export type avaliacaoCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_avaliacao?: SortOrder
    nota?: SortOrder
  }

  export type avaliacaoAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    nota?: SortOrder
  }

  export type avaliacaoMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_avaliacao?: SortOrder
    nota?: SortOrder
  }

  export type avaliacaoMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_avaliacao?: SortOrder
    nota?: SortOrder
  }

  export type avaliacaoSumOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    nota?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Item_carrinhoListRelationFilter = {
    every?: item_carrinhoWhereInput
    some?: item_carrinhoWhereInput
    none?: item_carrinhoWhereInput
  }

  export type item_carrinhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carrinhoOrderByRelevanceInput = {
    fields: carrinhoOrderByRelevanceFieldEnum | carrinhoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type carrinhoCountOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
  }

  export type carrinhoAvgOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
  }

  export type carrinhoMaxOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
  }

  export type carrinhoMinOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
    data_criacao?: SortOrder
    status?: SortOrder
  }

  export type carrinhoSumOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProdutoListRelationFilter = {
    every?: produtoWhereInput
    some?: produtoWhereInput
    none?: produtoWhereInput
  }

  export type produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaOrderByRelevanceInput = {
    fields: categoriaOrderByRelevanceFieldEnum | categoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type comentarioOrderByRelevanceInput = {
    fields: comentarioOrderByRelevanceFieldEnum | comentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comentarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_comentario?: SortOrder
    texto?: SortOrder
  }

  export type comentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
  }

  export type comentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_comentario?: SortOrder
    texto?: SortOrder
  }

  export type comentarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_comentario?: SortOrder
    texto?: SortOrder
  }

  export type comentarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    produto_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type configuracao_usuarioOrderByRelevanceInput = {
    fields: configuracao_usuarioOrderByRelevanceFieldEnum | configuracao_usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type configuracao_usuarioCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    tamanho_fonte?: SortOrder
    alto_contraste?: SortOrder
    audio?: SortOrder
    libras?: SortOrder
  }

  export type configuracao_usuarioAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type configuracao_usuarioMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    tamanho_fonte?: SortOrder
    alto_contraste?: SortOrder
    audio?: SortOrder
    libras?: SortOrder
  }

  export type configuracao_usuarioMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    tamanho_fonte?: SortOrder
    alto_contraste?: SortOrder
    audio?: SortOrder
    libras?: SortOrder
  }

  export type configuracao_usuarioSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enderecoOrderByRelevanceInput = {
    fields: enderecoOrderByRelevanceFieldEnum | enderecoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enderecoCountOrderByAggregateInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type enderecoAvgOrderByAggregateInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type enderecoSumOrderByAggregateInput = {
    endereco_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type favoritoUsuario_idProduto_idCompoundUniqueInput = {
    usuario_id: number
    produto_id: number
  }

  export type favoritoCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_favorito?: SortOrder
  }

  export type favoritoAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
  }

  export type favoritoMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_favorito?: SortOrder
  }

  export type favoritoMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
    data_favorito?: SortOrder
  }

  export type favoritoSumOrderByAggregateInput = {
    usuario_id?: SortOrder
    produto_id?: SortOrder
  }

  export type fornecedorOrderByRelevanceInput = {
    fields: fornecedorOrderByRelevanceFieldEnum | fornecedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fornecedorCountOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorAvgOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type fornecedorMaxOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorMinOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorSumOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type CarrinhoScalarRelationFilter = {
    is?: carrinhoWhereInput
    isNot?: carrinhoWhereInput
  }

  export type item_carrinhoId_carrinhoId_produtoCompoundUniqueInput = {
    id_carrinho: number
    id_produto: number
  }

  export type item_carrinhoCountOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type item_carrinhoAvgOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type item_carrinhoMaxOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type item_carrinhoMinOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type item_carrinhoSumOrderByAggregateInput = {
    id_carrinho?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type item_pedidoPedido_idProduto_idCompoundUniqueInput = {
    pedido_id: number
    produto_id: number
  }

  export type item_pedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type item_pedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type item_pedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type item_pedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type item_pedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ofertaOrderByRelevanceInput = {
    fields: ofertaOrderByRelevanceFieldEnum | ofertaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ofertaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    desconto?: SortOrder
    produto_id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
  }

  export type ofertaAvgOrderByAggregateInput = {
    id?: SortOrder
    desconto?: SortOrder
    produto_id?: SortOrder
  }

  export type ofertaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    desconto?: SortOrder
    produto_id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
  }

  export type ofertaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    desconto?: SortOrder
    produto_id?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
  }

  export type ofertaSumOrderByAggregateInput = {
    id?: SortOrder
    desconto?: SortOrder
    produto_id?: SortOrder
  }

  export type Item_pedidoListRelationFilter = {
    every?: item_pedidoWhereInput
    some?: item_pedidoWhereInput
    none?: item_pedidoWhereInput
  }

  export type EnderecoScalarRelationFilter = {
    is?: enderecoWhereInput
    isNot?: enderecoWhereInput
  }

  export type item_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoOrderByRelevanceInput = {
    fields: pedidoOrderByRelevanceFieldEnum | pedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    data_pedido?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
    status?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    valor_total?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    data_pedido?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
    status?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    data_pedido?: SortOrder
    forma_pagamento?: SortOrder
    valor_total?: SortOrder
    status?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    endereco_id?: SortOrder
    valor_total?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AvaliacaoListRelationFilter = {
    every?: avaliacaoWhereInput
    some?: avaliacaoWhereInput
    none?: avaliacaoWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: comentarioWhereInput
    some?: comentarioWhereInput
    none?: comentarioWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: favoritoWhereInput
    some?: favoritoWhereInput
    none?: favoritoWhereInput
  }

  export type OfertaListRelationFilter = {
    every?: ofertaWhereInput
    some?: ofertaWhereInput
    none?: ofertaWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type FornecedorScalarRelationFilter = {
    is?: fornecedorWhereInput
    isNot?: fornecedorWhereInput
  }

  export type avaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type comentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ofertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtoOrderByRelevanceInput = {
    fields: produtoOrderByRelevanceFieldEnum | produtoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produtoCountOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    marca?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    estoque?: SortOrder
    especificacoes?: SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    produto_id?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    marca?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    estoque?: SortOrder
    especificacoes?: SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    marca?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    estoque?: SortOrder
    especificacoes?: SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    produto_id?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
    categoria_id?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CarrinhoListRelationFilter = {
    every?: carrinhoWhereInput
    some?: carrinhoWhereInput
    none?: carrinhoWhereInput
  }

  export type Configuracao_usuarioNullableScalarRelationFilter = {
    is?: configuracao_usuarioWhereInput | null
    isNot?: configuracao_usuarioWhereInput | null
  }

  export type EnderecoListRelationFilter = {
    every?: enderecoWhereInput
    some?: enderecoWhereInput
    none?: enderecoWhereInput
  }

  export type carrinhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    data_cadastro?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<usuarioCreateWithoutAvaliacaoInput, usuarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAvaliacaoInput
    connect?: usuarioWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<produtoCreateWithoutAvaliacaoInput, produtoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutAvaliacaoInput
    connect?: produtoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarioUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<usuarioCreateWithoutAvaliacaoInput, usuarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAvaliacaoInput
    upsert?: usuarioUpsertWithoutAvaliacaoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAvaliacaoInput, usuarioUpdateWithoutAvaliacaoInput>, usuarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type produtoUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<produtoCreateWithoutAvaliacaoInput, produtoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutAvaliacaoInput
    upsert?: produtoUpsertWithoutAvaliacaoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutAvaliacaoInput, produtoUpdateWithoutAvaliacaoInput>, produtoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type usuarioCreateNestedOneWithoutCarrinhoInput = {
    create?: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCarrinhoInput
    connect?: usuarioWhereUniqueInput
  }

  export type item_carrinhoCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput> | item_carrinhoCreateWithoutCarrinhoInput[] | item_carrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutCarrinhoInput | item_carrinhoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: item_carrinhoCreateManyCarrinhoInputEnvelope
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
  }

  export type item_carrinhoUncheckedCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput> | item_carrinhoCreateWithoutCarrinhoInput[] | item_carrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutCarrinhoInput | item_carrinhoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: item_carrinhoCreateManyCarrinhoInputEnvelope
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usuarioUpdateOneRequiredWithoutCarrinhoNestedInput = {
    create?: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCarrinhoInput
    upsert?: usuarioUpsertWithoutCarrinhoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutCarrinhoInput, usuarioUpdateWithoutCarrinhoInput>, usuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type item_carrinhoUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput> | item_carrinhoCreateWithoutCarrinhoInput[] | item_carrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutCarrinhoInput | item_carrinhoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: item_carrinhoUpsertWithWhereUniqueWithoutCarrinhoInput | item_carrinhoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: item_carrinhoCreateManyCarrinhoInputEnvelope
    set?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    disconnect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    delete?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    update?: item_carrinhoUpdateWithWhereUniqueWithoutCarrinhoInput | item_carrinhoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: item_carrinhoUpdateManyWithWhereWithoutCarrinhoInput | item_carrinhoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
  }

  export type item_carrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput> | item_carrinhoCreateWithoutCarrinhoInput[] | item_carrinhoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutCarrinhoInput | item_carrinhoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: item_carrinhoUpsertWithWhereUniqueWithoutCarrinhoInput | item_carrinhoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: item_carrinhoCreateManyCarrinhoInputEnvelope
    set?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    disconnect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    delete?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    update?: item_carrinhoUpdateWithWhereUniqueWithoutCarrinhoInput | item_carrinhoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: item_carrinhoUpdateManyWithWhereWithoutCarrinhoInput | item_carrinhoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
  }

  export type produtoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type produtoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput> | produtoCreateWithoutCategoriaInput[] | produtoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutCategoriaInput | produtoCreateOrConnectWithoutCategoriaInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutCategoriaInput | produtoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: produtoCreateManyCategoriaInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutCategoriaInput | produtoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutCategoriaInput | produtoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutComentarioInput = {
    create?: XOR<usuarioCreateWithoutComentarioInput, usuarioUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutComentarioInput
    connect?: usuarioWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutComentarioInput = {
    create?: XOR<produtoCreateWithoutComentarioInput, produtoUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: produtoCreateOrConnectWithoutComentarioInput
    connect?: produtoWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutComentarioNestedInput = {
    create?: XOR<usuarioCreateWithoutComentarioInput, usuarioUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutComentarioInput
    upsert?: usuarioUpsertWithoutComentarioInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutComentarioInput, usuarioUpdateWithoutComentarioInput>, usuarioUncheckedUpdateWithoutComentarioInput>
  }

  export type produtoUpdateOneRequiredWithoutComentarioNestedInput = {
    create?: XOR<produtoCreateWithoutComentarioInput, produtoUncheckedCreateWithoutComentarioInput>
    connectOrCreate?: produtoCreateOrConnectWithoutComentarioInput
    upsert?: produtoUpsertWithoutComentarioInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutComentarioInput, produtoUpdateWithoutComentarioInput>, produtoUncheckedUpdateWithoutComentarioInput>
  }

  export type usuarioCreateNestedOneWithoutConfiguracao_usuarioInput = {
    create?: XOR<usuarioCreateWithoutConfiguracao_usuarioInput, usuarioUncheckedCreateWithoutConfiguracao_usuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutConfiguracao_usuarioInput
    connect?: usuarioWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usuarioUpdateOneRequiredWithoutConfiguracao_usuarioNestedInput = {
    create?: XOR<usuarioCreateWithoutConfiguracao_usuarioInput, usuarioUncheckedCreateWithoutConfiguracao_usuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutConfiguracao_usuarioInput
    upsert?: usuarioUpsertWithoutConfiguracao_usuarioInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutConfiguracao_usuarioInput, usuarioUpdateWithoutConfiguracao_usuarioInput>, usuarioUncheckedUpdateWithoutConfiguracao_usuarioInput>
  }

  export type usuarioCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<usuarioCreateWithoutEnderecoInput, usuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEnderecoInput
    connect?: usuarioWhereUniqueInput
  }

  export type pedidoCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutEnderecoNestedInput = {
    create?: XOR<usuarioCreateWithoutEnderecoInput, usuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEnderecoInput
    upsert?: usuarioUpsertWithoutEnderecoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutEnderecoInput, usuarioUpdateWithoutEnderecoInput>, usuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type pedidoUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutEnderecoInput | pedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutEnderecoInput | pedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutEnderecoInput | pedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutEnderecoInput | pedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutEnderecoInput | pedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutEnderecoInput | pedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutFavoritoInput = {
    create?: XOR<usuarioCreateWithoutFavoritoInput, usuarioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFavoritoInput
    connect?: usuarioWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutFavoritoInput = {
    create?: XOR<produtoCreateWithoutFavoritoInput, produtoUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutFavoritoInput
    connect?: produtoWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutFavoritoNestedInput = {
    create?: XOR<usuarioCreateWithoutFavoritoInput, usuarioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFavoritoInput
    upsert?: usuarioUpsertWithoutFavoritoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutFavoritoInput, usuarioUpdateWithoutFavoritoInput>, usuarioUncheckedUpdateWithoutFavoritoInput>
  }

  export type produtoUpdateOneRequiredWithoutFavoritoNestedInput = {
    create?: XOR<produtoCreateWithoutFavoritoInput, produtoUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutFavoritoInput
    upsert?: produtoUpsertWithoutFavoritoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutFavoritoInput, produtoUpdateWithoutFavoritoInput>, produtoUncheckedUpdateWithoutFavoritoInput>
  }

  export type produtoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type produtoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutFornecedorInput | produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutFornecedorInput | produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutFornecedorInput | produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutFornecedorInput | produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutFornecedorInput | produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutFornecedorInput | produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type carrinhoCreateNestedOneWithoutItem_carrinhoInput = {
    create?: XOR<carrinhoCreateWithoutItem_carrinhoInput, carrinhoUncheckedCreateWithoutItem_carrinhoInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutItem_carrinhoInput
    connect?: carrinhoWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutItem_carrinhoInput = {
    create?: XOR<produtoCreateWithoutItem_carrinhoInput, produtoUncheckedCreateWithoutItem_carrinhoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutItem_carrinhoInput
    connect?: produtoWhereUniqueInput
  }

  export type carrinhoUpdateOneRequiredWithoutItem_carrinhoNestedInput = {
    create?: XOR<carrinhoCreateWithoutItem_carrinhoInput, carrinhoUncheckedCreateWithoutItem_carrinhoInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutItem_carrinhoInput
    upsert?: carrinhoUpsertWithoutItem_carrinhoInput
    connect?: carrinhoWhereUniqueInput
    update?: XOR<XOR<carrinhoUpdateToOneWithWhereWithoutItem_carrinhoInput, carrinhoUpdateWithoutItem_carrinhoInput>, carrinhoUncheckedUpdateWithoutItem_carrinhoInput>
  }

  export type produtoUpdateOneRequiredWithoutItem_carrinhoNestedInput = {
    create?: XOR<produtoCreateWithoutItem_carrinhoInput, produtoUncheckedCreateWithoutItem_carrinhoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutItem_carrinhoInput
    upsert?: produtoUpsertWithoutItem_carrinhoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutItem_carrinhoInput, produtoUpdateWithoutItem_carrinhoInput>, produtoUncheckedUpdateWithoutItem_carrinhoInput>
  }

  export type pedidoCreateNestedOneWithoutItem_pedidoInput = {
    create?: XOR<pedidoCreateWithoutItem_pedidoInput, pedidoUncheckedCreateWithoutItem_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutItem_pedidoInput
    connect?: pedidoWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutItem_pedidoInput = {
    create?: XOR<produtoCreateWithoutItem_pedidoInput, produtoUncheckedCreateWithoutItem_pedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutItem_pedidoInput
    connect?: produtoWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type pedidoUpdateOneRequiredWithoutItem_pedidoNestedInput = {
    create?: XOR<pedidoCreateWithoutItem_pedidoInput, pedidoUncheckedCreateWithoutItem_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutItem_pedidoInput
    upsert?: pedidoUpsertWithoutItem_pedidoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutItem_pedidoInput, pedidoUpdateWithoutItem_pedidoInput>, pedidoUncheckedUpdateWithoutItem_pedidoInput>
  }

  export type produtoUpdateOneRequiredWithoutItem_pedidoNestedInput = {
    create?: XOR<produtoCreateWithoutItem_pedidoInput, produtoUncheckedCreateWithoutItem_pedidoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutItem_pedidoInput
    upsert?: produtoUpsertWithoutItem_pedidoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutItem_pedidoInput, produtoUpdateWithoutItem_pedidoInput>, produtoUncheckedUpdateWithoutItem_pedidoInput>
  }

  export type produtoCreateNestedOneWithoutOfertaInput = {
    create?: XOR<produtoCreateWithoutOfertaInput, produtoUncheckedCreateWithoutOfertaInput>
    connectOrCreate?: produtoCreateOrConnectWithoutOfertaInput
    connect?: produtoWhereUniqueInput
  }

  export type produtoUpdateOneRequiredWithoutOfertaNestedInput = {
    create?: XOR<produtoCreateWithoutOfertaInput, produtoUncheckedCreateWithoutOfertaInput>
    connectOrCreate?: produtoCreateOrConnectWithoutOfertaInput
    upsert?: produtoUpsertWithoutOfertaInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutOfertaInput, produtoUpdateWithoutOfertaInput>, produtoUncheckedUpdateWithoutOfertaInput>
  }

  export type item_pedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutPedidoInput = {
    create?: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidoInput
    connect?: usuarioWhereUniqueInput
  }

  export type enderecoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<enderecoCreateWithoutPedidoInput, enderecoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutPedidoInput
    connect?: enderecoWhereUniqueInput
  }

  export type item_pedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type item_pedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutPedidoInput | item_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutPedidoInput | item_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutPedidoInput | item_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type usuarioUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidoInput
    upsert?: usuarioUpsertWithoutPedidoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPedidoInput, usuarioUpdateWithoutPedidoInput>, usuarioUncheckedUpdateWithoutPedidoInput>
  }

  export type enderecoUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<enderecoCreateWithoutPedidoInput, enderecoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutPedidoInput
    upsert?: enderecoUpsertWithoutPedidoInput
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutPedidoInput, enderecoUpdateWithoutPedidoInput>, enderecoUncheckedUpdateWithoutPedidoInput>
  }

  export type item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutPedidoInput | item_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutPedidoInput | item_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutPedidoInput | item_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type avaliacaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput> | avaliacaoCreateWithoutProdutoInput[] | avaliacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProdutoInput | avaliacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: avaliacaoCreateManyProdutoInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type comentarioCreateNestedManyWithoutProdutoInput = {
    create?: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput> | comentarioCreateWithoutProdutoInput[] | comentarioUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutProdutoInput | comentarioCreateOrConnectWithoutProdutoInput[]
    createMany?: comentarioCreateManyProdutoInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type favoritoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput> | favoritoCreateWithoutProdutoInput[] | favoritoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutProdutoInput | favoritoCreateOrConnectWithoutProdutoInput[]
    createMany?: favoritoCreateManyProdutoInputEnvelope
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
  }

  export type item_carrinhoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput> | item_carrinhoCreateWithoutProdutoInput[] | item_carrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutProdutoInput | item_carrinhoCreateOrConnectWithoutProdutoInput[]
    createMany?: item_carrinhoCreateManyProdutoInputEnvelope
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
  }

  export type item_pedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput> | item_pedidoCreateWithoutProdutoInput[] | item_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutProdutoInput | item_pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: item_pedidoCreateManyProdutoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type ofertaCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput> | ofertaCreateWithoutProdutoInput[] | ofertaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ofertaCreateOrConnectWithoutProdutoInput | ofertaCreateOrConnectWithoutProdutoInput[]
    createMany?: ofertaCreateManyProdutoInputEnvelope
    connect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
  }

  export type categoriaCreateNestedOneWithoutProdutoInput = {
    create?: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutoInput
    connect?: categoriaWhereUniqueInput
  }

  export type fornecedorCreateNestedOneWithoutProdutoInput = {
    create?: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutProdutoInput
    connect?: fornecedorWhereUniqueInput
  }

  export type avaliacaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput> | avaliacaoCreateWithoutProdutoInput[] | avaliacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProdutoInput | avaliacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: avaliacaoCreateManyProdutoInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput> | comentarioCreateWithoutProdutoInput[] | comentarioUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutProdutoInput | comentarioCreateOrConnectWithoutProdutoInput[]
    createMany?: comentarioCreateManyProdutoInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type favoritoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput> | favoritoCreateWithoutProdutoInput[] | favoritoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutProdutoInput | favoritoCreateOrConnectWithoutProdutoInput[]
    createMany?: favoritoCreateManyProdutoInputEnvelope
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
  }

  export type item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput> | item_carrinhoCreateWithoutProdutoInput[] | item_carrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutProdutoInput | item_carrinhoCreateOrConnectWithoutProdutoInput[]
    createMany?: item_carrinhoCreateManyProdutoInputEnvelope
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
  }

  export type item_pedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput> | item_pedidoCreateWithoutProdutoInput[] | item_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutProdutoInput | item_pedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: item_pedidoCreateManyProdutoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type ofertaUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput> | ofertaCreateWithoutProdutoInput[] | ofertaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ofertaCreateOrConnectWithoutProdutoInput | ofertaCreateOrConnectWithoutProdutoInput[]
    createMany?: ofertaCreateManyProdutoInputEnvelope
    connect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type avaliacaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput> | avaliacaoCreateWithoutProdutoInput[] | avaliacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProdutoInput | avaliacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutProdutoInput | avaliacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: avaliacaoCreateManyProdutoInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutProdutoInput | avaliacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutProdutoInput | avaliacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type comentarioUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput> | comentarioCreateWithoutProdutoInput[] | comentarioUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutProdutoInput | comentarioCreateOrConnectWithoutProdutoInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutProdutoInput | comentarioUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: comentarioCreateManyProdutoInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutProdutoInput | comentarioUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutProdutoInput | comentarioUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type favoritoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput> | favoritoCreateWithoutProdutoInput[] | favoritoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutProdutoInput | favoritoCreateOrConnectWithoutProdutoInput[]
    upsert?: favoritoUpsertWithWhereUniqueWithoutProdutoInput | favoritoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: favoritoCreateManyProdutoInputEnvelope
    set?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    disconnect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    delete?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    update?: favoritoUpdateWithWhereUniqueWithoutProdutoInput | favoritoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: favoritoUpdateManyWithWhereWithoutProdutoInput | favoritoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
  }

  export type item_carrinhoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput> | item_carrinhoCreateWithoutProdutoInput[] | item_carrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutProdutoInput | item_carrinhoCreateOrConnectWithoutProdutoInput[]
    upsert?: item_carrinhoUpsertWithWhereUniqueWithoutProdutoInput | item_carrinhoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: item_carrinhoCreateManyProdutoInputEnvelope
    set?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    disconnect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    delete?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    update?: item_carrinhoUpdateWithWhereUniqueWithoutProdutoInput | item_carrinhoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: item_carrinhoUpdateManyWithWhereWithoutProdutoInput | item_carrinhoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
  }

  export type item_pedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput> | item_pedidoCreateWithoutProdutoInput[] | item_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutProdutoInput | item_pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutProdutoInput | item_pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: item_pedidoCreateManyProdutoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutProdutoInput | item_pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutProdutoInput | item_pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type ofertaUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput> | ofertaCreateWithoutProdutoInput[] | ofertaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ofertaCreateOrConnectWithoutProdutoInput | ofertaCreateOrConnectWithoutProdutoInput[]
    upsert?: ofertaUpsertWithWhereUniqueWithoutProdutoInput | ofertaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ofertaCreateManyProdutoInputEnvelope
    set?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    disconnect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    delete?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    connect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    update?: ofertaUpdateWithWhereUniqueWithoutProdutoInput | ofertaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ofertaUpdateManyWithWhereWithoutProdutoInput | ofertaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ofertaScalarWhereInput | ofertaScalarWhereInput[]
  }

  export type categoriaUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProdutoInput
    upsert?: categoriaUpsertWithoutProdutoInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutProdutoInput, categoriaUpdateWithoutProdutoInput>, categoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type fornecedorUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutProdutoInput
    upsert?: fornecedorUpsertWithoutProdutoInput
    connect?: fornecedorWhereUniqueInput
    update?: XOR<XOR<fornecedorUpdateToOneWithWhereWithoutProdutoInput, fornecedorUpdateWithoutProdutoInput>, fornecedorUncheckedUpdateWithoutProdutoInput>
  }

  export type avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput> | avaliacaoCreateWithoutProdutoInput[] | avaliacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutProdutoInput | avaliacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutProdutoInput | avaliacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: avaliacaoCreateManyProdutoInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutProdutoInput | avaliacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutProdutoInput | avaliacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput> | comentarioCreateWithoutProdutoInput[] | comentarioUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutProdutoInput | comentarioCreateOrConnectWithoutProdutoInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutProdutoInput | comentarioUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: comentarioCreateManyProdutoInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutProdutoInput | comentarioUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutProdutoInput | comentarioUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type favoritoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput> | favoritoCreateWithoutProdutoInput[] | favoritoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutProdutoInput | favoritoCreateOrConnectWithoutProdutoInput[]
    upsert?: favoritoUpsertWithWhereUniqueWithoutProdutoInput | favoritoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: favoritoCreateManyProdutoInputEnvelope
    set?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    disconnect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    delete?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    update?: favoritoUpdateWithWhereUniqueWithoutProdutoInput | favoritoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: favoritoUpdateManyWithWhereWithoutProdutoInput | favoritoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
  }

  export type item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput> | item_carrinhoCreateWithoutProdutoInput[] | item_carrinhoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_carrinhoCreateOrConnectWithoutProdutoInput | item_carrinhoCreateOrConnectWithoutProdutoInput[]
    upsert?: item_carrinhoUpsertWithWhereUniqueWithoutProdutoInput | item_carrinhoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: item_carrinhoCreateManyProdutoInputEnvelope
    set?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    disconnect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    delete?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    connect?: item_carrinhoWhereUniqueInput | item_carrinhoWhereUniqueInput[]
    update?: item_carrinhoUpdateWithWhereUniqueWithoutProdutoInput | item_carrinhoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: item_carrinhoUpdateManyWithWhereWithoutProdutoInput | item_carrinhoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
  }

  export type item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput> | item_pedidoCreateWithoutProdutoInput[] | item_pedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutProdutoInput | item_pedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutProdutoInput | item_pedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: item_pedidoCreateManyProdutoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutProdutoInput | item_pedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutProdutoInput | item_pedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type ofertaUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput> | ofertaCreateWithoutProdutoInput[] | ofertaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ofertaCreateOrConnectWithoutProdutoInput | ofertaCreateOrConnectWithoutProdutoInput[]
    upsert?: ofertaUpsertWithWhereUniqueWithoutProdutoInput | ofertaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ofertaCreateManyProdutoInputEnvelope
    set?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    disconnect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    delete?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    connect?: ofertaWhereUniqueInput | ofertaWhereUniqueInput[]
    update?: ofertaUpdateWithWhereUniqueWithoutProdutoInput | ofertaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ofertaUpdateManyWithWhereWithoutProdutoInput | ofertaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ofertaScalarWhereInput | ofertaScalarWhereInput[]
  }

  export type avaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput> | avaliacaoCreateWithoutUsuarioInput[] | avaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutUsuarioInput | avaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: avaliacaoCreateManyUsuarioInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type carrinhoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput> | carrinhoCreateWithoutUsuarioInput[] | carrinhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput | carrinhoCreateOrConnectWithoutUsuarioInput[]
    createMany?: carrinhoCreateManyUsuarioInputEnvelope
    connect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
  }

  export type comentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type configuracao_usuarioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: configuracao_usuarioCreateOrConnectWithoutUsuarioInput
    connect?: configuracao_usuarioWhereUniqueInput
  }

  export type enderecoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type favoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput> | favoritoCreateWithoutUsuarioInput[] | favoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutUsuarioInput | favoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: favoritoCreateManyUsuarioInputEnvelope
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
  }

  export type pedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput> | avaliacaoCreateWithoutUsuarioInput[] | avaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutUsuarioInput | avaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: avaliacaoCreateManyUsuarioInputEnvelope
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
  }

  export type carrinhoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput> | carrinhoCreateWithoutUsuarioInput[] | carrinhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput | carrinhoCreateOrConnectWithoutUsuarioInput[]
    createMany?: carrinhoCreateManyUsuarioInputEnvelope
    connect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: configuracao_usuarioCreateOrConnectWithoutUsuarioInput
    connect?: configuracao_usuarioWhereUniqueInput
  }

  export type enderecoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type favoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput> | favoritoCreateWithoutUsuarioInput[] | favoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutUsuarioInput | favoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: favoritoCreateManyUsuarioInputEnvelope
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type avaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput> | avaliacaoCreateWithoutUsuarioInput[] | avaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutUsuarioInput | avaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | avaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: avaliacaoCreateManyUsuarioInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | avaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutUsuarioInput | avaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type carrinhoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput> | carrinhoCreateWithoutUsuarioInput[] | carrinhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput | carrinhoCreateOrConnectWithoutUsuarioInput[]
    upsert?: carrinhoUpsertWithWhereUniqueWithoutUsuarioInput | carrinhoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: carrinhoCreateManyUsuarioInputEnvelope
    set?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    disconnect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    delete?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    connect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    update?: carrinhoUpdateWithWhereUniqueWithoutUsuarioInput | carrinhoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: carrinhoUpdateManyWithWhereWithoutUsuarioInput | carrinhoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: carrinhoScalarWhereInput | carrinhoScalarWhereInput[]
  }

  export type comentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutUsuarioInput | comentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutUsuarioInput | comentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutUsuarioInput | comentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type configuracao_usuarioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: configuracao_usuarioCreateOrConnectWithoutUsuarioInput
    upsert?: configuracao_usuarioUpsertWithoutUsuarioInput
    disconnect?: configuracao_usuarioWhereInput | boolean
    delete?: configuracao_usuarioWhereInput | boolean
    connect?: configuracao_usuarioWhereUniqueInput
    update?: XOR<XOR<configuracao_usuarioUpdateToOneWithWhereWithoutUsuarioInput, configuracao_usuarioUpdateWithoutUsuarioInput>, configuracao_usuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type enderecoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutUsuarioInput | enderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutUsuarioInput | enderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutUsuarioInput | enderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type favoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput> | favoritoCreateWithoutUsuarioInput[] | favoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutUsuarioInput | favoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: favoritoUpsertWithWhereUniqueWithoutUsuarioInput | favoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: favoritoCreateManyUsuarioInputEnvelope
    set?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    disconnect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    delete?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    update?: favoritoUpdateWithWhereUniqueWithoutUsuarioInput | favoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: favoritoUpdateManyWithWhereWithoutUsuarioInput | favoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
  }

  export type pedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput> | avaliacaoCreateWithoutUsuarioInput[] | avaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: avaliacaoCreateOrConnectWithoutUsuarioInput | avaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: avaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | avaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: avaliacaoCreateManyUsuarioInputEnvelope
    set?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    disconnect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    delete?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    connect?: avaliacaoWhereUniqueInput | avaliacaoWhereUniqueInput[]
    update?: avaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | avaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: avaliacaoUpdateManyWithWhereWithoutUsuarioInput | avaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
  }

  export type carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput> | carrinhoCreateWithoutUsuarioInput[] | carrinhoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput | carrinhoCreateOrConnectWithoutUsuarioInput[]
    upsert?: carrinhoUpsertWithWhereUniqueWithoutUsuarioInput | carrinhoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: carrinhoCreateManyUsuarioInputEnvelope
    set?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    disconnect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    delete?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    connect?: carrinhoWhereUniqueInput | carrinhoWhereUniqueInput[]
    update?: carrinhoUpdateWithWhereUniqueWithoutUsuarioInput | carrinhoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: carrinhoUpdateManyWithWhereWithoutUsuarioInput | carrinhoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: carrinhoScalarWhereInput | carrinhoScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutUsuarioInput | comentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutUsuarioInput | comentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutUsuarioInput | comentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: configuracao_usuarioCreateOrConnectWithoutUsuarioInput
    upsert?: configuracao_usuarioUpsertWithoutUsuarioInput
    disconnect?: configuracao_usuarioWhereInput | boolean
    delete?: configuracao_usuarioWhereInput | boolean
    connect?: configuracao_usuarioWhereUniqueInput
    update?: XOR<XOR<configuracao_usuarioUpdateToOneWithWhereWithoutUsuarioInput, configuracao_usuarioUpdateWithoutUsuarioInput>, configuracao_usuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type enderecoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutUsuarioInput | enderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutUsuarioInput | enderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutUsuarioInput | enderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type favoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput> | favoritoCreateWithoutUsuarioInput[] | favoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: favoritoCreateOrConnectWithoutUsuarioInput | favoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: favoritoUpsertWithWhereUniqueWithoutUsuarioInput | favoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: favoritoCreateManyUsuarioInputEnvelope
    set?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    disconnect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    delete?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    connect?: favoritoWhereUniqueInput | favoritoWhereUniqueInput[]
    update?: favoritoUpdateWithWhereUniqueWithoutUsuarioInput | favoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: favoritoUpdateManyWithWhereWithoutUsuarioInput | favoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usuarioCreateWithoutAvaliacaoInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutAvaliacaoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAvaliacaoInput, usuarioUncheckedCreateWithoutAvaliacaoInput>
  }

  export type produtoCreateWithoutAvaliacaoInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutAvaliacaoInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutAvaliacaoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutAvaliacaoInput, produtoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type usuarioUpsertWithoutAvaliacaoInput = {
    update: XOR<usuarioUpdateWithoutAvaliacaoInput, usuarioUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<usuarioCreateWithoutAvaliacaoInput, usuarioUncheckedCreateWithoutAvaliacaoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAvaliacaoInput, usuarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type usuarioUpdateWithoutAvaliacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type produtoUpsertWithoutAvaliacaoInput = {
    update: XOR<produtoUpdateWithoutAvaliacaoInput, produtoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<produtoCreateWithoutAvaliacaoInput, produtoUncheckedCreateWithoutAvaliacaoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutAvaliacaoInput, produtoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type produtoUpdateWithoutAvaliacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutAvaliacaoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type usuarioCreateWithoutCarrinhoInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCarrinhoInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCarrinhoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
  }

  export type item_carrinhoCreateWithoutCarrinhoInput = {
    quantidade: number
    produto: produtoCreateNestedOneWithoutItem_carrinhoInput
  }

  export type item_carrinhoUncheckedCreateWithoutCarrinhoInput = {
    id_produto: number
    quantidade: number
  }

  export type item_carrinhoCreateOrConnectWithoutCarrinhoInput = {
    where: item_carrinhoWhereUniqueInput
    create: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput>
  }

  export type item_carrinhoCreateManyCarrinhoInputEnvelope = {
    data: item_carrinhoCreateManyCarrinhoInput | item_carrinhoCreateManyCarrinhoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutCarrinhoInput = {
    update: XOR<usuarioUpdateWithoutCarrinhoInput, usuarioUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutCarrinhoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutCarrinhoInput, usuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type usuarioUpdateWithoutCarrinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type item_carrinhoUpsertWithWhereUniqueWithoutCarrinhoInput = {
    where: item_carrinhoWhereUniqueInput
    update: XOR<item_carrinhoUpdateWithoutCarrinhoInput, item_carrinhoUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<item_carrinhoCreateWithoutCarrinhoInput, item_carrinhoUncheckedCreateWithoutCarrinhoInput>
  }

  export type item_carrinhoUpdateWithWhereUniqueWithoutCarrinhoInput = {
    where: item_carrinhoWhereUniqueInput
    data: XOR<item_carrinhoUpdateWithoutCarrinhoInput, item_carrinhoUncheckedUpdateWithoutCarrinhoInput>
  }

  export type item_carrinhoUpdateManyWithWhereWithoutCarrinhoInput = {
    where: item_carrinhoScalarWhereInput
    data: XOR<item_carrinhoUpdateManyMutationInput, item_carrinhoUncheckedUpdateManyWithoutCarrinhoInput>
  }

  export type item_carrinhoScalarWhereInput = {
    AND?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
    OR?: item_carrinhoScalarWhereInput[]
    NOT?: item_carrinhoScalarWhereInput | item_carrinhoScalarWhereInput[]
    id_carrinho?: IntFilter<"item_carrinho"> | number
    id_produto?: IntFilter<"item_carrinho"> | number
    quantidade?: IntFilter<"item_carrinho"> | number
  }

  export type produtoCreateWithoutCategoriaInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutCategoriaInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoCreateManyCategoriaInputEnvelope = {
    data: produtoCreateManyCategoriaInput | produtoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type produtoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<produtoCreateWithoutCategoriaInput, produtoUncheckedCreateWithoutCategoriaInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutCategoriaInput, produtoUncheckedUpdateWithoutCategoriaInput>
  }

  export type produtoUpdateManyWithWhereWithoutCategoriaInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type produtoScalarWhereInput = {
    AND?: produtoScalarWhereInput | produtoScalarWhereInput[]
    OR?: produtoScalarWhereInput[]
    NOT?: produtoScalarWhereInput | produtoScalarWhereInput[]
    produto_id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    marca?: StringNullableFilter<"produto"> | string | null
    preco?: DecimalFilter<"produto"> | Decimal | DecimalJsLike | number | string
    imagem?: StringNullableFilter<"produto"> | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    especificacoes?: StringNullableFilter<"produto"> | string | null
    categoria_id?: IntFilter<"produto"> | number
    fornecedor_id?: IntFilter<"produto"> | number
  }

  export type usuarioCreateWithoutComentarioInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutComentarioInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutComentarioInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutComentarioInput, usuarioUncheckedCreateWithoutComentarioInput>
  }

  export type produtoCreateWithoutComentarioInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutComentarioInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutComentarioInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutComentarioInput, produtoUncheckedCreateWithoutComentarioInput>
  }

  export type usuarioUpsertWithoutComentarioInput = {
    update: XOR<usuarioUpdateWithoutComentarioInput, usuarioUncheckedUpdateWithoutComentarioInput>
    create: XOR<usuarioCreateWithoutComentarioInput, usuarioUncheckedCreateWithoutComentarioInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutComentarioInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutComentarioInput, usuarioUncheckedUpdateWithoutComentarioInput>
  }

  export type usuarioUpdateWithoutComentarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutComentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type produtoUpsertWithoutComentarioInput = {
    update: XOR<produtoUpdateWithoutComentarioInput, produtoUncheckedUpdateWithoutComentarioInput>
    create: XOR<produtoCreateWithoutComentarioInput, produtoUncheckedCreateWithoutComentarioInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutComentarioInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutComentarioInput, produtoUncheckedUpdateWithoutComentarioInput>
  }

  export type produtoUpdateWithoutComentarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutComentarioInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type usuarioCreateWithoutConfiguracao_usuarioInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutConfiguracao_usuarioInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutConfiguracao_usuarioInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutConfiguracao_usuarioInput, usuarioUncheckedCreateWithoutConfiguracao_usuarioInput>
  }

  export type usuarioUpsertWithoutConfiguracao_usuarioInput = {
    update: XOR<usuarioUpdateWithoutConfiguracao_usuarioInput, usuarioUncheckedUpdateWithoutConfiguracao_usuarioInput>
    create: XOR<usuarioCreateWithoutConfiguracao_usuarioInput, usuarioUncheckedCreateWithoutConfiguracao_usuarioInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutConfiguracao_usuarioInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutConfiguracao_usuarioInput, usuarioUncheckedUpdateWithoutConfiguracao_usuarioInput>
  }

  export type usuarioUpdateWithoutConfiguracao_usuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutConfiguracao_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateWithoutEnderecoInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutEnderecoInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutEnderecoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutEnderecoInput, usuarioUncheckedCreateWithoutEnderecoInput>
  }

  export type pedidoCreateWithoutEnderecoInput = {
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutEnderecoInput = {
    id?: number
    usuario_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type pedidoCreateManyEnderecoInputEnvelope = {
    data: pedidoCreateManyEnderecoInput | pedidoCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutEnderecoInput = {
    update: XOR<usuarioUpdateWithoutEnderecoInput, usuarioUncheckedUpdateWithoutEnderecoInput>
    create: XOR<usuarioCreateWithoutEnderecoInput, usuarioUncheckedCreateWithoutEnderecoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutEnderecoInput, usuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type usuarioUpdateWithoutEnderecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type pedidoUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutEnderecoInput, pedidoUncheckedUpdateWithoutEnderecoInput>
    create: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutEnderecoInput, pedidoUncheckedUpdateWithoutEnderecoInput>
  }

  export type pedidoUpdateManyWithWhereWithoutEnderecoInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: IntFilter<"pedido"> | number
    usuario_id?: IntFilter<"pedido"> | number
    endereco_id?: IntFilter<"pedido"> | number
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    forma_pagamento?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"pedido"> | string | null
  }

  export type usuarioCreateWithoutFavoritoInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutFavoritoInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutFavoritoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutFavoritoInput, usuarioUncheckedCreateWithoutFavoritoInput>
  }

  export type produtoCreateWithoutFavoritoInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutFavoritoInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutFavoritoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutFavoritoInput, produtoUncheckedCreateWithoutFavoritoInput>
  }

  export type usuarioUpsertWithoutFavoritoInput = {
    update: XOR<usuarioUpdateWithoutFavoritoInput, usuarioUncheckedUpdateWithoutFavoritoInput>
    create: XOR<usuarioCreateWithoutFavoritoInput, usuarioUncheckedCreateWithoutFavoritoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutFavoritoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutFavoritoInput, usuarioUncheckedUpdateWithoutFavoritoInput>
  }

  export type usuarioUpdateWithoutFavoritoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutFavoritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type produtoUpsertWithoutFavoritoInput = {
    update: XOR<produtoUpdateWithoutFavoritoInput, produtoUncheckedUpdateWithoutFavoritoInput>
    create: XOR<produtoCreateWithoutFavoritoInput, produtoUncheckedCreateWithoutFavoritoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutFavoritoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutFavoritoInput, produtoUncheckedUpdateWithoutFavoritoInput>
  }

  export type produtoUpdateWithoutFavoritoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutFavoritoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateWithoutFornecedorInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutFornecedorInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type produtoCreateManyFornecedorInputEnvelope = {
    data: produtoCreateManyFornecedorInput | produtoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type produtoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutFornecedorInput, produtoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutFornecedorInput, produtoUncheckedUpdateWithoutFornecedorInput>
  }

  export type produtoUpdateManyWithWhereWithoutFornecedorInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type carrinhoCreateWithoutItem_carrinhoInput = {
    data_criacao?: Date | string | null
    status?: string | null
    usuario: usuarioCreateNestedOneWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateWithoutItem_carrinhoInput = {
    id_carrinho?: number
    id_usuario: number
    data_criacao?: Date | string | null
    status?: string | null
  }

  export type carrinhoCreateOrConnectWithoutItem_carrinhoInput = {
    where: carrinhoWhereUniqueInput
    create: XOR<carrinhoCreateWithoutItem_carrinhoInput, carrinhoUncheckedCreateWithoutItem_carrinhoInput>
  }

  export type produtoCreateWithoutItem_carrinhoInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutItem_carrinhoInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutItem_carrinhoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutItem_carrinhoInput, produtoUncheckedCreateWithoutItem_carrinhoInput>
  }

  export type carrinhoUpsertWithoutItem_carrinhoInput = {
    update: XOR<carrinhoUpdateWithoutItem_carrinhoInput, carrinhoUncheckedUpdateWithoutItem_carrinhoInput>
    create: XOR<carrinhoCreateWithoutItem_carrinhoInput, carrinhoUncheckedCreateWithoutItem_carrinhoInput>
    where?: carrinhoWhereInput
  }

  export type carrinhoUpdateToOneWithWhereWithoutItem_carrinhoInput = {
    where?: carrinhoWhereInput
    data: XOR<carrinhoUpdateWithoutItem_carrinhoInput, carrinhoUncheckedUpdateWithoutItem_carrinhoInput>
  }

  export type carrinhoUpdateWithoutItem_carrinhoInput = {
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateWithoutItem_carrinhoInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoUpsertWithoutItem_carrinhoInput = {
    update: XOR<produtoUpdateWithoutItem_carrinhoInput, produtoUncheckedUpdateWithoutItem_carrinhoInput>
    create: XOR<produtoCreateWithoutItem_carrinhoInput, produtoUncheckedCreateWithoutItem_carrinhoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutItem_carrinhoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutItem_carrinhoInput, produtoUncheckedUpdateWithoutItem_carrinhoInput>
  }

  export type produtoUpdateWithoutItem_carrinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutItem_carrinhoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type pedidoCreateWithoutItem_pedidoInput = {
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    usuario: usuarioCreateNestedOneWithoutPedidoInput
    endereco: enderecoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutItem_pedidoInput = {
    id?: number
    usuario_id: number
    endereco_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
  }

  export type pedidoCreateOrConnectWithoutItem_pedidoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutItem_pedidoInput, pedidoUncheckedCreateWithoutItem_pedidoInput>
  }

  export type produtoCreateWithoutItem_pedidoInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    oferta?: ofertaCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutItem_pedidoInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    oferta?: ofertaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutItem_pedidoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutItem_pedidoInput, produtoUncheckedCreateWithoutItem_pedidoInput>
  }

  export type pedidoUpsertWithoutItem_pedidoInput = {
    update: XOR<pedidoUpdateWithoutItem_pedidoInput, pedidoUncheckedUpdateWithoutItem_pedidoInput>
    create: XOR<pedidoCreateWithoutItem_pedidoInput, pedidoUncheckedCreateWithoutItem_pedidoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutItem_pedidoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutItem_pedidoInput, pedidoUncheckedUpdateWithoutItem_pedidoInput>
  }

  export type pedidoUpdateWithoutItem_pedidoInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
    endereco?: enderecoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutItem_pedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    endereco_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoUpsertWithoutItem_pedidoInput = {
    update: XOR<produtoUpdateWithoutItem_pedidoInput, produtoUncheckedUpdateWithoutItem_pedidoInput>
    create: XOR<produtoCreateWithoutItem_pedidoInput, produtoUncheckedCreateWithoutItem_pedidoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutItem_pedidoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutItem_pedidoInput, produtoUncheckedUpdateWithoutItem_pedidoInput>
  }

  export type produtoUpdateWithoutItem_pedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutItem_pedidoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateWithoutOfertaInput = {
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutProdutoInput
    comentario?: comentarioCreateNestedManyWithoutProdutoInput
    favorito?: favoritoCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoCreateNestedManyWithoutProdutoInput
    categoria: categoriaCreateNestedOneWithoutProdutoInput
    fornecedor: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutOfertaInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
    fornecedor_id: number
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutProdutoInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutProdutoInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutProdutoInput
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutProdutoInput
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutOfertaInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutOfertaInput, produtoUncheckedCreateWithoutOfertaInput>
  }

  export type produtoUpsertWithoutOfertaInput = {
    update: XOR<produtoUpdateWithoutOfertaInput, produtoUncheckedUpdateWithoutOfertaInput>
    create: XOR<produtoCreateWithoutOfertaInput, produtoUncheckedCreateWithoutOfertaInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutOfertaInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutOfertaInput, produtoUncheckedUpdateWithoutOfertaInput>
  }

  export type produtoUpdateWithoutOfertaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutOfertaInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type item_pedidoCreateWithoutPedidoInput = {
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    produto: produtoCreateNestedOneWithoutItem_pedidoInput
  }

  export type item_pedidoUncheckedCreateWithoutPedidoInput = {
    produto_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoCreateOrConnectWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    create: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type item_pedidoCreateManyPedidoInputEnvelope = {
    data: item_pedidoCreateManyPedidoInput | item_pedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutPedidoInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    telefone?: string | null
    data_nascimento?: Date | string | null
    data_cadastro?: Date | string | null
    avaliacao?: avaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedManyWithoutUsuarioInput
    comentario?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
    configuracao_usuario?: configuracao_usuarioUncheckedCreateNestedOneWithoutUsuarioInput
    endereco?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    favorito?: favoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPedidoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
  }

  export type enderecoCreateWithoutPedidoInput = {
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    usuario: usuarioCreateNestedOneWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateWithoutPedidoInput = {
    endereco_id?: number
    usuario_id: number
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type enderecoCreateOrConnectWithoutPedidoInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutPedidoInput, enderecoUncheckedCreateWithoutPedidoInput>
  }

  export type item_pedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    update: XOR<item_pedidoUpdateWithoutPedidoInput, item_pedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type item_pedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    data: XOR<item_pedidoUpdateWithoutPedidoInput, item_pedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type item_pedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: item_pedidoScalarWhereInput
    data: XOR<item_pedidoUpdateManyMutationInput, item_pedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type item_pedidoScalarWhereInput = {
    AND?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
    OR?: item_pedidoScalarWhereInput[]
    NOT?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
    pedido_id?: IntFilter<"item_pedido"> | number
    produto_id?: IntFilter<"item_pedido"> | number
    quantidade?: IntFilter<"item_pedido"> | number
    preco_unitario?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalNullableFilter<"item_pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type usuarioUpsertWithoutPedidoInput = {
    update: XOR<usuarioUpdateWithoutPedidoInput, usuarioUncheckedUpdateWithoutPedidoInput>
    create: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPedidoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPedidoInput, usuarioUncheckedUpdateWithoutPedidoInput>
  }

  export type usuarioUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateManyWithoutUsuarioNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    configuracao_usuario?: configuracao_usuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    endereco?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type enderecoUpsertWithoutPedidoInput = {
    update: XOR<enderecoUpdateWithoutPedidoInput, enderecoUncheckedUpdateWithoutPedidoInput>
    create: XOR<enderecoCreateWithoutPedidoInput, enderecoUncheckedCreateWithoutPedidoInput>
    where?: enderecoWhereInput
  }

  export type enderecoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: enderecoWhereInput
    data: XOR<enderecoUpdateWithoutPedidoInput, enderecoUncheckedUpdateWithoutPedidoInput>
  }

  export type enderecoUpdateWithoutPedidoInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateWithoutPedidoInput = {
    endereco_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type avaliacaoCreateWithoutProdutoInput = {
    data_avaliacao?: Date | string | null
    nota: number
    usuario: usuarioCreateNestedOneWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateWithoutProdutoInput = {
    usuario_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type avaliacaoCreateOrConnectWithoutProdutoInput = {
    where: avaliacaoWhereUniqueInput
    create: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput>
  }

  export type avaliacaoCreateManyProdutoInputEnvelope = {
    data: avaliacaoCreateManyProdutoInput | avaliacaoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type comentarioCreateWithoutProdutoInput = {
    data_comentario?: Date | string | null
    texto: string
    usuario: usuarioCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateWithoutProdutoInput = {
    id?: number
    usuario_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type comentarioCreateOrConnectWithoutProdutoInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput>
  }

  export type comentarioCreateManyProdutoInputEnvelope = {
    data: comentarioCreateManyProdutoInput | comentarioCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type favoritoCreateWithoutProdutoInput = {
    data_favorito?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutFavoritoInput
  }

  export type favoritoUncheckedCreateWithoutProdutoInput = {
    usuario_id: number
    data_favorito?: Date | string | null
  }

  export type favoritoCreateOrConnectWithoutProdutoInput = {
    where: favoritoWhereUniqueInput
    create: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput>
  }

  export type favoritoCreateManyProdutoInputEnvelope = {
    data: favoritoCreateManyProdutoInput | favoritoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type item_carrinhoCreateWithoutProdutoInput = {
    quantidade: number
    carrinho: carrinhoCreateNestedOneWithoutItem_carrinhoInput
  }

  export type item_carrinhoUncheckedCreateWithoutProdutoInput = {
    id_carrinho: number
    quantidade: number
  }

  export type item_carrinhoCreateOrConnectWithoutProdutoInput = {
    where: item_carrinhoWhereUniqueInput
    create: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput>
  }

  export type item_carrinhoCreateManyProdutoInputEnvelope = {
    data: item_carrinhoCreateManyProdutoInput | item_carrinhoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type item_pedidoCreateWithoutProdutoInput = {
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    pedido: pedidoCreateNestedOneWithoutItem_pedidoInput
  }

  export type item_pedidoUncheckedCreateWithoutProdutoInput = {
    pedido_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoCreateOrConnectWithoutProdutoInput = {
    where: item_pedidoWhereUniqueInput
    create: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type item_pedidoCreateManyProdutoInputEnvelope = {
    data: item_pedidoCreateManyProdutoInput | item_pedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ofertaCreateWithoutProdutoInput = {
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
  }

  export type ofertaUncheckedCreateWithoutProdutoInput = {
    id?: number
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
  }

  export type ofertaCreateOrConnectWithoutProdutoInput = {
    where: ofertaWhereUniqueInput
    create: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput>
  }

  export type ofertaCreateManyProdutoInputEnvelope = {
    data: ofertaCreateManyProdutoInput | ofertaCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type categoriaCreateWithoutProdutoInput = {
    nome: string
    descricao?: string | null
  }

  export type categoriaUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type categoriaCreateOrConnectWithoutProdutoInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
  }

  export type fornecedorCreateWithoutProdutoInput = {
    razao_social: string
    cnpj: string
    email?: string | null
    telefone?: string | null
    data_cadastro?: Date | string | null
  }

  export type fornecedorUncheckedCreateWithoutProdutoInput = {
    fornecedor_id?: number
    razao_social: string
    cnpj: string
    email?: string | null
    telefone?: string | null
    data_cadastro?: Date | string | null
  }

  export type fornecedorCreateOrConnectWithoutProdutoInput = {
    where: fornecedorWhereUniqueInput
    create: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
  }

  export type avaliacaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: avaliacaoWhereUniqueInput
    update: XOR<avaliacaoUpdateWithoutProdutoInput, avaliacaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<avaliacaoCreateWithoutProdutoInput, avaliacaoUncheckedCreateWithoutProdutoInput>
  }

  export type avaliacaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: avaliacaoWhereUniqueInput
    data: XOR<avaliacaoUpdateWithoutProdutoInput, avaliacaoUncheckedUpdateWithoutProdutoInput>
  }

  export type avaliacaoUpdateManyWithWhereWithoutProdutoInput = {
    where: avaliacaoScalarWhereInput
    data: XOR<avaliacaoUpdateManyMutationInput, avaliacaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type avaliacaoScalarWhereInput = {
    AND?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
    OR?: avaliacaoScalarWhereInput[]
    NOT?: avaliacaoScalarWhereInput | avaliacaoScalarWhereInput[]
    usuario_id?: IntFilter<"avaliacao"> | number
    produto_id?: IntFilter<"avaliacao"> | number
    data_avaliacao?: DateTimeNullableFilter<"avaliacao"> | Date | string | null
    nota?: IntFilter<"avaliacao"> | number
  }

  export type comentarioUpsertWithWhereUniqueWithoutProdutoInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutProdutoInput, comentarioUncheckedUpdateWithoutProdutoInput>
    create: XOR<comentarioCreateWithoutProdutoInput, comentarioUncheckedCreateWithoutProdutoInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutProdutoInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutProdutoInput, comentarioUncheckedUpdateWithoutProdutoInput>
  }

  export type comentarioUpdateManyWithWhereWithoutProdutoInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutProdutoInput>
  }

  export type comentarioScalarWhereInput = {
    AND?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    OR?: comentarioScalarWhereInput[]
    NOT?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    id?: IntFilter<"comentario"> | number
    usuario_id?: IntFilter<"comentario"> | number
    produto_id?: IntFilter<"comentario"> | number
    data_comentario?: DateTimeNullableFilter<"comentario"> | Date | string | null
    texto?: StringFilter<"comentario"> | string
  }

  export type favoritoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: favoritoWhereUniqueInput
    update: XOR<favoritoUpdateWithoutProdutoInput, favoritoUncheckedUpdateWithoutProdutoInput>
    create: XOR<favoritoCreateWithoutProdutoInput, favoritoUncheckedCreateWithoutProdutoInput>
  }

  export type favoritoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: favoritoWhereUniqueInput
    data: XOR<favoritoUpdateWithoutProdutoInput, favoritoUncheckedUpdateWithoutProdutoInput>
  }

  export type favoritoUpdateManyWithWhereWithoutProdutoInput = {
    where: favoritoScalarWhereInput
    data: XOR<favoritoUpdateManyMutationInput, favoritoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type favoritoScalarWhereInput = {
    AND?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
    OR?: favoritoScalarWhereInput[]
    NOT?: favoritoScalarWhereInput | favoritoScalarWhereInput[]
    usuario_id?: IntFilter<"favorito"> | number
    produto_id?: IntFilter<"favorito"> | number
    data_favorito?: DateTimeNullableFilter<"favorito"> | Date | string | null
  }

  export type item_carrinhoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: item_carrinhoWhereUniqueInput
    update: XOR<item_carrinhoUpdateWithoutProdutoInput, item_carrinhoUncheckedUpdateWithoutProdutoInput>
    create: XOR<item_carrinhoCreateWithoutProdutoInput, item_carrinhoUncheckedCreateWithoutProdutoInput>
  }

  export type item_carrinhoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: item_carrinhoWhereUniqueInput
    data: XOR<item_carrinhoUpdateWithoutProdutoInput, item_carrinhoUncheckedUpdateWithoutProdutoInput>
  }

  export type item_carrinhoUpdateManyWithWhereWithoutProdutoInput = {
    where: item_carrinhoScalarWhereInput
    data: XOR<item_carrinhoUpdateManyMutationInput, item_carrinhoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type item_pedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: item_pedidoWhereUniqueInput
    update: XOR<item_pedidoUpdateWithoutProdutoInput, item_pedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<item_pedidoCreateWithoutProdutoInput, item_pedidoUncheckedCreateWithoutProdutoInput>
  }

  export type item_pedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: item_pedidoWhereUniqueInput
    data: XOR<item_pedidoUpdateWithoutProdutoInput, item_pedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type item_pedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: item_pedidoScalarWhereInput
    data: XOR<item_pedidoUpdateManyMutationInput, item_pedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ofertaUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ofertaWhereUniqueInput
    update: XOR<ofertaUpdateWithoutProdutoInput, ofertaUncheckedUpdateWithoutProdutoInput>
    create: XOR<ofertaCreateWithoutProdutoInput, ofertaUncheckedCreateWithoutProdutoInput>
  }

  export type ofertaUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ofertaWhereUniqueInput
    data: XOR<ofertaUpdateWithoutProdutoInput, ofertaUncheckedUpdateWithoutProdutoInput>
  }

  export type ofertaUpdateManyWithWhereWithoutProdutoInput = {
    where: ofertaScalarWhereInput
    data: XOR<ofertaUpdateManyMutationInput, ofertaUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ofertaScalarWhereInput = {
    AND?: ofertaScalarWhereInput | ofertaScalarWhereInput[]
    OR?: ofertaScalarWhereInput[]
    NOT?: ofertaScalarWhereInput | ofertaScalarWhereInput[]
    id?: IntFilter<"oferta"> | number
    descricao?: StringNullableFilter<"oferta"> | string | null
    desconto?: DecimalNullableFilter<"oferta"> | Decimal | DecimalJsLike | number | string | null
    produto_id?: IntFilter<"oferta"> | number
    data_inicio?: DateTimeNullableFilter<"oferta"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"oferta"> | Date | string | null
  }

  export type categoriaUpsertWithoutProdutoInput = {
    update: XOR<categoriaUpdateWithoutProdutoInput, categoriaUncheckedUpdateWithoutProdutoInput>
    create: XOR<categoriaCreateWithoutProdutoInput, categoriaUncheckedCreateWithoutProdutoInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutProdutoInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutProdutoInput, categoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type categoriaUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fornecedorUpsertWithoutProdutoInput = {
    update: XOR<fornecedorUpdateWithoutProdutoInput, fornecedorUncheckedUpdateWithoutProdutoInput>
    create: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    where?: fornecedorWhereInput
  }

  export type fornecedorUpdateToOneWithWhereWithoutProdutoInput = {
    where?: fornecedorWhereInput
    data: XOR<fornecedorUpdateWithoutProdutoInput, fornecedorUncheckedUpdateWithoutProdutoInput>
  }

  export type fornecedorUpdateWithoutProdutoInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fornecedorUncheckedUpdateWithoutProdutoInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type avaliacaoCreateWithoutUsuarioInput = {
    data_avaliacao?: Date | string | null
    nota: number
    produto: produtoCreateNestedOneWithoutAvaliacaoInput
  }

  export type avaliacaoUncheckedCreateWithoutUsuarioInput = {
    produto_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type avaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: avaliacaoWhereUniqueInput
    create: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type avaliacaoCreateManyUsuarioInputEnvelope = {
    data: avaliacaoCreateManyUsuarioInput | avaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type carrinhoCreateWithoutUsuarioInput = {
    data_criacao?: Date | string | null
    status?: string | null
    item_carrinho?: item_carrinhoCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateWithoutUsuarioInput = {
    id_carrinho?: number
    data_criacao?: Date | string | null
    status?: string | null
    item_carrinho?: item_carrinhoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoCreateOrConnectWithoutUsuarioInput = {
    where: carrinhoWhereUniqueInput
    create: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
  }

  export type carrinhoCreateManyUsuarioInputEnvelope = {
    data: carrinhoCreateManyUsuarioInput | carrinhoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type comentarioCreateWithoutUsuarioInput = {
    data_comentario?: Date | string | null
    texto: string
    produto: produtoCreateNestedOneWithoutComentarioInput
  }

  export type comentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    produto_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type comentarioCreateOrConnectWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type comentarioCreateManyUsuarioInputEnvelope = {
    data: comentarioCreateManyUsuarioInput | comentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type configuracao_usuarioCreateWithoutUsuarioInput = {
    tamanho_fonte?: string | null
    alto_contraste?: boolean | null
    audio?: boolean | null
    libras?: boolean | null
  }

  export type configuracao_usuarioUncheckedCreateWithoutUsuarioInput = {
    tamanho_fonte?: string | null
    alto_contraste?: boolean | null
    audio?: boolean | null
    libras?: boolean | null
  }

  export type configuracao_usuarioCreateOrConnectWithoutUsuarioInput = {
    where: configuracao_usuarioWhereUniqueInput
    create: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoCreateWithoutUsuarioInput = {
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    pedido?: pedidoCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateWithoutUsuarioInput = {
    endereco_id?: number
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoCreateOrConnectWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoCreateManyUsuarioInputEnvelope = {
    data: enderecoCreateManyUsuarioInput | enderecoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type favoritoCreateWithoutUsuarioInput = {
    data_favorito?: Date | string | null
    produto: produtoCreateNestedOneWithoutFavoritoInput
  }

  export type favoritoUncheckedCreateWithoutUsuarioInput = {
    produto_id: number
    data_favorito?: Date | string | null
  }

  export type favoritoCreateOrConnectWithoutUsuarioInput = {
    where: favoritoWhereUniqueInput
    create: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type favoritoCreateManyUsuarioInputEnvelope = {
    data: favoritoCreateManyUsuarioInput | favoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type pedidoCreateWithoutUsuarioInput = {
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoCreateNestedManyWithoutPedidoInput
    endereco: enderecoCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    endereco_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    item_pedido?: item_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoCreateManyUsuarioInputEnvelope = {
    data: pedidoCreateManyUsuarioInput | pedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type avaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: avaliacaoWhereUniqueInput
    update: XOR<avaliacaoUpdateWithoutUsuarioInput, avaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<avaliacaoCreateWithoutUsuarioInput, avaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type avaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: avaliacaoWhereUniqueInput
    data: XOR<avaliacaoUpdateWithoutUsuarioInput, avaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type avaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: avaliacaoScalarWhereInput
    data: XOR<avaliacaoUpdateManyMutationInput, avaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type carrinhoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: carrinhoWhereUniqueInput
    update: XOR<carrinhoUpdateWithoutUsuarioInput, carrinhoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
  }

  export type carrinhoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: carrinhoWhereUniqueInput
    data: XOR<carrinhoUpdateWithoutUsuarioInput, carrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type carrinhoUpdateManyWithWhereWithoutUsuarioInput = {
    where: carrinhoScalarWhereInput
    data: XOR<carrinhoUpdateManyMutationInput, carrinhoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type carrinhoScalarWhereInput = {
    AND?: carrinhoScalarWhereInput | carrinhoScalarWhereInput[]
    OR?: carrinhoScalarWhereInput[]
    NOT?: carrinhoScalarWhereInput | carrinhoScalarWhereInput[]
    id_carrinho?: IntFilter<"carrinho"> | number
    id_usuario?: IntFilter<"carrinho"> | number
    data_criacao?: DateTimeNullableFilter<"carrinho"> | Date | string | null
    status?: StringNullableFilter<"carrinho"> | string | null
  }

  export type comentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutUsuarioInput, comentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutUsuarioInput, comentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type comentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type configuracao_usuarioUpsertWithoutUsuarioInput = {
    update: XOR<configuracao_usuarioUpdateWithoutUsuarioInput, configuracao_usuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<configuracao_usuarioCreateWithoutUsuarioInput, configuracao_usuarioUncheckedCreateWithoutUsuarioInput>
    where?: configuracao_usuarioWhereInput
  }

  export type configuracao_usuarioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: configuracao_usuarioWhereInput
    data: XOR<configuracao_usuarioUpdateWithoutUsuarioInput, configuracao_usuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type configuracao_usuarioUpdateWithoutUsuarioInput = {
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type configuracao_usuarioUncheckedUpdateWithoutUsuarioInput = {
    tamanho_fonte?: NullableStringFieldUpdateOperationsInput | string | null
    alto_contraste?: NullableBoolFieldUpdateOperationsInput | boolean | null
    audio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    libras?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type enderecoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    update: XOR<enderecoUpdateWithoutUsuarioInput, enderecoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    data: XOR<enderecoUpdateWithoutUsuarioInput, enderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type enderecoUpdateManyWithWhereWithoutUsuarioInput = {
    where: enderecoScalarWhereInput
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type enderecoScalarWhereInput = {
    AND?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    OR?: enderecoScalarWhereInput[]
    NOT?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    endereco_id?: IntFilter<"endereco"> | number
    usuario_id?: IntFilter<"endereco"> | number
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringNullableFilter<"endereco"> | string | null
    complemento?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringNullableFilter<"endereco"> | string | null
    cidade?: StringNullableFilter<"endereco"> | string | null
    estado?: StringNullableFilter<"endereco"> | string | null
  }

  export type favoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: favoritoWhereUniqueInput
    update: XOR<favoritoUpdateWithoutUsuarioInput, favoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<favoritoCreateWithoutUsuarioInput, favoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type favoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: favoritoWhereUniqueInput
    data: XOR<favoritoUpdateWithoutUsuarioInput, favoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type favoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: favoritoScalarWhereInput
    data: XOR<favoritoUpdateManyMutationInput, favoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type pedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type pedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type item_carrinhoCreateManyCarrinhoInput = {
    id_produto: number
    quantidade: number
  }

  export type item_carrinhoUpdateWithoutCarrinhoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    produto?: produtoUpdateOneRequiredWithoutItem_carrinhoNestedInput
  }

  export type item_carrinhoUncheckedUpdateWithoutCarrinhoInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_carrinhoUncheckedUpdateManyWithoutCarrinhoInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type produtoCreateManyCategoriaInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    fornecedor_id: number
  }

  export type produtoUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutCategoriaInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutCategoriaInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateManyEnderecoInput = {
    id?: number
    usuario_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
  }

  export type pedidoUpdateWithoutEnderecoInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoCreateManyFornecedorInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    marca?: string | null
    preco: Decimal | DecimalJsLike | number | string
    imagem?: string | null
    estoque?: number | null
    especificacoes?: string | null
    categoria_id: number
  }

  export type produtoUpdateWithoutFornecedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: avaliacaoUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUpdateManyWithoutProdutoNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutFornecedorInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
    avaliacao?: avaliacaoUncheckedUpdateManyWithoutProdutoNestedInput
    comentario?: comentarioUncheckedUpdateManyWithoutProdutoNestedInput
    favorito?: favoritoUncheckedUpdateManyWithoutProdutoNestedInput
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutProdutoNestedInput
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutProdutoNestedInput
    oferta?: ofertaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutFornecedorInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    especificacoes?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoCreateManyPedidoInput = {
    produto_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto?: produtoUpdateOneRequiredWithoutItem_pedidoNestedInput
  }

  export type item_pedidoUncheckedUpdateWithoutPedidoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUncheckedUpdateManyWithoutPedidoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type avaliacaoCreateManyProdutoInput = {
    usuario_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type comentarioCreateManyProdutoInput = {
    id?: number
    usuario_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type favoritoCreateManyProdutoInput = {
    usuario_id: number
    data_favorito?: Date | string | null
  }

  export type item_carrinhoCreateManyProdutoInput = {
    id_carrinho: number
    quantidade: number
  }

  export type item_pedidoCreateManyProdutoInput = {
    pedido_id: number
    quantidade: number
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type ofertaCreateManyProdutoInput = {
    id?: number
    descricao?: string | null
    desconto?: Decimal | DecimalJsLike | number | string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
  }

  export type avaliacaoUpdateWithoutProdutoInput = {
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateWithoutProdutoInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacaoUncheckedUpdateManyWithoutProdutoInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUpdateWithoutProdutoInput = {
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type favoritoUpdateWithoutProdutoInput = {
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type favoritoUncheckedUpdateWithoutProdutoInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type favoritoUncheckedUpdateManyWithoutProdutoInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type item_carrinhoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: carrinhoUpdateOneRequiredWithoutItem_carrinhoNestedInput
  }

  export type item_carrinhoUncheckedUpdateWithoutProdutoInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_carrinhoUncheckedUpdateManyWithoutProdutoInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido?: pedidoUpdateOneRequiredWithoutItem_pedidoNestedInput
  }

  export type item_pedidoUncheckedUpdateWithoutProdutoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type item_pedidoUncheckedUpdateManyWithoutProdutoInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ofertaUpdateWithoutProdutoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ofertaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ofertaUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type avaliacaoCreateManyUsuarioInput = {
    produto_id: number
    data_avaliacao?: Date | string | null
    nota: number
  }

  export type carrinhoCreateManyUsuarioInput = {
    id_carrinho?: number
    data_criacao?: Date | string | null
    status?: string | null
  }

  export type comentarioCreateManyUsuarioInput = {
    id?: number
    produto_id: number
    data_comentario?: Date | string | null
    texto: string
  }

  export type enderecoCreateManyUsuarioInput = {
    endereco_id?: number
    cep: string
    logradouro: string
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type favoritoCreateManyUsuarioInput = {
    produto_id: number
    data_favorito?: Date | string | null
  }

  export type pedidoCreateManyUsuarioInput = {
    id?: number
    endereco_id: number
    data_pedido?: Date | string | null
    forma_pagamento?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
  }

  export type avaliacaoUpdateWithoutUsuarioInput = {
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
    produto?: produtoUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type avaliacaoUncheckedUpdateWithoutUsuarioInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type carrinhoUpdateWithoutUsuarioInput = {
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_carrinho?: item_carrinhoUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateWithoutUsuarioInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_carrinho?: item_carrinhoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateManyWithoutUsuarioInput = {
    id_carrinho?: IntFieldUpdateOperationsInput | number
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comentarioUpdateWithoutUsuarioInput = {
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
    produto?: produtoUpdateOneRequiredWithoutComentarioNestedInput
  }

  export type comentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    data_comentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type enderecoUpdateWithoutUsuarioInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: pedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateWithoutUsuarioInput = {
    endereco_id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: pedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateManyWithoutUsuarioInput = {
    endereco_id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritoUpdateWithoutUsuarioInput = {
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type favoritoUncheckedUpdateWithoutUsuarioInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type favoritoUncheckedUpdateManyWithoutUsuarioInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    data_favorito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidoUpdateWithoutUsuarioInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUpdateManyWithoutPedidoNestedInput
    endereco?: enderecoUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    item_pedido?: item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
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
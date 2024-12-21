/**
 * The `const` declaration ensures the constant object cannot be reassigned.
 * However, its properties can still be modified unless frozen.
 */

export const constant = {
    APPNAME:"DuskPost"
 } as const;
 
 /**
  * The `as const` assertion makes the properties immutable and
  * infers their types as literal strings (e.g., "token", not just `string`).
  */
 
 /**
  * Use `enum` to group related constants, such as HTTP status codes.
  *         example:
  *                 export enum HttpStatus {
  *                         OK = 200,
  *                         BAD_REQUEST = 400,
  *                         UNAUTHORIZED = 401,
  *                         FORBIDDEN = 403,
  *                         NOT_FOUND = 404,
  *                       } 
  */
 
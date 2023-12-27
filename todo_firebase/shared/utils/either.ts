export type Either<T, E> = { success: true; value: T } | { success: false; value: E };

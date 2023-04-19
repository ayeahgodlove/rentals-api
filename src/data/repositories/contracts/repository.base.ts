export interface IRepository<T, U> {
  create(category: T): Promise<U>;
  findById(id: string): Promise<U | null>;
  findByName(name: string): Promise<U | null>;
  getAll(): Promise<U[]>;
  update(category: T): Promise<U>;
  delete(id: string): Promise<void>;
}

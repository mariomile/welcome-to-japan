// Storage layer placeholder.
// Add CRUD methods here when database functionality is needed.

export interface IStorage {}

export class MemStorage implements IStorage {}

export const storage = new MemStorage();

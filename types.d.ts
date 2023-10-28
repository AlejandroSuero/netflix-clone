interface UserDB {
  id: string
  name: string
  image: string | null
  email: string | null
  emailVerified: Date | null
  hashedPassword: string | null
  createdAt: Date
  updatedAt: Date
  favoritesIds: string[]
}
export type User = UserDB | null

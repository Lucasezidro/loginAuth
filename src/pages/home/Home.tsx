type User = {
  name: string;
  email: string;
}

export function Home ({name, email}: User) {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}
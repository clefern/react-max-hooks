import React from "react";
export function DefaultBrowserLoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // both e.target and e.currentTarget are correct
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({
      data,
      email,
      password,
    });
    for (let item in data) {
      console.log(item);

      formData.delete(item);
    }
    console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button>Log in</button>
    </form>
  );
}

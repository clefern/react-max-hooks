import React from "react";

const useFormField = (initialValue: string = "") => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};

export function LoginForm() {
  const emailField = useFormField();
  const passwordField = useFormField();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const login = {
      email: emailField.value,
      password: passwordField.value,
    };
    console.log(login);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...emailField} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...passwordField} />
      </div>
    </form>
  );
}

import React from "react";

function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = React.useState<T>(initialValues);
  const createChangeHandler =
    (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormFields((prev: T) => ({ ...prev, [key]: value }));
    };
  return { formFields, createChangeHandler };
}

export function MultiFieldsInJustOnePlaceForm() {
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formFields.email}
          onChange={createChangeHandler("email")}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formFields.password}
          onChange={createChangeHandler("password")}
        />
      </div>
    </form>
  );
}

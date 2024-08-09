type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const createOrUpdateUser = (initialValues: Partial<User>): User => {
  const defaultUser = {
    name: "defaultName",
    surname: "defaultSurname",
    email: "defaultEmail",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
};

const updateUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log("updateUser", updateUser);

export const LogInForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Enter your email" />
      <input type="password" name="passwprd" placeholder="Confirm a password" />
      <button type="submit">Log In Now</button>;
    </form>
  );
};

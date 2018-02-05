let hello = name => {
  let name = String.capitalize(name);
  {j|Hello $name, I'm from an external module!"|j}
};
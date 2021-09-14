import { useState, useEffect } from "react";

/**
 * Nuestro custom hook donde encapsula
 * la lógica del componente para intercambiar
 * entre el tema dark y el default.
 */
const useTheme = () => {
  /**
   * UPDATE (01/08/2020): Verificamos el tema del sistema operativo
   * para saber si es dark o light, con la propiedad css
   * "prefers-color-scheme" y asignarlo como default.
   *
   * https://caniuse.com/#search=prefers-color-scheme
   *
   */
  const themeOS =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "default";

  /**
   * Usamos el localStorage ya que tuvimos un problema
   * al recargar la página se reinicia el state y regresa a nuestro
   * tema default, para evitar esto guardamos el nombre del tema
   * en el localStorage para mantener la selección del usuario,
   * incluso cuando se recargue la página.
   */
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("default");

  /**
   * El hook useEffect(), nos ayuda a representar el
   * ciclo de vida componentDidMount, ya que le estamos pasando
   * un arreglo vacio y nos sirve para asignar el tema si existe
   * en el localStorage.
   */
  useEffect(() => {
    /**
     * UPDATE (01/08/2020): Tomamos como prioridad el sistema operativo, en caso
     * que no exista un tema guardado en el local storage.
     */
    themeOS && !localTheme
      ? setTheme(themeOS)
      : localTheme && setTheme(localTheme);
  }, []);

  /**
   * Esta función simplemente hace el intercambio entre
   * temas si el activo es dark lo cambia default y si es default
   * lo cambia a dark.
   */
  const toggleTheme = () => {
    if (theme === "default") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }

    window.localStorage.setItem("theme", "default");
    setTheme("default");
  };

  /**
   * Nuestro custom hook retorna nuestra variable de
   * estado y la función que realiza el toggle al tema.
   */
  return [theme, toggleTheme];
};

export default useTheme;

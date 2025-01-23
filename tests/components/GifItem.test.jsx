import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

  const title = "Tutulo";
  const url = "https://prueba-de-url.com/titulo.jpg"
  test('Debe hacer match con el snapshot ', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen y el ALT indicado ', () => {

    render(<GifItem title={title} url={url} />);
    //screen.debug();

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
 
    //El codigo comentado es lo mismo que el siguiente codigo.
    const { src, alt } = screen.getByRole('img');
    expect( src).toBe(url);
    expect( alt).toBe(title);
  });
  
  test('debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText(title)).toBeTruthy();
  });
  

});

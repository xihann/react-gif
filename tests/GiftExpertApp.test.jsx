import { act, render, screen } from "@testing-library/react";
import GiftExpertApp from "../src/GiftExpertApp";

describe('Pruebas en  <GiftExpertApp/>', () => {
    test('deberia hacer match con el snapshot de <GiftExpertApp/> ', () => {

        const { container } = render(< GiftExpertApp />);

        expect(container).toMatchSnapshot();
    })

    test('no debe agregar una categoria duplicada ', () => {

        render(< GiftExpertApp />);
       

        // Simulamos la adición de una nueva categoría
        act(() => {
            screen.getByText('Pokémon').click();
        });

        // Verificamos que solo hay una instancia de 'Pokémon'
        const categories = screen.getAllByText(/Pokémon/i);
        expect(categories).toHaveLength(1); // Solo debe haber una categoría Pokémon
        expect(screen.getByText('Pokémon')).toBeTruthy();

    })

})

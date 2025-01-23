import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch Man';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByText('Cargando...'));
        expect(screen.getAllByText(category));

    });

    test('debe de mostrar los item cuando se cargan las imagenes del useFetchGifs', () => {

        const gifs = [
            {
                id: '1Saitama',
                title: 'Saitama',
                url: 'http//: localhost.com/sailtama1.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http//: localhost.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    })


})

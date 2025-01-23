import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () => {

    test('debe regresar el estado inicial del hook', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch Man'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch Man'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })


})

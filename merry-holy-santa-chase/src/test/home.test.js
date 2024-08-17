import {describe, expect, test, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/svelte';
import Home from "../lib/Home.svelte";
import {get} from 'svelte/store';
import {PlayerName} from "../lib/store.js"
import { push } from 'svelte-spa-router';

describe("Home", () => {

    const home = render(Home)

    test("a snapshot", () => {
        expect(home).toMatchSnapshot()
    })

    test("that headline exists", ()=>{
        const headline = screen.getByText("FANG DEN SANTA!")
        expect(headline).toBeTruthy
    })

    test("that buttons exist", ()=>{
        const startButton = screen.getByText("Spiel starten!")
        const explainButton = screen.getByText("Hä? Erklärs mir nochmal...")
        expect(startButton && explainButton).toBeTruthy
    })

    test("that player input exists", async () => {
        const input = home.container.querySelector("input")
        await fireEvent.change(input, {target: {value: "testplayer"}})
        expect(input.value).toBe("testplayer")
    })

    vi.mock('svelte-spa-router', () => ({
        push: vi.fn(),
    }));

    test('should call push with "#/intro" when button is clicked', async () => {
        const button = screen.getByText('Hä? Erklärs mir nochmal...');
        await fireEvent.click(button);
        expect(push).toHaveBeenCalledWith("#/intro");
    })

    test('should call push with "#/game" when button is clicked', async () => {
        const button = screen.getByText('Spiel starten!');
        await fireEvent.click(button);
        expect(push).toHaveBeenCalledWith("#/game");
    })

    test("should update store on input", async() => {
        const textbox = screen.getByRole("textbox")
        await fireEvent.input(textbox, {target: {value: "john"}})
        const storeValue = get(PlayerName)
        expect(textbox.value).toBe("john")
        expect(storeValue).toBe("john")
    })

})


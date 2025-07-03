import { render, fireEvent } from '@testing-library/react-native'
import { Button } from './button'

describe("Button component", () => {
    it('should be render button with text clique aqui', () => {
        const functionMock = jest.fn();
        const { getByText } = render(<Button title='Clique aqui' onPress={functionMock} />)
        
        expect(getByText("Clique aqui")).toBeTruthy();
    })

    it("should be render button and call onPress", () => {
        const functionMock = jest.fn();
        const { getByText, getByTestId } = render(<Button title='Clique aqui' onPress={functionMock} />)
        expect(getByText("Clique aqui")).toBeTruthy();
        fireEvent.press(getByTestId("button-test"));
        expect(functionMock).toHaveBeenCalled();
    })
})
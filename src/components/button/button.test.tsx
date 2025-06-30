import { render, fireEvent } from '@testing-library/react-native'
import { Button } from './button'

it('should be render button and call onPress', () => {

    const functioMock = jest.fn();

    const { getByText } = render(<Button title='Clique aqui' onPress={functioMock} />)

    expect(getByText("Clique aqui")).toBeTruthy();
})
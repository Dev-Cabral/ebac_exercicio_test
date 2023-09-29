import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Post tem que rederizar corretamente', () => {
    it('Renderizar corretamnte', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})
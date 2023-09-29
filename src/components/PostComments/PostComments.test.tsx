import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comentando-no-textarea'), {
            target: {
                value: 'Muito Bom estudar tecnologia ',
            }
        });
        fireEvent.click(screen.getByTestId('comentario-por-click'));
    
        fireEvent.change(screen.getByTestId('comentando-no-textarea'), {
            target: {
                value: 'Acho isso tudo extraordinario',
            }
        });
        fireEvent.click(screen.getByTestId('comentario-por-click'));

        expect(screen.getAllByTestId('comentarios')).toHaveLength(2);
    });
});
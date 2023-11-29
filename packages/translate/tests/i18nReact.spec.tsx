import { render, act } from '@testing-library/react';
import { useTranslation } from '../src'; // Adjust the import path as needed
import { getI18nInstance, setI18nInstance } from '../src/i18nInstance';
import React from 'react';

describe('useTranslation', () => {
    beforeAll(() => {
        //@ts-ignore
        setI18nInstance({
            on: jest.fn()
        });
    });
    it('should update lang state when language changes to en', () => {
        const TestComponent = () => {
            const lang = useTranslation();
            return <div>{lang}</div>;
        };

        // Render the component
        const { container } = render(<TestComponent />);

        // Mock the change event
        const mockChangeEvent = {
            type: 'languageChanged',
            payload: 'en'
        };

        // Act: Trigger the event by calling the callback registered in useEffect
        act(() => {
            (getI18nInstance().on as jest.Mock).mock.calls[0][1](
                mockChangeEvent.payload
            );
        });

        // Assert: Check if the lang state has been updated
        expect(container.textContent).toBe('en');
    });

    it('should update lang state when language changes to fr', () => {
        const TestComponent = () => {
            const lang = useTranslation();
            return <div>{lang}</div>;
        };

        // Render the component
        const { container } = render(<TestComponent />);

        // Mock the change event
        const mockChangeEvent = {
            type: 'languageChanged',
            payload: 'fr'
        };

        // Act: Trigger the event by calling the callback registered in useEffect
        act(() => {
            (getI18nInstance().on as jest.Mock).mock.calls[0][1](
                mockChangeEvent.payload
            );
        });

        // Assert: Check if the lang state has been updated
        expect(container.textContent).toBe('fr');
    });
});

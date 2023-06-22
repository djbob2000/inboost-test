export interface State {
  variants: { id: number, name: string }[];
  isLoading: boolean;
  error: Error | null;
  selectedID: number[];
}

export const initialState: State = {
  variants: [
    { id: 1, name: 'Варіант 1' },
    { id: 2, name: 'Варіант 2' },
    { id: 3, name: 'Варіант 3' },
    { id: 4, name: 'Варіант 4' },
    { id: 5, name: 'Варіант 5' },
    { id: 6, name: 'Варіант 6' },
  ],
  isLoading: false,
  error: null,
  selectedID: [],
};

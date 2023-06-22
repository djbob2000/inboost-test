import { State } from './variants/variants.initState';

export const selectSelectedID = (state: { variants: State }): number[] => state.variants.selectedID;
export const selectVariants = (state: { variants: State }): { id: number, name: string }[] => state.variants.variants;


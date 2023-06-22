export const selectSelectedID = (state: {
  variants: { selectedID: number },
}): number => state.variants.selectedID;
export const selectVariants = (state: {
  variants: { variants: string[] },
}): string[] => state.variants.variants;

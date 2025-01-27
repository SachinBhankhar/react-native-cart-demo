export type RootStackParamList = {
    ProductList: undefined;
    Cart: undefined;
    SaveForLater: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

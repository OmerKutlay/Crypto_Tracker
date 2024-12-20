import { SelectedCurrencyProvider } from "./selectedCurrencyContext";
import { CurrencyListProvider } from "./currrencyListContext";

export default function Store(props) {
    return (
        <CurrencyListProvider>
            <SelectedCurrencyProvider>
                {props.children}
            </SelectedCurrencyProvider>
        </CurrencyListProvider>
    )
}
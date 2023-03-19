import { createContext, useContext, useState } from 'react';

const GlobalSpinnerContext = createContext<boolean>(false);
const GlobalSpinnerActionsContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(() => {});

// グローバルスピナーの表示、非表示
export const useGlobalSpinnerContext = (): boolean => useContext<boolean>(GlobalSpinnerContext);

// グローバルスピナーの表示非表示のアクション
export const useGlobalSpinnerActionsContext = (): React.Dispatch<React.SetStateAction<boolean>> =>
  useContext<React.Dispatch<React.SetStateAction<boolean>>>(GlobalSpinnerActionsContext);

interface GlobalSpinnerContextProviderProps {
  children?: React.ReactNode;
}

/**
 * グローバルスピナーコンテキストプロバイダー
 */
const GlobalSpinnerContextProvider = (props: GlobalSpinnerContextProviderProps) => {
  const { children } = props;
  const [isGlobalSpinnerOn, setIsGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setIsGlobalSpinner}>
        {children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
